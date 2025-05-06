// src/components/BookingInfo.js
import React from "react";

const BookingInfo = () => {
  return (
    <div>
      <h1 className="heading" style={{ color: "red" }}>
        <strong>
          <u>BOOK BUS TICKETS ONLINE</u>
        </strong>
      </h1>
      <br />
      <p
        className="p1"
        style={{
          color: "red",
          fontFamily: "Arial, sans-serif",
          fontStyle: "italic",
        }}
      >
        Book your journey with ease and convenience through our hassle-free
        online bus booking platform. Whether you're planning a quick weekend
        getaway or a long-distance trip, we offer a wide range of buses to suit
        your comfort and budget. Compare prices, check seat availability, and
        choose your preferred operator—all in just a few clicks. With secure
        payments and instant booking confirmation, your next travel adventure
        starts right here.
      </p>
    </div>
  );
};

export default BookingInfo;
