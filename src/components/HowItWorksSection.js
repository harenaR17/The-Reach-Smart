"use client";
import React, { useEffect, useRef, useState } from "react";

function TimelineStep({ step, index, isLast }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lineActive, setLineActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Staggered line activation
          setTimeout(() => setLineActive(true), 400);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-step ${visible ? "timeline-step--visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left: Number node + connecting line */}
      <div className="timeline-left">
        <div className={`timeline-node ${visible ? "timeline-node--active" : ""}`}>
          <span className="timeline-node-num">{step.num}</span>
          <div className="timeline-node-ring" />
        </div>
        {!isLast && (
          <div className={`timeline-line ${lineActive ? "timeline-line--active" : ""}`} />
        )}
      </div>

      {/* Right: Content card */}
      <div className="timeline-content">
        <div className="timeline-card">
          <h3 className="timeline-step-title">{step.title}</h3>
          <p className="timeline-step-desc">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection({ activeCopy }) {
  const steps = activeCopy.howItWorks.steps;

  return (
    <section id="process" className="section-padding">
      <div className="container">
        {/* Section header */}
        <div className="section-header" style={{ marginBottom: "4rem" }}>
          <span className="eyebrow">{activeCopy.howItWorks.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.howItWorks.headline}</h2>
        </div>

        {/* Timeline */}
        <div className="timeline-track">
          {steps.map((step, i) => (
            <TimelineStep
              key={i}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
