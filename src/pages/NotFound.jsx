import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FFFBD4] text-[#A90E02] flex flex-col items-center justify-center px-4 font-arial text-center relative overflow-hidden">
      
      {/* Decorative Background Blob */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#A90E02]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        
        {/* Large 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter drop-shadow-sm select-none">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#A90E02]">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-[#A90E02]/80 font-semibold leading-relaxed">
            Oops! The page or job listing you are looking for doesn't exist, has been moved, or is no longer available.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A90E02] text-[#FFFBD4] text-sm font-bold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all active:scale-95"
          >
            <HomeIcon size={16} />
            <span>Go Back Home</span>
          </Link>

          <Link
            to="/jobs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFBD4] text-[#A90E02] border-2 border-[#A90E02] text-sm font-bold px-6 py-3 rounded-full shadow-sm hover:bg-[#A90E02]/10 transition-all active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Browse Jobs</span>
          </Link>
        </div>

      </div>

    </div>
  );
}