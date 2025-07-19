"use client";
import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
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
    </section>
  );
}
