import React, { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar.jsx";
import img from "../../assets/bg-image2.png";
import food1 from "../../assets/food1.png"; // Adjust the path as needed
import food2 from "../../assets/food2.png"; // Adjust the path as needed
import "./Home.css";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      element.classList.add("hidden-text");
      setTimeout(() => {
        element.classList.add("show-text");
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="image-wrapper">
        <img src={img} alt="Shivam restaurant" className="faded-image" />
        <div ref={textRef} className="text-overlay hidden-text">
          <div className="text-box mb-4">HANDCRAFTED TASTY HUMMUS</div>
          <h1>
            Fresh, Best <br /> Quality & Fast <br /> Delivery
          </h1>
          <p className="mt-4 mb-4">
            Enjoy delicious <strong>meals</strong> made with{" "}
            <strong>fresh, high-quality</strong> ingredients and{" "}
            <strong>delivered fast</strong> to your door. Perfect for a Daily
            lifestyle without compromising on taste or convenience.
          </p>
          <div className="button-group">
            <button className="btn">OUR SERVICES</button>
            <button className="btn">EXPLORE MENU</button>
          </div>
        </div>
      </div>
      {/* New section below the image */}
      <section className="about-section">
        <div className="image-gallery ms-5">
          <img src={food1} alt="Food 1" className="food-image food-image-1" />
          <img src={food2} alt="Food 2" className="food-image food-image-2" />
        </div>
        <div className="content-box">
          <span className="crafted-tag mb-5">— CRAFTED WITH PASSION</span>
          <h2 className="mb-5">
            Hummazing – More <br /> Than Hummus, It’s <br /> an Emotion
          </h2>
          <p>
            Hummazing was born in the warmth of a home kitchen in Nashik,
            Maharashtra, where our founder, Riya Rohra, turned her love for
            cooking into a mission for soulful, honest food. What started as a
            simple hummus recipe quickly became a flavorful movement. Friends
            and family said, "This isn’t just hummus... this is an emotion!"
          </p>
          <button className="about-btn mt-5">ABOUT US</button>
        </div>
      </section>
    </>
  );
};

export default Home;
