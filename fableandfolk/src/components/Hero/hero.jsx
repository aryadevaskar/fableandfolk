"use client";
import { useState } from "react";
import "./hero.css";
import Menu from "../Menu/menu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero">
      <div className="hero-content">
      <button className="hero-menuButton" onClick={toggleMenu}>
      Menu
          </button>
        <h1 className="hero-title">
          <span className="dark">Fable</span>
          <span className="dark">&</span>
          <span className="highlight">folk</span>
        </h1>
        <div className="hero-tagline">
          <div className="hero-1">
            <p>Clarity in Craft. Character in Code.</p>
          </div>
          <div className="hero-button">
            <button>View Work</button>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </section>
  );
}
