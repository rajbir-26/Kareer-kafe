import React from 'react';
import { BadgeCheck, BriefcaseBusiness } from "lucide-react";

export default function FloatingCard() {
  return (
    <div className="rounded-[24px] sm:rounded-[30px] bg-[#FFFBD4] border-2 border-[#A90E02]/20 p-5 sm:p-6 shadow-md hover:shadow-lg transition-all font-eternalo text-[#A90E02]">

      {/* Top Header Section */}
      <div className="flex items-center gap-3.5 sm:gap-4">

        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#A90E02]/10">
          <BadgeCheck
            className="text-[#A90E02]"
            size={26}
            strokeWidth={2.2}
          />
        </div>

        <div>
          <h3 className="font-lumiare text-[17px] sm:text-[19px] font-bold tracking-wide text-[#A90E02]">
            Verified Opportunity
          </h3>

          <p className="mt-0.5 sm:mt-1 text-xs sm:text-[15px] font-semibold opacity-80 tracking-normal">
            Remote • Internship
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="my-4 sm:my-5 h-px bg-[#A90E02]/20" />

      {/* Bottom Details Section */}
      <div className="flex items-center justify-between gap-2">

        <div>
          <p className="text-xs sm:text-sm font-medium opacity-75 tracking-normal">
            Company
          </p>

          <h4 className="mt-0.5 sm:mt-1 font-lumiare text-base sm:text-lg font-bold tracking-wide text-[#A90E02]">
            ApplyNest
          </h4>
        </div>

        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#A90E02] text-[#FFFBD4]">
          <BriefcaseBusiness size={20} className="sm:w-[22px] sm:h-[22px]" />
        </div>

      </div>
    </div>
  );
}