import ErrorHandler from "../Services/ErrorHandler";
import db from "../database/db";
import { Encrypter } from "../Services/Bcrypt";
import { signUpBody } from "../modals/users";

export const loginHandler = (req: any, res: any, next: any) => {
  res.status(200).send("OK!");
};

export const signUpHandler = async (req: any, res: any, next: any) => {
  const body: signUpBody = req.body;
  const username = body.username;
  const fullname = body.fullname;
  const email = body.email;
  const password = body.password;
  const phonenumber = body.phonenumber;

  const hashedPassword = await Encrypter(password);

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE username = ?;",
      [username]
    )) as any;
    if (userData.length !== 0)
      next(new ErrorHandler("User Already Exists!", 400));
    else {
      await db.execute(
        "INSERT INTO users (fullname, username, email, password, phone_number) VALUES (?,?,?,?,?);",
        [fullname, username, email, hashedPassword, phonenumber]
      );
      res.status(201).send("OK!");
    }
  } catch (error: any) {
    next(new ErrorHandler(error.messsage, 500));
  }
};
