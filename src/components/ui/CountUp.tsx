"use client";
import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  prefix?: string;
  suffix?: string;
  direction?: "up" | "down";
  className?: string;
  decimals?: number; // optional: control decimal places
}

const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2,
  separator = ",",
  prefix = "",
  suffix = "",
  direction = "up",
  className = "",
  decimals = 0,
}) => {
  const [value, setValue] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // 👀 Start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // start when 30% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  //  Animate when visible
  useEffect(() => {
    if (!hasStarted) return;

    const start = direction === "up" ? from : to;
    const end = direction === "up" ? to : from;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = start + (end - start) * progress;
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, from, to, duration, direction]);

  //  Format value
  const formattedValue = value
    .toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
    .replace(/,/g, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUp;
