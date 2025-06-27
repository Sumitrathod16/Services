import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;