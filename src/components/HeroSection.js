"use client";
import React from "react";
import { ArrowRightIcon } from "@/app/icons";
import OrbitScene from "./OrbitScene";
import FloatBadge from "./FloatBadge";

export default function HeroSection({ activeCopy, setModalOpen, lang }) {
  const heroBadges = [
    {
      icon: "💬",
      label: "AI Chat Support",
      iconBg: "rgba(58, 91, 255, 0.2)",
      iconColor: "#3A5BFF",
      delay: 0,
      className: "badge-top-left",
    },
    {
      icon: "🎯",
      label: "Lead Finder",
      iconBg: "rgba(110, 58, 255, 0.2)",
      iconColor: "#6E3AFF",
      delay: 0.8,
      className: "badge-top-right",
    },
    {
      icon: "✉",
      label: "Outreach System",
      iconBg: "rgba(160, 164, 192, 0.2)",
      iconColor: "#A0A4C0",
      delay: 1.6,
      className: "badge-bottom-left",
    },
    {
      icon: "🎥",
      label: "UGC Content",
      iconBg: "rgba(239, 68, 68, 0.2)",
      iconColor: "#EF4444",
      delay: 0.4,
      className: "badge-bottom-right",
    },
    {
      icon: "🔄",
      label: "Post-Purchase Flow",
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
            {activeCopy.hero.headlinePrefix}
            <span className="gradient-text">{activeCopy.hero.headlineHighlight}</span>
            {activeCopy.hero.headlineSuffix}
          </h1>
          <p className="hero-sub">{activeCopy.hero.subheadline}</p>
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
