import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const { data: users } = await axios.get(`${API_ENDPOINT}/users`);
    const posts = [];

    for (const user of users) {
        const postUrl = `${API_ENDPOINT}/posts?userId=${user.id}&_limit=1`;
        const photoUrl = `${API_ENDPOINT}/photos?albumId=${user.id}&_limit=1`;

        const res = await Promise.all([
            axios.get(postUrl),
            axios.get(photoUrl),
        ]);

        const post = res[0].data[0];
        const photo = res[1].data[0];

        post.userName = user.name;
        post.userCompany = user.company.name;
        post.photoUrl = photo.thumbnailUrl;
        posts.push(post);
    }

    return posts;
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: { items: [] },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
    },
});

export default postsSlice.reducer;
