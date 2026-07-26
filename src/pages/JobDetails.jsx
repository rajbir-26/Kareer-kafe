import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import BackgroundDecor from '../components/BackgroundDecor';
import { fetchJobsFromSheet } from '../services/jobs';
import { ArrowLeft, MapPin, Briefcase, DollarSign, Calendar, ExternalLink } from 'lucide-react';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadJob() {
      try {
        setLoading(true);
        const jobs = await fetchJobsFromSheet();
        const foundJob = jobs.find((j) => String(j.id) === String(id));
        
        if (foundJob) {
          setJob(foundJob);
        } else {
          setError('Job listing not found or has been removed.');
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to load job details. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    loadJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between relative overflow-hidden font-arial">
        <Navbar />
        <div className="py-32 text-center text-brand-text/70 font-semibold text-sm animate-fade-in font-arial">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-text border-t-transparent mb-3"></div>
          <p>Loading opportunity details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between relative overflow-hidden font-arial">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center animate-fade-up">
          <div className="bg-brand-bg/40 border-2 border-brand-border rounded-3xl p-8 sm:p-10 shadow-sm backdrop-blur-sm font-arial">
            <span className="text-4xl mb-3 block">⚠️</span>
            <h2 className="font-arial text-xl sm:text-2xl font-bold text-brand-text mb-2 tracking-wide">Listing Not Found</h2>
            <p className="text-xs sm:text-sm text-brand-text/70 mb-6 font-semibold">{error || "The job you're looking for doesn't exist."}</p>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-brand-text text-brand-bg text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-sm tracking-normal font-arial"
            >
              <ArrowLeft size={16} /> Back to All Jobs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Extract variables cleanly with fallbacks
  const rawType = job.type || job.jobType || job['job type'] || 'Full Time';
  const workMode = job.workMode || job.mode || job['work mode'] || 'On-Site';
  const isInternship = rawType.toString().toLowerCase().includes('intern');

  // Pulls compensation value & formats dynamic label
  const compValue = job.stipend || job.salary || 'Competitive';
  const compLabel = isInternship ? 'Stipend' : 'Salary';

  // Format description paragraphs
  const descriptionParagraphs = job.description
    ? job.description.split('\n').filter((p) => p.trim() !== '')
    : ['No detailed description provided for this role.'];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-arial">
      
      {/* Background Decor */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 animate-fade-up">
            
            {/* Back Navigation */}
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-text hover:opacity-75 mb-6 transition-transform active:scale-95 tracking-normal font-arial"
            >
              <ArrowLeft size={16} /> Back to Openings
            </Link>

            {/* Top Job Header Card */}
            <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-sm mb-8 transition-all duration-300 hover:shadow-md font-arial">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-brand-border">
                {/* Logo / Badge */}
                {job.logoUrl ? (
                  <img
                    src={job.logoUrl}
                    alt={job.company}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain border border-brand-border p-2 shrink-0 bg-brand-text/10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-text text-brand-bg flex items-center justify-center font-bold text-xl shrink-0"
                  style={{ display: job.logoUrl ? 'none' : 'flex' }}
                >
                  {job.company?.charAt(0).toUpperCase() || 'J'}
                </div>

                <div>
                  <h1 className="font-arial text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
                    {job.role || job.title}
                  </h1>
                  <p className="text-sm sm:text-base font-extrabold text-brand-text/90 mt-1 tracking-normal font-arial">
                    {job.company}
                  </p>
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-arial">
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-brand-text shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-text/60 uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-text">{job.location || 'Remote'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Briefcase size={18} className="text-brand-text shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-text/60 uppercase tracking-wider block">Job Type</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-text capitalize">
                      {rawType} ({workMode})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <DollarSign size={18} className="text-brand-text shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-text/60 uppercase tracking-wider block">{compLabel}</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-text">{compValue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar size={18} className="text-brand-text shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-text/60 uppercase tracking-wider block">Posted</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-text">{job.postedTime || 'Recently'}</span>
                  </div>
                </div>
              </div>

              {/* Skills / Tags */}
              {job.tags && job.tags.length > 0 && (
                <div className="mt-6 pt-6 border-t border-brand-border font-arial">
                  <span className="text-[10px] font-bold text-brand-text/60 uppercase tracking-wider block mb-2">Required Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-text/10 text-brand-text text-xs font-bold px-3 py-1 rounded-lg border border-brand-border transition-transform hover:scale-105 font-arial"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Job Description Card */}
            <div className="bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-3xl p-6 sm:p-8 shadow-sm mb-8 transition-all duration-300 hover:shadow-md font-arial">
              <h2 className="font-arial text-base sm:text-lg font-bold text-brand-text mb-4 pb-2 border-b border-brand-border tracking-wider uppercase">
                Job Description
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-text/85 leading-relaxed font-semibold tracking-normal font-arial">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Action Box */}
            <div className="bg-brand-text/5 border-2 border-brand-border rounded-3xl p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md font-arial">
              <h3 className="font-arial text-base sm:text-lg font-bold text-brand-text mb-1 tracking-tight">Ready to submit your application?</h3>
              <p className="text-xs sm:text-sm text-brand-text/80 mb-6 font-semibold tracking-normal font-arial">
                You will be redirected directly to {job.company}'s official application form with zero paywalls.
              </p>

              {job.applyLink && job.applyLink !== '#' ? (
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-text hover:opacity-90 active:scale-95 text-brand-bg text-xs sm:text-sm font-bold px-8 py-3.5 rounded-2xl transition-all shadow-sm tracking-normal cursor-pointer font-arial"
                >
                  <span>Apply Now on Official Site</span> <ExternalLink size={16} />
                </a>
              ) : (
                <span className="text-xs sm:text-sm font-bold text-brand-text/50 font-arial">Application link unavailable</span>
              )}
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}