"use client";
import React from "react";
import Image from "next/image";
import { MenuIcon, ArrowRightIcon } from "@/app/icons";

export default function NavHeader({
  lang,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleLangChange,
  setModalOpen,
  activeCopy,
}) {
  return (
    <>
      <header className={`nav-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo focus-ring">
            <Image
              src="/logo.png"
              alt="Reach Smart Logo"
              width={36}
              height={36}
              style={{ borderRadius: "50%", border: "1px solid var(--border-default)" }}
              priority
            />
            <span className="nav-brand-text">
              REACH<span style={{ color: "var(--brand-primary)" }}>SMART</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            <a href="#services" className="focus-ring nav-link">{activeCopy.nav.services}</a>
            <a href="#process" className="focus-ring nav-link">{activeCopy.nav.howItWorks}</a>
            <a href="#results" className="focus-ring nav-link">{activeCopy.nav.results}</a>
            <a href="#why-us" className="focus-ring nav-link">{activeCopy.nav.whyUs}</a>
            <a href="#faq" className="focus-ring nav-link">{activeCopy.nav.faq}</a>
          </nav>

          {/* Right: Lang Toggle + CTA + Hamburger */}
          <div className="nav-actions">
            <div className="lang-toggle">
              <button
                onClick={() => handleLangChange("bg")}
                className={`lang-btn focus-ring ${lang === "bg" ? "active" : ""}`}
                aria-label="Bulgarian"
              >BG</button>
              <button
                onClick={() => handleLangChange("en")}
                className={`lang-btn focus-ring ${lang === "en" ? "active" : ""}`}
                aria-label="English"
              >EN</button>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-primary focus-ring nav-cta"
            >
              {activeCopy.nav.cta}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-ring hamburger-btn"
              aria-label="Toggle Menu"
            >
              <MenuIcon style={{ width: "22px", height: "22px" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {[
            { href: "#services", label: activeCopy.nav.services },
            { href: "#process", label: activeCopy.nav.howItWorks },
            { href: "#results", label: activeCopy.nav.results },
            { href: "#why-us", label: activeCopy.nav.whyUs },
            { href: "#faq", label: activeCopy.nav.faq },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-link"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
            className="btn btn-primary focus-ring"
            style={{ marginTop: "0.5rem" }}
          >
            {activeCopy.nav.cta}
          </button>
        </div>
      )}
    </>
  );
}
