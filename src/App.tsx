// src/App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Testimonials from "./components/Testimonials";
import BookingInfo from "./components/BookingInfo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Testimonials />
      <BookingInfo />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
