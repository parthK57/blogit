import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ErrorHandler from "./Services/ErrorHandler";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES
import userRoute from "./routes/users";

app.use(userRoute);

// ERROR HANDLING
app.use((error: ErrorHandler, req: any, res: any, next: any) => {
  res.status(error.statusCode).send(error.message);
});

app.listen(4000, () => console.log("SERVER IS LIVE!", `http://localhost:4000`));