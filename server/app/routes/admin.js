import express from "express";
import {addItemData} from "../controllers/itemController.js";

const adminRouter = express.Router();


adminRouter.post('/addItem', addItemData);


export default adminRouter;