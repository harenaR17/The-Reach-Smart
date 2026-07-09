"use client";
import React from "react";

export default function FloatBadge({
  icon,
  label,
  iconBg = "rgba(255, 255, 255, 0.1)",
  iconColor = "#ffffff",
  delay = 0,
  className,
}) {
  return (
    <div
      className={`float-badge ${className || ""}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <span
        className="float-badge-icon"
        style={{
          backgroundColor: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </span>
      <span className="float-badge-label">{label}</span>
    </div>
  );
}
