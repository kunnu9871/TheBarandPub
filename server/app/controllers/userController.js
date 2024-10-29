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
      return res.status(400).json(
        new ApiError(401, "password and confirm password should be same")
      );
    }

    //checks if user is already registered...

    const existing_email = await userModel.findOne({ email });
    if (existing_email) {
      return res.status(409).json(
        new ApiError(409, "email is already registered")
      );
    }

    const existing_number = await userModel.findOne({ phone });
    if (existing_number) {
      return res.status(409).json(
        new ApiError(409, "phone number is already registered")
      );
    }

    const hashedPassword = encryptedPassword(password);

    const avatarLocalPath = req.file?.path;

    if(avatarLocalPath){
      const cloudinaryRes = await uploadOnCloudinary(avatarLocalPath);

      console.log(cloudinaryRes)
    };


    // const dbRes = await userModel.create({
    //   ...userData,
    //   password: hashedPassword,
    // });

    // return res.status(201).json(
    //   new ApiResponse(
    //     200, 
    //     true,
    //     "user created successfully",
    //     {id: dbRes._id, userName: dbRes.firstName + " " + dbRes.lastName, avatar:dbRes.avatar},
    // )
    // );
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
    console.log(req.query);

    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "both fields are required",
      });
    }

    // matching email in data_base..........
    const get_user = await userModel.findOne({ email });

    if (!get_user) {
      return res.status(404).json({
        status: "failed",
        message: "email is not registered",
      });
    }

    const password_result = compare_password(password, get_user.password);

    if (!password_result) {
      return res.status(401).json({
        status: "failed",
        message: "wrong password",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "login successfully",
      userData: {
        id: get_user._id,
        fullName: `${get_user.firstName} ${get_user.lastName}`,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: `oops there is some error ${error}`,
    });
  }
};

export { register, login };
