import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const cartInitialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },

    removeFromCart: (state, action) => {
       return state= state.filter((item)=> item.id !== action.payload)
    },

    clearCart: (state) => {
        state = cartInitialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
