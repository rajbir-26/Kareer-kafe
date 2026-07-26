import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';
import ShinyPill from '../components/ShinyPill';
import { fetchTipsFromSheet } from '../services/tipsData';
import { ArrowRight } from 'lucide-react';

export default function Tips() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        const data = await fetchTipsFromSheet();
        setCategories(data);
      } catch (err) {
        console.error("Error loading tips categories:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-arial">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
            
            {/* Header Banner */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="font-arial text-xs sm:text-sm font-extrabold text-brand-bg bg-brand-text px-4 py-1.5 rounded-full uppercase tracking-wider inline-block hover:scale-105 transition-transform shadow-xs">
                Career Playbook
              </span>
              <h1 className="font-lumiare text-3xl sm:text-5xl font-bold text-brand-text tracking-wide mt-4 mb-3 leading-tight">
                <ShinyPill 
                  text="Career Tips & Free Resources"
                  textColor="var(--text-brand)"
                  shineColor="#FFD700"
                  speed={2}
                  className="font-lumiare text-3xl sm:text-5xl font-bold tracking-wide"
                />
              </h1>
              <p className="text-sm sm:text-base text-brand-text/85 font-semibold max-w-xl mx-auto tracking-normal font-arial">
                Actionable guides, copyable AI prompts, YouTube roadmaps, and curated tools to fast-track your job search.
              </p>
            </div>

            {/* Loading Indicator */}
            {loading ? (
              <div className="py-20 text-center text-brand-text/80 font-semibold text-base animate-fade-in font-arial">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-text border-t-transparent mb-3"></div>
                <p>Loading career playbook...</p>
              </div>
            ) : (
              /* 2 x 4 Grid Section */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-arial">
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    to={`/tips/${item.id}`}
                    className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border hover:border-brand-text rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group cursor-pointer font-arial"
                  >
                    <div>
                      {/* Top Badge & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl sm:text-4xl p-3 bg-brand-text/10 rounded-2xl border border-brand-border group-hover:scale-105 transition-transform">
                          {item.icon}
                        </span>
                        <span className="font-arial text-xs font-extrabold text-brand-bg bg-brand-text px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text group-hover:text-[#A90E02] transition-colors mb-2.5 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed font-semibold mb-6 tracking-normal font-arial">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Footer Action Link */}
                    <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs sm:text-sm font-bold text-brand-text group-hover:underline tracking-normal font-arial">
                      <span>Explore Guides & Resources</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}