import express from "express";
export const router = express.Router();
import * as userController from "../controllers/userController.js"
import * as taskController from "../controllers/taskController.js"
import {authMiddleware} from "../middlewares/authMiddleware.js";

// User Route 
router.post("/registration", userController.userRegistration);
router.post("/login", userController.userLogin);
router.get("/profile-details",authMiddleware, userController.userProfileDetails);
router.post("/profile-update", authMiddleware, userController.userProfileUpdate);
router.post("/email-verify/:email", authMiddleware,userController.userEmailVerify);
router.post("/code-verify/",authMiddleware, userController.userCodeVerify);
router.post("/reset-password",authMiddleware, userController.userPasswordReset);

// SET TASK ROUTE 
router.post("/create-task",authMiddleware, taskController.createTask);
router.post("/update-task-status/:id/:status",authMiddleware, taskController.updateTaskStatus);
router.get("/task-list-status/:status",authMiddleware, taskController.taskListByStatus);
router.get("/count-task",authMiddleware, taskController.countTask);
router.delete("/delete-task/:id",authMiddleware, taskController.deleteTask);
