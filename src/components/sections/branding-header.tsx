"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Show = {
  name: string;
  description: string;
  image: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  videoId?: string; // YouTube video ID (works for both regular videos and Shorts)
};

const shows: Show[] = [
  {
    name: "Accounting Voices",
    description: "Insights and conversations from leading accounting professionals shaping the future of finance.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif",
    spotifyUrl: "https://open.spotify.com/show/example1",
    youtubeUrl: "https://www.youtube.com/@accountingvoices/videos",
    videoId: "oI7Uha3762w" // YouTube Shorts video ID
  },
  {
    name: "The Human Protocol",
    description: "Exploring what it means to be human through science, philosophy, and personal stories",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif",
    spotifyUrl: "https://open.spotify.com/show/example2",
    youtubeUrl: "https://www.youtube.com/@THEHUMANPROTOCOLPODCAST/videos",
    videoId: "Xaq4_Kszjfg" // YouTube Shorts video ID
  },
  {
    name: "The Lo-Down Podcast",
    description: "Real talk, honest conversations, and unfiltered insights on topics that matter",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif",
    spotifyUrl: "https://open.spotify.com/show/example3",
    youtubeUrl: "https://www.youtube.com/@Lorenzo.Mercado/shorts",
    videoId: "Vxmo82vH0J0" // YouTube Shorts video ID
  },
  {
    name: "Drug Diaries",
    description: "Candid conversations about substance use, recovery, and the human experience",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b6fe0639f18a8d6073fb2_Ajmal_20Perfumes_20-Proce-4.gif",
    spotifyUrl: "https://open.spotify.com/show/example4",
    youtubeUrl: "https://www.youtube.com/@DrugDiaries",
    videoId: "wDJsaeWitSM" // YouTube Shorts video ID
  },
  {
    name: "A Holistic Dose",
    description: "Wellness, health, and holistic living conversations for mind, body, and spirit",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70a8f013b880e870e41f_Dr_20Vivien_20-_20History-5.gif",
    spotifyUrl: "https://open.spotify.com/show/example5",
    youtubeUrl: "https://www.youtube.com/@aholisticdose",
    videoId: "M4FIXr-vq2Y" // YouTube Shorts video ID
  },
  {
    name: "We Fix It, You're Welcome",
    description: "Solutions, advice, and real-world fixes for everyday problems and beyond",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7149cb7793071bbde701_Mahmood_20Bartawi_20-_20H-6.gif",
    spotifyUrl: "https://open.spotify.com/show/example6",
    youtubeUrl: "https://www.youtube.com/@WeFixedItPod",
    videoId: "eMjNeQtgvaY" // YouTube Shorts video ID
  }
];

const BrandingHeader = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Our Current Shows
          </h2>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto px-4">
            Current podcasts we're actively producing, managing, and scaling across various niches
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1203px] mx-auto" style={{ transform: 'scale(0.94)' }}>
          {shows.map((show, index) => (
            <div 
              key={index}
              onMouseEnter={() => {
                setHovered(index);
                if (show.videoId) {
                  setPlayingVideo(index);
                }
              }}
              onMouseLeave={() => {
                setHovered(null);
                setPlayingVideo(null);
              }}
              className={cn(
                "flex flex-col bg-card rounded-[15px] md:rounded-[19px] overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-border",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
              )}
            >
              {/* Video/Image Container */}
              <div className="w-full aspect-square md:aspect-[4/3] relative overflow-hidden bg-card">
                {show.videoId && playingVideo === index ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${show.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${show.videoId}&modestbranding=1&rel=0&playsinline=1`}
                    title={show.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                ) : (
                  <Image
                    src={show.videoId ? `https://img.youtube.com/vi/${show.videoId}/maxresdefault.jpg` : show.image}
                    alt={`${show.name} cover art`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      const target = e.target as HTMLImageElement;
                      if (show.videoId && target.src.includes('maxresdefault')) {
                        target.src = `https://img.youtube.com/vi/${show.videoId}/hqdefault.jpg`;
                      }
                    }}
                  />
                )}
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow bg-card">
                <h3 className="text-foreground font-bold text-base md:text-lg mb-2">
                  {show.name}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed flex-grow mb-4">
                  {show.description}
                </p>
                {show.youtubeUrl && (
                  <a
                    href={show.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 mt-auto"
                  >
                    View on YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingHeader;