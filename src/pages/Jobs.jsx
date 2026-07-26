import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/footer';
import SearchBar from '../components/jobs/SearchBar';
import Filters from '../components/jobs/Filters';
import JobCard from '../components/jobs/JobCard';
import Pagination from '../components/jobs/Pagination';
import BackgroundDecor from '../components/BackgroundDecor';
import ShinyPill from '../components/ShinyPill';
import { fetchJobsFromSheet } from '../services/jobs';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedWorkModes, setSelectedWorkModes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Fetch Jobs on Mount
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const data = await fetchJobsFromSheet();
        setJobs(data || []);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load job listings. Please check back shortly.');
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Dynamically extract all unique locations present in current jobs
  const availableLocations = useMemo(() => {
    const locSet = new Set();
    jobs.forEach((job) => {
      if (job.location && job.location.trim() !== '') {
        locSet.add(job.location.trim());
      }
    });
    return Array.from(locSet);
  }, [jobs]);

  // Robust Filter Logic
  const filteredJobs = jobs.filter((job) => {
    const jobTitle = (job.role || job.title || '').toString().toLowerCase();
    const jobCompany = (job.company || '').toString().toLowerCase();
    const jobLocation = (job.location || '').toString().toLowerCase().trim();
    const jobType = (job.type || job.jobType || '').toString().toLowerCase().trim();
    const jobWorkMode = (job.workMode || job.mode || job['work mode'] || '').toString().toLowerCase().trim();

    const matchesSearch =
      !searchQuery ||
      jobTitle.includes(searchQuery.toLowerCase()) ||
      jobCompany.includes(searchQuery.toLowerCase()) ||
      jobLocation.includes(searchQuery.toLowerCase());

    const matchesJobType =
      selectedJobTypes.length === 0 ||
      selectedJobTypes.some(
        (type) => jobType === type.toLowerCase().trim()
      );

    const matchesWorkMode =
      selectedWorkModes.length === 0 ||
      selectedWorkModes.some((mode) => {
        const targetMode = mode.toLowerCase().trim();
        return (
          jobWorkMode === targetMode ||
          jobWorkMode.replace('-', '') === targetMode.replace('-', '')
        );
      });

    const matchesLocation =
      !selectedLocation ||
      jobLocation === selectedLocation.toLowerCase().trim();

    return matchesSearch && matchesJobType && matchesWorkMode && matchesLocation;
  });

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedJobTypes, selectedWorkModes, selectedLocation]);

  // Pagination Calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedJobTypes([]);
    setSelectedWorkModes([]);
    setSelectedLocation('');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between antialiased relative overflow-hidden font-eternalo">
      
      {/* Background Vector Patterns & Shapes */}
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />

          {/* Top Search Banner */}
          <section className="w-full pt-8 sm:pt-12 pb-6 px-4 flex flex-col items-center justify-center text-center animate-fade-up">
            <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
              <h1 className="font-lumiare text-2xl sm:text-4xl md:text-5xl font-bold text-brand-text tracking-wide mb-3 text-center leading-tight">
                Find Opportunities <br className="sm:hidden" />
                <ShinyPill 
                  text="Built For You"
                  textColor="var(--text-brand)"
                  shineColor="#FFD700"
                  speed={2}
                  className="font-lumiare text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                />
              </h1>
              <p className="text-brand-text/85 text-sm sm:text-base font-semibold mb-8 leading-relaxed text-center px-2 tracking-normal max-w-xl font-arial">
                Search through active internships, full-time roles, and government listings with direct application routes.
              </p>

              <div className="w-full">
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
          </section>

          {/* Main Layout Grid */}
          <main className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-8 animate-fade-up">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              
              {/* Sidebar Filters */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <Filters
                  selectedJobTypes={selectedJobTypes}
                  setSelectedJobTypes={setSelectedJobTypes}
                  selectedWorkModes={selectedWorkModes}
                  setSelectedWorkModes={setSelectedWorkModes}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  availableLocations={availableLocations}
                  clearFilters={clearFilters}
                />
              </div>

              {/* Job Listings Area */}
              <section className="flex-1 w-full min-w-0">
                
                {/* Header Info - Clean Font & Red Number */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-brand-border">
                  <p className="font-arial text-xs sm:text-sm font-bold text-brand-text uppercase tracking-wider">
                    Showing <span className="text-[#A90E02] text-sm sm:text-base font-extrabold px-1">{filteredJobs.length}</span> Openings
                  </p>
                  {(selectedJobTypes.length > 0 || selectedWorkModes.length > 0 || selectedLocation || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm font-bold text-brand-text hover:opacity-80 active:scale-95 transition-all cursor-pointer underline underline-offset-4 font-arial"
                    >
                      Clear Active Filters
                    </button>
                  )}
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="py-20 text-center text-brand-text/80 font-semibold text-sm sm:text-base animate-fade-in font-arial">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-brand-text border-t-transparent mb-3"></div>
                    <p>Fetching fresh opportunities...</p>
                  </div>
                )}

                {/* Error State */}
                {!loading && error && (
                  <div className="bg-brand-bg/40 border-2 border-brand-border text-brand-text text-sm font-bold p-5 rounded-2xl text-center font-arial">
                    {error}
                  </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredJobs.length === 0 && (
                  <div className="bg-brand-bg/40 border-2 border-brand-border rounded-2xl p-8 sm:p-10 text-center shadow-sm animate-fade-in backdrop-blur-sm font-arial">
                    <span className="text-4xl mb-3 block">🔍</span>
                    <h3 className="font-arial text-base sm:text-lg font-bold text-brand-text mb-2 tracking-wide">
                      No openings matched your filters
                    </h3>
                    <p className="text-sm text-brand-text/80 mb-6 font-semibold tracking-normal max-w-md mx-auto">
                      Try loosening your search query or resetting the active filters.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="bg-brand-text text-brand-bg text-sm font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all active:scale-95 cursor-pointer shadow-sm tracking-normal font-arial"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* Stacked Cards Container */}
                {!loading && !error && currentJobs.length > 0 && (
                  <div className="flex flex-col gap-4 mb-8">
                    {currentJobs.map((job) => (
                      <div 
                        key={job.id || job._id || Math.random()} 
                        className="transition-all duration-300 hover:-translate-y-1 rounded-2xl"
                      >
                        <JobCard job={job} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {!loading && !error && totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                  />
                )}

              </section>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}