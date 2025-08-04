import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/home/Home";
const App = () => {
  return (
    <>
      <ToastContainer toastClassName="toast-homepage" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
