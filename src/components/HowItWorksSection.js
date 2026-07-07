"use client";
import React from "react";

export default function HowItWorksSection({ activeCopy, addToRefs }) {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <div className="section-header reveal" ref={addToRefs}>
          <span className="eyebrow">{activeCopy.howItWorks.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.howItWorks.headline}</h2>
        </div>

        <div className="steps-grid">
          {activeCopy.howItWorks.steps.map((step, i) => (
            <div key={i} className={`step-card reveal rd${i + 1}`} ref={addToRefs}>
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
