import express from "express";
import {addItemData} from "../controllers/itemController.js";
import { upload } from "../middleware/multer.js";


const adminRouter = express.Router();


adminRouter.post('/addItem', upload.single("itemImage"), addItemData);


export default adminRouter;