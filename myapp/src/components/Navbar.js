import React from 'react';            
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
    
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/documentation">Documentation</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
      <button className="login-button">
        <Link to="/Login">Login</Link>
        </button>
    </nav>
  );
}
export default Navbar;