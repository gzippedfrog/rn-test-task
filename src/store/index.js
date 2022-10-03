import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postsSlice,
    },
});
