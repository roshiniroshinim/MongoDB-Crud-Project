import React from "react";
import BookingSection from "./BookingSection"; // Make sure this file also exists

const BookingPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Booking Page</h2>
      <BookingSection />
    </div>
  );
};

export default BookingPage;
