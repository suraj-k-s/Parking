import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Changepassword from "./pages/Changepassword";
import Homepage from "./pages/Homepage";
import BookingList from "./pages/BookingList";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/BookingList" element={<BookingList />} />
      </Routes>
    </div>
  );
}
