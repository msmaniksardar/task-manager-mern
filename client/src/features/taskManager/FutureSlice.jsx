import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiRequest = createAsyncThunk(
    "data/apiRequest",
    async ({ method, url, data, headers }, { rejectWithValue }) => {
        try {
            const response = await axios({ method, url, data, headers });
            return response.data; // Return response data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    data: [],
    isError: null,
};

const taskManagerSlice = createSlice({
    name: "taskManager",
    initialState,
    reducers: {
        resetState:(state)=>{
            state.isLoading = false
            state.data = null,
            state.isError = null

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(apiRequest.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(apiRequest.fulfilled, (state, action) => {
                state.isLoading = false;

                // Update data based on request method
                if (action.meta.arg.method === "POST") {
                    state.data = action.payload; // Add new data for POST requests
                } else if (action.meta.arg.method === "GET") {
                    state.data = action.payload; // Replace data for GET requests
                }
            })
            .addCase(apiRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    },
});
export const {resetState} = taskManagerSlice.actions
export default taskManagerSlice.reducer;
