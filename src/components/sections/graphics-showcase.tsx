"use client";

import Image from 'next/image';
import { CountingNumber } from '@/components/ui/counting-number';
import { Palette, Image as ImageIcon, Video, Sparkles } from 'lucide-react';

const graphicsWork = [
  {
    id: 1,
    type: "Thumbnail",
    title: "YouTube Thumbnail Design",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif",
    category: "Social Media",
  },
  {
    id: 2,
    type: "Cover Art",
    title: "Podcast Cover Art",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif",
    category: "Branding",
  },
  {
    id: 3,
    type: "Reel Design",
    title: "Instagram Reel Graphics",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif",
    category: "Social Media",
  },
  {
    id: 4,
    type: "Thumbnail",
    title: "Video Thumbnail Design",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fe0639f18a8d6073fb2_Ajmal_20Perfumes_20-Proce-4.gif",
    category: "Social Media",
  },
  {
    id: 5,
    type: "Cover Art",
    title: "Audio Cover Design",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70a8f013b880e870e41f_Dr_20Vivien_20-_20History-5.gif",
    category: "Branding",
  },
  {
    id: 6,
    type: "Reel Design",
    title: "TikTok Graphics",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7149cb7793071bbde701_Mahmood_20Bartawi_20-_20H-6.gif",
    category: "Social Media",
  },
];

const clientStories = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    quote: "The graphics team transformed my channel. My click-through rate increased dramatically with their thumbnail designs.",
    stats: [
      { value: 45, suffix: "%", label: "CTR Increase" },
      { value: 120, suffix: "K+", label: "Views Gained" },
    ],
    workType: "Thumbnails & Graphics",
  },
  {
    name: "Marcus Johnson",
    role: "Podcast Host",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    quote: "Professional cover art that perfectly captures our brand. The design quality is outstanding and has helped us stand out.",
    stats: [
      { value: 3.2, suffix: "K+", label: "Downloads", decimals: 1 },
      { value: 85, suffix: "%", label: "Brand Recognition" },
    ],
    workType: "Cover Art & Branding",
  },
  {
    name: "Emma Rodriguez",
    role: "Social Media Manager",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    quote: "Their reel graphics are always on-trend and engaging. Our engagement rates have never been higher.",
    stats: [
      { value: 250, suffix: "K+", label: "Engagements" },
      { value: 12, suffix: "%", label: "Engagement Rate" },
    ],
    workType: "Social Media Graphics",
  },
];

const StatIcon = () => (
  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
    <span className="text-primary-foreground font-bold text-xs">+</span>
  </div>
);

const GraphicsCard = ({ graphic }: { graphic: typeof graphicsWork[0] }) => {
  const getIcon = () => {
    switch (graphic.type) {
      case "Thumbnail":
        return <ImageIcon className="w-5 h-5 text-icon-accent" />;
      case "Cover Art":
        return <Palette className="w-5 h-5 text-icon-accent" />;
      case "Reel Design":
        return <Video className="w-5 h-5 text-icon-accent" />;
      default:
        return <Sparkles className="w-5 h-5 text-icon-accent" />;
    }
  };

  return (
    <div className="group bg-secondary rounded-[24px] p-6 hover:shadow-elevated-card transition-all duration-300">
      <div className="relative w-full aspect-video rounded-[16px] overflow-hidden mb-4 bg-card">
        <Image
          src={graphic.image}
          alt={graphic.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          {getIcon()}
        </div>
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
          {graphic.category}
        </span>
      </div>
      <h3 className="text-foreground font-bold text-lg">
        {graphic.title}
      </h3>
    </div>
  );
};

const ClientStoryCard = ({ story }: { story: typeof clientStories[0] }) => (
  <div className="flex flex-col bg-secondary rounded-[24px] p-8 w-full max-w-[400px] h-full">
    <div className="flex items-center space-x-4 mb-6">
      <Image
        src={story.image}
        alt={`Profile picture of ${story.name}`}
        width={56}
        height={56}
        className="rounded-full object-cover w-14 h-14"
      />
      <div>
        <p className="text-foreground text-lg font-bold capitalize">{story.name}</p>
        <p className="text-text-secondary text-sm capitalize">{story.role}</p>
      </div>
    </div>
    <p className="text-foreground text-xl font-semibold leading-7 mb-6 flex-grow">
      {story.quote}
    </p>
    <div>
      <p className="text-text-secondary text-xs mb-3 uppercase tracking-wider">
        {story.workType}
      </p>
      <div className="flex items-start space-x-6">
        {story.stats.map((stat, i) => (
          <div key={i}>
            <div className="flex items-center space-x-1.5">
              <StatIcon />
              <p className="text-foreground font-bold text-lg">
                <CountingNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                  duration={2000}
                  delay={i * 200}
                />
              </p>
            </div>
            <p className="text-text-secondary text-xs uppercase tracking-wider mt-1 pl-[22px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GraphicsShowcase = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Graphics & Design Work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Professional graphics that drive engagement and elevate your brand
          </p>
        </div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {graphicsWork.map((graphic) => (
            <GraphicsCard key={graphic.id} graphic={graphic} />
          ))}
        </div>

        {/* Client Stories Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Client Success Stories
            </h3>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              See how our graphics have helped creators and brands achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {clientStories.map((story, index) => (
              <ClientStoryCard key={index} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsShowcase;

