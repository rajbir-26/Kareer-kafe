import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Tips from './pages/Tips';
import TipDetails from './pages/TipDetails';
import About from './pages/About';
import Pricing from './pages/Pricing';
import MouseEffects from './components/MouseEffects';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#FFFBD4] selection:bg-[#A90E02] selection:text-[#FFFBD4]">
        {/* Global Mouse Click Effect Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <MouseEffects 
            color="#A90E02"
            interactionMode="sniper"
            duration={0.35}
            strokeWidth={2.5}
            effectSize={70}
            rotation={52}
            showLabel={false}
          />
        </div>

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tips/:id" element={<TipDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}