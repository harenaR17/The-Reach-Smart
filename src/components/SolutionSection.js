"use client";
import React from "react";

export default function SolutionSection({ activeCopy, addToRefs }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="prose-max centered reveal" ref={addToRefs}>
          <span className="eyebrow">{activeCopy.solution.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.solution.headline}</h2>
          <div className="prose-stack" style={{ marginTop: "1.5rem" }}>
            {activeCopy.solution.body1 && <p className="body-lg">{activeCopy.solution.body1}</p>}
            {activeCopy.solution.body2 && <p className="body" style={{ marginTop: "0.5rem" }}>{activeCopy.solution.body2}</p>}
          </div>
          <div className="divider-line" />
        </div>
      </div>
    </section>
  );
}
