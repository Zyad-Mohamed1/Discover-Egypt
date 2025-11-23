/*import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CityPage.css";

export default function CityPage() {
  const { citySlug } = useParams();
  const navigate = useNavigate();

  const citiesData = {
    cairo: {
      name: "Cairo",
      events: [
        { name:"Museum Opening", date:"2025-12-25", location:"Downtown Cairo", desc:"Grand opening of the Egyptian Museum", details:"The museum features over 120,000 ancient artifacts including mummies and golden treasures. Expected visitors: 5000+." },
        { name:"Cultural Festival", date:"2025-12-28", location:"Zamalek", desc:"Arts and music festival", details:"A celebration of Egyptian culture with live music, art exhibitions, and traditional dance performances. Estimated attendance: 3000." },
        { name:"Food Tour", date:"2026-01-05", location:"Old Cairo", desc:"Explore Cairo's traditional dishes", details:"Guided tour of Cairo's famous food spots including local markets and street food stalls. Participants: 50 per tour." }
      ]
    },
    alexandria: {
      name: "Alexandria",
      events: [
        { name:"Beach Festival", date:"2025-12-30", location:"Montaza Beach", desc:"Fun beach activities and concerts", details:"Enjoy beach games, live concerts, and seafood stalls. Visitors expected: 2000+." },
        { name:"Historical Tour", date:"2026-01-02", location:"Alexandria Library", desc:"Guided historical city tour", details:"Tour of Alexandria's landmarks including the library and fort. Group size: 30 people per guide." },
        { name:"Music Night", date:"2026-01-10", location:"Corniche", desc:"Open air music performances", details:"Evening music festival along the Corniche featuring local bands. Estimated attendance: 1500." }
      ]
    },
    luxor: {
      name: "Luxor",
      events: [
        { name:"Temple Tour", date:"2025-12-20", location:"Karnak Temple", desc:"Explore ancient temples", details:"Guided tour of Karnak and Luxor Temples. Visitors expected: 800 per day." },
        { name:"Nile Cruise", date:"2026-01-03", location:"Nile River", desc:"Evening cruise on the Nile", details:"Enjoy a scenic cruise with dinner and live music. Participants: 100 per cruise." },
        { name:"Sound & Light Show", date:"2026-01-07", location:"Luxor Temple", desc:"Spectacular night show", details:"Light and sound show narrating history of Luxor. Attendance: ~500 per show." }
      ]
    },
    aswan: {
      name: "Aswan",
      events: [
        { name:"Nubian Village", date:"2025-12-27", location:"Nubian Village", desc:"Experience local culture", details:"Cultural tours, handicrafts, and traditional dances. Visitors expected: 400 per tour." },
        { name:"Philae Temple", date:"2026-01-04", location:"Philae Island", desc:"Visit the beautiful temple", details:"Guided tours of Philae Temple. Participants: 300 per tour." },
        { name:"Felucca Ride", date:"2026-01-09", location:"Nile River", desc:"Relaxing sail on the river", details:"Traditional felucca rides on Nile. 8-10 people per boat." }
      ]
    },
    hurghada: {
      name: "Hurghada",
      events: [
        { name:"Diving Competition", date:"2026-01-01", location:"Red Sea", desc:"Underwater diving competition", details:"Professional and amateur divers participate. Audience: 2000+." },
        { name:"Beach Party", date:"2026-01-06", location:"Soma Bay", desc:"Music and beach games", details:"Day-long beach party with DJs and games. Visitors: 1000+." },
        { name:"Marine Tour", date:"2026-01-12", location:"Red Sea", desc:"Explore marine life", details:"Snorkeling and marine tours for groups of 20." }
      ]
    },
    "sharm-el-sheikh": {
      name: "Sharm El Sheikh",
      events: [
        { name:"Snorkeling", date:"2025-12-29", location:"Ras Mohammed", desc:"Discover coral reefs", details:"Snorkeling sessions with guides. Max 15 participants per session." },
        { name:"Desert Safari", date:"2026-01-08", location:"Sinai Desert", desc:"Adventure in the desert", details:"4x4 desert safari, camel rides, Bedouin camp. Groups up to 20 people." },
        { name:"Resort Events", date:"2026-01-15", location:"Hotel Resorts", desc:"Enjoy resort activities", details:"Pool parties, themed nights, and kids activities. Attendance: variable." }
      ]
    }
  };

  const city = citiesData[citySlug];
  if (!city) return <p style={{ textAlign:"center", marginTop:"50px", color:"#f2f2f2" }}>City not found</p>;

  return (
    <div className="city-page-wrapper">
      <button className="back-btn" onClick={() => navigate("/map")}>← Back to Map</button>
      <h1 className="city-name">{city.name}</h1>
      <div className="mini-map">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0A4C4A" stroke="#BC914C" strokeWidth="4" d="M88 155 L720 140 L760 300 L690 520 L500 680 L260 640 L120 520 L60 260 Z"/>
        </svg>
      </div>
      <div className="city-events">
        <h2>Events in {city.name}</h2>
        <ul>
          {city.events.map((ev, i) => (
            <li key={i} className="event-item">
              <h3>{ev.name}</h3>
              <p><strong>Date:</strong> {ev.date}</p>
              <p><strong>Location:</strong> {ev.location}</p>
              <p>{ev.desc}</p>
              <p className="event-details">{ev.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}*/



