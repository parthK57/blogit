import cloudinary from "cloudinary";
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
      "SELECT id, title, content, image, blog_status, date_created, up_votes, down_votes, tags FROM blogs WHERE user_name = ?;",
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
  const blogStatus = body.blogstatus;
  const tags = body.tags;
  const image = req.files.image;

  const timestamp = TimeStamp();

  // IMAGE STORAGE
  // !WARNING: DO NOT STORE MULTI-MEDIA ON THE SERVERS, ANY CLOUD SERVICE IS ALWAYS PREFERED - S3, CLOUDINARY
  // *NOTE: STORE THE FILE URL IN DB AND IMAGE IN THE CLOUD
  try {
    const imgDetails = await cloudinary.v2.uploader.upload(image.tempFilePath, {
      public_id: timestamp,
      resource_type: "auto",
      folder: "blogit/blogs",
    });
    
    // GET USER ID
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    const userId: string = userData[0].id;

    // EXECUTE INSERT
    await db.execute(
      "INSERT INTO blogs (title, content, blog_status, image, date_created, user_name, tags) VALUES (?,?,?,?,?,?,?);",
      [
        title,
        content,
        blogStatus,
        imgDetails.secure_url,
        timestamp,
        userId,
        tags,
      ]
    );
    res.status(201).json({ res: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else {
      console.log(error);
      return next(new ErrorHandler("Server error!", 500));
    }
  }
};

// TODO: UPDATE THIS SHIT WITH CLOUDINARY
export const updateBlogHandler = async (req: any, res: any, next: any) => {
  const body: updateBlogBody = req.body;
  const blogId = parseInt(body.id);
  const title = body.title;
  const content = body.content;
  const image = body.image;
  const blogStatus = body.blogStatus;
  const tags = body.tags;

  try {
    await db.execute(
      "UPDATE blogs SET title = ?, content = ?, image = ?, blog_status = ?, tags = ? WHERE id = ?;",
      [title, content, image, blogStatus, blogId, tags]
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

export const getRandomPublicBlogsHandler = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    // GETTING RANDOM BLOGS
    const [randomBlogsData] = (await db.execute(
      "SELECT id, title, content, image, blog_status, date_created, up_votes, down_votes, user_name, tags FROM blogs ORDER by id DESC LIMIT 25;"
    )) as any;
    res.status(200).json(randomBlogsData);
  } catch (error: any) {
    next(new ErrorHandler("Server Error!", 500));
  }
};

export const getRandomFollowersBlogsHandler = async (
  req: any,
  res: any,
  next: any
) => {
  const user_name = req.headers.username as string;

  try {
    // GET USER ID
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [user_name]
    )) as any;
    const userId = userData[0].id as number;

    // GET RANDOM BLOGS FROM FOLLOWERS
    const [randomBlogsData] =
      await db.execute(`SELECT blogs.id, blogs.title, blogs.content, blogs.image, blogs.blog_status, 
    blogs.date_created, blogs.up_votes, blogs.down_votes, blogs.tags FROM blogs 
    inner join followers on (followers.user1 = blogs.user_name) 
    where followers.user1 = ${userId} or followers.user2 = ${userId} ORDER BY blogs.id DESC LIMIT 25;`);

    res.status(200).json(randomBlogsData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    else return next(new ErrorHandler("Server Error!", 500));
  }
};
