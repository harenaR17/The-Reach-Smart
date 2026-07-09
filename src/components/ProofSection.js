"use client";
import React from "react";
import { CheckIcon } from "@/app/icons";

export default function ProofSection({ activeCopy, addToRefs, lang }) {
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

        {/* Featured Case Study 7: Our Own System */}
        {activeCopy.proof.featuredCase && (
          <div className="card-raised featured-case-card reveal" ref={addToRefs} style={{ marginBottom: "4rem" }}>
            <div className="featured-case-grid">
              <div className="featured-case-info">
                <span className="eyebrow" style={{ display: "inline-block", textAlign: "left", margin: "0 0 0.75rem 0" }}>
                  {lang === "bg" ? "Ядем собствената си храна" : "Eating Our Own Cooking"}
                </span>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", fontFamily: "var(--font-space-grotesk)", lineHeight: "1.25", color: "var(--text-primary)" }}>
                  {activeCopy.proof.featuredCase.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginTop: "1.25rem", textAlign: "left" }}>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{lang === "bg" ? "Профил: " : "Profile: "}</strong>
                    {activeCopy.proof.featuredCase.client}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{lang === "bg" ? "Предизвикателството: " : "Challenge: "}</strong>
                    {activeCopy.proof.featuredCase.problem}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{lang === "bg" ? "Решението: " : "Solution: "}</strong>
                    {activeCopy.proof.featuredCase.solution}
                  </p>
                </div>
              </div>
              <div className="featured-case-results" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-primary)", marginBottom: "0.875rem" }}>
                    {lang === "bg" ? "Резултати" : "Outcomes"}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {activeCopy.proof.featuredCase.results.map((res, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: "1.4" }}>
                        <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                          <CheckIcon style={{ width: "10px", height: "10px", color: "var(--accent-green)" }} />
                        </span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "1.5rem", fontStyle: "italic", borderTop: "1px solid var(--border-default)", paddingTop: "1rem" }}>
                  {activeCopy.proof.featuredCase.whyShow}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
