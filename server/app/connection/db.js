import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then((res) => console.log("dataBase connected", res.connection.host));
  } catch (error) {
    console.log(`failed to connect the dataBase: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
