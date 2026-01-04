import { Schema, model } from "mongoose";

import { Todo } from "../types/Todo";

const schema = new Schema<Todo>({
  title: { type: String, required: true },
  createdAt: { type: Number, default: Date.now() },
});

export default model<Todo>("Todo", schema);
