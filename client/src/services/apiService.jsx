import { toast } from "react-toastify";
import { Authenticate } from "../controllers/authenticationController";
import { apiRequest } from "../features/taskManager/FutureSlice";
import { NetworkMethod, NetworkURL } from "../utils/NetworkURL";

// Get token from Authenticate
const token = Authenticate.getToken();

// Thunk function to delete a task
export const deleteTaskService = (id) => async (dispatch) => {
    try {
        // Dispatch the delete task request
        const response = await dispatch(
            apiRequest({
                method: NetworkMethod.GET, // Corrected to DELETE method
                url: `${NetworkURL.deleteTaskURL}/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    token: token, // Send token in Authorization header
                },
            })
        )

        toast.success("Task Deleted Successfully");
        console.log("Delete task response:", response);
        return response;

    } catch (error) {
        // Handle error
        console.error("Error deleting task:", error);
        toast.error("Failed to delete task");
        throw error; // Handle or rethrow error as needed
    }
};

// Thunk function to update task status
export const updateTaskStatus = (id, status) => async (dispatch) => {

    await dispatch(
        apiRequest({
            method: NetworkMethod.GET, // Use PUT or PATCH method for updating
            url: `${NetworkURL.updateTaskStatusURL}/${id}/${status}`,
            headers: {
                "Content-Type": "application/json",
                token: token, // Send token in Authorization header
            },
        })
    ).unwrap()
        .then((response) => {
            if (response.status === "success") {
                toast.success("Task Update Successfully");
            }
            console.log(response);
        }
        )
        .catch((error) => console.log(error)) // Unwraps the response directly


};
