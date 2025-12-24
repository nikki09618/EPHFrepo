import { Link } from "react-router-dom";
 import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Router App</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/todos">Todos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
