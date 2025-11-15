"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProcessCard = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const ProcessCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ProcessCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-[20px] sm:rounded-[24px] md:rounded-[32px] relative overflow-hidden bg-card border border-border w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] transition-all duration-300 ease-out flex flex-col shadow-lg",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
        )}
      >
        {/* Image Section - Top Half */}
        <div className="relative w-full h-1/2 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
        </div>
        
        {/* Text Section - Bottom Half */}
        <div className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 h-1/2 justify-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
            {card.number}: {card.title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-xs sm:text-sm md:text-base">
            {card.description}
          </p>
        </div>
      </div>
    );
  }
);

ProcessCard.displayName = "ProcessCard";

export function ProcessFocusCards({ cards }: { cards: ProcessCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full">
      {cards.map((card, index) => (
        <ProcessCard
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

