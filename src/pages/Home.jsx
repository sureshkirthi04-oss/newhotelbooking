import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [error, setError] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    // Validation
    if (!destination.trim()) {
      setError("Please enter a destination.");
      return;
    }

    if (!checkIn) {
      setError("Please select check-in date.");
      return;
    }

    if (!checkOut) {
      setError("Please select check-out date.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    if (Number(guests) < 1) {
      setError("Please enter at least 1 guest.");
      return;
    }

    setError("");

    // Go to Hotels page
    navigate(
      `/hotels?destination=${encodeURIComponent(destination)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  }

  return (
    <main className="home-page">

      <section className="hero">

        <h1>Find Your Perfect Stay</h1>

        <p>
          Search hotels, check availability, and book your perfect room.
        </p>

        <form
          className="search-form"
          onSubmit={handleSearch}
        >

          {/* Destination */}
          <div>
            <label>Destination</label>

            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>


          {/* Check-in */}
          <div>
            <label>Check-in</label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>


          {/* Check-out */}
          <div>
            <label>Check-out</label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>


          {/* Guests */}
          <div>
            <label>Guests</label>

            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>


          {/* Error */}
          {error && (
            <p className="error">
              {error}
            </p>
          )}


          {/* Search Button */}
          <button type="submit">
            Search Hotels
          </button>

        </form>

      </section>


      {/* Popular Hotels */}

      <section className="popular-section">

        <h2>Popular Hotels</h2>

        <div className="hotels-grid">

          <div className="hotel-card">
            <div className="hotel-image">
              🏨
            </div>

            <h3>Grand Palace Hotel</h3>
            <p>Bangalore</p>
            <p>₹2500 / night</p>
          </div>


          <div className="hotel-card">
            <div className="hotel-image">
              🏨
            </div>

            <h3>Royal Comfort</h3>
            <p>Bangalore</p>
            <p>₹2000 / night</p>
          </div>


          <div className="hotel-card">
            <div className="hotel-image">
              🏨
            </div>

            <h3>City View Resort</h3>
            <p>Bangalore</p>
            <p>₹3000 / night</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;