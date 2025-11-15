"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const PhoneMockup = () => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "mt-20 flex justify-center px-6",
        isInView
          ? "animate-in fade-in slide-in-from-bottom-5 duration-[800ms] ease-in-out"
          : "opacity-0"
      )}
    >
      <div
        className="w-full max-w-[375px] aspect-[1/2] rounded-[40px] bg-card p-3 border border-border shadow-[0_20px_60px_rgba(74,139,92,0.3)]"
      >
        <div
          className="w-full h-full rounded-[28px] bg-[#1a1a2e]"
        />
      </div>
    </section>
  );
};

export default PhoneMockup;