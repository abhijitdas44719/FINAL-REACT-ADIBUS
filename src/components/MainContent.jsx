// src/components/MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to ADIBUS</h1>
      <p>Your smart solution for booking buses with ease.</p>

      <div className="search-form">
        <div>
          <label htmlFor="from">From</label>
          <br />
          <input type="text" id="from" placeholder="Enter Boarding Point" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <br />
          <input type="text" id="to" placeholder="Enter Dropping Point" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <br />
          <input type="date" id="date" placeholder="Enter Date" />
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <button className="btn">Search Buses</button>
        </div>
      </div>

      <div className="info-container">
        <div className="info-box">
          <h3>Wide Range of Buses</h3>
          <p>
            We provide over 15+ buslines including sleeper, seater and premium
            classes
          </p>
        </div>
        <div className="info-box">
          <h3>Customer Satisfaction</h3>
          <p>
            We care about our customers so they can enjoy their lovely trips
          </p>
        </div>
        <div className="info-box">
          <h3>Suitable Prices</h3>
          <p>
            Our Bus Service provides suitable prices for buses at no extra costs
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
