import React, { useState } from "react";
import "./EventCard.css";

export default function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBookClick = () => {
    // In real app, this would navigate to booking page
    alert(`Booking ${event.title}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getEventIcon = (type) => {
    const icons = {
      'Cultural': '🏛️',
      'Concerts': '🎵',
      'Sports': '⚽',
      'Workshops': '🔨',
      'Entertainment': '🎭',
      'Festivals': '🎪',
      'Exhibitions': '🖼️'
    };
    return icons[type] || '🎪';
  };

  return (
    <div 
      className={`event-card ${event.featured ? 'featured' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {event.featured && <div className="featured-badge">Featured</div>}
      
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <div className="event-type">
          {getEventIcon(event.type)} {event.type}
        </div>
      </div>

      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span className="detail-text">{event.city}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-text">{formatDate(event.date)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💰</span>
            <span className="detail-text">{event.price}</span>
          </div>
        </div>

        <button className="book-btn" onClick={handleBookClick}>
          <span>Book Now</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}