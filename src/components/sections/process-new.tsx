"use client";

import { Target, Mic, Scissors, Eye, Upload, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Kickoff & Strategy",
    duration: "Day 0–3",
    description: "Audience, positioning, content pillars, brand kit, publishing cadence."
  },
  {
    icon: Mic,
    number: "02",
    title: "Recording Support",
    duration: "Weekly/Bi-weekly",
    description: "Run-of-show, hook prompts, guest briefs, mic/camera checklist."
  },
  {
    icon: Scissors,
    number: "03",
    title: "Post-Production",
    duration: "3–5 days",
    description: "Editing, captions, graphics, thumbnails; quality checklist before send."
  },
  {
    icon: Eye,
    number: "04",
    title: "Review & Revisions",
    duration: "24–48h",
    description: "Time-coded comments; we turn changes quickly."
  },
  {
    icon: Upload,
    number: "05",
    title: "Distribution & Scheduling",
    duration: "Ongoing",
    description: "Titles/descriptions, platform tagging, playlists, episode pages."
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Optimize & Grow",
    duration: "Ongoing",
    description: "Watch-time, CTR, retention heatmaps; test hooks/thumbnails; repeat."
  }
];

const Process = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
          Process
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-16">
          Simple & transparent
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-card rounded-[24px] p-8 hover:bg-card-hover transition-all duration-300 shadow-card"
              >
                <div className="absolute top-8 right-8 text-6xl font-bold text-primary/10">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      ({step.duration})
                    </p>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

