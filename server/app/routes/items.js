import express from "express";
import { allItems } from "../controllers/itemController.js";


const itemsRouter = express.Router();

itemsRouter.get('/allItems', allItems);


export default itemsRouter;