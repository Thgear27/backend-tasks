import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { db } from "../db";
import { tasks as tasksTable } from "../db/schema";
import type { Request, Response } from "express";
import { eq, desc } from "drizzle-orm";

// TODO: Standardize error messages and logging

export async function getAllTasks(_req: Request, res: Response) {
  try {
    console.log("[GET]: Fetching all tasks");
    const tasks = await db.select().from(tasksTable).orderBy(desc(tasksTable.createdAt));
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createTask(req: Request, res: Response) {
  const taskSchema = createInsertSchema(tasksTable);
  console.log("[POST]: Creating task with data:", req.body);

  const { data, success, error } = taskSchema.safeParse(req.body);
  if (!success) {
    console.error("Validation error:", error);

    res.status(400).json({ error: "Invalid data", details: error });
    return;
  }

  try {
    const task = await db.insert(tasksTable).values(data).returning();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error inserting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.id);
    console.log("[DELETE]: Deleting task with ID:", taskId);

    const deletedTask = await db.delete(tasksTable).where(eq(tasksTable.id, taskId)).returning();
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateTask(req: Request, res: Response) {
  const taskId = parseInt(req.params.id);
  const taskSchema = createUpdateSchema(tasksTable);

  console.log("[PUT]: Updating task with ID:", taskId, "and data:", req.body);

  const { data, success, error } = taskSchema.safeParse(req.body);
  if (!success) {
    console.error("Validation error:", error);
    res.status(400).json({ error: "Invalid data", details: error });
    return;
  }

  try {
    const updatedTask = await db.update(tasksTable).set(data).where(eq(tasksTable.id, taskId)).returning();
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
