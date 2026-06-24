import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
    name: "connections",
    initialState: [],
    reducers: {
        addConnections: (state, action) => {
            return action.payload;
        },
        removeConnections: (state) => {
            return [];
        }
    }

})

export const { addConnections, removeConnections } = ConnectionSlice.actions;

export default ConnectionSlice.reducer;