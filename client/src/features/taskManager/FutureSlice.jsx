
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"

export const apiRequest = createAsyncThunk("data/apiRequest", async ({ method, url, data, headers }, { rejectWithValue }) => {

    try {
        const data = axios({ method, url, data, headers });
        return data;
    } catch (error) {
        return rejectWithValue(error)
    }

})




const intialState = {
    isLoading: false,
    data: [],
    isError: null
}

const taskManagerSlice = createSlice({
    name: "Task Manager",
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(apiRequest.pending, (state) => {
            state.isLoading = true;
            state.isError = null
        }),
            builder.addCase(apiRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.method === "GET") {
                    state.data = action.payload
                }
            })
        builder.addCase(apiRequest.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload
        })
    }
})

export default taskManagerSlice.reducer