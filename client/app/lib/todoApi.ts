const API: string = process.env.NEXT_PUBLIC_BACKEND_URL || "";

import axios, { AxiosResponse } from "axios";
import { CREATE_TODO, DELETE_TODO, GET_ALL_TODO } from "../types/Todo";

const todoApi = axios.create({
  baseURL: API,
});

export async function getAllTodos(): Promise<GET_ALL_TODO> {
  const data = await todoApi.get("/getAllTodos");
  return data.data;
}

export async function createTodo(title: string): Promise<CREATE_TODO> {
  const res: AxiosResponse<CREATE_TODO> = await todoApi.post("/create", {
    title,
  });
  return res.data;
}
export async function deleteTodo(id: string): Promise<DELETE_TODO> {
  const res: AxiosResponse<DELETE_TODO> = await todoApi.delete(`/delete/${id}`);
  return res.data;
}
