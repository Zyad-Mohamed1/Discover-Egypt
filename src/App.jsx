import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/Landingpage.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import LoginPage from "./pages/login page/LoginPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}