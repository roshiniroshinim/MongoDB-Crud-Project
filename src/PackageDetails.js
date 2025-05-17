import React from "react";
import { useParams } from "react-router-dom";

function PackageDetails() {
  const { id } = useParams();

  // Dummy data based on id
  const packages = {
    1: {
      title: "Goa Beach Getaway",
      image: "https://example.com/image.jpg",
      description: "This is a full package including stay, meals, and sightseeing in Goa.",
      price: 15000,
    },
    // Add more packages here if needed
  };

  const selectedPackage = packages[id];

  if (!selectedPackage) return <p className="text-center mt-5">Package not found</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <img src={selectedPackage.image} className="card-img-top mb-4" alt={selectedPackage.title} />
        <h2>{selectedPackage.title}</h2>
        <p>{selectedPackage.description}</p>
        <h4 className="text-success">₹{selectedPackage.price}</h4>
        <button className="btn btn-primary mt-3">Book Now</button>
      </div>
    </div>
  );
}

export default PackageDetails;
