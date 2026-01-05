export interface ITodo {
  title: string;
  createdAt: number;
  _id: string;
}

export interface I_API_RESPONSE<T> {
  message: string;
  success: boolean;
  data: T;
}
