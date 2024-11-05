import { createSlice } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage?.getItem('user')) || {};

const initialState = {
    isLoggedIn: local.isLoggedIn || false,
    userData: local || ''
};
 


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            // console.log(action.payload)
            const { data, status } = action.payload;
            console.log(data)
            if (status) {
                
                state.isLoggedIn = true;
                state.userData = data;

                // adding user data in local storage...

                localStorage.setItem('user', JSON.stringify({
                    ...data, 
                    isLoggedIn: true
                }));
            }
        },

        logout: (state) => {
          
            state.isLoggedIn = false;
            state.userData = '';

            localStorage.removeItem('user');
        }
    }
});

export const {loginSuccess, logout} = userSlice.actions;

export default userSlice.reducer;