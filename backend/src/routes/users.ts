import Router from "express";

const userRoute = Router();

// CONTROLLERS
import {
  getUserDataHandler,
  loginHandler,
  signUpHandler,
  updateUserDataHandler,
} from "../controllers/users";

// SERVICES
import { Authenticator } from "../Services/Authenticator";

userRoute.post("/login", Authenticator, loginHandler);
userRoute.post("/signup", signUpHandler);
userRoute.get("/user", Authenticator, getUserDataHandler);
userRoute.patch("/user/update", Authenticator, updateUserDataHandler);

export default userRoute;
