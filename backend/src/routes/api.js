import express from "express";
export const router = express.Router();
import * as userController from "../controllers/userController.js"
import * as taskController from "../controllers/taskController.js"

// User Route 
router.post("/registration", userController.userRegistration);
router.post("/login", userController.userLogin);
router.get("/profile-details", userController.userProfileDetails);
router.post("/profile-update", userController.userProfileUpdate);
router.post("/email-verify", userController.userEmailVerify);
router.post("/code-verify", userController.userCodeVerify);
router.post("/reset-password", userController.userPasswordReset);

// SET TASK ROUTE 
router.post("/create-task", taskController.createTask);
router.post("/update-task-status", taskController.updateTaskStatus);
router.get("/task-list-status", taskController.taskListByStatus);
router.get("/count-task", taskController.countTask);
router.delete("/delete-task", taskController.deleteTask);
