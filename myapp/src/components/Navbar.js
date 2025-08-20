import React from 'react';            
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling
import CompanyIcon from '../assets/logo.svg'; // Adjust the path to your logo


function Navbar() {
  return (
    <>
    <style>
      {`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  width: 100%;
  height: 60px;
  background-color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

nav ul li a:hover,
nav ul li a.active {
  background: red;
  color: #fff;
}
.company{
  height:60px;
  width:70px;
  pointer-events: none;
  margin-right:65rem;
}

.login-button{
  background-color:red;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  position:absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.login-button a{
  text-decoration: none;
  color:white;
}
.login-button:hover {
  background-color: darkred;
}
      `}
    </style>
    <nav className="navbar">
    <img src={CompanyIcon} alt="company" className="company"/>
    <ul>
      
       <li><Link to="/features">Features</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/signup">Sign In</Link></li>
      </ul>
      <button className="login-button">
        <Link to="/Login">Login</Link>
        </button>
        
    </nav>
    </>
  );
}
export default Navbar;