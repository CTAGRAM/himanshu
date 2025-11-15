"use client";

import { useCountAnimation } from "@/hooks/use-count-animation";
import { cn } from "@/lib/utils";

interface CountingNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountingNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
  delay = 0,
  className,
}: CountingNumberProps) {
  const { count, ref } = useCountAnimation(value * Math.pow(10, decimals), {
    duration,
    delay,
  });

  const displayValue = decimals > 0 
    ? (count / Math.pow(10, decimals)).toFixed(decimals)
    : count.toString();

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
