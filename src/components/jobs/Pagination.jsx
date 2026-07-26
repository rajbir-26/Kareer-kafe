import React from 'react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 mb-12 font-eternalo">
      {/* Previous Page Button */}
      <button 
        aria-label="Previous Page"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#A90E02]/20 flex items-center justify-center text-[#A90E02] hover:bg-[#A90E02]/10 active:scale-95 transition-all cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Active Page 1 */}
      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#A90E02] text-[#FFFBD4] font-bold text-xs sm:text-sm flex items-center justify-center shadow-sm cursor-pointer">
        1
      </button>
      
      {/* Page 2 */}
      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-transparent text-[#A90E02]/80 hover:border-[#A90E02]/30 hover:bg-[#A90E02]/10 font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer">
        2
      </button>
      
      {/* Page 3 */}
      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-transparent text-[#A90E02]/80 hover:border-[#A90E02]/30 hover:bg-[#A90E02]/10 font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer">
        3
      </button>
      
      {/* Ellipsis */}
      <span className="text-[#A90E02]/50 px-1 font-bold text-xs sm:text-sm select-none">
        ...
      </span>
      
      {/* Last Page */}
      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-transparent text-[#A90E02]/80 hover:border-[#A90E02]/30 hover:bg-[#A90E02]/10 font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer">
        52
      </button>

      {/* Next Page Button */}
      <button 
        aria-label="Next Page"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#A90E02]/20 flex items-center justify-center text-[#A90E02] hover:bg-[#A90E02]/10 active:scale-95 transition-all cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}