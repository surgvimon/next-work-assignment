import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        currentUser: {
            email: '',
            photoURL: null,
        },
    },
    reducers: {
        signInUser: (state, action) => {
            state.authenticated = true;
            state.currentUser.email = action.payload.email;
            state.currentUser.photoURL = action.payload.images;
        },
        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = {
                email: '',
                photoURL: null,
            };
        },
    },
});
export const { signInUser, signOutUser } = authReducer.actions;
export default authReducer.reducer;
