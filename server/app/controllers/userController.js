import { userModel } from "../models/User.model.js";
import { compare_password, encryptedPassword } from "../utils/utils.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

//Signup API......
const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      avatar,
    } = req.body;

    // console.log("log inside the controller",req.file)

    // console.log(req.file.path)
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      avatar,
      password,
      confirmPassword,
    };

    //checks if are fields are provided....

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json(new ApiError(400, "all fields are required"));
    }

    //checks password and confirm password are same.....

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json(
          new ApiError(401, "password and confirm password should be same")
        );
    }

    //checks if user is already registered...

    const existing_email = await userModel.findOne({ email });
    if (existing_email) {
      return res
        .status(409)
        .json(new ApiError(409, "email is already registered"));
    }

    const existing_number = await userModel.findOne({ phone });
    if (existing_number) {
      return res
        .status(409)
        .json(new ApiError(409, "phone number is already registered"));
    }

    const hashedPassword = encryptedPassword(password);

    const avatarLocalPath = req.file?.path;

    const cloudinaryResUrl = await uploadOnCloudinary(
      avatarLocalPath,
      "usersAvatar"
    );

    const dbRes = await userModel.create({
      ...userData,
      avatar: cloudinaryResUrl || "",
      password: hashedPassword,
    });

    // just for testing......
    const createdUser = await userModel.findById(dbRes._id).select("-password");

    if (!createdUser) {
      throw new ApiError(
        500,
        "something went wrong while registering the user"
      );
    }

    return res.status(201).json(
      new ApiResponse(
        200,
        true,
        "user registered successfully",
        createdUser
      )
    );
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: `oops there is some error ${error}`,
    });
  }
};



// login API.....
const login = async (req, res) => {
  try {

    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json(
        new ApiError(401, "both fields are required")
      );
    }

    // matching email in data_base..........
    const get_user = await userModel.findOne({ email });

    if (!get_user) {
      return res.status(404).json(
        new ApiError(400, "email is not registered")
      );
    }

    const password_result = compare_password(password, get_user.password);

    if (!password_result) {
      return res.status(401).json({
        status: "failed",
        message: "wrong password",
      });
    }

    return res.status(200).json(
      new ApiResponse(200, true ,"logged in successfully", get_user)
    );
  } catch (error) {
    throw new ApiError(500, error.message || "something went wrong")
  }
};

export { register, login };
