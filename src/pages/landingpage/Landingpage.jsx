import React from "react";
import "./Landingpage.css";
import Navbar from "./navbar/Navbar.jsx";
import Section1 from "./section1/Section1.jsx";
import Section2 from "./section2/Section 2.jsx";
// import Section3 from "../../components/section3/Section3.jsx"; // Comment out if missing
// import Section4 from "../../components/section4/Section4.jsx"; // Comment out if missing
import Footer from "./footer/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <main className="main-content">
        <Section1 />
        <Section2 />
        {/* <Section3 /> */}
        {/* <Section4 /> */}
      </main>

      <Footer />
    </div>
  );
}