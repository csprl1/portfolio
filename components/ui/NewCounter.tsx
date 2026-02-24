"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number; // seconds
  suffix?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 1.8,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);

      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(from + (to - from) * eased);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}