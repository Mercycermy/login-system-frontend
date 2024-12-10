import React from "react";
import './design/styles.css';

const HomeDashboard = () => {
  return (
    <div className="home-dashboard">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo">RentEase</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <input 
          type="text" 
          className="nav-search" 
          placeholder="Search properties..." 
        />
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Rental Today</h1>
          <p>Search from thousands of properties to find the perfect one for you.</p>
          <button className="cta-button">Find Your Next Rental</button>
        </div>
      </header>

      {/* Search Bar */}
      <section className="search-bar">
        <h2>Search for Properties</h2>
        <div className="filters">
          <select>
            <option>Price Range</option>
            <option>Below $500</option>
            <option>$500 - $1000</option>
            <option>Above $1000</option>
          </select>
          <select>
            <option>Location</option>
            <option>Addis Ababa</option>
            <option>Dire Dawa</option>
            <option>Bahir Dar</option>
          </select>
          <select>
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Studio</option>
          </select>
          <select>
            <option>Availability</option>
            <option>Available Now</option>
            <option>Coming Soon</option>
          </select>
          <button className="filter-button">Search</button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {[1, 2, 3,4,5,6].map((property) => (
            <div key={property} className="property-card">
              <img src={`property-${property}.jpg`} alt={`Property ${property}`} />
              <h3>Property {property}</h3>
              <p>Price: $1200/month</p>
              <p>Location: Addis Ababa</p>
              <button className="view-details">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 RentEase. Your trusted rental platform.</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
          <div className="footer-links">
            <a href="#">Contact</a> | 
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeDashboard;
