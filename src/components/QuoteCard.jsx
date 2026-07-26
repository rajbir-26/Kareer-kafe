import React from "react";
import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="w-[170px] sm:w-[195px] bg-[#FFFBD4] px-5 py-6 sm:px-7 sm:py-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl group border-2 border-[#A90E02]/20 font-eternalo">
      <Quote
        size={38}
        className="mb-4 sm:mb-5 text-[#A90E02] fill-current transition-transform duration-300 group-hover:scale-110 sm:w-[42px] sm:h-[42px]"
        strokeWidth={2}
      />

      <h3 className="font-lumiare text-[18px] sm:text-[21px] leading-[1.35] text-[#A90E02] font-bold tracking-wide">
        The right
        <br />
        opportunity
        <br />
        can change
        <br />
        <span className="italic text-[#FF3B30] font-extrabold">
          everything.
        </span>
      </h3>
    </div>
  );
}