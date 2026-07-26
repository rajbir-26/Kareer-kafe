import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ShinyPill from "./ShinyPill";

export default function HeroLeft() {
  return (
    <div className="flex w-full flex-col justify-center lg:pr-8 font-eternalo text-brand-text">

      {/* Label */}
      <div className="mb-4 sm:mb-8 flex items-center gap-3 sm:gap-4">
        <div className="h-[2px] w-8 sm:w-12 rounded-full bg-brand-text" />
        <span className="font-eternalo text-[12px] sm:text-[14px] lg:text-[15px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-brand-text">
          For Students. By Students.
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-lumiare text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-bold leading-[1.05] sm:leading-[0.98] lg:leading-[0.95] tracking-wide text-brand-text">
        Jobs should be
        <br />
        <span className="inline-block my-1">
          <ShinyPill 
            text="easier to find."
            textColor="var(--text-brand)"
            shineColor="#FFD700"
            speed={2}
            className="font-lumiare italic text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-bold tracking-wide"
          />
        </span>
        <br />
        Not harder.
      </h1>

      {/* Decorative underline */}
      <svg
        className="mt-4 sm:mt-6 w-[80px] sm:w-[110px]"
        width="110"
        height="20"
        viewBox="0 0 110 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 10C12 2 22 18 32 10C42 2 52 18 62 10C72 2 82 18 92 10"
          stroke="var(--text-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Paragraph */}
      <p className="mt-5 sm:mt-8 max-w-[470px] font-eternalo text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] text-brand-text/85 font-medium tracking-normal">
        Stop jumping between dozens of websites.
        <br className="hidden sm:inline" />
        Discover verified opportunities in one clean,
        <br className="hidden sm:inline" />
        focused place built for students and freshers.
      </p>

      {/* CTA Button */}
      <div className="mt-8 sm:mt-14 w-full sm:w-auto">
        <Link
          to="/jobs"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 rounded-full bg-brand-text px-8 sm:px-10 py-4 sm:py-5 font-eternalo text-[17px] sm:text-[20px] font-bold text-brand-bg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 tracking-normal"
        >
          Explore Jobs
          <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.2} />
        </Link>
      </div>

    </div>
  );
}