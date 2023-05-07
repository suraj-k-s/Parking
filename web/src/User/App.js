import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../User/components";
import Homepage from "./pages/Homepage";
import Viewairport from "../User/pages/Viewairport";
import Viewprofile from "../User/pages/Viewprofile";
import Editprofile from "./pages/Editprofile";
import Changepassword from "./pages/Changepassword";
import Viewslots from "./pages/ViewSlot";
import Bookedslots from "./pages/Bookedslot";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/viewslot/:airport" element={<Viewslots />} />
        <Route path="/viewairport" element={<Viewairport />} />
        <Route path="/viewprofile" element={<Viewprofile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/bookedslots" element={<Bookedslots />} />

      </Routes>
    </div>
  );
}