/*
import React from "react";
import { useParams } from "react-router-dom";
import "./CityPage.css";

export default function CityPage() {
  const { citySlug } = useParams();

  const cities = {
    cairo: {
      name: "Cairo",
      banner:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=60",
      description:
        "Cairo is a vibrant city full of energy, ancient wonders, and modern life. From the Nile riverbanks to the Great Pyramids, Cairo blends history and culture unlike any other city.",
      cards: [
        {
          title: "Egyptian Museum",
          img: "https://images.unsplash.com/photo-1592928305231-7a56c51170ef?auto=format&fit=crop&w=800&q=60",
          desc: "Over 120,000 artifacts including mummies, golden treasures, and ancient art.",
        },
        {
          title: "Khan El Khalili",
          img: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=60",
          desc: "A magical market full of souvenirs, spices, jewelry, and traditional cafés.",
        },
        {
          title: "The Nile Nights",
          img: "https://images.unsplash.com/photo-1602524207231-2275001a3c07?auto=format&fit=crop&w=800&q=60",
          desc: "Dinner cruises, music nights, and unforgettable river views.",
        },
      ],
    },

    alexandria: {
      name: "Alexandria",
      banner:
        "https://images.unsplash.com/photo-1505738452701-46c69f41fb60?auto=format&fit=crop&w=1600&q=60",
      description:
        "Alexandria is the pearl of the Mediterranean — a blend of sea, sun, history, and culture.",
      cards: [
        {
          title: "Biblotheca Alexandrina",
          img: "https://images.unsplash.com/photo-1548025426-76bcf03c5a1a?auto=format&fit=crop&w=800&q=60",
          desc: "A modern architectural masterpiece and cultural hub.",
        },
        {
          title: "Montaza Palace",
          img: "https://images.unsplash.com/photo-1600788919602-d70a926e43df?auto=format&fit=crop&w=800&q=60",
          desc: "Gardens, royal palaces, and sea views in one place.",
        },
        {
          title: "Alexandria Corniche",
          img: "https://images.unsplash.com/photo-1586370753271-5a39e78835a9?auto=format&fit=crop&w=800&q=60",
          desc: "Walk by the sea, eat seafood, and enjoy summer vibes.",
        },
      ],
    },
  };

  const city = cities[citySlug];

  if (!city) return <h2 style={{ padding: "40px" }}>City not found</h2>;

  return (
    <div className="city-page">

      
      <div
        className="city-banner"
        style={{ backgroundImage: `url(${city.banner})` }}
      >
        <div className="banner-overlay">
          <h1>{city.name}</h1>
        </div>
      </div>

      
      <div className="city-description">
        <h2>Discover {city.name}</h2>
        <p>{city.description}</p>
      </div>

      <div className="attractions-section">
        <h2>Top Experiences</h2>

        <div className="attractions-grid">
          {city.cards.map((item, index) => (
            <div
              className="attraction-card"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

*/


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CityPage.css";

