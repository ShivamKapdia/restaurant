import React from "react";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import "./About.css";

const About = () => {
  return (
    <section className="aboutpage-section">
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
          through cloud kitchens, kiosks, and dine-ins—quick to launch, easy to
          scale, and loved by all.
        </p>
        <button className="aboutpage-btn mt-5">EXPLORE MENU</button>
      </div>
    </section>
  );
};

export default About;
