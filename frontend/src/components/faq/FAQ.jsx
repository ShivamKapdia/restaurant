import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [answerHeights, setAnswerHeights] = useState({});
  const answerRefs = useRef([]);

  const faqs = [
    {
      question:
        "How does the Dhule Municipal Corporation ensure confidentiality in the hospital license registration system?",
      answer:
        "The Dhule Municipal Corporation maintains strict confidentiality for hospital license data. Only authorized personnel, such as clerks, Assistant Medical Officers, and Medical Officers, can access sensitive information. Data is stored in a secure, encrypted digital system, and physical records are kept in restricted areas. Hospitals can request confidentiality agreements by contacting the health department. Breaches are investigated under applicable laws, ensuring data protection throughout the licensing process.",
    },
    {
      question:
        "What are the steps to register a hospital license with the Dhule Municipal Corporation?",
      answer:
        "To register a hospital license, submit an application with hospital details (name, address, license type) and supporting documents via the Dhule Municipal Corporation’s online portal or at the health department office. Clerks verify initial data, followed by review from the Assistant Medical Officer and final approval by the Medical Officer. Check the status online using the application ID. Contact the helpline at 02562-XXX-XXXX for assistance or to resolve issues.",
    },
    {
      question:
        "Who is eligible to apply for a hospital license under the Dhule Municipal Corporation?",
      answer:
        "Eligible applicants include hospital owners or authorized representatives operating within Dhule Municipal Corporation’s jurisdiction. Applicants must provide valid identification, proof of hospital ownership or lease agreement, and compliance certificates. Non-residents managing Dhule-based hospitals need legal authorization (e.g., power of attorney). All documents are verified against municipal records to ensure eligibility before processing the license application.",
    },
    {
      question:
        "How can I provide feedback on the Dhule Municipal Corporation’s hospital license system?",
      answer:
        "Feedback can be submitted through the Dhule Municipal Corporation’s website under the health services section or in writing at the health department office. Include specific suggestions, such as improving online tracking or adding multilingual support, along with your contact details. The department reviews feedback during monthly meetings, and shortlisted ideas may lead to follow-up discussions. Updates on implemented suggestions are posted quarterly on the municipal portal.",
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      // Closing the dropdown
      setAnswerHeights((prev) => ({ ...prev, [index]: 0 }));
      setTimeout(() => {
        setActiveIndex(null);
      }, 510); // Slight buffer over 0.5s to ensure animation completes
    } else {
      // Opening the dropdown
      const height = answerRefs.current[index]?.scrollHeight || 0;
      setAnswerHeights((prev) => ({ ...prev, [index]: height }));
      if (activeIndex !== null) {
        setAnswerHeights((prev) => ({ ...prev, [activeIndex]: 0 }));
        setTimeout(() => {
          setActiveIndex(index);
        }, 510); // Match the transition duration + buffer
      } else {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    faqs.forEach((_, index) => {
      if (activeIndex === index) {
        const height = answerRefs.current[index]?.scrollHeight || 0;
        setAnswerHeights((prev) => ({ ...prev, [index]: height }));
      } else if (activeIndex === null && answerHeights[index] > 0) {
        setAnswerHeights((prev) => ({ ...prev, [index]: 0 }));
      }
    });
  }, [activeIndex, faqs, answerHeights]);

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQS</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span className="faq-question-text">{faq.question}</span>
            <span className="faq-toggle">
              {activeIndex === index ? "▼" : "▶"}
            </span>
          </div>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            className="faq-answer"
            style={{ height: answerHeights[index] || 0 }}
          >
            <div className="faq-answer-content">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
