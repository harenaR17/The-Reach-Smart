"use client";

import React, { useState, useEffect, useRef } from "react";
import { copy } from "./copy";

// Component Imports
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProofSection from "../components/ProofSection";
import WhyUsSection from "../components/WhyUsSection";
import DiagnosticSection from "../components/DiagnosticSection";
import FaqSection from "../components/FaqSection";
import CtaSection from "../components/CtaSection";
import ContactFormModal from "../components/ContactFormModal";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal";
import FooterSection from "../components/FooterSection";

export default function MainPage({ initialLang = "en" }) {
  // Shared States
  const [lang, setLang] = useState(initialLang);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  // Sync initial language preference
  useEffect(() => {
    if (initialLang) {
      setLang(initialLang);
      document.documentElement.setAttribute("lang", initialLang);
    } else {
      const savedLang = localStorage.getItem("reach-smart-lang");
      if (savedLang && (savedLang === "bg" || savedLang === "en" || savedLang === "fr")) {
        setLang(savedLang);
        document.documentElement.setAttribute("lang", savedLang);
      } else {
        setLang("en");
        document.documentElement.setAttribute("lang", "en");
      }
    }
  }, [initialLang]);

  // Language switcher with URL subpath support
  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("reach-smart-lang", newLang);
    document.documentElement.setAttribute("lang", newLang);

    const targetPath = newLang === "en" ? "/" : `/${newLang}`;
    if (typeof window !== "undefined" && window.location.pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }
  };

  // Nav shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, lang }),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  // IntersectionObserver for Scroll Reveals
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const activeCopy = copy[lang] || copy.bg;

  return (
    <>
      <div className="page-wrapper">
        {/* Background Glow Orbs */}
        <div className="orb-glow orb-primary" />
        <div className="orb-glow orb-secondary" />

        {/* Navigation */}
        <NavHeader
          lang={lang}
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          handleLangChange={handleLangChange}
          setModalOpen={setModalOpen}
          activeCopy={activeCopy}
        />

        {/* Main Sections */}
        <main>
          <HeroSection
            activeCopy={activeCopy}
            setModalOpen={setModalOpen}
            lang={lang}
          />
          <ProblemSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
          />
          <SolutionSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
          />
          <ServicesSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
            setModalOpen={setModalOpen}
            lang={lang}
          />
          <HowItWorksSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
          />
          <ProofSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
            lang={lang}
          />
          <WhyUsSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
            lang={lang}
          />
          <DiagnosticSection
            activeCopy={activeCopy}
            setModalOpen={setModalOpen}
            addToRefs={addToRefs}
          />
          <FaqSection
            activeCopy={activeCopy}
            addToRefs={addToRefs}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
          />
          <CtaSection
            activeCopy={activeCopy}
            setModalOpen={setModalOpen}
            addToRefs={addToRefs}
          />
        </main>

        {/* Footer */}
        <FooterSection
          activeCopy={activeCopy}
          setModalOpen={setModalOpen}
          setPrivacyModalOpen={setPrivacyModalOpen}
          lang={lang}
        />
      </div>

      {/* Lead Capture Modal */}
      <ContactFormModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        setFormStatus={setFormStatus}
        handleFormSubmit={handleFormSubmit}
        activeCopy={activeCopy}
        lang={lang}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        activeCopy={activeCopy}
      />
    </>
  );
}
