import { configureStore } from "@reduxjs/toolkit";
import taskManagerSlice from "./features/taskManager/FutureSlice";
import logger from 'redux-logger'; // Example of a custom middleware

const store = configureStore({
  reducer: {
    taskManager: taskManagerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // Add custom middleware (e.g., logger)
});

export default store;
