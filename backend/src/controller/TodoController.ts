import mongoose from "mongoose";
import TodoModel from "../model/TodoModel";
import { Todo } from "../types/Todo";
import { Request, Response } from "express";

async function getAllTodos(_: Request, res: Response) {
  try {
    const todos: Todo[] = await TodoModel.find();
    return res
      .status(200)
      .json({ message: "all data", success: true, data: todos });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false, data: [] });
  }
}

async function createTodo(req: Request<{}, {}, Todo>, res: Response) {
  try {
    const title: string = req.body.title || "";
    if (!title) {
      return res
        .status(400)
        .json({ message: "title not provided", success: false, data: {} });
    }
    const todo: Todo = await TodoModel.create({ title });
    return res
      .status(201)
      .json({ message: "Todo created", success: true, data: todo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false, data: {} });
  }
}

async function deleteTodo(req: Request<{ id: string }>, res: Response) {
  try {
    const id: string = req.params.id || "";
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ message: "Id undefined", success: false, data: {} });
    }
    const todo: Todo | null = await TodoModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Todo deleted", success: true, data: todo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false, data: {} });
  }
}

export { getAllTodos, createTodo, deleteTodo };
