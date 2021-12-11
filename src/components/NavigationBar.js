import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <ul id="nav-list">
        <li className="nav-item">Why GitHub?</li>
        <li className="nav-item">Enterprise</li>
        <li className="nav-item">Explore</li>
        <li className="nav-item">Marketplace</li>
        <li className="nav-item">Pricing</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
