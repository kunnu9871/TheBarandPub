import express from "express";
import { login, register } from "../controllers/userController.js";
import { upload } from "../middleware/multer.js";


const userRouter = express.Router();


userRouter.post('/register',upload.single("avatar"), register);
userRouter.get('/login', login);

export default userRouter;
