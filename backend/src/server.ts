import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES
import userRoute from "./routes/users";

app.use(userRoute);

app.listen(4000, () => console.log("SERVER IS LIVE!", `http://localhost:4000`));
