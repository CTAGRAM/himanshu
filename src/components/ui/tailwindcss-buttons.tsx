"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/btn relative flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-white dark:border-white/[0.2] dark:bg-black [box-shadow:0_0_15px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1]" />
      <div className="relative z-40">{children}</div>
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/btn:opacity-100" />
    </div>
  );
};

