import React from "react";
import "./Home.css";
import burger from "../assets/Burgar.png"; 

export default function Home() {
  return (
    <section className="home">
      
      <div className="home-left">
        <h1>
          Order Your <br />
          <span>Favourite Food</span>
        </h1>

        <p>
          Experience the best dining with us. We offer a variety of delicious
          dishes to satisfy your cravings. Fast delivery and premium taste.
        </p>

        <div className="home-buttons">
          <button className="primary-btn">Order Now</button>
          <button className="secondary-btn">View Menu</button>
        </div>
      </div>

      <div className="home-right">
        <img src={burger} alt="Burger" />
      </div>

    </section>
  );
}