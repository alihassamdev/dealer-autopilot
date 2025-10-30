"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFillText() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Animate CSS variable --fill
    gsap.to(el, {
      "--fill": "100%", // fill from left to right
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <h4
      ref={textRef}
      className="text-[22px] leading-[30px]  md:text-[28px] md:leading-9 font-semibold relative text-transparent"
      style={
        {
          // Initial background color
          backgroundImage: `
          linear-gradient(
            to right,
            var(--fill-color, #ECECEC) var(--fill, 0%),
            var(--base-color, #053556) var(--fill, 0%)
          )
        `,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          "--fill": "0%",
          "--base-color": "#053556", // (start)
          "--fill-color": "#ECECEC", //  (fill)
        } as React.CSSProperties
      }
    >
      helps you track, recover, and convert every opportunity
      <br />
      —before it’s too late
    </h4>
  );
}
