import { Router } from "express";

const blogsRoute = Router();

// SERVICES
import { Authenticator } from "../Services/Authenticator";

// CONTROLLERS
import {
  createBlogHandler,
  downVoteHandler,
  getBlogsHandler,
  getRandomFollowersBlogsHandler,
  getRandomPublicBlogsHandler,
  upVoteHandler,
  updateBlogHandler,
} from "../controllers/blogs";

blogsRoute.get("/blogs", Authenticator, getBlogsHandler);
blogsRoute.post("/blogs/create", Authenticator, createBlogHandler);
blogsRoute.patch("/blogs/update", Authenticator, updateBlogHandler);
blogsRoute.patch("/blogs/upvote", Authenticator, upVoteHandler);
blogsRoute.patch("/blogs/downvote", Authenticator, downVoteHandler);
blogsRoute.get("/blogs/public/getrandom", Authenticator, getRandomPublicBlogsHandler);
blogsRoute.get("/blogs/followers/getrandom", Authenticator, getRandomFollowersBlogsHandler);

export default blogsRoute;
