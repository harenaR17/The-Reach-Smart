"use client";
import React from "react";
import { ArrowRightIcon } from "@/app/icons";

export default function CtaSection({ activeCopy, setModalOpen, addToRefs }) {
  return (
    <section style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(110, 58, 255, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }} className="reveal" ref={addToRefs}>
          <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
            {activeCopy.ctaSection.headline}
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            {activeCopy.ctaSection.body}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary focus-ring" style={{ padding: "1.125rem 2.5rem", fontSize: "1.0625rem" }}>
              {activeCopy.ctaSection.btn}
              <ArrowRightIcon style={{ marginLeft: "10px", width: "18px", height: "18px" }} />
            </button>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
              {activeCopy.ctaSection.microcopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
