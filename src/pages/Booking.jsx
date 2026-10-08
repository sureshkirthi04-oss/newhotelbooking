```jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const hotelId = params.get("hotelId") || "";
  const checkIn = params.get("checkIn") || "";
  const checkOut = params.get("checkOut") || "";
  const guestsFromSearch = params.get("guests") || "1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(guestsFromSearch);
  const [rooms, setRooms] = useState("1");
  const [error, setError] = useState("");

  function handleBooking(e) {
    e.preventDefault();

    if (!hotelId) {
      setError("Please select a hotel first.");
      return;
    }

    if (!name.trim()) {
      setError("Guest name is required.");
      return;
    }

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setError("Please provide valid check-in and check-out dates.");
      return;
    }

    if (!Number.isInteger(Number(guests)) || Number(guests) < 1) {
      setError("At least one guest is required.");
      return;
    }

    if (!Number.isInteger(Number(rooms)) || Number(rooms) < 1) {
      setError("Please select at least one room.");
      return;
    }

    setError("");

    // Database insertion will be implemented after
    // authentication and Supabase setup.
    alert("Form validation successful. Database connection is next.");

    navigate("/history");
  }

  return (
    <main className="booking-page">
      <h1>Book Your Hotel</h1>

      <form className="booking-form" onSubmit={handleBooking} noValidate>
        <label htmlFor="name">Guest Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Hotel ID</label>
        <input value={hotelId} readOnly />

        <label>Check-in Date</label>
        <input value={checkIn} readOnly />

        <label>Check-out Date</label>
        <input value={checkOut} readOnly />

        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="rooms">Number of Rooms</label>
        <input
          id="rooms"
          type="number"
          min="1"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Book Now</button>
      </form>
    </main>
  );
}

export default Booking;
```