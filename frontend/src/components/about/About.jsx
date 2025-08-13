import React, { useEffect, useRef } from "react";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const aboutSecondaryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = aboutRef.current;
      const secondarySection = aboutSecondaryRef.current;

      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add("show-aboutpage");
        }
      }

      if (secondarySection) {
        const rect = secondarySection.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          secondarySection.classList.add("show-aboutpage-secondary");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once in case it's already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={aboutRef} className="aboutpage-section hidden-aboutpage">
        <div className="aboutpage-image-gallery ms-5">
          <img
            src={food1}
            alt="Food 1"
            className="aboutpage-food-image aboutpage-food-image-1"
          />
          <img
            src={food2}
            alt="Food 2"
            className="aboutpage-food-image aboutpage-food-image-2"
          />
        </div>
        <div className="aboutpage-content-box">
          <span className="aboutpage-crafted-tag mb-5">
            — CRAFTED WITH PASSION
          </span>
          <h2 className="mb-5">
            Tasty Handcrafted
            <br /> Hummus
          </h2>
          <p>
            Hummazing began in a cozy home kitchen in Nashik, where founder Riya
            Rohra turned her passion for cooking into a mission for soulful,
            honest food. What started as a simple hummus recipe quickly became a
            flavorful movement. Today, Hummazing offers globally inspired hummus
            through cloud kitchens, kiosks, and dine-ins—quick to launch, easy
            to scale, and loved by all.
          </p>
          <button className="aboutpage-btn mt-5">EXPLORE MENU</button>
        </div>
      </section>

      <section
        ref={aboutSecondaryRef}
        className="aboutpage-secondary-section hidden-aboutpage-secondary"
      >
        <div className="aboutpage-secondary-image-gallery ms-5">
          <img
            src={food1}
            alt="Food 1"
            className="aboutpage-secondary-food-image aboutpage-secondary-food-image-1"
          />
          <img
            src={food2}
            alt="Food 2"
            className="aboutpage-secondary-food-image aboutpage-secondary-food-image-2"
          />
        </div>
        <div className="aboutpage-secondary-content-box">
          <span className="aboutpage-secondary-crafted-tag mb-5">
            — CRAFTED WITH PASSION
          </span>
          <h2 className="mb-5">
            Why choose
            <br /> Hummazing
          </h2>
          <p>
            Hummus is a high-protein, gluten-free spread made from chickpeas,
            tahini, olive oil, and lemon juice. Rich in fiber and plant-based
            goodness, it’s a Mediterranean favorite gaining popularity worldwide
            as a healthy dip, spread, or bowl base.
          </p>
          <ul className="aboutpage-secondary-features">
            <li>We Use Fresh and High-Quality Ingredients</li>
            <li>We have Veg & Non-Veg Options</li>
            <li>Our Creative Globally Inspired Flavors</li>
            <li>We Provide Quick-Service & Fast Delivery</li>
            <li>We Offer Scalable Business Model</li>
            <li>We Help For Complete Franchisee Support</li>
          </ul>
          <button className="aboutpage-secondary-btn mt-5">ABOUT US</button>
        </div>
      </section>
    </>
  );
};

export default About;
