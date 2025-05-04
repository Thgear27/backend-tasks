import { Router } from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/tasks";

export const tasksRouter = Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", createTask);
tasksRouter.delete("/:id", deleteTask);
tasksRouter.put("/:id", updateTask);
