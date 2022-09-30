import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    console.log("POSTS:FETCH");
    const res = await fetch(`${API_ENDPOINT}/posts`);
    const posts = await res.json();
    return posts;
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: { items: [] },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.items.push(...action.payload);
        },
    },
});

export default postsSlice.reducer;
