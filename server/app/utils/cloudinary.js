import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
  cloud_name: "thebarandcafe",
  api_key: "274823297599962",
  api_secret: "WZ2wOnNV4SReTIKX3B_aH_57mYA",
});

const uploadOnCloudinary = async (localPath, cloudinaryFolderName) => {

  try {
    if (!localPath) return null;

    //upload on cloudinary.......

    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder: cloudinaryFolderName,
      public_id: Math.round(Math.random() * 1E9),
    });

    const optimizeUrl = cloudinary.url(response.public_id, {
      fetch_format: "auto",
      quality: "auto",
    });

   

    if(optimizeUrl){
      fs.unlinkSync(localPath);
    }

    return optimizeUrl;

  } catch (error) {
    console.log(error);
    
    // to remove the temporary file from the sever.....
    fs.unlinkSync(localPath);
    return null;
  }
};

export { uploadOnCloudinary };
