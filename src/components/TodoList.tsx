import React, { useState } from "react";
import { Todo } from "../model";
import EachTodo from "./EachTodo";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((eachTodo: Todo) => eachTodo.id != id));
  };

  const handleEdit = (id: number, todomsg: string) => {
    if (todomsg) {
      setTodoList(
        todoList.map((eachTodo: Todo) => {
          if (eachTodo.id == id) {
            eachTodo.msg = todomsg;
          }
          return eachTodo;
        })
      );
    }
  };
  return (
    <>
      <div>TodoList</div>
      {todoList.map((eachTodo: Todo, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <EachTodo
            eachTodo={eachTodo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          ></EachTodo>
        </div>
      ))}
    </>
  );
};

export default TodoList;
