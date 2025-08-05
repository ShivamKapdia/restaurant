import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
const App = () => {
  return (
    <>
      <ToastContainer toastClassName="toast-homepage" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
