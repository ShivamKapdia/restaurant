import React, { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar.jsx";
import FAQ from "../faq/FAQ.jsx";
import Footer from "../footer/Footer.jsx";
import img from "../../assets/bg-image2.png";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import fastDelivery from "../../assets/fast-delivery.png";
import freshIngredients from "../../assets/fresh-incredients.png";
import hygienicKitchens from "../../assets/hygienic-kitchens.png";
import "./Home.css";

const Home = () => {
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Hero text animation
    const element = textRef.current;
    if (element) {
      element.classList.add("hidden-text");
      setTimeout(() => {
        element.classList.add("show-text");
      }, 100);
    }

    // Scroll animations
    const handleScroll = () => {
      const about = aboutRef.current;
      const features = featuresRef.current;
      const faq = faqRef.current;
      const testimonials = testimonialsRef.current;

      if (about) {
        const rect = about.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          about.classList.add("show-about");
        }
      }

      if (features) {
        const rect = features.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          features.classList.add("show-features");
        }
      }

      if (faq) {
        const rect = faq.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          faq.classList.add("show-faq");
        }
      }

      if (testimonials) {
        const rect = testimonials.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          testimonials.classList.add("show-testimonials");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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

      {/* About Section */}
      <section ref={aboutRef} className="about-section hidden-about">
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

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="testimonials-section hidden-testimonials"
      >
        <div className="testimonial-header text-center">
          <div className="tagline">WHAT OUR GUESTS SAY</div>
          <h2 className="title">Testimonials</h2>
          <p className="description">
            Hear from our happy customers who’ve discovered the bold flavors and
            wholesome experience of Hummazing’s signature hummus creations.
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card rotate-left">
            <p className="quote">
              “Hummazing isn’t just about hummus—it’s a whole experience! The
              Mediterranean Bowl was packed with flavor and so fresh. Finally,
              healthy food that excites my taste buds!”
            </p>
            <div className="author">
              <img src="https://i.imgur.com/tVZcqfV.png" alt="Priya Deshmukh" />
              <div>
                <strong>Priya Deshmukh</strong>
                <p>Mumbai Customer</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card rotate-right">
            <p className="quote">
              “I never knew hummus could be this versatile. From dips to hearty
              bowls, everything tastes gourmet. Hummazing has made tasty eating
              so much easier and fun for my family!”
            </p>
            <div className="author">
              <img src="https://i.imgur.com/CrcuBMv.png" alt="Anjali Nair" />
              <div>
                <strong>Anjali Nair</strong>
                <p>Bengaluru Customer</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card rotate-left">
            <p className="quote">
              “Tried Hummazing wraps on a friend’s recommendation and now I’m
              hooked! Great taste, super quick delivery, and guilt-free
              indulgence.”
            </p>
            <div className="author">
              <img src="https://i.imgur.com/OeT3qIn.png" alt="Rohan Mehta" />
              <div>
                <strong>Rohan Mehta</strong>
                <p>Pune Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features-section hidden-features">
        <div className="feature-item">
          <img
            src={fastDelivery}
            alt="Fast Delivery"
            className="feature-image"
          />
          <h3>Fast Delivery</h3>
        </div>
        <div className="feature-item">
          <img
            src={freshIngredients}
            alt="Fresh Ingredients"
            className="feature-image"
          />
          <h3>Fresh Ingredients</h3>
        </div>
        <div className="feature-item">
          <img
            src={hygienicKitchens}
            alt="Hygienic Kitchens"
            className="feature-image"
          />
          <h3>Hygienic Kitchens</h3>
        </div>
      </section>

      <FAQ ref={faqRef} />
    </>
  );
};

export default Home;
