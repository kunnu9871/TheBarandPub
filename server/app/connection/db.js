import mongoose from "mongoose";

const connectDb = async (DATABASE_URL)=>{
    try {
        // const DB_OPTIONS = {
        //     dbName: "BarAndPub"
        // }
        await mongoose.connect(DATABASE_URL)
        .then(()=> console.log('dataBase connected'))
    } catch (error) {
        console.log(`failed to connect the dataBase: ${error}`);
    }
};

export default connectDb;