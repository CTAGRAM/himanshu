"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export const AnimatedText = ({
  text,
  className,
  delay = 0,
  wordDelay = 0.1,
  as: Component = "span",
}: AnimatedTextProps) => {
  const [words, setWords] = useState<string[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const wordsArray = text.split(" ");
    setWords(wordsArray);
  }, [text]);

  useEffect(() => {
    if (words.length === 0) return;

    const timers: NodeJS.Timeout[] = [];

    words.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleWords((prev) => new Set([...prev, index]));
      }, delay * 1000 + index * wordDelay * 1000);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [words, delay, wordDelay]);

  // Check if gold-text class is used and needs data-text attribute
  const needsDataText = className?.includes("gold-text");
  
  const componentProps: any = {
    className,
  };
  
  if (needsDataText) {
    componentProps["data-text"] = text;
  }
  
  return (
    <Component {...componentProps}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-all duration-1000 ease-out",
            visibleWords.has(index)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 translate-y-2"
          )}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  );
};

