import React from "react";
import "./Menu.css";
import burger from "../assets/Burgar.png";

export default function Menu() {
  const menuItems = [
    { id: 1, name: "Cheese Burger", price: 199, image: burger },
    { id: 2, name: "Veg Burger", price: 149, image: burger },
    { id: 3, name: "Chicken Burger", price: 249, image: burger },
    { id: 4, name: "Double Patty", price: 299, image: burger },
  ];

  return (
    <section className="menu">
      <h1 className="menu-title">Our Popular Dishes</h1>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-content">
              <h3>{item.name}</h3>
              <p className="price">₹ {item.price}</p>

              <div className="menu-footer">
                <span>⭐ 4.5</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}