// ====== IMPORT IMAGES ======
// Cairo
import cairo1 from "../../../assets/images/photo1.jpg";
import cairo2 from "../../../assets/images/photo1.jpg";
import cairo3 from "../../../assets/images/photo1.jpg";
import cairo4 from "../../../assets/images/photo1.jpg";

// Alexandria
import alex1 from  "../../../assets/images/photo1.jpg";
import alex2 from  "../../../assets/images/photo1.jpg";
import alex3 from  "../../../assets/images/photo1.jpg";
import alex4 from  "../../../assets/images/photo1.jpg";

// Giza
import giza1 from  "../../../assets/images/photo1.jpg";
import giza2 from  "../../../assets/images/photo1.jpg";
import giza3 from  "../../../assets/images/photo1.jpg";
import giza4 from  "../../../assets/images/photo1.jpg";

// Luxor
import lux1 from  "../../../assets/images/photo1.jpg";
import lux2 from  "../../../assets/images/photo1.jpg";
import lux3 from  "../../../assets/images/photo1.jpg";
import lux4 from  "../../../assets/images/photo1.jpg";
// Hurghada
import hur1 from  "../../../assets/images/photo1.jpg";
import hur2 from  "../../../assets/images/photo1.jpg";
import hur3 from  "../../../assets/images/photo1.jpg";
import hur4 from  "../../../assets/images/photo1.jpg";

// Sharm El Sheikh
import sharm1 from  "../../../assets/images/photo1.jpg";
import sharm2 from  "../../../assets/images/photo1.jpg";
import sharm3 from  "../../../assets/images/photo1.jpg";
import sharm4 from  "../../../assets/images/photo1.jpg";

// ===== CITY DATA ======
// ===== CITY DATA ======
const cities = {
  Cairo: {
    images: [cairo1, cairo2, cairo3, cairo4],
    description: "A city rich with ancient history and vibrant modern life.",
    visitors: 12000000
  },
  Alexandria: {
    images: [alex1, alex2, alex3, alex4],
    description: "The Pearl of the Mediterranean with stunning sea views.",
    visitors: 8000000
  },
  Giza: {
    images: [giza1, giza2, giza3, giza4],
    description: "Home of the Great Pyramids and ancient wonders.",
    visitors: 9000000
  },
  Luxor: {
    images: [lux1, lux2, lux3, lux4],
    description: "The world’s greatest open-air museum with royal tombs.",
    visitors: 6000000
  },
  Hurghada: {
    images: [hur1, hur2, hur3, hur4],
    description: "A top Red Sea resort city known for diving and beaches.",
    visitors: 2500000
  },
  "Sharm El Sheikh": {
    images: [sharm1, sharm2, sharm3, sharm4],
    description: "A popular resort city famous for snorkeling and desert adventures.",
    visitors: 2000000
  }
};

export default function CityPage() {
  const { citySlug } = useParams();

  const cityName = Object.keys(cities).find(
    name => name.toLowerCase().replace(/ /g, "-") === citySlug
  );

  if (!cityName) return <div className="city-container"><h2>City not found</h2></div>;

  const data = cities[cityName];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % data.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [data.images.length]);

  return (
    <div className="city-container">
      <h1 className="city-title">{cityName}</h1>
      <p className="city-desc">{data.description}</p>
      <p className="visitors">Visitors per year: {data.visitors.toLocaleString()}</p>

      {/* SLIDER */}
      <div className="slider">
        {data.images.map((img, index) => (
          <div className={`slide ${index === current ? "active" : ""}`} key={index}>
            <img src={img} alt={`${cityName}-${index}`} />
          </div>
        ))}
      </div>

      {/* 3D CARD */}
      <div className="city-card">
        <h3>{cityName} Highlights</h3>
        <p>
          Discover the best attractions, lifestyle, food and culture in {cityName}.
        </p>

        <div className="actions">
          <button className="book-btn">Book Now</button>
          <div className="icons">
            <span className="like">❤️</span>
            <span className="share">🔗</span>
          </div>
        </div>
      </div>
    </div>
  );
}