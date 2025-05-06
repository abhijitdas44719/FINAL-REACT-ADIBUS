// src/components/Header.js
import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="ADIBUS.png" alt="ADIBUS Logo" />
      </div>
      <nav>
        <ul>
          <li className="dropdown">
            <a href="#" style={{ color: "black" }}>
              Bus Tickets
            </a>
            <ul className="dropdown-menu">
              <li>
                 <a href="/cancellation" style={{ color: "black" }}>
                  Cancellation
                </Link>
              </li>
              <li>
                <a href="/change-travel-date" style={{ color: "black" }}>
                  Change Travel Date
                </a>
              </li>
              <li>
                <a href="/show-my-ticket" style={{ color: "black" }}>
                  Show My Ticket
                </a>
              </li>
              <li>
                <a href="/email" style={{ color: "black" }}>
                  Email
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" style={{ color: "black" }}>
              Hotels
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "black" }}>
              Offers
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "black" }}>
              Help
            </a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
