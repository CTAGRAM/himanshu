"use client";

import { Button } from "@/components/ui/button";
import { Zap, Waves, Mic, Scissors } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Scissors,
    title: "Solo episodes",
    description:
      "Tighten pacing, remove filler/pauses, clean distractions, and polish delivery for a pro sound.",
    cta: "Let's talk",
    href: "https://calendly.com",
  },
  {
    icon: Mic,
    title: "Podcast trailers",
    description:
      "Craft sub-1-minute hooks with crisp sound design and clear messaging to set the tone for the show.",
    cta: "Let's talk",
    href: "https://calendly.com",
  },
  {
    icon: Zap,
    title: "Multi-cam podcast editing",
    description:
      "Seamless angle switching to highlight reactions and key moments while keeping a natural flow.",
    cta: "Let's talk",
    href: "https://calendly.com",
  },
  {
    icon: Waves,
    title: "Short-form reels",
    description:
      "Repurpose long episodes into scroll-stopping clips for Shorts/Reels/TikTok to grow reach.",
    cta: "Let's talk",
    href: "https://calendly.com",
  },
];

const SolutionsCards = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-16">
          Our video editing work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-secondary rounded-[24px] p-10 md:p-12 flex flex-col justify-between hover:shadow-elevated-card transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-icon-accent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-black/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <Link href={feature.href} target="_blank" rel="noopener noreferrer" className="mt-8">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-[12px]">
                    {feature.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCards;