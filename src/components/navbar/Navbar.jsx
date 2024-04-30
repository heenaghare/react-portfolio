import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>

        <li className="navbar-item">
          <Link className="navbar-link" to="/project">
            Project
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/skills">
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/experience">
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
