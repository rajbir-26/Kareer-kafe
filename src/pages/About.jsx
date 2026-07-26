import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';
import ShinyPill from '../components/ShinyPill';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-arial">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
            
            {/* Hero Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-text/10 border border-brand-border px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-extrabold text-brand-text mb-4 shadow-sm hover:scale-105 transition-transform backdrop-blur-sm tracking-normal font-arial">
                <span>🪺</span> Built for Students & Job Seekers
              </div>

              <h1 className="font-lumiare text-3xl sm:text-5xl font-bold text-brand-text tracking-wide mb-4 leading-tight">
                Reinventing How You Find <br />
                <span className="inline-block mt-1">
                  <ShinyPill 
                    text="Your Next Big Opportunity"
                    textColor="var(--text-brand)"
                    shineColor="#FFD700"
                    speed={2}
                    className="font-lumiare text-3xl sm:text-5xl font-bold tracking-wide"
                  />
                </span>
              </h1>

              <p className="text-brand-text/80 text-xs sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto tracking-normal font-arial">
                No hidden paywalls, no endless application loops, and zero fake listings. KareerKafe was built out of pure frustration with modern job portals.
              </p>
            </div>

            {/* Grid Layout for Q&A Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 font-arial">
              
              {/* 1. What Problem Does KareerKafe Solve? */}
              <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-text font-arial">
                <div className="text-2xl mb-3">🛠️</div>
                <h3 className="font-arial text-base sm:text-lg font-extrabold text-brand-text mb-2 tracking-tight">
                  What problem do we solve?
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed font-semibold tracking-normal font-arial">
                  Traditional job portals force job seekers through endless registration steps, paywalls, and outdated listings. We eliminate the noise by serving verified, real-time job feeds and direct application links without asking for money or wasting your time.
                </p>
              </div>

              {/* 2. Why Choose KareerKafe over LinkedIn, Internshala, & Indeed? */}
              <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-text font-arial">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-arial text-base sm:text-lg font-extrabold text-brand-text mb-2 tracking-tight">
                  Why choose us over legacy platforms?
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed font-semibold tracking-normal font-arial">
                  Unlike traditional job portals that are cluttered with social media noise, hidden paywalls, or endless application loops, KareerKafe cuts straight to what matters: verified roles, zero fluff, and direct application links.
                </p>
              </div>

              {/* 3. What Makes KareerKafe Memorable? */}
              <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-text font-arial">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-arial text-base sm:text-lg font-extrabold text-brand-text mb-2 tracking-tight">
                  What makes KareerKafe memorable?
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed font-semibold tracking-normal font-arial">
                  We respect your intelligence and time. From transparent "Free Forever" values to direct employer links and clean UI, KareerKafe doesn't try to lock you inside a portal—we help you leave with an application submitted!
                </p>
              </div>

              {/* 4. What Emotions Should Users Feel? */}
              <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-text font-arial">
                <div className="text-2xl mb-3">🕊️</div>
                <h3 className="font-arial text-base sm:text-lg font-extrabold text-brand-text mb-2 tracking-tight">
                  How should you feel using KareerKafe?
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed font-semibold tracking-normal font-arial">
                  Relief and clarity. Job hunting is stressful enough without deceptive ads or paywalls. We want every user to feel empowered, confident, and calm while searching for their next career milestone.
                </p>
              </div>

            </div>

            {/* Banner: What First-Time Users Say */}
            <div className="bg-brand-text/5 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 text-center max-w-3xl mx-auto shadow-sm transition-all duration-300 hover:shadow-md font-arial">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-text font-arial">First Impression</span>
              <blockquote className="font-arial text-base sm:text-xl font-extrabold text-brand-text mt-3 mb-2 italic tracking-tight">
                "Finally... a job portal that doesn't waste my time or ask for my credit card."
              </blockquote>
              <p className="text-xs text-brand-text/70 font-semibold tracking-normal font-arial">
                — What every first-time KareerKafe user should say.
              </p>
            </div>

            {/* Goals Section */}
            <div className="bg-brand-bg/60 border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-md transition-all duration-300 hover:shadow-lg font-arial">
              <h2 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text mb-6 text-center tracking-tight uppercase">
                Our Core Goals 🎯
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-arial">
                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-brand-text/10">
                  <div className="font-arial text-sm sm:text-base font-extrabold text-brand-text tracking-tight">1. Zero-Paywall Access</div>
                  <p className="text-xs text-brand-text/80 font-semibold leading-relaxed tracking-normal font-arial">
                    Keep job search tools 100% free for students and job seekers, permanently.
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-brand-text/10">
                  <div className="font-arial text-sm sm:text-base font-extrabold text-brand-text tracking-tight">2. Direct Verification</div>
                  <p className="text-xs text-brand-text/80 font-semibold leading-relaxed tracking-normal font-arial">
                    Filter out scam listings and ensure applicants reach legitimate hiring portals.
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl transition-colors hover:bg-brand-text/10">
                  <div className="font-arial text-sm sm:text-base font-extrabold text-brand-text tracking-tight">3. Frictionless Design</div>
                  <p className="text-xs text-brand-text/80 font-semibold leading-relaxed tracking-normal font-arial">
                    Provide the fastest, cleanest job hunting interface built specifically for modern candidates.
                  </p>
                </div>
              </div>
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}