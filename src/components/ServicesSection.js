"use client";
import React, { useState } from "react";
import { CheckIcon, ChatIcon, TargetIcon, OutreachIcon, VideoIcon, RefreshIcon } from "@/app/icons";
import CaseStudyModal from "./CaseStudyModal";

function getIcon(name) {
  switch (name) {
    case "chat":     return <ChatIcon className="card-icon-svg" />;
    case "target":   return <TargetIcon className="card-icon-svg" />;
    case "outreach": return <OutreachIcon className="card-icon-svg" />;
    case "video":    return <VideoIcon className="card-icon-svg" />;
    case "refresh":  return <RefreshIcon className="card-icon-svg" />;
    default:         return <ChatIcon className="card-icon-svg" />;
  }
}

function ServiceCard({ item, onViewCaseStudy, lang }) {
  return (
    <div className="card-raised service-card">
      <div className="card-icon-wrapper">{getIcon(item.icon)}</div>
      <h3 className="card-title">{item.title}</h3>
      <p className="card-hook">{item.hook}</p>
      <p className="card-body">{item.desc}</p>
      {item.extra && <p className="card-extra">{item.extra}</p>}

      {item.caseStudy && (
        <button
          onClick={() => onViewCaseStudy(item.caseStudy)}
          className="btn-case-study focus-ring"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.8125rem",
            color: "var(--brand-primary)",
            fontWeight: "600",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            marginTop: "1.25rem",
            padding: "0",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          {lang === "bg" ? "Виж пример →" : "View Case Study →"}
        </button>
      )}

      <div className="card-result" style={{ marginTop: "1.5rem" }}>
        <CheckIcon style={{ width: "16px", height: "16px", color: "var(--accent-green)", flexShrink: 0 }} />
        <span>{item.result}</span>
      </div>
    </div>
  );
}

export default function ServicesSection({ activeCopy, addToRefs, setModalOpen, lang }) {
  const [activeTab, setActiveTab] = useState("saas");
  const [selectedCase, setSelectedCase] = useState(null);
  const [caseModalOpen, setCaseModalOpen] = useState(false);

  const handleViewCaseStudy = (caseStudy) => {
    setSelectedCase(caseStudy);
    setCaseModalOpen(true);
  };

  return (
    <section id="services" className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{activeCopy.services.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.services.headline}</h2>

          {/* Tab switcher */}
          <div className="tab-switcher">
            <button
              onClick={() => setActiveTab("saas")}
              className={`tab-btn focus-ring ${activeTab === "saas" ? "active" : ""}`}
            >
              {activeCopy.services.tabSaaS}
            </button>
            <button
              onClick={() => setActiveTab("ecom")}
              className={`tab-btn focus-ring ${activeTab === "ecom" ? "active" : ""}`}
            >
              {activeCopy.services.tabEcom}
            </button>
          </div>
        </div>

        <div className="services-grid">
          {(activeTab === "saas" ? activeCopy.services.saas : activeCopy.services.ecom).map((item, i) => (
            <ServiceCard
              key={i}
              item={item}
              onViewCaseStudy={handleViewCaseStudy}
              lang={lang}
            />
          ))}
        </div>

        <div className="lineup-note">
          <p>{activeCopy.services.lineup}</p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-primary focus-ring"
          >
            {activeCopy.hero.cta}
          </button>
        </div>
      </div>

      <CaseStudyModal
        isOpen={caseModalOpen}
        onClose={() => setCaseModalOpen(false)}
        caseStudy={selectedCase}
        lang={lang}
      />
    </section>
  );
}
