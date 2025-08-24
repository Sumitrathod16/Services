import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyIcon from "../assets/qlogo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.company {
  height: 50px;
  width: 60px;
  pointer-events: none;
}

.menu-toggle {
  display: none;
  font-size: 28px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
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

.login-button {
  background-color: red;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.login-button a {
  text-decoration: none;
  color: white;
}

.login-button:hover {
  background-color: darkred;
}

/* 🔹 Mobile View */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none; /* default closed */
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: black;
    padding: 15px 0;
    gap: 15px;
  }

  nav ul.open {
    display: flex; /* open when toggled */
  }

  .login-button {
    margin: 10px auto;
  }
}
        `}
      </style>

      <nav className="navbar">
        <img src={CompanyIcon} alt="company" className="company" />

        {/* Toggle Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Links */}
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
          <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
          <li>
            <button className="login-button" onClick={() => setMenuOpen(false)}>
              <Link to="/Login">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
