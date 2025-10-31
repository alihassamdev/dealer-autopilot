"use client";
import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFillTextProps {
  autoPlay?: boolean; // If false, animation will be controlled externally
}

const ScrollFillText = forwardRef<HTMLHeadingElement, ScrollFillTextProps>(
  ({ autoPlay = true }, ref) => {
    const internalRef = useRef<HTMLHeadingElement>(null);
    // Use the forwarded ref if provided, otherwise use internal ref
    const textRef = (ref as React.RefObject<HTMLHeadingElement>) || internalRef;

    useEffect(() => {
      if (!autoPlay) return; // Don't create ScrollTrigger if autoPlay is false

      // Handle both callback ref and RefObject
      const el =
        typeof ref === "function" ? null : ref?.current || internalRef.current;
      if (!el) return;

      // Animate CSS variable --fill
      const anim = gsap.to(el, {
        "--fill": "100%", // fill from left to right
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
          markers: true,
        },
      });

      return () => {
        anim.kill();
      };
    }, [autoPlay, ref]);

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
        —before it's too late
      </h4>
    );
  }
);

ScrollFillText.displayName = "ScrollFillText";

export default ScrollFillText;
