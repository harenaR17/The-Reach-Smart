"use client";
import React from "react";

export default function ProblemSection({ activeCopy, addToRefs }) {
  return (
    <section id="problem" className="section-padding bg-subtle">
      <div className="container">
        <div className="prose-max">
          <div className="reveal" ref={addToRefs}>
            <span className="eyebrow">{activeCopy.problem.eyebrow}</span>
            <h2 className="section-h2">{activeCopy.problem.headline}</h2>
          </div>
          <div className="prose-stack reveal rd1" ref={addToRefs}>
            {activeCopy.problem.body1 && <p className="body-lg">{activeCopy.problem.body1}</p>}
            {activeCopy.problem.body2 && <p className="body">{activeCopy.problem.body2}</p>}
            {activeCopy.problem.body3 && <p className="body">{activeCopy.problem.body3}</p>}
          </div>
          <div className="punchline-card reveal rd2" ref={addToRefs}>
            <p className="punchline-text">{activeCopy.problem.punchline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
