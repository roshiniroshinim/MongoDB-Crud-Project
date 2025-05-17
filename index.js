// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import BookingForm from './BookingForm'; // ✅ Use exact case

const App = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Travel Booking</h1>
    <BookingForm />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
