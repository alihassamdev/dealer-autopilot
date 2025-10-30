"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ColorRange {
  from: number;
  to: number;
  color: string;
}

interface AnimatedTextProps {
  text: string;
  colorRanges: ColorRange[];
  direction?: "top" | "bottom";
  delay?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  colorRanges,
  direction = "top",
  delay = 0.15,
  className = "",
}) => {
  const words = text.split(" ");

  // ✅ Dynamically adjust animation offset for screen size
  const [offsetY, setOffsetY] = useState(direction === "top" ? -50 : 50);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint
      const baseOffset = direction === "top" ? -50 : 50;
      setOffsetY(isMobile ? baseOffset / 2.5 : baseOffset); // reduce motion on mobile
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [direction]);

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const range = colorRanges.find((r) => i >= r.from && i <= r.to);
        const colorClass = range ? range.color : "text-black";

        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: offsetY, // ✅ responsive Y offset
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.6,
                delay: i * delay,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={` inline-block will-change-[transform,opacity,filter] ${colorClass}`}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedText;
