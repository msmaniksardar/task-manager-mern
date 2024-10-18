import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { NetworkURL } from "../../utils/NetworkURL";

// Async thunk for handling API requests
export const apiRequest = createAsyncThunk(
  "data/apiRequest",
  async ({ method, url, data, headers }, { rejectWithValue }) => {
    try {
      const response = await axios({ method, url, data, headers });
      return response.data; // Return response data
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error if request fails
    }
  }
);

// Initial state
const initialState = {
  isLoading: false,
  data: [], // Array to store tasks or data
  isError: null, // To store any errors
};

// Slice for task management
const taskManagerSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.data = []; // Reset data to an empty array
      state.isError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(apiRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })

      // Handle fulfilled state
      .addCase(apiRequest.fulfilled, (state, action) => {
        state.isLoading = false;

        const method = action.meta.arg.method;
        const url = action.meta.arg.url;

        // Handle different request methods
        if (method === "POST") {
          // Assuming new tasks are added, append to the existing array
          state.data.push(action.payload.data);
        } else if (method === "GET") {
          if (url.includes(NetworkURL.deleteTaskURL)) {
            const deleteUrl = action.meta.arg.url;
            console.log(deleteUrl);
            const splitUrl = deleteUrl.split("/");
            const taskId = splitUrl[splitUrl.length - 1]; // Assuming task ID is at the end of the URL
            state.data = state.data.filter(task => task._id !== taskId);
            console.log(state.data); // Remove task by ID
          } else if (url.includes(NetworkURL.updateTaskStatusURL)) {
            const updateUrl = action.meta.arg.url;
            const splitUrl = updateUrl.split("/");
            const taskId = splitUrl[splitUrl.length - 2]; // Task ID is usually in the second last segment
            const newStatus = splitUrl[splitUrl.length - 1]; // New status is in the last segment

            // Find the task in state and update its status
            const taskIndex = state.data.findIndex(task => task._id === taskId);
            if (taskIndex !== -1) {
              // Update the task status (or other properties)
              state.data[taskIndex].status = newStatus;
            }
          } else {
            // Handle the general GET request response
            state.data = action.payload.data; // Overwrite the data with fetched tasks
          }
        }
      })

      // Handle rejected state
      .addCase(apiRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  }
});

// Export actions and reducer
export const { resetState } = taskManagerSlice.actions;
export default taskManagerSlice.reducer;
