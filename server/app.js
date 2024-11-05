import dotenv from "dotenv";
dotenv.config({
    path : "./.env"
});
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";




const app = express();

app.use(cors(process.env.corsOptions));

app.use(json({ limit: "16kb" }));

app.use(urlencoded({ extended: true }));

//cookie parser.....
app.use(cookieParser());


// public assets of website.....
import { publicAssets } from "./app/controllers/assetsController.js";
app.get('/', publicAssets);

// User routes.....
import userRouter from "./app/routes/user.js";
app.use("/user", userRouter);


// Admin routes.......
import adminRouter from "./app/routes/admin.js";
app.use("/admin", adminRouter);


// Menu items routes......
import itemsRouter from "./app/routes/Items.js";
app.use("/items", itemsRouter);




export default app;
