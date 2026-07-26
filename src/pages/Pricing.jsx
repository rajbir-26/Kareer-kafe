import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';
import ShinyPill from '../components/ShinyPill';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-eternalo">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center animate-fade-up">
            
            {/* Top Emotional Banner */}
            <div className="inline-flex items-center gap-2 bg-brand-text/10 border border-brand-border px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-brand-text mb-6 shadow-sm hover:scale-105 transition-transform backdrop-blur-sm tracking-normal">
              <span>❤️</span> Save that subscription money and buy something special for your family instead.
            </div>

            {/* Main Headline */}
            <h1 className="font-lumiare text-3xl sm:text-5xl font-bold text-brand-text tracking-wide mb-3 leading-tight">
              Ladies and Gentlemen, <br />
              <ShinyPill 
                text="It’s 100% Free Forever."
                textColor="var(--text-brand)"
                shineColor="#FFD700"
                speed={2}
                className="font-lumiare text-3xl sm:text-5xl font-bold tracking-wide"
              />
            </h1>

            <p className="text-brand-text/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-semibold tracking-normal">
              No hidden subscriptions. No "Upgrade to Pro to apply". No credit card required. Just find your job, apply, and make your loved ones proud! 🚀
            </p>

            {/* Pricing Grid (Compact Free Card) */}
            <div className="max-w-lg mx-auto bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              
              {/* Top Right Ribbon */}
              <div className="absolute top-4 -right-12 bg-brand-text text-brand-bg text-[10px] font-bold uppercase tracking-widest px-12 py-1 rotate-45 shadow-sm font-lumiare">
                BEST DEAL
              </div>

              <div className="text-left mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-text/70 font-lumiare">The Student & Job Seeker Plan</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-lumiare text-5xl font-bold text-brand-text">₹0</span>
                  <span className="text-brand-text/80 font-bold text-sm">/ forever</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-left text-sm font-semibold text-brand-text/90 mb-8 border-t border-brand-border pt-6 tracking-normal">
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-bold text-base">✓</span> Unlimited job searching & filtering
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-bold text-base">✓</span> Direct application links with zero paywalls
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-bold text-base">✓</span> Zero annoying "Buy Premium" popups
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-bold text-base">✓</span> 100% free resume & career tips
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-bold text-base">✓</span> Peace of mind for your bank account
                </li>
              </ul>

              <Link
                to="/jobs"
                className="block w-full bg-brand-text hover:opacity-90 text-brand-bg text-sm sm:text-base font-bold py-3.5 rounded-2xl transition-all active:scale-95 shadow-sm text-center tracking-normal"
              >
                Start Applying Now (For ₹0) ↗
              </Link>
            </div>

            {/* Social Support Section */}
            <div className="mt-8 max-w-lg mx-auto bg-brand-text/5 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md font-arial">
              {/* Updated: Swapped font-lumiare to font-arial with tight tracking for clean rendering */}
              <h3 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text mb-1 tracking-tight">
                Want to support us anyway? ❤️
              </h3>
              <p className="text-xs sm:text-sm text-brand-text/80 mb-5 font-semibold leading-relaxed tracking-normal font-arial">
                If KareerKafe helped you find a job, support us by following our social channels!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* WhatsApp */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 bg-brand-text hover:opacity-90 text-brand-bg font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm cursor-pointer font-arial"
                >
                  <span>💬</span> WhatsApp
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 bg-brand-text hover:opacity-90 text-brand-bg font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm cursor-pointer font-arial"
                >
                  <span>📸</span> Instagram
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 bg-brand-text hover:opacity-90 text-brand-bg font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm cursor-pointer font-arial"
                >
                  <span>▶️</span> YouTube
                </a>
              </div>
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}