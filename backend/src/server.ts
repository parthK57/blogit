import dotenv from "dotenv";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ErrorHandler from "./Services/ErrorHandler";

dotenv.config({
  path: "../.env",
});

cloudinary.v2.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_API_KEY,
  api_secret: process.env.CLD_API_SECRET,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// ROUTES
import userRoute from "./routes/users";
import followersRoute from "./routes/followers";
import blogsRoute from "./routes/blogs";

app.use(userRoute);
app.use(followersRoute);
app.use(blogsRoute);

// ERROR HANDLING
app.use((error: ErrorHandler, req: any, res: any, next: any) => {
  res.status(error.statusCode).send(error.message);
});

app.listen(4000, () => console.log("SERVER IS LIVE!", `http://localhost:4000`));
