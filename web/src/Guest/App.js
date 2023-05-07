import React from "react";
import Navbar from "../Guest/components/Navbar";
import Body from "../Guest/components/Body";
import Login from "./pages/Login";
import Index from "./pages/index";
import Registration from "./pages/Register";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}
