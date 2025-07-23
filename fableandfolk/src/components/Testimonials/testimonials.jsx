"use client";
import { useState, useEffect } from "react";
import TestimonialsData from "../../Data/testimonialData";
import "./testimonials.css"; // if needed

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonialsCount = TestimonialsData.length;

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialsCount]);

  const current = TestimonialsData[index];

  return (
    <section className="testimonials">
      <h2>
        Hear it from the <span className="highlight">folk</span>
      </h2>
      <div className="testimonial-box">
        <div className="testimonial-logo">
          <img src={current.logo} alt={current.company} />
        </div>
        <div className="testimonial-text">
          <p>“ {current.feedback} ”</p>
          <p className="testimonial-author">
            — <em>{current.name}, {current.company}</em>
          </p>
        </div>
      </div>
      <div className="testimonial-dots">
        {TestimonialsData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
