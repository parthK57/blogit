import ErrorHandler from "../Services/ErrorHandler";
import TimeStamp from "../Services/TimeStamp";
import db from "../database/db";

export const followUserHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;
  const followUsername = req.body.followusername as string;

  const timestamp = TimeStamp();

  try {
    if (username === followUsername)
      throw new ErrorHandler("Can't follow yourself!", 400);
    // GET USER'S ID
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    const userId = userData[0].id;

    // GET FOLLOWER'S ID
    const [followerData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [followUsername]
    )) as any;
    if (followerData.length !== 1)
      throw new ErrorHandler(`Invalid user name: ${followUsername}!`, 400);
    const followerId = followerData[0].id;

    // VERIFY FOLLOWING STATUS
    const [followData] = (await db.execute(
      "SELECT id FROM followers WHERE user1 = ? AND user2 = ? OR user1 = ? AND user2 = ?;",
      [userId, followerId, followerId, userId]
    )) as any;
    if (followData.length !== 0)
      throw new ErrorHandler("Can't follow user twice!", 400);

    // EXECUTE
    (await db.execute(
      "INSERT INTO followers (user1, user2, date_followed) VALUES (?,?,?);",
      [userId, followerId, timestamp]
    )) as any;
    res.status(200).json({ result: "success" });
  } catch (error: any) {
    if (error.statusCode) return next(error);
    next(new ErrorHandler("Server error!", 500));
  }
};

export const getFollowersHandler = async (req: any, res: any, next: any) => {
  const username = req.headers.username as string;

  try {
    // GET USER ID
    const [userData] = (await db.execute(
      "SELECT id FROM users WHERE user_name = ?;",
      [username]
    )) as any;
    const userId = parseInt(userData[0].id);

    // GET FOLLOWERS
    const [followersData] = (await db.execute(
      `SELECT users.user_name, users.full_name FROM users 
      INNER JOIN followers ON (followers.user1 = users.id) 
      WHERE followers.user1 = ${userId} OR followers.user2 = ${userId};`
    )) as any;
    res.status(200).json(followersData);
  } catch (error: any) {
    if (error.statusCode) return next(error);
    console.log(error);
    next(new ErrorHandler("Server error", 500));
  }
};
