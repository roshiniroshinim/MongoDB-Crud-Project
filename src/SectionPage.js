import React from "react";

function SectionPage({ image, title, price, description, button1Text, button2Text, onDetailsClick }) {
  return (
    <div className="card shadow-sm" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-start">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description.slice(0, 60)}...</p>
        <p className="text-muted">₹{price}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">{button1Text}</button>
          <button className="btn btn-outline-secondary" onClick={onDetailsClick}>
            {button2Text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionPage;
