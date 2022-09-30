import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    console.log("USERS:FETCH");
    const res = await fetch(`${API_ENDPOINT}/users`);
    const users = await res.json();
    return users;
});

export const usersSlice = createSlice({
    name: "users",
    initialState: { items: [] },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.items.push(...action.payload);
        },
    },
});

export const selectUserById = (userId) => (state) =>
    state.users.items.find((user) => user.id == userId);

export default usersSlice.reducer;
