"use client";

import { Clock, RefreshCw, Eye, Palette, FileText } from "lucide-react";

const howWeWork = [
  {
    icon: Clock,
    title: "Turnaround",
    description: "3–5 business days per batch (rush available)."
  },
  {
    icon: RefreshCw,
    title: "Revisions",
    description: "Up to 2 rounds per asset (we're fast)."
  },
  {
    icon: Eye,
    title: "Review",
    description: "Frame.io/Drive links with time-coded comments."
  },
  {
    icon: Palette,
    title: "Branding",
    description: "We create a reusable style kit (fonts, colors, templates)."
  },
  {
    icon: FileText,
    title: "Asset management",
    description: "Organized folders for masters, clips, and socials."
  }
];

const Work = () => {
  return (
    <section id="work" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Video Editing Work
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            We turn your raw recordings into platform-ready content that gets watched, saved, and shared.
          </p>
        </div>

        {/* How we work */}
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            How we work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howWeWork.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-secondary rounded-[24px] p-8 flex flex-col hover:shadow-elevated-card transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-icon-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

