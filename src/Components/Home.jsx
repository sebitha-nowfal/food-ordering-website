import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🍽 Welcome to <span>Foodie's Paradise</span></h1>
        <p>Order your favorite meals online and get them delivered <strong>fast & fresh</strong>!</p>
        <button className="order-btn">Order Now</button>
      </div>
      <div className="home-image-container">
        <img src="/food.jpg" alt="Delicious food" className="home-image" />
      </div>
    </div>
  );
}
