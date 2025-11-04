"use client";

import { ReactLenis } from "lenis/react";

import Results from "@/components/Home/Results";
import Transformation from "@/components/Home/Transformation";

export default function ResultsTransformationScroll() {
  return (
    <ReactLenis root>
      <div>
        <section className="min-h-screen relative md:sticky top-0 ">
          <Results />
        </section>

        <section className="min-h-screen sticky top-0  ">
          <Transformation />
        </section>
      </div>
    </ReactLenis>
  );
}
