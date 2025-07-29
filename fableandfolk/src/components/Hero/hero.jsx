"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./hero.css";

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Animate the title words sliding up (no change here)
    tl.from(".title-span", {
      y: "110%",
      stagger: 0,
      duration: 1,
      ease: "power2.out",
    });

    // 2. Animate the tagline's border lines (no change here)
    tl.from(".hero-tagline", {
      scaleX: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    // 3. Animate the tagline text entering from the left
    tl.from(".hero-1 p", {
      opacity: 0,
      x: -50, // Start 50px to the left
      duration: 0.6,
      ease: "power2.out",
    });

    // 4. Animate the button entering from the right, at the same time
    tl.from(".hero-button", {
      opacity: 0,
      x: 50, // Start 50px to the right
      duration: 0.6,
      ease: "power2.out",
    }, "<"); // The "<" position parameter makes it start with the previous animation

  }, { scope: container });

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