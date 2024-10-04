import React, { useState } from "react";
import { Todo } from "../model";
import Todoform from "./Todoform";

interface Props {
  eachTodo: Todo;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, todoMsg: string) => void;
}

const EachTodo: React.FC<Props> = ({ eachTodo, handleDelete, handleEdit }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEditFun = (todoMsg: string) => {
    if (todoMsg) {
      handleEdit(eachTodo.id, todoMsg);
      setEdit(false);
    }
  };

  return (
    <>
      {edit ? (
        <div>
          <Todoform
            addTodoList={handleEditFun}
            todoMsg={eachTodo.msg}
            cancelForm={() => setEdit(false)}
          ></Todoform>
        </div>
      ) : (
        <div>
          <div style={{ display: "inline-block", width: "100px" }}>
            {eachTodo.msg}
          </div>
          <div
            onClick={() => setEdit(true)}
            style={{
              display: "inline-block",
              width: "50px",
              cursor: "pointer",
            }}
          >
            Edit
          </div>
          <div
            onClick={() => handleDelete(eachTodo.id)}
            style={{
              display: "inline-block",
              width: "50px",
              cursor: "pointer",
            }}
          >
            Delete
          </div>
        </div>
      )}
    </>
  );
};

export default EachTodo;
