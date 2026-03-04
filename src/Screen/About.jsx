import React from "react";
import "./About.css";
import burger from "../assets/Burgar.png";

export default function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">
          <img src={burger} alt="About Food" />
        </div>

        <div className="about-right">
          <h1>About <span>Foodie</span></h1>

          <p>
            Welcome to Foodie! We are passionate about delivering fresh,
            delicious, and high-quality meals straight to your doorstep.
            Our chefs use premium ingredients to create unforgettable flavors.
          </p>

          <p>
            Whether you're craving burgers, pizza, or pasta, we promise
            fast delivery and amazing taste every time.
          </p>

          <button>Explore Menu</button>
        </div>

      </div>

    </section>
  );
}