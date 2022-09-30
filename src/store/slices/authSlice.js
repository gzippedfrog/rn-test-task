import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogedIn: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state) => {
            state.isLogedIn = true;
        },
        signOut: (state) => {
            state.isLogedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
