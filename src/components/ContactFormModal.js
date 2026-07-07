"use client";
import React from "react";
import { CloseIcon, CheckIcon } from "@/app/icons";

export default function ContactFormModal({
  modalOpen,
  setModalOpen,
  formData,
  setFormData,
  formStatus,
  setFormStatus,
  handleFormSubmit,
  activeCopy,
  lang,
}) {
  return (
    <div className={`modal-overlay ${modalOpen ? "active" : ""}`} onClick={() => setModalOpen(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close focus-ring" onClick={() => setModalOpen(false)} aria-label="Close form">
          <CloseIcon style={{ width: "24px", height: "24px" }} />
        </button>
        
        {formStatus === "success" ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", border: "2px solid var(--accent-green)", color: "var(--accent-green)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto" }}>
              <CheckIcon style={{ width: "32px", height: "32px" }} />
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{activeCopy.modal.successTitle}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>{activeCopy.modal.successDesc}</p>
            <button className="btn btn-secondary focus-ring" style={{ marginTop: "2rem", width: "100%" }} onClick={() => { setModalOpen(false); setFormStatus("idle"); }}>
              {lang === "bg" ? "Затвори" : "Close"}
            </button>
          </div>
        ) : (
          <div>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{activeCopy.modal.headline}</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "2rem" }}>{activeCopy.modal.subheadline}</p>
            
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label htmlFor="form-name" style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", tracking: "0.05em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {activeCopy.modal.nameLabel} <span style={{ color: "var(--accent-red)" }}>*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  required
                  disabled={formStatus === "loading"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={activeCopy.modal.placeholderName}
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", background: "var(--bg-subtle)", border: "1px solid var(--border-default)", color: "var(--text-primary)", outline: "none" }}
                  className="focus-ring"
                />
              </div>

              <div>
                <label htmlFor="form-email" style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", tracking: "0.05em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {activeCopy.modal.emailLabel} <span style={{ color: "var(--accent-red)" }}>*</span>
                </label>
                <input
                  type="email"
                  id="form-email"
                  required
                  disabled={formStatus === "loading"}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={activeCopy.modal.placeholderEmail}
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", background: "var(--bg-subtle)", border: "1px solid var(--border-default)", color: "var(--text-primary)", outline: "none" }}
                  className="focus-ring"
                />
              </div>

              <div>
                <label htmlFor="form-company" style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", tracking: "0.05em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {activeCopy.modal.companyLabel}
                </label>
                <input
                  type="text"
                  id="form-company"
                  disabled={formStatus === "loading"}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={activeCopy.modal.placeholderCompany}
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", background: "var(--bg-subtle)", border: "1px solid var(--border-default)", color: "var(--text-primary)", outline: "none" }}
                  className="focus-ring"
                />
              </div>

              <div>
                <label htmlFor="form-message" style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", tracking: "0.05em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {activeCopy.modal.messageLabel}
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  disabled={formStatus === "loading"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={activeCopy.modal.placeholderMessage}
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", background: "var(--bg-subtle)", border: "1px solid var(--border-default)", color: "var(--text-primary)", outline: "none", resize: "none" }}
                  className="focus-ring"
                />
              </div>

              {formStatus === "error" && (
                <p style={{ color: "var(--accent-red)", fontSize: "0.875rem", fontWeight: "500" }}>{activeCopy.modal.error}</p>
              )}

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="btn btn-primary focus-ring"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                {formStatus === "loading" ? activeCopy.modal.loading : activeCopy.modal.submit}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
