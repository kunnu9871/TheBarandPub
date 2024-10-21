import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true, trim: true },
    drinkType: {
      type: String,
      enum: ["alcohol", "non-alcohol"],
      default: ["alcohol"],
    },
    alcoholType: { type: String, enum:["whiskey", "beer"], default : ["whiskey"] },
    quantity: { type: [String] },
    imageUrl: { type: String, trim: true },
  },
  { Timestamp: true }
);

const itemModal = mongoose.model("item", itemsSchema);

export { itemModal };
