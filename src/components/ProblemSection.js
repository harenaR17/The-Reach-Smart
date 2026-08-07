"use client";
import React from "react";

export default function ProblemSection({ activeCopy, addToRefs }) {
  const p = activeCopy.problem;

  return (
    <section id="problem" className="section-padding bg-subtle">
      <div className="container">
        <div className="prose-max">
          <div className="reveal" ref={addToRefs}>
            <span className="eyebrow">{p.eyebrow}</span>
            <h2 className="section-h2">{p.headline}</h2>
            {p.intro && (
              <p className="body-lg" style={{ marginTop: "1rem", color: "var(--text-primary)", fontWeight: "500" }}>
                {p.intro}
              </p>
            )}
          </div>

          {/* Legacy body support fallback */}
          {p.body1 && (
            <div className="prose-stack reveal rd1" ref={addToRefs}>
              <p className="body-lg">{p.body1}</p>
              {p.body2 && <p className="body">{p.body2}</p>}
              {p.body3 && <p className="body">{p.body3}</p>}
            </div>
          )}

          {/* New copy structured bullets */}
          {p.bullets && p.bullets.length > 0 && (
            <ul
              className="reveal rd1"
              ref={addToRefs}
              style={{
                listStyle: "none",
                padding: 0,
                margin: "1.5rem 0",
                display: "grid",
                gap: "0.75rem",
              }}
            >
              {p.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    background: "rgba(255, 255, 255, 0.02)",
                    borderLeft: "3px solid var(--accent-red, #EF4444)",
                    borderRadius: "0 8px 8px 0",
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ color: "var(--accent-red, #EF4444)", fontWeight: "bold" }}>•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {p.summary && (
            <p className="body reveal rd2" ref={addToRefs} style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--text-secondary)" }}>
              {p.summary}
            </p>
          )}

          {(p.option1 || p.option2) && (
            <div
              className="reveal rd2"
              ref={addToRefs}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
                margin: "1.5rem 0",
              }}
            >
              {p.option1 && (
                <div style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.02)", borderRadius: "8px", border: "1px solid var(--border-default)" }}>
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-tertiary)", letterSpacing: "0.05em" }}>Option A</span>
                  <p style={{ marginTop: "0.4rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{p.option1}</p>
                </div>
              )}
              {p.option2 && (
                <div style={{ padding: "1rem", background: "rgba(110, 58, 255, 0.08)", borderRadius: "8px", border: "1px solid var(--brand-primary)" }}>
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--brand-primary)", fontWeight: "600", letterSpacing: "0.05em" }}>Option B (Smart Way)</span>
                  <p style={{ marginTop: "0.4rem", fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "500" }}>{p.option2}</p>
                </div>
              )}
            </div>
          )}

          <div className="punchline-card reveal rd3" ref={addToRefs}>
            <p className="punchline-text">{p.punchline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
