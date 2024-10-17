import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState : cartInitialState, 
    reducers:{
        addToCart : (state, action)=>{
            state.push(action.payload);
        },

        removeFromCart : (state, action)=>{
            
        },

        clearCart : (state)=>{

        },
    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

export default cartSlice.reducer;