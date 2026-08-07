"use client";
import React from "react";
import { CheckIcon, ArrowRightIcon } from "@/app/icons";

export default function DiagnosticSection({ activeCopy, setModalOpen, addToRefs }) {
  if (!activeCopy?.diagnostic) return null;

  const { eyebrow, headline, subheadline, bullets, reassurance, btnText, microcopy } = activeCopy.diagnostic;

  return (
    <section id="diagnostic" className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div className="card-raised reveal" ref={addToRefs} style={{ padding: "3rem 2.5rem", borderRadius: "var(--radius-xl)", background: "var(--bg-elevated)", border: "1px solid var(--border-default)" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>{headline}</h2>
              {subheadline && (
                <p style={{ fontSize: "1.125rem", color: "var(--brand-primary)", fontWeight: "600" }}>
                  {subheadline}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "0.9375rem", fontWeight: "600", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.25rem" }}>
                {eyebrow === "FREE DIAGNOSTIC" ? "During the call we will:" : eyebrow === "DIAGNOSTIC GRATUIT" ? "Au cours de l'échange, nous allons :" : "По време на разговора ще:"}
              </p>              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {bullets && bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "var(--bg-subtle)", padding: "0.875rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <CheckIcon style={{ width: "12px", height: "12px", color: "var(--accent-green)" }} />
                    </span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: "1.4" }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {reassurance && (
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", fontStyle: "italic", textAlign: "center", marginBottom: "2.5rem", padding: "1rem 1.5rem", background: "rgba(110, 58, 255, 0.05)", borderRadius: "var(--radius-md)", border: "1px solid rgba(110, 58, 255, 0.15)" }}>
                {reassurance}
              </p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary focus-ring"
                style={{ padding: "1.125rem 2.5rem", fontSize: "1.0625rem" }}
              >
                {btnText}
                <ArrowRightIcon style={{ marginLeft: "10px", width: "18px", height: "18px" }} />
              </button>
              {microcopy && (
                <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
                  {microcopy}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
