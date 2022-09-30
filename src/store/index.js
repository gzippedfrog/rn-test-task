import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import postsSlice from "./slices/postsSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postsSlice,
        users: usersSlice,
    },
});
