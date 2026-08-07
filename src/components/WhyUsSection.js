"use client";
import React from "react";
import { CheckIcon } from "@/app/icons";

export default function WhyUsSection({ activeCopy, addToRefs }) {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <div className="why-us-grid">
          <div className="reveal" ref={addToRefs}>
            <span className="eyebrow">{activeCopy.whyUs.eyebrow}</span>
            <h2 className="section-h2">{activeCopy.whyUs.headline}</h2>
            <div className="prose-stack">
              {activeCopy.whyUs.body && <p className="body-lg">{activeCopy.whyUs.body}</p>}
              {activeCopy.whyUs.body1 && <p className="body-lg">{activeCopy.whyUs.body1}</p>}
              {activeCopy.whyUs.body2 && <p className="body">{activeCopy.whyUs.body2}</p>}
              {activeCopy.whyUs.body3 && <p className="body">{activeCopy.whyUs.body3}</p>}
            </div>
          </div>

          <div className="trust-list reveal rd1" ref={addToRefs}>
            {activeCopy.whyUs.pillars && activeCopy.whyUs.pillars.map((pillar, i) => (
              <div key={i} className="trust-card">
                <div className="trust-icon">
                  <CheckIcon style={{ width: "22px", height: "22px" }} />
                </div>
                <div>
                  <h4 className="trust-title">{pillar.title}</h4>
                  <p className="trust-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
