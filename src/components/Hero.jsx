import React from 'react';
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] sm:-mt-[88px] min-h-screen lg:h-screen lg:max-h-[950px] overflow-hidden bg-brand-bg text-brand-text font-eternalo pt-[72px] sm:pt-[88px] flex items-center py-8 lg:py-0 transition-colors">
      <div className="mx-auto flex w-full h-full max-w-none items-center pl-4 sm:pl-8 lg:pl-16">
        {/* removed right padding here so HeroRight can bleed to the screen edge */}
        <div className="grid w-full h-full items-center gap-8 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          <div className="pr-4 sm:pr-8 lg:pr-0">
            <HeroLeft />
          </div>

          <HeroRight />

        </div>
      </div>
    </section>
  );
}