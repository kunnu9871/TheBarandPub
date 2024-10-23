import { createSlice } from "@reduxjs/toolkit";


const cartInitialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    
    increaseQuantity : (state, action)=>{
      console.log(action.payload)
      const existingItem = state.find((item) => item.id === action.payload.id);

      existingItem? existingItem.quantity += action.payload.quantity: state.push({...action.payload, quantity : action.payload.quantity})

    },

    decreaseQuantity : (state, action)=>{
      const existingItem = state.find((item) => item.id === action.payload.id);

      existingItem? existingItem.quantity -+ action.payload.quantity : state;

    },
 
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

export const {increaseQuantity, decreaseQuantity, addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
