import React, { useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // If using icons via className
import "./index.css"; // Your custom styles
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaHotel, FaUsersCog, FaUserFriends,FaUserAlt,FaCogs } from "react-icons/fa";
import { FaGlobe,  FaPlane } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Icons imports
import {
  FaYoutube,
  FaDollarSign,
  FaRegClock,
  FaHeadset,
  FaStar
} from "react-icons/fa";

import axios from 'axios';
// Import images
import travel1 from "./images/travel1.jpg";
import travel4 from "./images/travel4.jpg";
import travel5 from "./images/travel5.jpg";
import flex1 from "./images/flex1.jpg";
import flex from "./images/flex.jpg";
import flex3 from "./images/flex3.jpg";
import flex4 from "./images/flex4.jpg";
import flex5 from "./images/flex5.jpg";
import team4 from "./images/team4.jpg";
import team5 from "./images/team5.jpg";
import team6 from "./images/team6.jpg";
import team7 from "./images/team7.jpg";
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";
import bg4 from "./images/bg4.jpg";
import bigimg2 from "./images/bigimg2.jpg";
// Destination Data
const destinations = [
  { id: 1, name: "Travel the World", image: flex1, rating: 3.9, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500},
  { id: 2, name: "Travel the World", image: flex, rating: 4.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500},
  { id: 3, name: "Travel the World", image: flex3, rating: 3.8, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500 },
  { id: 4, name: "Travel the World", image: flex4, rating: 4.7, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500 },
  { id: 5, name: "Travel the World", image: flex5, rating: 4.6, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500 },
  { id: 5, name: "Travel the World", image: flex5, rating: 4.6, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",price:1500 }
];
const places1= [
  { id: 1, name: "Adventure Tour Go Way", image: flex1, rating: 4.5, price: "$2,500" },
  { id: 2, name: "Adventure Tour Go Way", image: flex, rating: 4.3, price: "$3,000" },
  { id: 3, name: "Adventure Tour Go Way", image: flex3, rating: 4.6, price: "$2,800" },
  { id: 4, name: "Adventure Tour Go Way", image: flex4, rating: 4.4, price: "$3,200" },
];
const teamMembers = [
  { img: product1, name: "Maria Smith", role: "Senior Guide", },
  { img: product2, name: "Alex Johnson", role: "Adventure Expert", },
  { img: product3, name: "Sophia Brown", role: "Tour Specialist",  },
];
const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

    const styles = {
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }
    };
   
    // Define RoomCard at the top, BEFORE Home
