"use client";
import React from "react";
import { ArrowRightIcon } from "@/app/icons";
import OrbitScene from "./OrbitScene";
import FloatBadge from "./FloatBadge";

export default function HeroSection({ activeCopy, setModalOpen, lang }) {
  const highlights = activeCopy.hero.highlights || [];

  const heroBadges = [
    {
      icon: highlights[0]?.icon || "💬",
      label: highlights[0]?.label || "AI Support",
      iconBg: "rgba(58, 91, 255, 0.2)",
      iconColor: "#3A5BFF",
      delay: 0,
      className: "badge-top-left",
    },
    {
      icon: highlights[1]?.icon || "🎯",
      label: highlights[1]?.label || "Lead Finder",
      iconBg: "rgba(110, 58, 255, 0.2)",
      iconColor: "#6E3AFF",
      delay: 0.8,
      className: "badge-top-right",
    },
    {
      icon: highlights[2]?.icon || "✉",
      label: highlights[2]?.label || "Outreach",
      iconBg: "rgba(160, 164, 192, 0.2)",
      iconColor: "#A0A4C0",
      delay: 1.6,
      className: "badge-bottom-left",
    },
    {
      icon: highlights[3]?.icon || "🎥",
      label: highlights[3]?.label || "UGC Content",
      iconBg: "rgba(239, 68, 68, 0.2)",
      iconColor: "#EF4444",
      delay: 0.4,
      className: "badge-bottom-right",
    },
    {
      icon: highlights[4]?.icon || "🔄",
      label: highlights[4]?.label || "Post-Purchase",
      iconBg: "rgba(16, 185, 129, 0.2)",
      iconColor: "#10B981",
      delay: 1.2,
      className: "badge-mid-right",
    },
  ];

  return (
    <section className="hero-section">
      {/* Background glow */}
      <div className="hero-glow" />

      <div className="container hero-grid">
        {/* Left text column */}
        <div className="hero-text">
          <span className="eyebrow">{activeCopy.hero.eyebrow}</span>
          <h1 className="hero-h1">
            {activeCopy.hero.headline ||
              (activeCopy.hero.headlineParts &&
                activeCopy.hero.headlineParts.map((part, i) => {
                  if (part.text.startsWith(". ")) {
                    const rest = part.text.substring(1);
                    return (
                      <React.Fragment key={i}>
                        <span>.</span>
                        <br />
                        <span>{rest.trimStart()}</span>
                      </React.Fragment>
                    );
                  }
                  if (part.type === "red") {
                    return <span key={i} className="gradient-text-red">{part.text}</span>;
                  }
                  if (part.type === "purple") {
                    return <span key={i} className="gradient-text">{part.text}</span>;
                  }
                  return <span key={i}>{part.text}</span>;
                }))}
          </h1>
          <p className="hero-sub">{activeCopy.hero.subheadline}</p>
          {activeCopy.hero.body && (
            <div className="hero-body" style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              {activeCopy.hero.body.split("\n\n").map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: "0.75rem" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="hero-cta-group">
            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-primary focus-ring"
            >
              {activeCopy.hero.cta}
              <ArrowRightIcon style={{ marginLeft: "10px", width: "18px", height: "18px" }} />
            </button>
            <p className="hero-microcopy">{activeCopy.hero.microcopy}</p>
          </div>

          {/* Short highlights strip */}
          {highlights.length > 0 && (
            <div
              className="hero-highlights-strip"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem 1rem",
                marginTop: "1.5rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-default)",
              }}
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "20px",
                    border: "1px solid var(--border-default)",
                  }}
                >
                  <span>{h.icon}</span>
                  <strong style={{ color: "var(--text-primary)" }}>{h.label}</strong>
                  <span>— {h.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right orbit scene */}
        <div className="hero-mockup-wrapper">
          <OrbitScene
            badges={heroBadges.map((b, i) => (
              <FloatBadge key={i} {...b} />
            ))}
            showRing={true}
            showGlow={true}
          >
            <div className="center-ai-orb">AI</div>
          </OrbitScene>
        </div>
      </div>
    </section>
  );
}
