"use client";
import React from "react";

export default function SolutionSection({ activeCopy, addToRefs }) {
  const s = activeCopy.solution;

  return (
    <section id="solution" className="section-padding" style={{ background: "rgba(110, 58, 255, 0.02)", borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)" }}>
      <div className="container">
        <div className="prose-max centered reveal" ref={addToRefs}>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="section-h2">{s.headline}</h2>
          {s.subheadline && (
            <p className="body-lg" style={{ marginTop: "0.75rem", color: "var(--brand-primary)", fontWeight: "600" }}>
              {s.subheadline}
            </p>
          )}

          {/* Legacy fallback */}
          {s.body1 && <p className="body-lg" style={{ marginTop: "1rem" }}>{s.body1}</p>}
          {s.body2 && <p className="body" style={{ marginTop: "0.5rem" }}>{s.body2}</p>}

          {/* New copy diagnostic questions */}
          {s.notQuestion && (
            <div style={{ marginTop: "2rem", textAlign: "left", padding: "1.5rem", background: "var(--bg-card, rgba(255, 255, 255, 0.02))", borderRadius: "12px", border: "1px solid var(--border-default)" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--text-tertiary)", textDecoration: "line-through" }}>{s.notQuestion}</p>
              <p style={{ marginTop: "0.75rem", fontSize: "1.05rem", fontWeight: "600", color: "var(--text-primary)" }}>{s.startQuestion}</p>

              {s.questions && s.questions.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
                  {s.questions.map((q, i) => (
                    <div key={i} style={{ padding: "0.85rem", background: "rgba(110, 58, 255, 0.05)", borderRadius: "8px", border: "1px solid rgba(110, 58, 255, 0.15)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--brand-primary)", fontWeight: "bold", marginRight: "0.4rem" }}>?</span>
                      {q}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Transition & Result list */}
          {s.results && s.results.length > 0 && (
            <div style={{ marginTop: "2rem", textAlign: "left" }}>
              {s.transition && (
                <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                  {s.transition.split("\n\n").map((para, i) => (
                    <p key={i} style={{ marginBottom: "0.5rem" }}>{para}</p>
                  ))}
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
                {s.results.map((res, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "8px", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                    <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
