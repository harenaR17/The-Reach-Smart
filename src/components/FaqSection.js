"use client";
import React from "react";
import { ChevronDown } from "@/app/icons";

export default function FaqSection({ activeCopy, addToRefs, openFaq, setOpenFaq }) {
  return (
    <section id="faq" className="section-padding bg-subtle">
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }} className="reveal" ref={addToRefs}>
            <span className="eyebrow">{activeCopy.faq.eyebrow}</span>
            <h2 className="section-h2">{activeCopy.faq.headline}</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }} className="reveal rd1" ref={addToRefs}>
            {activeCopy.faq.items.map((item, idx) => (
              <div key={idx} className="faq-accordion">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className={`faq-trigger focus-ring ${openFaq === idx ? "active" : ""}`}
                  aria-expanded={openFaq === idx}
                >
                  <span style={{ fontSize: "1.125rem", fontWeight: "600", paddingRight: "1rem" }}>{item.q}</span>
                  <ChevronDown style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                </button>
                <div className={`faq-content ${openFaq === idx ? "open" : ""}`}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: "1.6" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
