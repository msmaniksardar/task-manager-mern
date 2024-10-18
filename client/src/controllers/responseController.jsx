import { toast } from 'react-toastify'; // Ensure toast is imported


export const successResponse = (response, { message = "successful" }) => {
    if (response.status === "success") {
        toast.success(message);
    }

}

export const errorResponse = (error, { message = "Something is wrong" }) => {

    if (error.status === "fail") {
        toast.error(message);
    }

}