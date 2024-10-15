
import { configureStore } from "@reduxjs/toolkit";
import taskmanagerSlice from "./features/taskManager/FutureSlice";

const store = configureStore({
    reducer: {
        taskManager: taskmanagerSlice
    }
})


export default store ;