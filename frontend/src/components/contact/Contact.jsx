import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzI8-10UiFnQvUWqR1mWEg4M5YkAVV8XdbQztdUTq5fE2r0jwnbeKGf44-Zl0dnE72M/exec";

    const formBody = new URLSearchParams(formData);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const text = await response.text();
      if (response.ok && text.includes("Success")) {
        alert("Form submitted successfully!");
        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
      } else {
        alert("Submission failed: " + text);
      }
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <hr
          className="mx-auto"
          style={{ width: "100px", borderTop: "2px solid #007BFF" }}
        />
      </div>

      <div className="row g-4">
        {/* Location Card */}
        <div className="col-lg-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="card-title mb-3">Restaurant</h3>
              <p className="card-text text-muted">
                202G+46J, Tilak Wadi, Jeturkar Wadi, Sharanpur, Nashik,
                Maharashtra 422002
              </p>
              <div className="d-flex align-items-center mb-3">
                <span className="me-2">4.1</span>
                <div className="stars text-warning">★★★★☆</div>
                <span className="ms-2 text-muted">150 reviews</span>
              </div>
              <a
                href="https://www.google.com/maps?q=Rajiv+Gandhi+Bhavan+Nashik"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                View Larger Map
              </a>
            </div>
            <div className="map-iframe mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1711836762456!2d73.78140491491154!3d20.00273798656192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0fbe5bcc3%3A0xc0f5a2f5a2c7d1a0!2sRajiv%20Gandhi%20Bhavan!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="col-lg-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <form className="needs-validation" onSubmit={handleSubmit}>
                {["fullname", "email", "mobile", "address"].map((field, i) => (
                  <div className="form-floating mb-3" key={i}>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "mobile"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      id={field}
                      className="form-control"
                      placeholder={`Enter ${field}`}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor={field}>
                      {field.charAt(0).toUpperCase() +
                        field.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                      *
                    </label>
                  </div>
                ))}

                <div className="form-floating mb-3">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Your Message"
                    style={{ height: "120px" }}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label htmlFor="message">Message *</label>
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-primary px-4">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
