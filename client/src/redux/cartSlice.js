import { createSlice } from "@reduxjs/toolkit";


const cartInitialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    
    increaseQuantity : (state, action)=>{
      const existingItem = state.find((item) => item.id === action.payload);

      existingItem? existingItem.selectedQuantity++ : state
    },

    decreaseQuantity : (state, action)=>{
      const existingItem = state.find((item) => item.id === action.payload);

      existingItem? existingItem.selectedQuantity-- : state;

    },
 
    addToCart: (state, action) => {

      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.selectedQuantity += action.payload.selectedQuantity;
      } else {
        state.push({ ...action.payload, selectedQuantity: action.payload.selectedQuantity });
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

export const {increaseQuantity, decreaseQuantity, addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
