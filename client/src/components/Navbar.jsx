import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Event Feedback System</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/events">Events</Link>{" "}
        <Link to="/feedbacks">Feedback</Link>
      </div>
    </nav>
  );
}

export default Navbar;