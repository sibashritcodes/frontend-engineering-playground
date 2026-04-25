import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./todo.slice";

const store = configureStore({
  reducer: { todos: todoReducers },
});

export default store;
    