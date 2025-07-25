"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./hero.css";

export default function HeroSection() {
  const container = useRef(null);

  // useGSAP hook for animations
  useGSAP(() => {
    // Create a GSAP timeline for a sequenced animation
    const tl = gsap.timeline();

    // Animate the title words sliding up
    tl.from(".title-span", {
      y: "110%",      // Start 110% down (completely hidden)
      stagger: 0.1,   // Stagger the animation for each word
      duration: 1,
      ease: "power2.out",
    });

    // Animate the tagline container (border lines) scaling out from the center
    tl.from(".hero-tagline", {
      scaleX: 0,      // Start with 0 width
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3"); // Overlap with the previous animation slightly

    // Animate the tagline text and button fading/sliding in
    tl.from([".hero-1 p", ".hero-button"], {
      opacity: 0,
      y: 20,          // Start 20px down
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

  }, { scope: container }); // Scope the animations to the container element

  return (
    <>
      <section className="hero" ref={container}>
        <div className="hero-content">
          <h1 className="hero-title">
            <div className="title-mask">
              <span className="title-span dark">Fable</span>
            </div>
            <div className="title-mask">
              <span className="title-span dark">&</span>
            </div>
            <div className="title-mask">
              <span className="title-span highlight">folk</span>
            </div>
          </h1>
          <div className="hero-tagline">
            <div className="hero-1">
              <p>Clarity in Craft. Character in Code.</p>
            </div>
            <div className="hero-button">
              <a href="#ourworks">
                <button>View Work</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}