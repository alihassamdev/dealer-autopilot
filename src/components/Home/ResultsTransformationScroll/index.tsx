"use client";

import Results from "@/components/Home/Results";
import Transformation from "@/components/Home/Transformation";

export default function ResultsTransformationScroll() {
  return (
    <main className="">
      {/* Results Section */}
      <section className="relative h-[200vh]">
        {/* The sticky content */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[1] ">
          <Results />
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center z-[2] ">
          <Transformation />
        </div>
      </section>
    </main>
  );
}
