import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import BookingPage from "./BookingPage";
import PackageDetails from "./PackageDetails";
import CrudPages from "./CrudPages";
import Destinations from "./Destinations";

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">Food CRUD APP</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crud">Manage Food</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/booking">Booking</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Destinations">Destination</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<CrudPages />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/destinations" element={<Destinations/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
