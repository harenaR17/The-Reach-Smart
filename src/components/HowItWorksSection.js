"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const SCROLL_ANCHOR_RATIO = 0.4;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function TimelineStep({
  step,
  index,
  isLast,
  nodeRef,
  nodeActive,
  lineFill,
  stepVisible,
}) {
  return (
    <div
      className={`timeline-step ${stepVisible ? "timeline-step--visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="timeline-left">
        <div
          ref={nodeRef}
          className={`timeline-node ${nodeActive ? "timeline-node--active" : ""}`}
        >
          <span className="timeline-node-num">{step.num}</span>
          <div className="timeline-node-ring" />
        </div>
        {!isLast && (
          <div
            className="timeline-line"
            style={{ "--line-fill": `${lineFill * 100}%` }}
          />
        )}
      </div>

      <div className="timeline-content">
        <div className="timeline-card">
          <h3 className="timeline-step-title">{step.title}</h3>
          <p className="timeline-step-desc">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection({ activeCopy }) {
  const steps = activeCopy.howItWorks.steps;
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);
  const positionsRef = useRef([]);
  const rafRef = useRef(null);

  const [timelineState, setTimelineState] = useState(() => ({
    nodeActive: steps.map(() => false),
    lineFill: steps.map(() => 0),
  }));

  const measurePositions = useCallback(() => {
    positionsRef.current = nodeRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return rect.top + rect.height / 2 + window.scrollY;
    });
  }, []);

  const updateProgress = useCallback(() => {
    for (let i = 0; i < steps.length; i++) {
      if (!nodeRefs.current[i]) return;
    }

    const positions = positionsRef.current;
    if (positions.length < steps.length) return;

    const anchorY = window.scrollY + window.innerHeight * SCROLL_ANCHOR_RATIO;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodeActive = positions.map((y) => anchorY >= y);

    const lineFill = positions.slice(0, -1).map((y, i) => {
      const next = positions[i + 1];
      const span = next - y;
      if (span <= 0) return 0;

      if (reducedMotion) {
        return anchorY >= next ? 1 : 0;
      }

      return clamp((anchorY - y) / span, 0, 1);
    });

    setTimelineState((prev) => {
      const sameNodes = prev.nodeActive.every((v, i) => v === nodeActive[i]);
      const sameLines = prev.lineFill.every(
        (v, i) => Math.abs(v - (lineFill[i] ?? 0)) < 0.005
      );
      if (sameNodes && sameLines) return prev;
      return { nodeActive, lineFill };
    });
  }, [steps.length]);

  const scheduleMeasureAndUpdate = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      measurePositions();
      updateProgress();
    });
  }, [measurePositions, updateProgress]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateProgress();
    });
  }, [updateProgress]);

  useLayoutEffect(() => {
    nodeRefs.current = nodeRefs.current.slice(0, steps.length);
    measurePositions();
    updateProgress();
  }, [steps.length, measurePositions, updateProgress]);

  useEffect(() => {
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleMeasureAndUpdate);

    const track = trackRef.current;
    let resizeObserver;
    if (track && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleMeasureAndUpdate);
      resizeObserver.observe(track);
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleMeasureAndUpdate);
      resizeObserver?.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [steps.length, scheduleMeasureAndUpdate, scheduleUpdate]);

  const isStepVisible = (index) => {
    if (timelineState.nodeActive[index]) return true;
    if (index > 0 && timelineState.lineFill[index - 1] > 0.2) return true;
    return false;
  };

  return (
    <section id="process" className="section-padding">
      <div className="container">
        <div className="section-header" style={{ marginBottom: "4rem" }}>
          <span className="eyebrow">{activeCopy.howItWorks.eyebrow}</span>
          <h2 className="section-h2">{activeCopy.howItWorks.headline}</h2>
        </div>

        <div className="timeline-track" ref={trackRef}>
          {steps.map((step, i) => (
            <TimelineStep
              key={i}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
              nodeRef={(el) => {
                nodeRefs.current[i] = el;
              }}
              nodeActive={timelineState.nodeActive[i]}
              lineFill={timelineState.lineFill[i] ?? 0}
              stepVisible={isStepVisible(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
