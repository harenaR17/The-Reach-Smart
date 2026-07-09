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
import FaqSection from "../components/FaqSection";
import CtaSection from "../components/CtaSection";
import ContactFormModal from "../components/ContactFormModal";
import FooterSection from "../components/FooterSection";

export default function Home() {
  // Shared States
  const [lang, setLang] = useState("bg");
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  // Load language preference
  useEffect(() => {
    const savedLang = localStorage.getItem("reach-smart-lang");
    if (savedLang && (savedLang === "bg" || savedLang === "en")) {
      setLang(savedLang);
      document.documentElement.setAttribute("lang", savedLang);
    } else {
      localStorage.setItem("reach-smart-lang", "bg");
    }
  }, []);

  // Language switcher
  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("reach-smart-lang", newLang);
    document.documentElement.setAttribute("lang", newLang);
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const activeCopy = copy[lang];

  return (
    <>
      {/* Page wrapper — clips absolutely-positioned orb glows */}
      <div className="page-wrapper">
        {/* Background Decorative Glow Orbs */}
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
          lang={lang}
        />
      </div>

      {/* Lead Capture Modal — outside wrapper so position:fixed works on all browsers */}
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
    </>
  );
}
