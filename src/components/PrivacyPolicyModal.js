"use client";
import React, { useEffect } from "react";
import { CloseIcon } from "@/app/icons";

export default function PrivacyPolicyModal({ isOpen, onClose, activeCopy }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activeCopy?.privacyPolicy) return null;

  const policy = activeCopy.privacyPolicy;

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div
        className="modal-card privacy-policy-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "760px",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          padding: "2.5rem 2rem 2rem 2rem",
          overflow: "hidden",
        }}
      >
        <button
          className="modal-close focus-ring"
          onClick={onClose}
          aria-label="Close privacy policy"
          style={{ top: "1.25rem", right: "1.25rem" }}
        >
          <CloseIcon style={{ width: "24px", height: "24px" }} />
        </button>

        {/* Modal Header */}
        <div style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--border-subtle)", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
            {policy.title}
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", margin: 0 }}>
            <strong style={{ color: "var(--brand-primary)" }}>{policy.lastUpdatedLabel}</strong> {policy.lastUpdatedDate}
          </p>
        </div>

        {/* Scrollable Policy Body */}
        <div
          className="custom-scrollbar"
          style={{
            overflowY: "auto",
            paddingRight: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: "1.65",
            textAlign: "left",
          }}
        >
          {policy.sections.map((section) => (
            <section key={section.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)", margin: "0 0 0.25rem 0" }}>
                {section.title}
              </h3>

              {section.paragraphs?.map((p, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul style={{ margin: "0.25rem 0 0.5rem 1.25rem", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {section.bullets.map((item, i) => (
                    <li key={i} style={{ color: "var(--text-primary)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && section.table.length > 0 && (
                <div style={{ overflowX: "auto", margin: "0.5rem 0", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", textAlign: "left" }}>
                    <thead>
                      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", borderBottom: "1px solid var(--border-subtle)" }}>
                        <th style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: "600" }}>
                          {activeCopy?.lang === "bg" ? "Цел на обработката" : activeCopy?.lang === "fr" ? "Finalité" : "Purpose"}
                        </th>
                        <th style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: "600" }}>
                          {activeCopy?.lang === "bg" ? "Правно основание" : activeCopy?.lang === "fr" ? "Base légale" : "Legal Basis"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row, i) => (
                        <tr key={i} style={{ borderBottom: i < section.table.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                          <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>{row.purpose}</td>
                          <td style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)" }}>{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.extraParagraphs?.map((p, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Modal Footer */}
        <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--border-subtle)", marginTop: "1.25rem", textAlign: "right" }}>
          <button className="btn btn-secondary focus-ring" onClick={onClose} style={{ minWidth: "120px" }}>
            {policy.closeBtn || "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
