"use client";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@/app/icons";

export default function StickyCtaBar({ activeCopy, onCtaClick, modalOpen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const show = visible && !modalOpen;

  return (
    <div
      className={`sticky-cta-bar${show ? " sticky-cta-bar--visible" : ""}`}
      aria-hidden={!show}
    >
      <p className="sticky-cta-bar__copy">
        {activeCopy?.hero?.microcopy || "Free 30-min diagnostic. No commitment."}
      </p>

      <button
        id="sticky-cta-btn"
        onClick={() => onCtaClick("sticky_cta")}
        className="btn btn-primary focus-ring sticky-cta-bar__btn"
      >
        {activeCopy?.nav?.cta || "Book a Call"}
        <ArrowRightIcon style={{ marginLeft: "8px", width: "16px", height: "16px" }} />
      </button>
    </div>
  );
}
