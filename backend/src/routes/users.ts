import Router from "express";

const userRoute = Router();

// CONTROLLERS
import { loginHandler, signUpHandler } from "../controllers/users";

// SERVICES
import { Authenticator } from "../Services/Authenticator";

userRoute.post("/login", Authenticator, loginHandler);
userRoute.post("/signup", signUpHandler);

export default userRoute;
