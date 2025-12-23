import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      addTodo(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
