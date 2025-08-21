import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg formal-navbar"
      style={{ backgroundColor: "#FEFEFE", borderBottom: "2px solid #E8E8E8" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand formal-brand" href="#">
          <span className="brand-text">LOGO</span>
        </a>
        <button
          className="navbar-toggler formal-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <button
            className="close-sidebar d-lg-none formal-close"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Close sidebar"
          >
            ✕
          </button>
          <ul className="navbar-nav formal-nav">
            <li className="nav-item">
              <a className="nav-link formal-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link formal-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link formal-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link formal-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link formal-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-box formal-contact d-none d-lg-block">
          <span className="contact-text">📞 +91 98765 43210</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
