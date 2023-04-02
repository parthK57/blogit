import { Router } from "express";

const followersRoute = Router();

// SERVICES
import { Authenticator } from "../Services/Authenticator";

// CONTROLLERS
import {
  followUserHandler,
  getFollowersHandler,
} from "../controllers/followers";

followersRoute.post("/follow", Authenticator, followUserHandler);
followersRoute.get("/followers", Authenticator, getFollowersHandler);

export default followersRoute;
