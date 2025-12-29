import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./LOgin";
import ProtectRoute from "./ProtectRoute";
import Dashbord from "./Dashbord";
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashbord">Dashbord</Link>
    
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* protected Route */}
          <Route
            path="/dashbord"
            element={
              <ProtectRoute>
                <Dashbord />
              </ProtectRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
