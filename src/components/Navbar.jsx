import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ShinyPill from "./ShinyPill";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Tips", path: "/tips" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#A90E02] text-[#FFFBD4] transition-all duration-300 font-eternalo border-b border-[#FFFBD4]/20 shadow-md">
      <div className="mx-auto flex h-[72px] sm:h-[88px] max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-16">

        {/* Logo wrapped with ShinyPill */}
        <Link to="/" className="select-none transition-transform hover:scale-[1.02] active:scale-95 flex items-center">
          <ShinyPill 
            text="KareerKafe"
            textColor="#FFFBD4"
            shineColor="#FFD700"
            speed={2}
            className="font-moara text-[32px] sm:text-[42px] lg:text-[54px] font-bold tracking-wide leading-none"
          />
        </Link>

        {/* Desktop Nav - Floating Pill Menu (Untouched Layout & Colors) */}
        <nav className="hidden lg:flex items-center gap-8 rounded-full border border-[#A90E02]/20 bg-[#FFFBD4] px-10 py-3.5 shadow-sm transition-all hover:shadow-md hover:border-[#A90E02]/40">
          {links.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-[17px] font-bold transition-colors duration-200 py-1 active:scale-95 tracking-normal ${
                  isActive ? "text-[#A90E02]" : "text-[#A90E02]/80 hover:text-[#A90E02]"
                }`}
              >
                {item.name}
                {/* Active Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#A90E02] rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Layout Spacer */}
        <div className="hidden w-[180px] lg:block" />

        {/* Mobile / Tablet Toggle */}
        <button
          className="lg:hidden text-[#FFFBD4] hover:opacity-85 transition-transform active:scale-90 p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
        >
          {open ? (
            <X size={28} className="sm:w-[30px] sm:h-[30px]" />
          ) : (
            <Menu size={28} className="sm:w-[30px] sm:h-[30px]" />
          )}
        </button>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {open && (
        <div className="border-t border-[#FFFBD4]/20 bg-[#A90E02] lg:hidden animate-fade-up shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-5 px-6 sm:px-8 py-6 sm:py-8">
            {links.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-base sm:text-lg font-semibold transition-all duration-200 active:scale-95 flex items-center justify-between tracking-normal ${
                    isActive
                      ? "text-[#FFFBD4] font-bold"
                      : "text-[#FFFBD4]/80 hover:text-[#FFFBD4]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 bg-[#FFFBD4] rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}