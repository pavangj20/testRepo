import { useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodoList = (todo: string) => {
    setTodoList([
      ...todoList,
      { id: Date.now(), msg: todo, isCompleted: false },
    ]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Todoform addTodoList={addTodoList}></Todoform>
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );
}

export default App;
