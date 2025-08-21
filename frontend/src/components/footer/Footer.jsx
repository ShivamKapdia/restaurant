import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-wrapper">
          <div className="footer-logo">logo</div>
          <p className="footer-description">
            At Hummazing, we’ve turned a simple Middle Eastern classic into a
            global food experience. Born from a love of bold flavors and Tasty
            Meals.
          </p>
        </div>

        <div className="footer-nav">
          {/* <NavLink className="text-decoration-none" to="/">
            Home
          </NavLink> */}
          <NavLink className="text-decoration-none" to="/about">
            About Us
          </NavLink>

          <NavLink className="text-decoration-none" to="/menu">
            Menu
          </NavLink>
          <NavLink className="text-decoration-none" to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2025 Hummazing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
