import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        clearFeed: (state) => {
            return [];
        },
        removeConnectionFromFeed: (state, action) => {
            return state.filter(user => user._id !== action.payload);
        }
    }
})

export const { addFeed, clearFeed, removeConnectionFromFeed } = feedSlice.actions;

export default feedSlice.reducer;