import dotenv from "dotenv";
dotenv.config();
import express, {json} from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/routes/User.js";
import connectDb from "./app/connection/db.js";
import adminRouter from "./app/routes/admin.js";
import itemsRouter from "./app/routes/Items.js";


const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

app.use(cors(process.env.corsOptions));

app.use(json());

//cookie parser.....

app.use(cookieParser())

// Data Base connection.....
connectDb(DATABASE_URL);


app.use('/user', router);
app.use('/admin', adminRouter);
app.use('/items', itemsRouter)


export default app;