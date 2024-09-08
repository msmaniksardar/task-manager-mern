import {errorResponse, successResponse} from "./responseController.js";
import {Tasks} from "../models/taskModel.js";
import mongoose from "mongoose";


export const createTask = async (req, res, next) => {
    try {
        const userId = req.headers.userId; // Get userId from request headers
        const reqBody = req.body; // Get the request body
        // Attach userId to the task body
        reqBody.userId = userId;
        // Create a new task using the Tasks model
        await Tasks.create(reqBody);
        // Send a success response
        return successResponse(res, {statusCode: 200, message: "Task created successfully."});
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
};
export const updateTaskStatus = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        if (!userId) {
            errorResponse(res, {statusCode: 400, message: "User id not provided in headers"});
        }
        const id = req.params.id;
        const status = req.params.status;
        if (!status) {
            errorResponse(res, {statusCode: 400, message: "Status not provided in params"});
        }

        await Tasks.findOneAndUpdate({_id: id, userId: userId}, {status: status});
        successResponse(res, {statusCode: 200, message: "Task Status updated successfully."});

    } catch (e) {
        next(e);
    }
}
export const taskListByStatus = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const status = req.params.status;
        const data = await Tasks.find({userId: userId, status: status});
        return successResponse(res, {statusCode: 200, message: "Task list successfully.", payload: data});
    } catch (e) {
        next(e)
    }
}
export const deleteTask = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const id = req.params.id;
        await Tasks.deleteOne({_id: id, userId: userId});
        return successResponse(res, {statusCode: 200, message: "Task deleted successfully."});
    } catch (e) {
        next(e);
    }
}
export const countTask = async (req, res, next) => {
    try {
        const objectId = mongoose.Types.ObjectId;
        const userId = new objectId(req.headers.userId);

        const data = await Tasks.aggregate([
             {$match: {userId: userId}},
             {$group: {
                _id: "$status",
                totalTasks: {$count:{}}
            }
        }])
        return successResponse(res, {statusCode: 200, message: "Task count successfully.", payload: data});
    } catch (e) {
        next(e);
    }
}