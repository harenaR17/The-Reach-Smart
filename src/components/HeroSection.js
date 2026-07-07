"use client";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/app/icons";

export default function HeroSection({ activeCopy, setModalOpen, lang }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chatDialogue = [
    { sender: "user", text: { bg: "Здравейте, имате ли този продукт в кралско синьо?", en: "Hi, do you have this product in royal blue?" } },
    { sender: "ai",   text: { bg: "Да! Току-що заредихме. Искате ли да добавя едно в количката Ви?", en: "Yes! We just restocked. Would you like me to add one to your cart?" } },
    { sender: "user", text: { bg: "Да, моля! Колко трае доставката?", en: "Yes please! How long does shipping take?" } },
    { sender: "ai",   text: { bg: "Готово! 1–2 работни дни. Ще Ви изпратя линк за проследяване.", en: "Done! 1–2 business days. I'll send you a tracking link." } },
    { sender: "user", text: { bg: "Благодаря за бързата помощ!", en: "Thanks for the fast help!" } },
    { sender: "ai",   text: { bg: "За мен е удоволствие! На Ваше разположение денонощно.", en: "My pleasure! Here for you 24/7." } },
  ];

  useEffect(() => {
    let active = true;
    let tid;
    const play = async () => {
      setChatMessages([]);
      for (const msg of chatDialogue) {
        if (!active) return;
        if (msg.sender === "ai") {
          setIsTyping(true);
          await new Promise(r => { tid = setTimeout(r, 1400); });
          setIsTyping(false);
        } else {
          await new Promise(r => { tid = setTimeout(r, 700); });
        }
        if (!active) return;
        setChatMessages(prev => [...prev, { sender: msg.sender, text: msg.text[lang] }]);
        await new Promise(r => { tid = setTimeout(r, 1800); });
      }
      await new Promise(r => { tid = setTimeout(r, 3500); });
      if (active) play();
    };
    play();
    return () => { active = false; clearTimeout(tid); };
  }, [lang]);

  return (
    <section className="hero-section">
      {/* Background glow */}
      <div className="hero-glow" />

      <div className="container hero-grid">
        {/* Left text column */}
        <div className="hero-text">
          <span className="eyebrow">{activeCopy.hero.eyebrow}</span>
          <h1 className="hero-h1">
            {activeCopy.hero.headlinePrefix}
            <span className="gradient-text">{activeCopy.hero.headlineHighlight}</span>
            {activeCopy.hero.headlineSuffix}
          </h1>
          <p className="hero-sub">{activeCopy.hero.subheadline}</p>
          <div className="hero-cta-group">
            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-primary focus-ring"
            >
              {activeCopy.hero.cta}
              <ArrowRightIcon style={{ marginLeft: "10px", width: "18px", height: "18px" }} />
            </button>
            <p className="hero-microcopy">{activeCopy.hero.microcopy}</p>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="hero-mockup-wrapper">
          <div className="phone-mockup">
            <div className="phone-island" />
            <div className="phone-header">
              <div className="phone-avatar">AI</div>
              <div>
                <div className="phone-agent-name">Reach Smart Agent</div>
                <div className="phone-status">
                  <span className="status-dot" />
                  Active 24/7
                </div>
              </div>
            </div>
            <div className="phone-messages">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble chat-bubble-${msg.sender}`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble chat-bubble-ai">
                  <div className="typing-dots">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
