import { assets } from "../models/assets.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const publicAssets = async (_, res) => {
  try {
    const dbResponse = await assets.find();

    res.status(200).json(new ApiResponse(200, true, null, dbResponse));

  } catch (error) {
    throw new ApiError(500, error.message || "something went wrong");
  }
};

export { publicAssets };
