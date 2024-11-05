import { itemModal } from "../models/Item.model.js";
import {ApiError} from "../utils/ApiError.js"; 
import {ApiResponse} from "../utils/ApiResponse.js"; 
import {uploadOnCloudinary} from "../utils/cloudinary.js";


const allItems = async (req, res) => {
  try {
    const dbResponse = await itemModal.find();

    res.status(200).json(dbResponse);
  } catch (error) {
    console.log("the error is:- ", error);
  }
};

const addItemData = async (req, res) => {
  try {
    const { itemName, drinkType, alcoholType, size, itemImage } = req.body;

    const itemDetails = {
      itemName,
      drinkType,
      alcoholType,
      size,
      itemImage,
    };

    if (!itemName || !drinkType || !alcoholType || !size) {
      return res.status(400).json({
        status: "failed to add",
        message: "all fields are required",
      });
    }

    const itemImageLocalPath = req.file?.path;

    if (!itemImageLocalPath){
      throw new ApiError(
        400,
        "No image uploaded, please provide an image of the item"
      )
    };

   const cloudinaryImageUrl = await uploadOnCloudinary(itemImageLocalPath, "menuItems");

   if(!cloudinaryImageUrl){
    throw new ApiError(500, "something went wrong, please try agin later.")
   }
    
    
    const dbRes = await itemModal.create({...itemDetails, size: JSON.parse(size) ,itemImage : cloudinaryImageUrl});

    if (!dbRes) {
      throw new ApiError(
        500,
        "something went wrong while adding the item"
      );
    };

    
    return res.status(200).json(
      new ApiResponse(
        200,
        true,
        "item added successfully",
        dbRes
      )
    );


  } catch (error) {
    return res.status(501).json({
      status: "failed",
      message: `failed to add item there is some error- ${error}`,
    });
  }
};

export { addItemData, allItems };
