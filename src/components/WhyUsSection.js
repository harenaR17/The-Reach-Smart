"use client";
import React from "react";
import { CheckIcon } from "@/app/icons";

const highlights = [
  { bg: "Опит в маркетинга",        en: "Marketing Expertise",
    descBg: "Разбираме цената на рекламата и стойността на всеки лийд.",
    descEn: "We understand the cost of acquisition and value of every lead." },
  { bg: "Честност и прозрачност",   en: "Honest Approach",
    descBg: "Ще ти кажем открито, ако даден процес не се нуждае от автоматизация.",
    descEn: "We will tell you openly if a process doesn't need automation." },
  { bg: "Фокус върху възвръщаемостта", en: "ROI Focused",
    descBg: "Не правим просто играчки. Строим системи, които носят конкретни финансови резултати.",
    descEn: "We don't build toys. We build systems that generate direct financial results." },
];

export default function WhyUsSection({ activeCopy, addToRefs, lang }) {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <div className="why-us-grid">
          <div className="reveal" ref={addToRefs}>
            <span className="eyebrow">{activeCopy.whyUs.eyebrow}</span>
            <h2 className="section-h2">{activeCopy.whyUs.headline}</h2>
            <div className="prose-stack">
              <p className="body-lg">{activeCopy.whyUs.body1}</p>
              <p className="body">{activeCopy.whyUs.body2}</p>
              <p className="body">{activeCopy.whyUs.body3}</p>
            </div>
          </div>

          <div className="trust-list reveal rd1" ref={addToRefs}>
            {highlights.map((h, i) => (
              <div key={i} className="trust-card">
                <div className="trust-icon">
                  <CheckIcon style={{ width: "22px", height: "22px" }} />
                </div>
                <div>
                  <h4 className="trust-title">{lang === "bg" ? h.bg : h.en}</h4>
                  <p className="trust-desc">{lang === "bg" ? h.descBg : h.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
