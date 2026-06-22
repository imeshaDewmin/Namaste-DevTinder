import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    reducers: {
        addLoginUser: (state, action) => {
            state.userData = action.payload;
        },
        removeLoggedInUser: (state) => {
            state.userData = null;
        }
    }
});

export const { addLoginUser, removeLoggedInUser } = userSlice.actions;

export default userSlice.reducer;