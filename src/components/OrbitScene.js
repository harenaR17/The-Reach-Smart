"use client";
import React from "react";
import Image from "next/image";

// Connector line positions: angle in degrees from center, length fraction
// Each entry maps to the badge order: top-center, left-center, right-top, bottom-left, bottom-right
const CONNECTORS = [
  { x1: "50%", y1: "30%", x2: "50%", y2: "10%" },        // top-center
  { x1: "28%", y1: "50%", x2: "5%",  y2: "50%" },        // left-center
  { x1: "72%", y1: "38%", x2: "95%", y2: "25%" },        // right-top
  { x1: "32%", y1: "68%", x2: "8%",  y2: "82%" },        // bottom-left
  { x1: "68%", y1: "68%", x2: "92%", y2: "82%" },        // bottom-right
];

export default function OrbitScene({
  badges,
  className = "",
  showGlow = true,
  glowColor = "rgba(110, 58, 255, 0.22)",
}) {
  return (
    <div className={`orbit-scene ${className}`}>
      {/* Ambient radial glow */}
      {showGlow && (
        <div
          className="orbit-glow"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* SVG connector lines — drawn below badges and platform */}
      <svg
        className="orbit-connectors"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {CONNECTORS.map((c, i) => (
          <line
            key={i}
            x1={c.x1} y1={c.y1}
            x2={c.x2} y2={c.y2}
            className="orbit-connector-line"
          />
        ))}
      </svg>

      {/* Layered 3D Platform */}
      <div className="orbit-center">
        <div className="layered-platform">
          <div className="platform-layer platform-layer-3" />
          <div className="platform-layer platform-layer-2" />
          <div className="platform-layer platform-layer-1">
            <div className="platform-logo-wrap">
              <Image
                src="/logo.png"
                alt="The Reach Smart"
                width={160}
                height={60}
                className="platform-logo"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting Badges */}
      <div className="orbit-badges-container">{badges}</div>
    </div>
  );
}
