import React, { useState } from "react";

interface Props {
  addTodoList: (todo: string) => void;
  todoMsg?: string;
  cancelForm?: () => void;
}

const Todoform: React.FC<Props> = ({ addTodoList, todoMsg, cancelForm }) => {
  const [todo, setTodo] = useState<string>(todoMsg ? todoMsg : "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      addTodoList(todo);
      setTodo("");
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={todo} type="text" onChange={(e) => handleChange(e)} />
        <button type="submit" style={{ margin: "20px" }}>
          Submit
        </button>
        {cancelForm ? (
          <button onClick={cancelForm} style={{ margin: "20px" }}>
            Cancel
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Todoform;
