import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectRoute from "./ProtectRoute";
import { Link } from "react-router-dom"

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/todos"
        element={
          <ProtectRoute>
            <Todos />
          </ProtectRoute>
        }
      />

      <Route
        path="/todos/:todoId"
        element={
          <ProtectRoute>
            <TodoDetails />
          </ProtectRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
