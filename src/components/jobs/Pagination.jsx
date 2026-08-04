import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 mb-12 font-eternalo">
      {/* Previous */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all ${
          currentPage === 1
            ? "border-[#A90E02]/10 text-[#A90E02]/30 cursor-not-allowed"
            : "border-[#A90E02]/20 text-[#A90E02] hover:bg-[#A90E02]/10 active:scale-95 cursor-pointer"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all ${
              currentPage === page
                ? "bg-[#A90E02] text-[#FFFBD4] shadow-sm"
                : "text-[#A90E02]/80 hover:border-[#A90E02]/30 hover:bg-[#A90E02]/10 border border-transparent"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all ${
          currentPage === totalPages
            ? "border-[#A90E02]/10 text-[#A90E02]/30 cursor-not-allowed"
            : "border-[#A90E02]/20 text-[#A90E02] hover:bg-[#A90E02]/10 active:scale-95 cursor-pointer"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}