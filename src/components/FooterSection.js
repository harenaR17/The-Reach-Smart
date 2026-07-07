"use client";
import React from "react";
import Image from "next/image";

export default function FooterSection({ activeCopy, setModalOpen, lang }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "4rem 0 2.5rem 0", backgroundColor: "#040612" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2.5rem", marginBottom: "3rem" }} className="footer-top-grid">
          <div style={{ maxWidth: "360px" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }} className="focus-ring">
              <Image
                src="/logo.png"
                alt="Reach Smart Logo"
                width={32}
                height={32}
                style={{ borderRadius: "50%" }}
              />
              <span style={{ fontSize: "1.125rem", fontWeight: "900", fontFamily: "var(--font-space-grotesk)", tracking: "-0.03em" }}>
                REACH<span style={{ color: "var(--brand-primary)" }}>SMART</span>
              </span>
            </a>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {activeCopy.footer.tagline}
            </p>
          </div>

          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }} className="footer-links-group">
            <div>
              <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", tracking: "0.05em", marginBottom: "1rem" }}>
                {lang === "bg" ? "Навигация" : "Navigation"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
                <a href="#services" className="focus-ring" style={{ color: "var(--text-secondary)" }}>{activeCopy.nav.services}</a>
                <a href="#process" className="focus-ring" style={{ color: "var(--text-secondary)" }}>{activeCopy.nav.howItWorks}</a>
                <a href="#results" className="focus-ring" style={{ color: "var(--text-secondary)" }}>{activeCopy.nav.results}</a>
                <a href="#why-us" className="focus-ring" style={{ color: "var(--text-secondary)" }}>{activeCopy.nav.whyUs}</a>
                <a href="#faq" className="focus-ring" style={{ color: "var(--text-secondary)" }}>{activeCopy.nav.faq}</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", tracking: "0.05em", marginBottom: "1rem" }}>
                {lang === "bg" ? "Контакт" : "Contact"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                <button onClick={() => setModalOpen(true)} className="focus-ring" style={{ textAlign: "left", color: "var(--brand-primary)", fontWeight: "600" }}>
                  {activeCopy.nav.cta}
                </button>
                <p>Sofia, Bulgaria</p>
                <p>hello@reachsmart.ai</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }} className="footer-bottom-row">
          <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
            {activeCopy.footer.copyright}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
            <a href="#" className="focus-ring">Privacy Policy</a>
            <a href="#" className="focus-ring">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
