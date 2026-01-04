import express, { Router } from "express";
import {
  createTodo,
  getAllTodos,
  deleteTodo,
} from "../controller/TodoController";

const router: Router = express.Router();

router.get("/getAllTodos", getAllTodos);
router.post("/create", createTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
