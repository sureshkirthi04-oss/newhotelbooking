```jsx
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel, search }) {
  const navigate = useNavigate();

  function handleBook() {
    const params = new URLSearchParams(search);

    navigate(
      `/booking?hotelId=${hotel.id}&checkIn=${params.get(
        "checkIn"
      )}&checkOut=${params.get("checkOut")}&guests=${params.get(
        "guests"
      )}`
    );
  }

  return (
    <div className="hotel-card">
      <img
        src={hotel.image_url}
        alt={hotel.name}
        className="hotel-image"
      />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <p>📍 {hotel.location}</p>
        <p>⭐ {hotel.rating ?? "Not rated yet"}</p>
        <p>₹{Number(hotel.price_per_night).toLocaleString("en-IN")} / night</p>

        <p>{hotel.description}</p>

        <button onClick={handleBook}>View & Book</button>
      </div>
    </div>
  );
}

export default HotelCard;
```