const RoomCard = ({ image, title, price, rating }) => (
  <div
    className="room-card"
    style={{
      border: '1px solid #eee',
      borderRadius: '10px',
      width: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
     <div className="room-content">
        <h3 className="room-title">
          {title}
          <span className="rating">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </span>
        </h3>

        <div className="room-icons">
          <span>🛏️ 3 Bed</span>
          <span>🛁 2 Bath</span>
          <span>📶 Wifi</span>
        </div>

        <p className="room-desc">
          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
          diam stet diam sed stet lorem.
        </p>

        <div className="room-buttons">
          <button className="btn-orange">READ MORE</button>
          <button className="btn-dark">BOOK NOW</button>
        </div>
      </div>
    </div>
);

const services = [
  {
    icon: <FaGlobe className="icon" />,
    title: "WorldWide Tours",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: <FaHotel className="icon" />,
    title: "Hotel Reservation",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: <FaUserAlt className="icon" />,
    title: "Travel Guides",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: <FaCogs className="icon" />,
    title: "Event Management",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
];

const destinations = [
  {
    image: flex1,
    label: "Indonesia",
    discount: "",
  },
  {
    image: flex4,
    label: "Malaysia",
    discount: "25% OFF",
  },
  {
    image: travel4,
    label: "Australia",
    discount: "35% OFF",
  },
];

const [formData, setFormData] = useState({
  name: "",
  email: "",
  date: "",
  destination: "Destination 1",
  request: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Submitted:", formData);
  alert("Tour Booked Successfully!");
};

const tours = [
  {
    title: 'WEEKEND TOUR',
    image: flex1,
    offer: '',
  },
  {
    title: 'HOLIDAY TOUR',
    image: flex,
    offer: '',
  },
  {
    title: 'ROAD TRIP',
    image: flex3,
    offer: '15% Off',
  },
  {
    title: 'HISTORICAL TRIP',
    image: flex4,
    offer: '',
  },
  {
    title: 'FAMILY TOUR',
    image: flex5,
    offer: '50% Off',
  },
  {
    title: 'BEACH TOUR',
    image: img1,
    offer: '',
  },
];
const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    image:team4, // Replace with actual image URL
  },
  {
    name: "Jane Smith",
    designation: "Marketing Head",
    image: team5,
  },
  {
    name: "David Miller",
    designation: "Tour Guide",
    image: team6,
  },
  {
    name: "David Miller",
    designation: "Tour Guide",
    image: team7,
  },

];

const teamMembers1 = [
  {
    name: "John Doe",
    location: "New York, USA",
    image:team4,
    description: "Tempor erat elitr rebun at clita. Diam dolor diam ipsum sit diam amet et eos.",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, USA",
    image: team5,
    description: "Diam dolor diam ipsum sit diam amet et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    name: "Tom Wayne",
    location: "Chicago, USA",
    image:team6,
    description: "Diam dolor diam ipsum sit amet. Clita erat ipsum et lorem et sit.",
  },
  
];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % teamMembers.length);
  const prev = () => setCurrent((current - 1 + teamMembers.length) % teamMembers.length);

    return (
    <>
     {/* Bootstrap Carousel */}
  <div className="carousel-container">
  <Carousel>
    {[travel1, travel4, travel5].map((image, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        <Carousel.Caption>
          <h6>Planet's Breathtaking marvels</h6>
          <h1>Transforming Travel Dreams</h1>
          <p>Expert planning, seamless booking, and personalized service,
             we ensure every trip is stress-free and extraordinary. Let’s
             explore the world together—one destination at a time!</p>
          <button className="btn">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
</div>

<section className="hotel-intro">
      <div className="intro-text">
        <h5 className="subheading">ABOUT US</h5>
        <h1>
          Welcome to <span className="highlight"> <br></br>HOTELIER</span>
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>

        <div className="stats">
  <div className="stat-box">
    <FaHotel className="icon" />
    <h2>1234</h2>
    <p>Rooms</p>
  </div>
  <div className="stat-box">
    <FaUsersCog className="icon" />
    <h2>1234</h2>
    <p>Staffs</p>
  </div>
  <div className="stat-box">
    <FaUserFriends className="icon" />
    <h2>1234</h2>
    <p>Clients</p>
  </div>
</div>
        <button className="explore-btn">EXPLORE MORE</button>
      </div>

      <div className="hotel-gallery">
      <img src={img1} alt="poolside" />
      <img src={img2} alt="Resort" />
      <img src={img3} alt="Villa" />
      <img src={img4} alt="Lounge" />
    </div>
    </section>


    <section className="rooms-header">
      <h5 className="subheading">PACKAGES</h5>
      <h2 className="main-heading">
        Awesome <span>Packages</span>
      </h2>

      <div
        className="room-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '40px 20px',
        }}
      >
        <RoomCard image={img1} title="Junior Suite" price={"$139.00"} rating={5} />
        <RoomCard image={img2} title="Executive Suite" price={"$149.00"} rating={4} />
        <RoomCard image={img3} title="Super Deluxe" price={"$1189.00"} rating={5} />
      </div>
    </section>

    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
   
    
   
        {/* Discount Offer */}
        <div className="discount-box">
          <div className="discount-text">
            <h2><span className="highlight">25%</span> Discount</h2>
            <h3>Your First <span className="highlight">Booking</span></h3>
            <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            <button className="book-now">Book Now</button>
                      </div>
          <div className="image-container">
            <img src={travel1} alt="Travel" className="rounded-image" />
            <img src={travel4} alt="Travel" className="rounded-image" />
          </div>
        </div>

<div className="trending-container">
      <h2 className="section-title">
        Top Trending Place <span className="highlight">25% Off</span>
      </h2>
      <p className="section-subtitle">
        Limited spaces available! Hurry and book your spot now.
      </p>

      <div className="trending-grid">
        {places1.map((place) => (
          <div key={place.id} className="trending-card">
            <img src={place.image} alt={place.name} className="trending-img" />
            <div className="trending-info">
              <h3>{place.name}</h3>
              <p>
                <FaStar className="star-icon" /> {place.rating} | 20 Reviews
              </p>
              <p className="price">Starting from: <strong>{place.price}</strong></p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    <div className="booking-section">
      <div className="booking-container">
        <div className="booking-text">
          <h5>Booking</h5>
          <h2>Online Booking</h2>
          <p>
            Tempor erat elitr rebun at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p>
            Tempor erat elitr rebun at clita. Diam dolor diam ipsum sit. Clita duo justo magna dolore erat amet.
            Tempor erat elitr rebun at clita. Diam dolor diam ipsum sit. Clita duo justo magna dolore erat amet.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Book A Tour</h3>

          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              type="datetime-local"
              name="date"
              onChange={handleChange}
              required
            />
            <select
              name="destination"
              onChange={handleChange}
            >
              <option value="Destination 1">Destination 1</option>
              <option value="Destination 2">Destination 2</option>
              <option value="Destination 3">Destination 3</option>
            </select>
          </div>

          <textarea
            name="request"
            placeholder="Special Request"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>

    <section className="heading-section">
      <div className="heading-content">
        <h5 className="subheading">Explore Tour</h5>
        <h1 className="main-heading">The World</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo?
          Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
        </p>
        <div className="button-group">
          <button className="btn-primary">National Tour Category</button>
          <button className="btn-outline">International tour Category</button>
        </div>
        <div className="tour-section">
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index} style={{ backgroundImage: `url(${tour.image})` }}>
            {tour.offer && <span className="offer-badge">{tour.offer}</span>}
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>View All Place ➜</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </section>

    <section className="team-section">
      <h2 className="team-title">
        <span className="small-title">OUR TEAM</span>
        <br />
        Explore Our <span className="highlight">STAFFS</span>
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="team-section">
      <h2 className="team-title">
        <span className="small-title">OUR CLIENT REVIEW</span>
        <br />
        Explore Our <span className="highlight">STAFFS</span>
      </h2>
   <div className="team-slider">
      <button onClick={prev} className="arrow">❮</button>
      <div className="slider-cards">
        {teamMembers1.map((member, index) => (
          <div
            key={index}
            className={`card ${index === current ? "active" : ""}`}
          >
            <img src={member.image} alt={member.name} className="avatar" />
            <h3>{member.name}</h3>
            <p className="location">{member.location}</p>
            <p className="desc">{member.description}</p>
          </div>
        ))}
      </div>
      <button onClick={next} className="arrow">❯</button>
    </div>
    </section>


    <footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <h2>TRAVEL<span style={{ color: 'green' }}>ER</span></h2>
      <p>
        Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebun.
        No sed vero lorem dolor dolor.
      </p>
      <div className="social-icons">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>

    <div className="footer-column">
      <h3>Our Services</h3>
      <ul>
        <li>About</li>
        <li>Destination</li>
        <li>Services</li>
        <li>Packages</li>
        <li>Guides</li>
        <li>Testimonial</li>
        <li>Blog</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Useful Links</h3>
      <ul>
        <li>About</li>
        <li>Destination</li>
        <li>Services</li>
        <li>Packages</li>
        <li>Guides</li>
        <li>Testimonial</li>
        <li>Blog</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Contact Us</h3>
      <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
      <p><i className="fas fa-phone"></i> +012 345 67890</p>
      <p><i className="fas fa-envelope"></i> info@example.com</p>

      <h3>Newsletter</h3>
      <div className="newsletter">
        <input type="email" placeholder="Your Email" />
        <button>Sign Up</button>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};
export default Home;