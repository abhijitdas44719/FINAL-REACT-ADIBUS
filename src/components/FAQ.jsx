// src/components/FAQ.js
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Why should I buy ticket from ADIBUS?",
      answer:
        "Our website shows customers the best bus operators and gives the best-in-class services. Bus Booking has became easy with our website, Numerous number of buses is there for you at just one click",
    },
    {
      question: "Does online bus booking costs more?",
      answer:
        "Booking buses online costs same as nearby bus operators, we also give many offers to our customers so the prices can be affordable",
    },
    {
      question: "Why should I trust ADIBUS?",
      answer:
        "Our Website gives good environment for online payments, there is no third-party between the customer and ADIBUS, so there is no need to worry.",
    },
  ];

  return (
    <div className="faq-section">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
