"use client";
import React from "react";

export default function SolutionSection({ activeCopy, addToRefs }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="prose-max centered reveal" ref={addToRefs}>
          <span className="eyebrow">{activeCopy.solution.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.solution.headline}</h2>
          <p className="body-lg">{activeCopy.solution.body}</p>
          <div className="divider-line" />
        </div>
      </div>
    </section>
  );
}
