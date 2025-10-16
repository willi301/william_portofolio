import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // optional if you have specific styles for the navbar

const Navbar: React.FC = () => {


  return (
        <nav className="navbar">
            <Link to="/" className="nav-button">
                Home
            </Link>

            <Link to="/projects" className="nav-button">
                Projects
            </Link>

            <Link to="/contact" className="nav-button">
                Contact
            </Link>
        </nav>
  );
};

export default Navbar;

