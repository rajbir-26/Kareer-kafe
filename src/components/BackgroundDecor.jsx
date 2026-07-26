import React from 'react';

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Full Page Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-60" />

      {/* 2. Top-Left Floating Vector Ring */}
      <div className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[1.5px] border-[#A90E02]/15 animate-float" />
      <div className="absolute -top-10 -left-10 sm:-top-12 sm:-left-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-dashed border-[#A90E02]/10 animate-float" />

      {/* 3. Top-Right Geometric Lines Accent */}
      <svg
        className="absolute top-8 right-4 sm:top-12 sm:right-6 w-48 h-48 sm:w-72 sm:h-72 text-[#A90E02]/10 opacity-80"
        fill="none"
        viewBox="0 0 200 200"
      >
        <pattern id="diagonal-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 20 L 20 0 M 0 0 L 20 20" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
        <rect width="200" height="200" fill="url(#diagonal-lines)" />
      </svg>

      {/* 4. Bottom-Left Decorative Starburst SVG */}
      <svg
        className="absolute bottom-16 -left-10 sm:bottom-20 sm:-left-12 w-36 h-36 sm:w-48 sm:h-48 text-[#A90E02]/15 animate-float"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* 5. Bottom-Right Concentric Rings */}
      <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-[2px] border-[#A90E02]/10" />
      <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-[#A90E02]/10" />
    </div>
  );
}