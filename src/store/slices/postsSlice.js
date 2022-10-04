import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const API_ENDPOINT = "https://jsonplaceholder.typicode.com";
    const { data: users } = await axios.get(`${API_ENDPOINT}/users`);

    const posts = [];

    for (const user of users) {
        const postUrl = `${API_ENDPOINT}/posts?userId=${user.id}&_limit=1`;
        const photoUrl = `${API_ENDPOINT}/photos?albumId=${user.id}&_limit=1`;

        const res = await Promise.all([
            axios.get(postUrl),
            axios.get(photoUrl),
        ]);

        const [post, photo] = res.map((res) => res.data[0]);

        post.userName = user.name;
        post.userCompany = user.company.name;
        post.photoUrl = photo.thumbnailUrl;
        posts.push(post);
    }

    return posts;
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        error: null,
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.error = action.error.message;
        },
    },
});

export default postsSlice.reducer;
