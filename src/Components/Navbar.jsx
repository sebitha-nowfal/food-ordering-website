import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // ✅ logo image import

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo + Title */}
        <div className="logo-container">
          <img src={logo} alt="Foodie Logo" className="logo-img" />
          <h1 className="logo-text">Foodie</h1>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/cart" className="nav-link">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}
