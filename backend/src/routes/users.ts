import Router from "express";

const userRoute = Router();

// CONTROLLERS
import { loginHandler, signUpHandler } from "../controllers/users";

userRoute.post("/", loginHandler);
userRoute.post("/signup", signUpHandler);

export default userRoute;
