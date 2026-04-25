import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./store/todo.slice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [myInput, setMyInput] = React.useState("");
  const onSubmitClickHandler = () => {
    dispatch(addTodo(myInput));
  };
  const onDeleteHandler = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <div>
      <input
        value={myInput}
        onChange={(event) => {
          setMyInput(event.target.value);
        }}
      />

      <button type="button" onClick={onSubmitClickHandler}>
        Submit
      </button>
      {todos && todos.length > 0
        ? todos.map((todo) => (
            <div>
              {todo.text} - {todo.id}
              <button onClick={() => onDeleteHandler(todo.id)}>delete</button>
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
