"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseCountAnimationOptions {
  duration?: number;
  delay?: number;
}

// Smooth easing function for better animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountAnimation(
  target: number,
  options: UseCountAnimationOptions = {}
) {
  const { duration = 2000, delay = 0 } = options;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Combine refs
  const combinedRef = (node: HTMLSpanElement | null) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (!inView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(target);
        return;
      }

      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [inView, target, duration, delay]);

  return { count, ref: combinedRef };
}
