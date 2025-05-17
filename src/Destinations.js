import React from "react";
import { useNavigate } from "react-router-dom";

// Include image URLs if they are in the public folder
const destinations = [
  {
    id: 1,
    title: "Paris, France",
    description: "City of lights and love with stunning architecture.",
    price: "$1,200",
    image: "/images/flex5.jpg"
  },
  {
    id: 2,
    title: "Bali, Indonesia",
    description: "A tropical paradise perfect for relaxation.",
    price: "$950",
    image: "/images/flex4.jpg"
  },
  {
    id: 3,
    title: "New York, USA",
    description: "Explore the city that never sleeps with iconic sights.",
    price: "$1,400",
    image: "/images/flex3.jpg"
  }
];

const Destinations = () => {
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/booking?destinationId=${id}`);
  };

  const handleMoreDetails = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="destination-section" style={{ padding: "40px 20px", background: "#f8f9fa" }}>
      <div className="destination-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 className="section-title text-center mb-4">Popular Destinations</h2>
        <p className="section-description text-center mb-5">
          Discover beautiful travel spots and plan your next adventure.
        </p>

        <div className="row g-4">
          {destinations.map((place) => (
            <div className="col-md-4" key={place.id}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{place.title}</h5>
                  <p className="card-text">{place.description}</p>
                  <p className="fw-bold text-success">{place.price}</p>

                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleMoreDetails(place.id)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBookNow(place.id)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;