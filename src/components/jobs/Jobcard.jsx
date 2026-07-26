import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  // Generate logo fallback background dynamically
  const bgColors = {
    N: 'bg-[#A90E02]/10 text-[#A90E02]',
    SW: 'bg-[#A90E02]/15 text-[#A90E02]',
    G: 'bg-[#A90E02] text-[#FFFBD4]',
    Z: 'bg-[#A90E02]/10 text-[#A90E02]',
    L: 'bg-[#A90E02]/20 text-[#A90E02]'
  };

  const logoStyle = bgColors[job.logoText] || 'bg-[#A90E02] text-[#FFFBD4]';

  // Fallback checks for property name variations coming from API/Google Sheet
  const roleTitle = job.role || job.title || 'Position';
  const workMode = job.workMode || job.mode || job['work mode'] || 'Remote';
  const rawType = job.type || job.jobType || job['job type'] || 'Full Time';
  const tagsList = job.tags || job.skills || [];
  const postedDate = job.postedTime || job.postedDate || job.date || 'Recently';

  // Compensation Label
  const isInternship = rawType.toString().toLowerCase().includes('intern');
  const compValue = job.stipend || job.salary || 'Competitive';
  const compLabel = isInternship ? `Stipend: ${compValue}` : `Salary: ${compValue}`;

  return (
    <Link 
      to={`/jobs/${job.id}`}
      className="bg-[#FFFBD4] border-2 border-[#A90E02]/20 hover:border-[#A90E02] rounded-2xl p-4 sm:p-5 transition-all duration-200 shadow-sm hover:shadow-md block group cursor-pointer font-arial text-[#A90E02]"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Side: Logo & Main Info */}
        <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 flex-1">
          
          {/* Logo Badge / Image */}
          {job.logoUrl ? (
            <img 
              src={job.logoUrl} 
              alt={job.company} 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-contain border border-[#A90E02]/20 bg-[#FFFBD4] p-1 shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
          ) : null}

          {/* Logo Fallback Badge */}
          <div 
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${logoStyle}`}
            style={{ display: job.logoUrl ? 'none' : 'flex' }}
          >
            {job.logoText || job.company?.charAt(0) || 'J'}
          </div>

          <div className="min-w-0 flex-1">
            {/* Role Title - Updated to Arial Bold for crisp readability */}
            <h3 className="font-arial text-lg sm:text-xl font-extrabold text-[#A90E02] group-hover:text-[#FF3B30] transition-colors truncate tracking-tight">
              {roleTitle}
            </h3>

            {/* Company & Details Row */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs sm:text-sm text-[#A90E02]/80 font-bold tracking-normal font-arial">
              <span className="font-extrabold text-[#A90E02]">{job.company}</span>
              
              <span>•</span>
              
              {/* Prominent Job Type Tag */}
              <span className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-bold bg-[#A90E02] text-[#FFFBD4] capitalize tracking-wide font-arial">
                {rawType}
              </span>

              <span>•</span>
              <span>📍 {job.location || 'Remote'}</span>

              <span>•</span>
              <span className="font-bold text-[#A90E02]">🖥️ {workMode}</span>

              <span>•</span>
              <span className="font-bold text-[#A90E02]">💵 {compLabel}</span>
            </div>

            {/* Skills / Tags */}
            {tagsList.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {tagsList.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#A90E02]/10 text-[#A90E02] border border-[#A90E02]/20 font-arial"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Posted Time */}
        <div className="shrink-0 text-right">
          <span className="text-[11px] sm:text-xs text-[#A90E02]/70 font-bold whitespace-nowrap block font-arial">
            {postedDate}
          </span>
        </div>

      </div>
    </Link>
  );
}