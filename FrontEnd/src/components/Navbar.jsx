import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/navbar.css";

// IMAGES & ICONS
import logo from "../assets/images/logo-1x.png";
import menu from "../assets/images/menu.png";
import cross from "../assets/images/icons/cancel.png";

const Navbar = ({
  bgdColor = "#000",
  height = "16vh",
  paddingTop = "2.5rem",
}) => {
  // HANDLERS
  const menuToggle = () => {
    let nav = document.getElementById("menu-overlay");
    nav.classList.toggle("active");
  };

  const closeMenu = () => {
    let nav = document.getElementById("menu-overlay");
    nav.classList.remove("active");
  };

  return (
    <nav
      className="nav-flex"
      style={{
        backgroundColor: bgdColor,
        height: height,
        paddingTop: paddingTop,
      }}
    >
      <div className="menu-btn" onClick={() => menuToggle()}>
        <img className="menu-btn-img" src={menu} alt="Navbar Menu" />
      </div>

      {/* MENU OVERLAY - START */}
      <div id="menu-overlay">
        <span className="close-overlay" onClick={() => closeMenu()}>
          <img src={cross} alt="cancel-icon" className="cancel-icon" />
        </span>
        <ul>
          <Link to="/search">
            <li>PROPERTIES</li>
          </Link>
          <Link to="/agents">
            <li>AGENTS</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
      {/* MENU OVERLAY - END */}

      <Link to="/" className="logo">
        <img src={logo} alt="Wolfram Realty Logo" />
      </Link>

      <ul className="nav-flex-list">
        <Link to="/search">
          <li>PROPERTIES</li>
        </Link>
        <Link to="/agents">
          <li>AGENTS</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
