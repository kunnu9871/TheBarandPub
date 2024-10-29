import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, unique: true, lowercase: true},
    phone: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true},
    avatar : {type : String, trim:true},
    orderHistory : {type: mongoose.Types.ObjectId, ref: "Orders"},
    refreshToken : {type: String},
    role: {type: [String], enum: ["user", "admin"], default: ["user"]}
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export { userModel };
