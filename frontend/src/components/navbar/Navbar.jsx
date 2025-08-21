import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleClose = () => {
      if (navRef.current) {
        navRef.current.classList.remove("show"); // ✅ manually close sidebar
      }
    };

    const closeButton = document.querySelector(".close-sidebar");
    if (closeButton) {
      closeButton.addEventListener("click", handleClose);
    }

    // Cleanup
    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", handleClose);
      }
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#F5F5E0", borderBottom: "3px solid #5C4033" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => navRef.current.classList.add("show")} // ✅ open manually
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          ref={navRef}
        >
          <button className="close-sidebar" aria-label="Close sidebar">
            ✕
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-box d-none d-lg-block">
          <span>📞 +91 98765 43210</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
