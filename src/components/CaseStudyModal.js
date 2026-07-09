"use client";
import React from "react";
import { CloseIcon, CheckIcon } from "@/app/icons";

export default function CaseStudyModal({ isOpen, onClose, caseStudy, lang }) {
  if (!caseStudy) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div className="modal-card case-study-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close focus-ring" onClick={onClose} aria-label="Close case study">
          <CloseIcon style={{ width: "24px", height: "24px" }} />
        </button>

        <span className="eyebrow" style={{ display: "inline-block", textAlign: "left", margin: "0 0 0.75rem 0" }}>
          {lang === "bg" ? "Индустриален бенчмарк" : "Industry Benchmark"}
        </span>
        <h3 className="case-study-title" style={{ fontSize: "1.65rem", marginBottom: "1.25rem", fontFamily: "var(--font-space-grotesk)", lineHeight: "1.2", color: "var(--text-primary)" }}>
          {caseStudy.title}
        </h3>

        <div className="case-study-content" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" }}>
          {/* Client profile tag */}
          <div className="case-study-meta" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", background: "var(--bg-subtle)", padding: "0.35rem 0.85rem", borderRadius: "100px", border: "1px solid var(--border-default)", color: "var(--text-secondary)", fontWeight: "500" }}>
              <strong>{lang === "bg" ? "Профил на компанията: " : "Target Profile: "}</strong>{caseStudy.client}
            </span>
          </div>

          {/* Problem */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-primary)", marginBottom: "0.35rem" }}>
              {lang === "bg" ? "Предизвикателството" : "The Challenge"}
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-primary)", marginBottom: "0.35rem" }}>
              {lang === "bg" ? "Решението" : "The Solution"}
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {caseStudy.solution}
            </p>
          </div>

          {/* Results list */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-primary)", marginBottom: "0.6rem" }}>
              {lang === "bg" ? "Типични резултати" : "Typical Outcomes"}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {caseStudy.results.map((res, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: "1.4" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyCenter: "center", flexShrink: 0, marginTop: "1px" }}>
                    <CheckIcon style={{ width: "10px", height: "10px", color: "var(--accent-green)" }} />
                  </span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
