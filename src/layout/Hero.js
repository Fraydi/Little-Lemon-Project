import React from "react";
import Button from "../components/Button";
import heroImage from "../assets/restauranfood.jpg";
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section-background">
      <div className="hero-section">
        <header className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button title="Reserve a Table" navigateTo="/reservations" />
        </header>
        <img src={heroImage} alt="restaurant food" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
