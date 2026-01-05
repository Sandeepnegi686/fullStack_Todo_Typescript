const API: string = process.env.NEXT_PUBLIC_BACKEND_URL || "";

import axios, { AxiosResponse } from "axios";
import { ITodo, I_API_RESPONSE } from "../types/Todo";

const todoApi = axios.create({
  baseURL: API,
});

export async function getAllTodos(): Promise<I_API_RESPONSE<ITodo[]>> {
  const { data } = await todoApi.get("/getAllTodos");
  console.log(data);
  return data;
}

export async function createTodo(
  title: string
): Promise<I_API_RESPONSE<ITodo>> {
  const { data }: AxiosResponse<I_API_RESPONSE<ITodo>> = await todoApi.post(
    "/create",
    {
      title,
    }
  );
  return data;
}

export async function deleteTodo(id: string): Promise<I_API_RESPONSE<ITodo>> {
  const { data }: AxiosResponse<I_API_RESPONSE<ITodo>> = await todoApi.delete(
    `/delete/${id}`
  );
  return data;
}
