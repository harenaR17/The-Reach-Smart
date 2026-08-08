"use client";
import React, { useEffect, useRef } from "react";

export default function OrbitScene2({ lang = "bg" }) {
  const T = {
    bg: [
      "отговори за секунди",
      "точните компании и хора",
      "персонализиран follow-up",
      "повече рекламни тестове",
      "повече повторни покупки",
    ],
    en: [
      "answers in seconds",
      "the right companies and people",
      "personalized follow-up",
      "more ad tests",
      "more repeat purchases",
    ],
    fr: [
      "des réponses en quelques secondes",
      "les bonnes entreprises et les bonnes personnes",
      "un suivi personnalisé",
      "plus de tests publicitaires",
      "plus d'achats répétés",
    ],
  };
  const t = T[lang] || T.bg;
  const wrapRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    function fitStage() {
      if (!wrapRef.current || !stageRef.current) return;
      const available = wrapRef.current.clientWidth;
      const scale = Math.min(1, available / 640);
      stageRef.current.style.transform = `scale(${scale})`;
      wrapRef.current.style.height = `${566 * scale}px`;
    }

    fitStage();
    window.addEventListener("resize", fitStage);
    return () => window.removeEventListener("resize", fitStage);
  }, []);

  return (
    <div className="orbit-scene-2-wrap" ref={wrapRef}>
      <div className="orbit-scene-2-stage" id="stage" ref={stageRef}>
        <svg className="connectors" viewBox="0 0 640 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#8f7ce8" strokeOpacity="0.1" strokeWidth="1">
            <polygon points="320,150 540,266 320,382 100,266" />
            <polygon points="320,190 460,266 320,342 180,266" />
          </g>
          <g fill="none" stroke="#8f7ce8" strokeOpacity="0.4" strokeWidth="2">
            {/* Top AI Support -> Top facet of center diamond */}
            <path d="M320,110 L320,228" />
            {/* Left Lead Finder -> Left facet of center diamond */}
            <path d="M194,220 L213,220 L213,242 L290,242" />
            {/* Right Outreach -> Right facet of center diamond */}
            <path d="M430,220 L418,220 L418,242 L350,242" />
            {/* Bottom Left UGC -> Bottom-left facet of center diamond */}
            <path d="M262,398 L252,398 L252,282 L275,282" />
            {/* Bottom Right Post-Purchase -> Bottom-right facet of center diamond */}
            <path d="M378,398 L388,398 L388,282 L365,282" />
          </g>
        </svg>

        <div className="center-icon">
          <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient id="diamondGrad" x1="0" y1="50" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f2ecff" />
                <stop offset="30%" stopColor="#b9a0f7" />
                <stop offset="65%" stopColor="#7c5cf0" />
                <stop offset="100%" stopColor="#4433b8" />
              </linearGradient>
              <filter id="glowBlur" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
              <clipPath id="topFacetClip">
                <polygon points="120,58 208,102 120,146 32,102" />
              </clipPath>
            </defs>

            <g filter="url(#glowBlur)" opacity="0.7">
              <polygon className="layer-top-glow" points="120,58 208,102 120,146 32,102" fill="#8b5cf6" />
              <polygon className="layer-middle-glow" points="120,82 208,126 120,170 32,126" fill="#7c4dff" />
              <polygon className="layer-bottom-glow" points="120,106 208,150 120,194 32,150" fill="#6d4fe0" />
            </g>

            {/* Bottom Layer */}
            <g className="diamond-layer layer-bottom">
              <polygon points="120,106 208,150 120,194 32,150" fill="url(#diamondGrad)" fillOpacity="0.55" stroke="#9b83f0" strokeWidth="1.3" strokeOpacity="0.8" />
              <line x1="32" y1="150" x2="32" y2="126" stroke="#9b83f0" strokeWidth="1.1" strokeOpacity="0.55" />
              <line x1="208" y1="150" x2="208" y2="126" stroke="#9b83f0" strokeWidth="1.1" strokeOpacity="0.55" />
            </g>

            {/* Middle Layer */}
            <g className="diamond-layer layer-middle">
              <polygon points="120,82 208,126 120,170 32,126" fill="url(#diamondGrad)" fillOpacity="0.7" stroke="#a98cf5" strokeWidth="1.3" strokeOpacity="0.85" />
              <line x1="32" y1="126" x2="32" y2="102" stroke="#a98cf5" strokeWidth="1.1" strokeOpacity="0.6" />
              <line x1="208" y1="126" x2="208" y2="102" stroke="#a98cf5" strokeWidth="1.1" strokeOpacity="0.6" />
            </g>

            {/* Top Layer & Logo */}
            <g className="diamond-layer layer-top">
              <polygon points="120,58 208,102 120,146 32,102" fill="#241f3d" />
              <image
                className="logo-fade"
                href="https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFNhoy6fH3FlD2JrvZNO0sSxTX8m1ofitkCjbp4"
                xlinkHref="https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFNhoy6fH3FlD2JrvZNO0sSxTX8m1ofitkCjbp4"
                x="32"
                y="52"
                width="176"
                height="100"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#topFacetClip)"
                transform="rotate(0 120 102) scale(1 1)"
                style={{ transformOrigin: "120px 102px" }}
              />
              <polygon points="120,58 208,102 120,146 32,102" fill="none" stroke="#e3d8ff" strokeWidth="1.6" />
              <polygon points="120,74 166,102 120,130 74,102" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.1" />
            </g>
          </svg>
        </div>

        {/* AI Support */}
        <div className="card" id="card-ai">
          <div className="icon-box ic-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0c1a12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              <circle cx="7.5" cy="11.5" r="1" fill="#0c1a12" stroke="none" />
              <circle cx="11.5" cy="11.5" r="1" fill="#0c1a12" stroke="none" />
              <circle cx="15.5" cy="11.5" r="1" fill="#0c1a12" stroke="none" />
            </svg>
          </div>
          <h3>AI Support</h3>
          <p>{t[0]}</p>
        </div>

        {/* Lead Finder */}
        <div className="card" id="card-lead">
          <div className="icon-box ic-slate">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>Lead Finder</h3>
          <p>{t[1]}</p>
        </div>

        {/* Outreach */}
        <div className="card" id="card-out">
          <div className="icon-box ic-violet">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </div>
          <h3>Outreach</h3>
          <p>{t[2]}</p>
        </div>

        {/* UGC Content */}
        <div className="card" id="card-ugc">
          <div className="icon-box ic-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0c1a12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="#0c1a12" />
            </svg>
          </div>
          <h3>UGC Content</h3>
          <p>{t[3]}</p>
        </div>

        {/* Post-Purchase */}
        <div className="card" id="card-pp">
          <div className="icon-box ic-coral">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <h3>Post-Purchase</h3>
          <p>{t[4]}</p>
        </div>

        <div className="noise-vignette"></div>
      </div>
    </div>
  );
}
