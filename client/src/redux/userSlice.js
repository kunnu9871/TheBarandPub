import { createSlice } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
    isLoggedIn: local.isLoggedIn || false,
    userData: local.fullName || ''
};
 


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        loginSuccess : (state, action)=> {
            const {userData, status} = action.payload;
            console.log(userData);
            if(status === 'success'){
            localStorage.setItem('user', JSON.stringify({...userData, isLoggedIn : true}))
            }
        },

        logout: (state) =>{
            localStorage.removeItem('user');
        }
    }
});

export const {loginSuccess, logout} = userSlice.actions;

export default userSlice.reducer;