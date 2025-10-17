import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // optional if you have specific styles for the navbar

const Navbar: React.FC = () => {


  return (
        <nav className="navbar">
            
            <Link to="/contact" className="nav-button">
                Contact
            </Link>

            <Link to="/projects" className="nav-button">
                Projects
            </Link>

            <Link to="/" className="nav-button">
                Home
            </Link>
        </nav>
  );
};

export default Navbar;

