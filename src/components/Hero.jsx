import React from "react";
import "../css/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>
            Sourdough bread <br /> made with love
          </h1>
          <div className="hero-link">
            <Link to="/types" className="explore">
              Choose
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
