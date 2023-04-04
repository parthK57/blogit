import ErrorHandler from "../Services/ErrorHandler";
import db from "../database/db";
import { Encrypter } from "../Services/Bcrypt";
import { signUpBody } from "../modals/users";
import TimeStamp from "../Services/TimeStamp";

export const loginHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;

  const timestamp = TimeStamp();

  try {
    await db.execute("UPDATE users SET last_active = ? WHERE user_name = ?;", [
      timestamp,
      username,
    ]);
    res.status(200).send("OK!");
  } catch (error: any) {
    next("Server error!", 500);
  }
};

export const signUpHandler = async (req: any, res: any, next: any) => {
  const body: signUpBody = req.body;
  const username = body.username;
  const fullname = body.fullname;
  const email = body.email;
  const password = body.password;

  const hashedPassword = await Encrypter(password);

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    if (userData.length !== 0)
      next(new ErrorHandler("User Already Exists!", 400));
    else {
      await db.execute(
        "INSERT INTO users (full_name, user_name, email, password) VALUES (?,?,?,?);",
        [fullname, username, email, hashedPassword]
      );
      res.status(201).send("OK!");
    }
  } catch (error: any) {
    console.log(error);
    next(new ErrorHandler(error.messsage, 500));
  }
};

export const getUserDataHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;

  try {
    const [userData] = await db.execute(
      "SELECT user_name, full_name, title, age, location, education, profile_picture, facebook, instagram, twitter, github, gitlab, linkedin FROM users WHERE user_name = ?;",
      [username]
    );
    res.status(200).json(userData);
  } catch (error: any) {
    return next(new ErrorHandler("Server error!", 500));
  }
};
