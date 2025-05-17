import React from "react";

const TourCard = ({ image, title, price, description, button1Text, button2Text, onBookClick }) => {
  return (
    <div className="card p-3 shadow" style={{ width: "300px" }}>
      <img src={image} alt={title} className="tour-card-img" />

      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold text-primary">₹{price}</p>
        <button className="btn btn-primary me-2" onClick={onBookClick}>
          {button1Text}
        </button>
        <button className="btn btn-outline-secondary">
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default TourCard;
