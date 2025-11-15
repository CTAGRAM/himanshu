"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountingNumber } from '@/components/ui/counting-number';
import { Play, Plus, Eye } from 'lucide-react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { TailwindConnectButton } from '@/components/ui/tailwind-connect-button';

const testimonialsData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Dr Medhat",
    title: "Pediatrician",
    highlightedNumber: "66k",
    quote: "I love working with this team. I feel so comfortable and everyone is amazing",
    initialFollowers: "0",
    stats: [
      { value: 66, suffix: "K", label: "Followers Gained", icon: "plus" },
      { value: 13, suffix: "M+", label: "View Count", icon: "eye" },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70a8f013b880e870e41f_Dr_20Vivien_20-_20History-5.gif",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "svenja maltzahn",
    title: "Entrepreneur",
    highlightedNumber: "4.6K+",
    quote: "I'm getting so many requests I think I should stop posting videos",
    initialFollowers: "0",
    stats: [
      { value: 4.6, suffix: "K+", label: "Followers Gained", icon: "plus", decimals: 1 },
      { value: 350, suffix: "K", label: "View Count", icon: "eye" },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7867aba77299709fc7fa_Svenja-3.gif",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Dr Vivien",
    title: "Doctor",
    highlightedNumber: "25K+",
    quote: "What I do with you in 1 hour used to take me a full day on a TV set. I gained so much insights from our sessions",
    initialFollowers: "0",
    stats: [
      { value: 25, suffix: "K+", label: "Followers Gained", icon: "plus" },
      { value: 4.2, suffix: "M+", label: "View Count", icon: "eye", decimals: 1 },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70289a5a99badc0f9951_Dr_20Dunia_20-_20Tourist_-1.gif",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "Agency Owner",
    title: "Founder",
    highlightedNumber: "15K+",
    quote: "I'm like a puppet between your hands. It takes a village to do what you do. Really you have an amazing team",
    initialFollowers: "500",
    stats: [
      { value: 15, suffix: "K+", label: "Followers Gained", icon: "plus" },
      { value: 2, suffix: "M+", label: "View Count", icon: "eye" },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b70140a505fc39767c232_Chris_20V_20-_20What_20ar-2.gif",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/6720577b1055a4940102a304_dr_medhat-3.jpg",
    name: "Startup Founder",
    title: "CEO",
    highlightedNumber: "78K",
    quote: "This is an amazing company. They helped me with the content ideas and the results are amazing",
    initialFollowers: "0",
    stats: [
      { value: 78, suffix: "K", label: "Followers Gained", icon: "plus" },
      { value: 15, suffix: "M+", label: "View Count", icon: "eye" },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b7149cb7793071bbde701_Mahmood_20Bartawi_20-_20H-6.gif",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/icons/672b6de56b76e3b2d676bec8_svenja-4.jpg",
    name: "Brand Strategist",
    title: "Strategist",
    highlightedNumber: "50K+",
    quote: "You understood what I wanted to achieve, and with your team I was able to go online and grow my brand",
    initialFollowers: "3.5K",
    stats: [
      { value: 50, suffix: "K+", label: "Followers Gained", icon: "plus" },
      { value: 7, suffix: "M+", label: "View Count", icon: "eye" },
    ],
    videoThumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a93d8c77-2901-4b64-8e54-ce6f6469eefe-theclips-agency/assets/images/672b781fb59f6f8d368492ac_Rafif-7.gif",
  },
];

type Testimonial = typeof testimonialsData[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col bg-[#E8D5FF] dark:bg-[#2A1F3D] rounded-[20px] p-4 sm:p-5 md:p-6 w-[280px] sm:w-[320px] md:w-[360px] h-full flex-shrink-0">
    {/* Client Profile */}
    <div className="flex items-center space-x-4 mb-6">
      <Image
        src={testimonial.image}
        alt={`Profile picture of ${testimonial.name}`}
        width={64}
        height={64}
        className="rounded-full object-cover w-16 h-16 border-2 border-white dark:border-gray-700"
      />
      <div>
        <p className="text-gray-900 dark:text-white text-lg font-bold capitalize">{testimonial.name}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm capitalize">
          {testimonial.title} <span className="text-[#FFD700] font-bold">{testimonial.highlightedNumber}</span>
        </p>
      </div>
    </div>
    
    {/* Quote */}
    <p className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold leading-7 mb-6 flex-grow">
      "{testimonial.quote}"
    </p>
    
    {/* Initial Status */}
    <p className="text-gray-700 dark:text-gray-400 text-xs md:text-sm mb-4">
      Started with {testimonial.initialFollowers} Followers
    </p>
    
    {/* Statistics */}
    <div className="flex items-start space-x-6 mb-6">
      {testimonial.stats.map((stat, i) => (
        <div key={i}>
          <div className="flex items-center space-x-2">
            {stat.icon === "plus" ? (
              <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center shrink-0">
                <Plus className="w-3 h-3 text-gray-900" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center shrink-0">
                <Eye className="w-3 h-3 text-gray-900" />
              </div>
            )}
            <p className="text-gray-900 dark:text-white font-bold text-lg md:text-xl">
              <CountingNumber
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                duration={2000}
                delay={i * 200}
              />
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-400 text-xs uppercase tracking-wider mt-1 pl-7">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
    
    {/* Video Thumbnail */}
    {testimonial.videoThumbnail && (
      <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-gray-200 dark:bg-gray-800">
        <Image
          src={testimonial.videoThumbnail}
          alt={`${testimonial.name} video thumbnail`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
            <Play className="w-6 h-6 md:w-7 md:h-7 text-gray-900 ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          00:44
        </div>
      </div>
    )}
  </div>
);

const Testimonials = () => {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.scrollWidth / 2; // Half because we duplicated the content
      setCarouselWidth(width);
    }
  }, []);

  useEffect(() => {
    if (carouselWidth > 0) {
      let animation: ReturnType<typeof animate>;
      
      const startAnimation = () => {
        x.set(0); // Reset to start
        animation = animate(x, -carouselWidth, {
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        });
      };
      
      startAnimation();
      
      return () => {
        if (animation) {
          animation.stop();
        }
      };
    }
  }, [x, carouselWidth]);

  return (
    <section className="bg-background font-body py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
          Success Stories
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8 px-4">
          Clients don't just love us because we save them time. It's because we also get them results.
        </p>
        <TailwindConnectButton
          href="#"
          className="text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6"
        >
          View All Client Success
        </TailwindConnectButton>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="group">
          <motion.div 
            ref={carouselRef}
            className="flex gap-4 sm:gap-5 md:gap-6"
            style={{ x }}
            onHoverStart={() => {
              // Pause animation on hover
              x.stop();
            }}
            onHoverEnd={() => {
              // Resume animation on hover end - restart from current position
              if (carouselWidth > 0) {
                const currentX = x.get();
                // Calculate remaining distance to complete one cycle
                const remainingDistance = Math.abs(currentX) % carouselWidth;
                const targetX = currentX - (carouselWidth - remainingDistance);
                
                animate(x, targetX, {
                  duration: 60 * ((carouselWidth - remainingDistance) / carouselWidth),
                  repeat: Infinity,
                  ease: "linear",
                });
              }
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
