import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>
            Sourdough bread <br /> made with love
          </h1>
          <div className="hero-link">
            <a href="/types" className="explore">
              Choose
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
