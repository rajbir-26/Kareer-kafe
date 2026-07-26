import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';
import { fetchTipsFromSheet } from '../services/tipsData';
import { ArrowLeft, Copy, Check, ExternalLink, Play, Sparkles } from 'lucide-react';

// Helper function to auto-convert any YouTube URL format to an embed URL
const getEmbedUrl = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

export default function TipDetails() {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    async function loadTipData() {
      try {
        setLoading(true);
        const categories = await fetchTipsFromSheet();
        const foundTip = categories.find((t) => t.id === id);
        setTip(foundTip || null);
      } catch (err) {
        console.error("Error loading category details:", err);
      } finally {
        setLoading(false);
      }
    }
    loadTipData();
  }, [id]);

  const handleCopyPrompt = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between relative overflow-hidden font-arial">
        <BackgroundDecor />
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <div className="py-32 text-center text-brand-text/80 font-semibold text-base animate-fade-in font-arial">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-text border-t-transparent mb-3"></div>
            <p>Fetching resources from Google Sheets...</p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between relative overflow-hidden font-arial">
        <BackgroundDecor />
        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center animate-fade-up">
            <div className="bg-brand-bg/40 border-2 border-brand-border rounded-3xl p-8 sm:p-10 shadow-sm backdrop-blur-sm font-arial">
              <span className="text-4xl mb-3 block">⚠️</span>
              <h2 className="font-arial text-2xl sm:text-3xl font-extrabold text-brand-text mb-2 tracking-tight">Category Not Found</h2>
              <p className="text-sm sm:text-base text-brand-text/80 mb-6 font-semibold">The requested career tip section does not exist.</p>
              <Link
                to="/tips"
                className="inline-flex items-center gap-2 bg-brand-text text-brand-bg text-sm font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-sm tracking-normal font-arial"
              >
                <ArrowLeft size={18} /> Back to All Tips
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-arial">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
            
            {/* Back Button */}
            <Link
              to="/tips"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-text hover:opacity-80 mb-6 transition-transform active:scale-95 tracking-normal font-arial"
            >
              <ArrowLeft size={18} /> Back to Career Playbook
            </Link>

            {/* Top Banner Header */}
            <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-sm mb-8 transition-all duration-300 hover:shadow-md font-arial">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl p-2.5 bg-brand-text/10 rounded-2xl border border-brand-border">
                  {tip.icon}
                </span>
                <span className="font-arial text-xs sm:text-sm font-extrabold text-brand-bg bg-brand-text px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {tip.badge}
                </span>
              </div>

              <h1 className="font-lumiare text-3xl sm:text-4xl font-bold text-brand-text tracking-wide mb-3">
                {tip.title}
              </h1>
              <p className="text-sm sm:text-base text-brand-text/85 font-semibold leading-relaxed tracking-normal font-arial">
                {tip.shortDesc}
              </p>
            </div>

            {/* Section 1: Curated YouTube Videos */}
            {tip.youtubeVideos && tip.youtubeVideos.length > 0 && (
              <div className="mb-10 font-arial">
                <div className="flex items-center gap-2.5 mb-5">
                  <Play size={20} className="text-brand-text" />
                  <h2 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text tracking-tight uppercase">
                    Recommended YouTube Roadmaps
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {tip.youtubeVideos.map((video, idx) => (
                    <div key={idx} className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-text font-arial">
                      <div className="aspect-video w-full rounded-xl overflow-hidden mb-3.5 bg-brand-text/10">
                        <iframe
                          src={getEmbedUrl(video.url)}
                          title={video.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <h3 className="font-arial text-sm sm:text-base font-extrabold text-brand-text line-clamp-1 tracking-tight">{video.title}</h3>
                      <p className="text-xs text-brand-text/75 font-bold mt-1 tracking-normal">{video.channel}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Copyable AI Prompts */}
            {tip.prompts && tip.prompts.length > 0 && (
              <div className="mb-10 font-arial">
                <div className="flex items-center gap-2.5 mb-5">
                  <Sparkles size={20} className="text-brand-text" />
                  <h2 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text tracking-tight uppercase">
                    Copyable AI Prompts
                  </h2>
                </div>

                <div className="space-y-5">
                  {tip.prompts.map((p, idx) => (
                    <div key={idx} className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md font-arial">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h3 className="font-arial text-sm sm:text-base font-extrabold text-brand-text tracking-tight">{p.title}</h3>
                        <button
                          onClick={() => handleCopyPrompt(p.promptText, idx)}
                          className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-brand-bg bg-brand-text hover:opacity-90 px-4 py-2 rounded-xl transition-all cursor-pointer active:scale-95 shadow-sm w-fit font-arial"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check size={14} className="text-brand-bg" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={14} /> Copy Prompt
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-brand-text/10 border border-brand-border rounded-xl p-4 text-xs sm:text-sm text-brand-text font-mono leading-relaxed select-all">
                        {p.promptText}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Resources & Links */}
            {tip.resources && tip.resources.length > 0 && (
              <div className="mb-10 font-arial">
                <h2 className="font-arial text-lg sm:text-xl font-extrabold text-brand-text mb-5 tracking-tight uppercase">
                  Downloads & Direct Links
                </h2>

                <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 shadow-sm divide-y divide-brand-border">
                  {tip.resources.map((res, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4 font-arial">
                      <span className="text-sm sm:text-base font-extrabold text-brand-text">{res.name}</span>
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-text hover:opacity-80 active:scale-95 transition-all underline underline-offset-4 shrink-0 cursor-pointer font-arial"
                      >
                        Access Resource <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State if no resources exist for this category yet */}
            {(!tip.youtubeVideos?.length && !tip.prompts?.length && !tip.resources?.length) && (
              <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-8 sm:p-10 text-center shadow-sm font-arial">
                <span className="text-4xl mb-3 block">📌</span>
                <h3 className="font-arial text-base sm:text-lg font-extrabold text-brand-text mb-2 tracking-tight">New Resources Coming Soon</h3>
                <p className="text-sm text-brand-text/80 font-semibold max-w-md mx-auto">
                  We are curating high-quality guides for this category. Check back shortly!
                </p>
              </div>
            )}

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}