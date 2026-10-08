import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Hotels from "./pages/Hotels";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Hotel Search */}
        <Route path="/hotels" element={<Hotels />} />

        {/* Booking */}
        <Route path="/booking" element={<Booking />} />

        {/* Booking History */}
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;