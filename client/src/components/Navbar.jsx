import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
      <h2 className="logo">Event Feedback System</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link>{" "}</li>
        <li><Link to="/events">Events</Link>{" "}</li>
        <li><Link to="/feedbacks">Feedback</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;