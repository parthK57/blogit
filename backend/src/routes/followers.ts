import { Router } from "express";

const followersRouter = Router();

// SERVICES
import { Authenticator } from "../Services/Authenticator";

// CONTROLLERS

followersRouter.post("/follow", Authenticator)

export default followersRouter;