import db from "../database/db";
import { loginBody } from "../modals/users";
import { Decrypter } from "./Bcrypt";
import ErrorHandler from "./ErrorHandler";

export const Authenticator = async (req: any, res: any, next: any) => {
  const header: loginBody = req.headers;
  const username = header?.username;
  const password = header?.password;

  try {
    const [userData] = (await db.execute(
      "SELECT password FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    // NO USER FOUND
    if (userData.length === 0)
      next(new ErrorHandler("User does not exists!", 404));
    const verifiedStatus = await Decrypter(password, userData[0].password);
    if (verifiedStatus) next();
    else res.status(401).send("Unauthorized!");
  } catch (error: any) {
    next(new ErrorHandler(error.message, 500));
  }
};
