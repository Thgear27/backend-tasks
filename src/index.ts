import express, { json } from "express";
import cors from "cors";
import { tasksRouter } from "./routes/tasks";

const port = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = ["http://localhost:5000"];

      if (!origin) {
        return callback(null, true);
      }

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.disable("x-powered-by");

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
