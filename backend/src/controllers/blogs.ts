import ErrorHandler from "../Services/ErrorHandler";
import TimeStamp from "../Services/TimeStamp";
import db from "../database/db";
import { createBlogBody, updateBlogBody } from "../modals/blogs";

export const getBlogsHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;

  try {
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    const userId = userData[0].id;

    // GET BLOGS
    const [blogData] = (await db.execute(
      "SELECT id, title, content, image, blog_status, date_created, up_votes, down_votes FROM blogs WHERE user_name = ?;",
      [userId]
    )) as any;
    res.status(200).json(blogData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server error!", 500));
  }
};

export const createBlogHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;
  const body: createBlogBody = req.body;
  const title = body.title;
  const content = body.content;
  const blogStatus = body.blogStatus;
  const image = body.image;

  const timestamp = TimeStamp();

  try {
    // GET USER ID
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    const userId: string = userData[0].id;

    // EXECUTE INSERT
    await db.execute(
      "INSERT INTO blogs (title, content, blog_status, image, date_created, user_name) VALUES (?,?,?,?,?,?);",
      [title, content, blogStatus, image, timestamp, userId]
    );
    res.status(201).json({ res: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server error!", 500));
  }
};

export const updateBlogHandler = async (req: any, res: any, next: any) => {
  const body: updateBlogBody = req.body;
  const blogId = parseInt(body.id);
  const title = body.title;
  const content = body.content;
  const image = body.image;
  const blogStatus = body.blogStatus;

  try {
    await db.execute(
      "UPDATE blogs SET title = ?, content = ?, image = ?, blog_status = ? WHERE id = ?;",
      [title, content, image, blogStatus, blogId]
    );
    res.status(200).json({ res: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server error!", 500));
  }
};

export const upVoteHandler = async (req: any, res: any, next: any) => {
  const blogId = parseInt(req.body.id);

  try {
    const [blogData] = (await db.execute(
      "SELECT up_votes FROM blogs WHERE id = ?;",
      [blogId]
    )) as any;
    const up_votes = parseInt(blogData[0].up_votes) + 1;

    await db.execute("UPDATE blogs SET up_votes = ? WHERE id = ?;", [
      up_votes,
      blogId,
    ]);
    res.status(200).json({ res: "success" });
  } catch (error: any) {
    return next(new ErrorHandler("Server error!", 500));
  }
};

export const downVoteHandler = async (req: any, res: any, next: any) => {
  const blogId = parseInt(req.body.id);

  try {
    const [blogData] = (await db.execute(
      "SELECT down_votes FROM blogs WHERE id = ?;",
      [blogId]
    )) as any;
    const down_votes = parseInt(blogData[0].down_votes) - 1;

    await db.execute("UPDATE blogs SET down_votes = ? WHERE id = ?;", [
      down_votes,
      blogId,
    ]);
    res.status(200).json({ res: "success" });
  } catch (error: any) {
    return next(new ErrorHandler("Server error!", 500));
  }
};
