"use client";
import React from "react";
import Image from "next/image";

export default function FooterSection({ activeCopy, setModalOpen, setPrivacyModalOpen, lang }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "4rem 0 2.5rem 0", backgroundColor: "#040612" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2.5rem", marginBottom: "3rem" }} className="footer-top-grid">
          <div style={{ maxWidth: "360px" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }} className="focus-ring">
              <Image
                src="/logo.png"
                alt="The Reach Smart Logo"
                width={32}
                height={32}
                style={{ borderRadius: "50%" }}
              />
              <span style={{ fontSize: "1.125rem", fontWeight: "900", fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.03em" }}>
                THE REACH<span style={{ color: "var(--brand-primary)" }}>SMART</span>
              </span>
            </a>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              {activeCopy.footer.tagline}
            </p>
          </div>

          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }} className="footer-links-group">
            <div>
              <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                {lang === "bg" ? "Навигация" : lang === "fr" ? "Navigation" : "Navigation"}
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
              <h4 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
                {lang === "bg" ? "Контакт" : lang === "fr" ? "Contact" : "Contact"}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                <button onClick={() => setModalOpen(true)} className="focus-ring" style={{ textAlign: "left", color: "var(--brand-primary)", fontWeight: "600", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  {activeCopy.nav.cta}
                </button>
                <p>Silistra, Bulgaria</p>
                <a href="mailto:hello@thereachsmart.net" style={{ color: "var(--text-secondary)" }}>hello@thereachsmart.net</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }} className="footer-bottom-row">
          <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
            {activeCopy.footer.copyright}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="focus-ring"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--text-tertiary)", fontSize: "0.75rem" }}
            >
              {activeCopy.footer.privacyPolicyLink || "Privacy Policy"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
