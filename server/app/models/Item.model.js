import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true, trim: true },
    drinkType: {
      type: String,
      required: true,
      enum: ["alcohol", "non-alcohol"],
      default: ["alcohol"],
    },
    alcoholType: { type: String, required: true, enum:["whiskey", "beer", "softDrink"], default : ["whiskey"] },
    size: { type: [String], required: true },
    itemImage: { type: String,required: true, trim: true },
  },
  { Timestamp: true }
);

const itemModal = mongoose.model("item", itemsSchema);

export { itemModal };
