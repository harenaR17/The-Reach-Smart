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

function ServiceCard({ item, onViewCaseStudy, onOpenDiagnostic, lang }) {
  return (
    <div className="card-raised service-card">
      <div className="card-icon-wrapper">{getIcon(item.icon)}</div>
      <h3 className="card-title">{item.title}</h3>
      <p className="card-hook">{item.hook}</p>
      <p className="card-body">{item.desc}</p>
      {item.extra && <p className="card-extra">{item.extra}</p>}

      {item.listHeader && (
        <div style={{ marginTop: "0.75rem", marginBottom: "0.5rem" }}>
          <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-primary)" }}>{item.listHeader}</p>
          {item.bullets && (
            <ul style={{ paddingLeft: "1.2rem", margin: "0.4rem 0", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              {item.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: "0.2rem" }}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {item.subdesc && <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic", marginTop: "0.5rem" }}>{item.subdesc}</p>}

      <div style={{ marginTop: "1.25rem" }}>
        <button
          onClick={onOpenDiagnostic}
          className="btn btn-secondary focus-ring"
          style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem" }}
        >
          {item.btnText || (lang === "bg" ? "Виж как работи" : lang === "fr" ? "Voir comment ça fonctionne" : "See how it works")}
        </button>
      </div>

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
            marginTop: "0.75rem",
            padding: "0",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          {lang === "bg" ? "Виж пример →" : lang === "fr" ? "Voir étude de cas →" : "View Case Study →"}
        </button>
      )}

      <div className="card-result" style={{ marginTop: "1.25rem" }}>
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

  const s = activeCopy.services;

  return (
    <section id="services" className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="section-h2">{s.headline}</h2>
          {s.subheadline && (
            <p className="body-lg" style={{ marginTop: "0.5rem", color: "var(--text-secondary)" }}>
              {s.subheadline}
            </p>
          )}

          {/* Tab switcher */}
          <div className="tab-switcher" style={{ marginTop: "1.5rem" }}>
            <button
              onClick={() => setActiveTab("saas")}
              className={`tab-btn focus-ring ${activeTab === "saas" ? "active" : ""}`}
            >
              {s.tabSaaS}
            </button>
            <button
              onClick={() => setActiveTab("ecom")}
              className={`tab-btn focus-ring ${activeTab === "ecom" ? "active" : ""}`}
            >
              {s.tabEcom}
            </button>
          </div>
        </div>

        <div className="services-grid">
          {((activeTab === "saas" ? s.saas : s.ecom) || []).map((item, i) => (
            <ServiceCard
              key={i}
              item={item}
              onViewCaseStudy={handleViewCaseStudy}
              onOpenDiagnostic={() => setModalOpen(true)}
              lang={lang}
            />
          ))}
        </div>

        {/* Custom Automations Block */}
        {s.custom && (
          <div
            className="custom-automation-banner"
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "linear-gradient(135deg, rgba(110, 58, 255, 0.08) 0%, rgba(58, 91, 255, 0.04) 100%)",
              borderRadius: "16px",
              border: "1px solid rgba(110, 58, 255, 0.2)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow">{s.custom.eyebrow}</span>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                {s.custom.headline}
              </h3>
              <p style={{ color: "var(--brand-primary)", fontWeight: "600", marginTop: "0.5rem", fontSize: "1.05rem" }}>
                {s.custom.subheadline}
              </p>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: "1.6" }}>
                {s.custom.desc}
              </p>
            </div>

            <div style={{ padding: "1.25rem", background: "rgba(255, 255, 255, 0.02)", borderRadius: "12px", border: "1px solid var(--border-default)" }}>
              <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                {s.custom.directHeader}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
                {(s.custom.bullets || []).map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "#10B981", fontWeight: "bold" }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary focus-ring"
                style={{ marginTop: "1.25rem", width: "100%", justifyContent: "center" }}
              >
                {s.custom.cta}
              </button>
            </div>
          </div>
        )}

        <div className="lineup-note" style={{ marginTop: "2rem" }}>
          <p>{s.lineup}</p>
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
