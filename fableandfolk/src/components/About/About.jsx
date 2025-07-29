"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import './About.css';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Target the title and paragraph elements
    const ourTitle = new SplitType('.about-title h1', { types: 'lines' });
    const ourContent = new SplitType('.about-content p', { types: 'lines' });

    // Create a timeline that will be controlled by ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // The element that triggers the animation
        start: "top 75%",           // Start animation when top of the trigger hits 75% of the viewport height
        end: "bottom 50%",          // End position
        toggleActions: "play none none none", // Play animation on enter, do nothing on leave
        once: true,                 // Ensure the animation only runs once
      }
    });

    // 1. Animate the title lines
    tl.from(ourTitle.lines, {
      y: "100%",      // Start 100% down
      opacity: 0,
      stagger: 0.1,   // Stagger the animation for each line
      duration: 0.7,
      ease: "power2.out",
    });

    // 2. Animate the paragraph lines, starting slightly after the title
    tl.from(ourContent.lines, {
      y: 50,         // Start 50px down
      opacity: 0,
      stagger: 0.04, // A faster stagger for a smooth, flowing effect
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3"); // Overlap with the end of the title animation for a seamless transition

  }, { scope: container });

  return (
    // Add the ref to the main section so ScrollTrigger can track it
    <section className="Our-story" ref={container}>
      <div className="about-us">
        <div className="about-title">
          <h1>The Way <br/>We <span className='span'>Weave</span></h1>
        </div>

        <div className="about-content">
          <p>
            At Fable & Folk, we believe character is the difference between a
            website and a brand. That’s why our process is personal. As your
            dedicated two-person team, we dive deep into your story to
            understand what makes your business unique. We then translate that
            character into a thoughtfully crafted website or Shopify store—a
            digital presence that feels authentically you and is built to
            deliver tangible results.
          </p>
        </div>
      </div>
    </section>
  );
}