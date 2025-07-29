"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import "./Client.css";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ClientSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Target the new title and paragraph elements using their classes
    const clientTitle = new SplitType('.client-title h1', { types: 'lines' });
    const clientContent = new SplitType('.client-content p', { types: 'lines' });

    // Create the animation timeline controlled by ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      }
    });

    // 1. Animate the title lines ("So, What's Your Story?")
    tl.from(clientTitle.lines, {
      y: "100%",
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
    });

    // 2. Animate the paragraph lines
    tl.from(clientContent.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3"); // Overlap for a smooth transition

  }, { scope: container });

  return (
    // Add the ref to the main section for ScrollTrigger to watch
    <section className="Client-story" ref={container}>
      <div className="about-client">
        <div className="client-title">
          <h1>
            So, What's
            <br />
            Your <span className="span-2">Story</span>?
          </h1>
        </div>

        <div className="client-content">
          <p>
            Every great business has one. It’s in the late nights you’ve worked,
            the passion behind your craft, and the reason you started in the first
            place. But telling that story online can be hard. You deserve a
            website that does more than just list your services—it should capture
            the unique character of your brand and connect with the people who
            need you most.
          </p>
        </div>
      </div>
    </section>
  );
}