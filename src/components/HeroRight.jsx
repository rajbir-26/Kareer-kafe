import QuoteCard from "./QuoteCard";

function HeroPhoto() {
  return (
    <img
      src="/images/hero-student4.webp"
      alt="Student using laptop"
      draggable={false}
      className="block w-full h-auto select-none rounded-2xl sm:rounded-3xl"
    />
  );
}

export default function HeroRight() {
  return (
    <div className="relative flex h-full items-center justify-center lg:justify-end overflow-visible w-full mt-4 lg:mt-0">

      <div className="relative w-full max-w-[500px] sm:max-w-[650px] lg:max-w-none lg:w-[108%] lg:translate-x-0 -translate-y-[0px]">

        <HeroPhoto />

        {/* QuoteCard overlay - shifted left via lg:left-[38%] */}
        <div className="absolute top-[8%] sm:top-[12%] lg:top-[16%] left-[20%] sm:left-[45%] lg:left-[38%] z-30 transform -translate-x-1/2 lg:translate-x-0 scale-90 sm:scale-95 lg:scale-100">
          <QuoteCard />
        </div>

      </div>

    </div>
  );
}