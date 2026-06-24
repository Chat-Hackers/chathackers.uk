import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Home";
import Contacts from "./Contacts";
import Tools from "./Tools";
import FAQ from "./FAQ";
import Privacy from "./Privacy";
import Volunteer from "./Volunteer";
import Motivations from "./Motivations";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="conversations" element={<Contacts />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="motivations" element={<Motivations />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
    </BrowserRouter>
  );
}
