import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app: Express = express();
const PORT: number = +process.env.PORT! || 3000;
const URI: string = process.env.DB_URI || "";
app.use(express.json());
app.use(cors());

import TodoRouter from "./routes/TodoRoute";
import connectDB from "./db/db";

app.get("/", (req: Request, res: Response) => res.send("Hello"));
app.use("/todo", TodoRouter);

app.listen(PORT, () => {
  console.log("Server Started...");
  connectDB(URI);
});
