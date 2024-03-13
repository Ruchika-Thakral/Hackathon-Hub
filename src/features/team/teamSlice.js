import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        login: (state, action) => {
            state.data.push({ name: action.payload });
        },
        logout: (state, action) => {
            state.push(action.payload);
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

export const { login, logout, register } = teamSlice.actions;

export default teamSlice.reducer;
