"use client";
import React from "react";

export default function ProofSection({ activeCopy, addToRefs }) {
  return (
    <section id="results" className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header reveal" ref={addToRefs}>
          <span className="eyebrow">{activeCopy.proof.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.proof.headline}</h2>
        </div>

        <div className="stats-grid">
          {activeCopy.proof.stats.map((stat, i) => (
            <div key={i} className={`card-raised stat-card reveal rd${i + 1}`} ref={addToRefs}>
              <div className="stat-value gradient-text">{stat.val}</div>
              <div className="stat-label-bold">{stat.desc}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-card reveal" ref={addToRefs}>
          <p className="testimonial-text">{activeCopy.proof.quote}</p>
          <div className="testimonial-line" />
        </div>
      </div>
    </section>
  );
}
