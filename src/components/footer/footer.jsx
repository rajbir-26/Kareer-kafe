import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#A90E02] text-[#FFFBD4] pt-12 pb-8 px-4 sm:px-8 mt-16 font-arial border-t border-[#FFFBD4]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            {/* Fixed: Uses font-arial with clean tracking so KareerKafe is crisp and readable */}
            <span className="font-arial text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFBD4]">
              KareerKafe
            </span>
            <span className="bg-[#FFFBD4] text-[#A90E02] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-arial">
              JOB FEED
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#FFFBD4]/90 font-bold leading-relaxed max-w-sm">
            Empowering job seekers with verified, real-time career opportunities. Find your next role with confidence and simplicity.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFFBD4]/80 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Data Sync Active
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFFBD4]/70 font-arial block mb-3">Navigation</span>
          <ul className="space-y-2 text-xs sm:text-sm font-bold">
            <li>
              <Link to="/jobs" className="hover:underline transition-all">Browse All Jobs</Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:underline transition-all">Location Search</Link>
            </li>
            <li>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="hover:underline transition-all cursor-pointer text-left"
              >
                Back to Top ↑
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Support Box */}
        <div className="bg-[#FFFBD4]/10 border border-[#FFFBD4]/30 rounded-2xl p-5 shadow-sm space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFFBD4] font-arial block">🛡️ Employers & Recruiters</span>
          <p className="text-xs text-[#FFFBD4]/90 font-bold leading-relaxed">
            Want to update a posting or request listing removal? We respect employer rights and process takedown requests quickly.
          </p>
          <a
            href="mailto:support@applynest.com"
            className="inline-block bg-[#FFFBD4] text-[#A90E02] text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all shadow-sm"
          >
            Contact Support ✉️
          </a>
        </div>

      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-[#FFFBD4]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FFFBD4]/80 font-bold">
        <p className="max-w-2xl leading-relaxed">
          <strong>Legal Disclaimer:</strong> KareerKafe is an independent job aggregation portal. All job postings, company details, salaries, and application requirements are sourced from direct employer submissions or public channels.
        </p>
        <p className="shrink-0">© 2026 KareerKafe • Built for Job Seekers</p>
      </div>
    </footer>
  );
}