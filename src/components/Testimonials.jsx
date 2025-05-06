// src/components/Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <div className="heading1">
      <h1 align="left">
        <strong>Testimonials</strong>
      </h1>
      <p align="left">Hear from our own customers</p>
      <div className="container">
        <div className="box1">
          <p>Incredible Journey! Giving 5 stars</p>
          <b>
            <p>Sayan Das</p>
          </b>
        </div>
        <div className="box2">
          <p>Enjoyed my trip very much! Was very comfortable</p>
          <b>
            <p>Rishikesh Jana</p>
          </b>
        </div>
        <div className="box3">
          <p>Very Good atmosphere, Recommended for everyone</p>
          <b>
            <p>Sanchita Choudhary</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
