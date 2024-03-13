import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log("redux logging")
            state.data = { email: action.payload.email, name: action.payload.name };
            // console.log(action.payload)
        },
        logout: (state, action) => {
            state.data = null;
        },
        register: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
    },
});

export const selectUserDetails = state => state.user.data

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
