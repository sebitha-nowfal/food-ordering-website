import React from "react";
import "./Menu.css"; 

export default function Menu({ addToCart }) {
  const foodItems = [
    { name: "Pizza", price: "₹250", image: "/pizza.jpg" },
    { name: "Burger", price: "₹120", image: "/burger.jpg" },
    { name: "Pasta", price: "₹200", image: "/pasta.jpg" },
    { name: "Sandwich", price: "₹100", image: "/sandwich.jpg" },
    { name: "Fries", price: "₹80", image: "/fries.jpg" },
    { name: "Ice Cream", price: "₹90", image: "/icecream.jpg" }
  ];

  return (
    <div className="container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {foodItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
