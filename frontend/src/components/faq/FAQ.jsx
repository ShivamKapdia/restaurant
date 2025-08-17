import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./FAQ.css";

const FAQ = forwardRef(({ ...props }, ref) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [answerHeights, setAnswerHeights] = useState({});
  const answerRefs = useRef([]);

  const faqs = [
    {
      question:
        "Does your franchise offer both vegetarian and non-vegetarian options?",
      answer:
        "Our Franchise includes both vegetarian and non-vegetarian options, with Multiple choices clearly marked. We focus on clean, high-quality ingredients and bold flavors—ensuring there’s something delicious for everyone, no matter their preference.",
    },
    {
      question: "Where do you deliver?",
      answer:
        "You can order directly via food delivery platforms like Swiggy and Zomato in select cities, with more locations coming soon!",
    },
    {
      question: "Are your meals made fresh?",
      answer:
        "Absolutely. Every Hummazing meal is freshly prepared with hand-picked ingredients to ensure quality, flavor, and nutrition in every bite.",
    },
    {
      question: "How can I get in touch for business or feedback?",
      answer:
        "We’d love to hear from you! For business inquiries or feedback, please visit our Contact Us page or email us at example@gmail.com",
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
    <div ref={ref} className="faq-container hidden-faq">
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
});

export default FAQ;
