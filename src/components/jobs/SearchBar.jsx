import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 sm:mt-8 font-eternalo">
      <div className="flex items-center bg-[#FFFBD4] rounded-full shadow-sm border-2 border-[#A90E02]/20 hover:border-[#A90E02] transition-colors p-1.5 sm:p-2 pl-4 sm:pl-6 gap-2.5 sm:gap-3 w-full">
        
        {/* Search Icon */}
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 text-[#A90E02]/60 shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        {/* Full-width Search Input */}
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by role, company or skills (e.g. React, Notion, Python)..."
          className="w-full bg-transparent border-none outline-none text-[#A90E02] placeholder-[#A90E02]/50 text-xs sm:text-sm font-semibold py-1.5 sm:py-2 tracking-normal"
        />

        {/* Clear Search Query Button (Shows when typing) */}
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="text-[#FFFBD4] bg-[#A90E02] hover:opacity-90 active:scale-95 text-[11px] sm:text-xs px-3 py-1 rounded-full font-bold transition-all shrink-0 cursor-pointer"
          >
            Clear
          </button>
        )}

      </div>
    </div>
  );
}