"use client";
import { FormEvent, useEffect, useState } from "react";
import { ITodo } from "./types/Todo";
import { createTodo, deleteTodo, getAllTodos } from "./lib/todoApi";

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");

  async function handleDelete(_id: string) {
    const data = await deleteTodo(_id);
    if (data.success) {
      setTodos((todos) => todos.filter((todo) => todo._id !== _id));
    }
  }

  useEffect(function () {
    getAllTodos().then((data) => {
      if (data.success) {
        setTodos(data.todo);
      }
    });
  }, []);

  async function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title) return null;
    const data = await createTodo(title);
    setTodos((p) => [...p, data.data]);
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="min-h-screen w-full max-w-3xl py-32 px-16 bg-white sm:items-start">
        <h1 className="text-4xl text-center">Your Todos</h1>
        <div className="input my-20">
          <form className="flex justify-between" onSubmit={addTodo}>
            <input
              type="text"
              aria-label="add Todo"
              className="w-full px-3 py-2 mr-4 outline-none shadow shadow-gray-200"
              placeholder="Add Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              type="submit"
              className="py-1 px-3 rounded-md bg-gray-400 hover:bg-gray-300 transition cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>
        <div className="list shadow-lg rounded-lg p-4">
          {todos.map((todo) => (
            <div className="item flex justify-between py-2" key={todo._id}>
              <p className="text-blue-800">{todo.title}</p>
              <button
                className="cursor-pointer"
                onClick={() => handleDelete(todo._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
