"use client";
import React from "react";

export default function OrbitScene({
  children,
  badges,
  className = "",
  showRing = true,
  showGlow = true,
  glowColor = "rgba(58, 91, 255, 0.18)",
}) {
  return (
    <div className={`orbit-scene ${className}`}>
      {/* Radial glow behind center */}
      {showGlow && (
        <div
          className="orbit-glow"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Rotating Ring with orbiting dot */}
      {showRing && (
        <div className="orbit-ring">
          <span className="orbit-dot" />
        </div>
      )}

      {/* Center content */}
      <div className="orbit-center">{children}</div>

      {/* Orbiting Badges */}
      <div className="orbit-badges-container">{badges}</div>
    </div>
  );
}
