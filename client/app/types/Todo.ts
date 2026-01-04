export default interface ITodo {
  title: string;
  createdAt: number;
  _id: string;
}

export interface GET_ALL_TODO {
  message: string;
  success: boolean;
  todos: ITodo[];
}
export interface CREATE_TODO {
  message: string;
  success: boolean;
  data: ITodo;
}

export interface DELETE_TODO {
  message: string;
  success: boolean;
  data: ITodo;
}
