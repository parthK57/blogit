import db from "../database/db";

export const followUser = async (req:any,res:any, next:any)=> {
    const email = req.headers.email as string;
    const followUsername = req.body.followUsername as string;

    try {
        const [userData] = await db.execute("SELECT id FROM ")
    } catch (error:any) {
        if(error.statusCode) return next(error)
        next("Server error!",500)
    }
}