import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

 console.log("the cloud name is  ", process.env.PORT)

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
});   

const uploadOnCloudinary = async (avatarLocalPath) => {
  try {
    if (!avatarLocalPath) return null;

    //upload on cloudinary.......

    const response = await cloudinary.uploader.upload(avatarLocalPath, {
      resource_type: "auto",
    });

    console.log("the file is successfully uploaded on ", response);

    return response;

  } catch (error) {
    // to remove the temporary file from the sever.....
    console.log(error)

    fs.unlinkSync(avatarLocalPath);
    return null;
  }
};

    
    // // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('shoes', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);




export { uploadOnCloudinary };
