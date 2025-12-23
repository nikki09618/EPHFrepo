import { TodoProvider } from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <h2>Todo App (Context API)</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;
