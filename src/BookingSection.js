// src/components/BookingSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingSection = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    package: ''
  });

  // ✅ Update package field when selectedPackage changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, package: selectedPackage }));
  }, [selectedPackage]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/bookings", formData);
      alert("Booking submitted successfully");
      setFormData({ name: '', email: '', date: '', package: selectedPackage });
    } catch (err) {
      alert("Error submitting booking");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Book Your Travel</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="text"
        name="package"
        placeholder="Package"
        value={formData.package}
        readOnly
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Book</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px'
  }
};

export default BookingSection;
