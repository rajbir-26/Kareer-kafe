import React from 'react';

export default function Filters({
  selectedJobTypes,
  setSelectedJobTypes,
  selectedWorkModes,
  setSelectedWorkModes,
  selectedLocation,
  setSelectedLocation,
  availableLocations,
  clearFilters,
}) {
  // Fixed: 'Govt' matches the card badge string exactly
  const jobTypes = ['Full Time', 'Part Time', 'Internship', 'Contract', 'Govt'];
  const workModes = ['Remote', 'On-site', 'Hybrid'];

  const handleCheckboxChange = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <aside className="w-full bg-brand-bg/40 backdrop-blur-sm border-2 border-brand-border rounded-2xl p-5 sm:p-6 shadow-sm font-arial">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-brand-border">
        <h2 className="text-base sm:text-lg font-bold text-brand-text uppercase tracking-wider">
          Filters
        </h2>
        <button
          onClick={clearFilters}
          className="text-xs sm:text-sm font-bold text-brand-text hover:opacity-80 underline underline-offset-2 cursor-pointer"
        >
          Reset All
        </button>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="text-xs sm:text-sm font-bold text-brand-text/70 uppercase tracking-wider mb-3">
          Job Type
        </h3>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-3 text-sm sm:text-base font-bold text-brand-text cursor-pointer hover:opacity-80">
              <input
                type="checkbox"
                checked={selectedJobTypes.includes(type)}
                onChange={() => handleCheckboxChange(type, selectedJobTypes, setSelectedJobTypes)}
                className="w-4 h-4 accent-[#A90E02] rounded cursor-pointer"
              />
              <span>{type === 'Govt' ? 'Govt Jobs' : type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Work Mode */}
      <div className="mb-6">
        <h3 className="text-xs sm:text-sm font-bold text-brand-text/70 uppercase tracking-wider mb-3">
          Work Mode
        </h3>
        <div className="space-y-3">
          {workModes.map((mode) => (
            <label key={mode} className="flex items-center gap-3 text-sm sm:text-base font-bold text-brand-text cursor-pointer hover:opacity-80">
              <input
                type="checkbox"
                checked={selectedWorkModes.includes(mode)}
                onChange={() => handleCheckboxChange(mode, selectedWorkModes, setSelectedWorkModes)}
                className="w-4 h-4 accent-[#A90E02] rounded cursor-pointer"
              />
              <span>{mode}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-xs sm:text-sm font-bold text-brand-text/70 uppercase tracking-wider mb-3">
          Location
        </h3>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full bg-brand-bg border border-brand-border rounded-xl px-3.5 py-2.5 text-sm sm:text-base font-bold text-brand-text focus:outline-none focus:border-brand-text cursor-pointer"
        >
          <option value="">All Locations</option>
          {availableLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}