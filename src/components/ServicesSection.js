"use client";
import React, { useState } from "react";
import { CheckIcon, ChatIcon, TargetIcon, OutreachIcon, VideoIcon, RefreshIcon } from "@/app/icons";

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

function ServiceCard({ item, addToRefs }) {
  return (
    <div className="card-raised service-card reveal" ref={addToRefs}>
      <div>
        <div className="card-icon-wrapper">{getIcon(item.icon)}</div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-hook">{item.hook}</p>
        <p className="card-body">{item.desc}</p>
        {item.extra && <p className="card-extra">{item.extra}</p>}
      </div>
      <div className="card-result">
        <CheckIcon style={{ width: "16px", height: "16px", color: "var(--accent-green)", flexShrink: 0 }} />
        <span>{item.result}</span>
      </div>
    </div>
  );
}

export default function ServicesSection({ activeCopy, addToRefs }) {
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <section id="services" className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header reveal" ref={addToRefs}>
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
            <ServiceCard key={i} item={item} addToRefs={addToRefs} />
          ))}
        </div>

        <div className="lineup-note reveal" ref={addToRefs}>
          <p>{activeCopy.services.lineup}</p>
        </div>
      </div>
    </section>
  );
}
