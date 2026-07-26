"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MouseEffects({
  duration = 0.45,
  strokeWidth = 3,
  effectSize = 80,
  rotation = 52,
}) {
  const [effects, setEffects] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const newEffect = {
        id: `${Date.now()}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY,
      };

      setEffects((prev) => [...prev, newEffect]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleAnimationComplete = (id) => {
    setEffects((prev) => prev.filter((effect) => effect.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
    >
      {effects.map((effect) => (
        <EffectInstance
          key={effect.id}
          effect={effect}
          duration={duration}
          strokeWidth={strokeWidth}
          effectSize={effectSize}
          rotation={rotation}
          onComplete={() => handleAnimationComplete(effect.id)}
        />
      ))}
    </div>
  );
}

function EffectInstance({
  effect,
  duration,
  strokeWidth,
  effectSize,
  rotation,
  onComplete,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        svgRef.current,
        {
          scale: 0.15,
          opacity: 1,
          rotation: rotation,
        },
        {
          scale: 1.25,
          opacity: 0,
          duration: duration,
          ease: "power2.out",
          onComplete: onComplete,
        }
      );
    }, svgRef);

    return () => ctx.revert();
  }, [duration, rotation, onComplete]);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: effect.x, top: effect.y }}
    >
      <svg
        ref={svgRef}
        width={effectSize}
        height={effectSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
      >
        {/* Outer Sniper Circle - Hardcoded Milano Red */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
          strokeDasharray="6 4"
        />
        {/* Inner Reticle Ring - Hardcoded Milano Red */}
        <circle
          cx="50"
          cy="50"
          r="18"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
        />
        {/* Center Target Dot - Hardcoded Milano Red */}
        <circle cx="50" cy="50" r="4" fill="#A90E02" />

        {/* Crosshair Lines - Hardcoded Milano Red */}
        <line
          x1="50"
          y1="5"
          x2="50"
          y2="28"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
        />
        <line
          x1="50"
          y1="72"
          x2="50"
          y2="95"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
        />
        <line
          x1="5"
          y1="50"
          x2="28"
          y2="50"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
        />
        <line
          x1="72"
          y1="50"
          x2="95"
          y2="50"
          stroke="#A90E02"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}