import { useLocation, useNavigate } from "react-router-dom";

function Hotels() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const destination = params.get("destination");
  const checkIn = params.get("checkIn");
  const checkOut = params.get("checkOut");
  const guests = params.get("guests");

  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel",
      description: "Luxury hotel with comfortable rooms.",
    },
    {
      id: 2,
      name: "Royal Comfort",
      description: "Comfortable rooms at an affordable price.",
    },
    {
      id: 3,
      name: "City View Resort",
      description: "Beautiful resort with excellent city views.",
    },
  ];

  function handleBook(hotelId) {
    navigate(
      `/booking?hotelId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  }

  return (
    <div>
      <h1>Available Hotels</h1>

      <p>
        <strong>Destination:</strong> {destination}
      </p>

      <p>
        <strong>Check-in:</strong> {checkIn}
      </p>

      <p>
        <strong>Check-out:</strong> {checkOut}
      </p>

      <p>
        <strong>Guests:</strong> {guests}
      </p>

      <hr />

      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>

          <button onClick={() => handleBook(hotel.id)}>
            View & Book
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Hotels;