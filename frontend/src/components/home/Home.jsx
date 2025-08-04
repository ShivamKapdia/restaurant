import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import img from "../../assets/bg-image2.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: 0, padding: 0 }}>
        <img
          src={img}
          alt="Shivam restaurant"
          style={{
            margin: 0,
            padding: 0,
            display: "block",
            width: "100%",
            maxWidth: "100vw",
          }}
        />
      </div>
    </>
  );
};

export default Home;
