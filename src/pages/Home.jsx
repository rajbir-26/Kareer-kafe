import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BackgroundDecor from '../components/BackgroundDecor';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-brand-bg text-brand-text flex flex-col font-eternalo antialiased justify-between">
      <BackgroundDecor />

      {/* Structural layout ensuring generous whitespace and vertical centering */}
      <div className="relative z-10 w-full flex flex-col min-h-screen justify-between">
        <div>
          <Navbar />
          
          {/* Flex container providing balanced proportion between Navbar and Hero content */}
          <main className="flex-grow flex items-center pt-8 sm:pt-12 md:pt-16 animate-fade-up">
            <Hero />
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}