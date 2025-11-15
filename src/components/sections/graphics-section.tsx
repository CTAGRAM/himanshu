"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type GraphicItem = {
  name: string;
  description: string;
  image: string;
  linkUrl?: string;
};

const graphics: GraphicItem[] = [
  {
    name: "YouTube Thumbnails",
    description: "Eye-catching thumbnail designs that maximize click-through rates and viewer engagement.",
    image: "/graphics/Aaron Thumbanil (1).png",
  },
  {
    name: "Podcast Cover Art",
    description: "Professional cover art designs that represent your brand and attract new listeners.",
    image: "/graphics/AIP thumbnail.png",
  },
  {
    name: "Social Media Graphics",
    description: "Stunning graphics for Instagram, TikTok, and other social platforms that drive engagement.",
    image: "/graphics/The Lo-Down Podcast thumbnail.png",
  },
  {
    name: "Video Thumbnails",
    description: "Custom thumbnail designs that capture attention and improve your video performance.",
    image: "/graphics/Drug Dairies Thumbnail.png",
  },
  {
    name: "Brand Graphics",
    description: "Consistent brand graphics and templates that maintain your visual identity across platforms.",
    image: "/graphics/Tiffany Thumbnail.png",
  },
  {
    name: "Reel Graphics",
    description: "Dynamic graphics and animations designed specifically for short-form video content.",
    image: "/graphics/TIM MASA.png",
  },
];

const GraphicsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Our Graphics Work
          </h2>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto px-4">
            Professional graphics and designs that elevate your content and boost engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1203px] mx-auto" style={{ transform: 'scale(0.94)' }}>
          {graphics.map((graphic, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "flex flex-col bg-card rounded-[15px] md:rounded-[19px] overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-border",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
              )}
            >
              {/* Image/Thumbnail */}
              <div className="w-full aspect-square md:aspect-[4/3] relative overflow-hidden bg-card flex items-center justify-center">
                <Image
                  src={graphic.image}
                  alt={`${graphic.name} preview`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow bg-card">
                <h3 className="text-foreground font-bold text-base md:text-lg mb-2">
                  {graphic.name}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed flex-grow">
                  {graphic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;

