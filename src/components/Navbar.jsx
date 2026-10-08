```jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    // Logout functionality will be connected
    // to Supabase in a later step.
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <h2>StayFinder</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/booking">Book Hotel</Link>
        <Link to="/history">My Bookings</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
```