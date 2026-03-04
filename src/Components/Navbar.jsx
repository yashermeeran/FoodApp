import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">Safa Foods</div>

      <ul className="nav-links">
        <li><a href="Home">Home</a></li>
        <li><a href="Menu">Menu</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <button className="order-btn">Order Now</button>

        
      </div>
    </nav>
  );
}