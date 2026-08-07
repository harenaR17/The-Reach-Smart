"use client";
import React from "react";
import Image from "next/image";

export default function OrbitScene() {
  return (
    <section className="diagram" aria-label="Reach Smart platform overview">
      <svg className="connectors" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#C9BBF2" strokeOpacity="0.7" strokeWidth="0.32" strokeLinecap="round" strokeLinejoin="round">
          <path d="M48.5,23 L48.5,34.5"/>
          <path d="M50,23 L50,34.5"/>
          <path d="M51.5,23 L51.5,34.5"/>

          <path d="M33.5,37.25 H40.5 V46.5 H34"/>
          <path d="M33.5,38.75 H42 V48 H34"/>
          <path d="M33.5,40.25 H43.5 V49.5 H34"/>

          <path d="M66.5,37.25 H59.5 V46.5 H66"/>
          <path d="M66.5,38.75 H58 V48 H66"/>
          <path d="M66.5,40.25 H56.5 V49.5 H66"/>

          <path d="M33.5,74.75 H40.5 V55.5 H34"/>
          <path d="M33.5,76.25 H42 V57 H34"/>
          <path d="M33.5,77.75 H43.5 V58.5 H34"/>

          <path d="M66.5,74.75 H59.5 V55.5 H66"/>
          <path d="M66.5,76.25 H58 V57 H66"/>
          <path d="M66.5,77.75 H56.5 V58.5 H66"/>
        </g>
      </svg>

      <div className="card top">
        <div className="icon-tile" style={{ background: "#2c2318" }}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: "#F2C14E" }} xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4.5" width="18" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M8 16.5 L5 20 L5 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="10.5" r="1" fill="currentColor"/>
            <circle cx="12" cy="10.5" r="1" fill="currentColor"/>
            <circle cx="15.5" cy="10.5" r="1" fill="currentColor"/>
          </svg>
        </div>
        <div className="text">
          <h3>AI Support</h3>
          <p>Answers in seconds</p>
        </div>
      </div>

      <div className="card left">
        <div className="icon-tile" style={{ background: "#111a2e" }}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: "#6FC3F7" }} xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="16.5" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M14.8 13.2c2.6.2 4.7 2.2 4.7 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text">
          <h3>Lead Finder</h3>
          <p>The right companies and people</p>
        </div>
      </div>

      <div className="card right">
        <div className="icon-tile" style={{ background: "#1e1330" }}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: "#B79CF0" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3 L3 10.5 L10 13.2 L14.5 21 L21 3 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M21 3 L10 13.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text">
          <h3>Outreach</h3>
          <p>Personalized follow up</p>
        </div>
      </div>

      <div className="card bottom-left">
        <div className="icon-tile" style={{ background: "#17161a" }}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: "#ffffff" }} xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M10 8.3 L16 12 L10 15.7 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="text">
          <h3>UGC Content</h3>
          <p>More ad tests</p>
        </div>
      </div>

      <div className="card bottom-right">
        <div className="icon-tile" style={{ background: "#1e1330" }}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: "#B79CF0" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4 H5.5 L7 15 H18 L20.5 7 H6.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="19" r="1.3" fill="currentColor"/>
            <circle cx="16.5" cy="19" r="1.3" fill="currentColor"/>
          </svg>
        </div>
        <div className="text">
          <h3>Post-Purchase</h3>
          <p>More repeat purchases</p>
        </div>
      </div>

      <div className="circle">
        <div className="label">
          <img
            src="https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFNhoy6fH3FlD2JrvZNO0sSxTX8m1ofitkCjbp4"
            alt="The Reach Smart"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
