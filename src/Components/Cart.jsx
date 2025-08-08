import React from "react";

export default function Cart({ cart }) {
  console.log("Cart items:", cart);
  cart.forEach(item => console.log("Price:", item.price, typeof item.price));

  const totalPrice = cart.reduce((sum, item) => {
    // Convert price to number safely
    const price = parseFloat(item.price.toString().replace(/[^0-9.-]+/g,""));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="60" />
              <h3>{item.name}</h3>
              <p>${parseFloat(item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}
