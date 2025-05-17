import React, { useState } from "react";

function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleBookNow = () => {
    setShowForm(true);
    setTimeout(() => {
      const section = document.getElementById("booking-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleShowDetails = (packageData) => {
    setSelectedPackage(packageData);
  };

  // Example tour packages array (replace with your data)
  const tourPackages = [
    {
      id: 1,
      image: "./images/img1.jpg",
      title: "Beach Getaway",
      price: "$499",
      description: "Relax at the beach with this all-inclusive package.",
    },
    {
      id: 2,
      image: "./images/img2.jpg",
      title: "Mountain Adventure",
      price: "$699",
      description: "Explore the mountains on a thrilling adventure.",
    },
    {
      id: 3,
      image: "./images/img3.jpg",
      title: "City Tour",
      price: "$299",
      description: "Discover the most iconic places in the city.",
    },
  ];

  return (
    <div className="packages-section container py-5">
      <h2 className="text-center mb-4">Popular Packages</h2>
      <div className="row">
        {tourPackages.map((pkg) => (
          <div className="col-md-4 mb-4" key={pkg.id}>
            <div className="card h-100 shadow-sm">
              <img src={pkg.image} className="card-img-top" alt={pkg.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">{pkg.description}</p>
                <p className="text-primary fw-bold">{pkg.price}</p>
                <div className="mt-auto d-flex gap-2">
                  <button className="btn btn-primary" onClick={handleBookNow}>
                    Book Now
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => handleShowDetails(pkg)}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Show booking form or selected package details */}
      {showForm && (
        <div id="booking-section" className="mt-5">
          {/* Replace with your actual BookingSection component */}
          <h4>Booking Form Goes Here</h4>
        </div>
      )}

      {selectedPackage && (
        <div className="mt-5">
          {/* Replace with your actual PackageDetails component */}
          <h4>Package Details</h4>
          <p>{selectedPackage.title}</p>
          <p>{selectedPackage.description}</p>
        </div>
      )}
    </div>
  );
}

export default PackagesSection;
