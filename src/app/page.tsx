"use client";

import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import VideoCarousel from '@/components/sections/video-carousel';
import BrandingHeader from '@/components/sections/branding-header';
import Testimonials from '@/components/sections/testimonials';
import Pricing from '@/components/sections/pricing';
import GraphicsSection from '@/components/sections/graphics-section';
import Process from '@/components/sections/process';
import CtaFooter from '@/components/sections/cta-footer';
import Footer from '@/components/sections/footer';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Users } from 'lucide-react';
import { CountingNumber } from '@/components/ui/counting-number';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero: "You Host. We Handle the Rest." */}
        <HeroSection />
        
        {/* Video carousel showcase */}
        <VideoCarousel />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Shows: Our Current Shows We're Managing */}
        <BrandingHeader />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Ready to Join Roster Card Section */}
        <section className="bg-background py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-[95%] sm:max-w-[94%] md:max-w-[92%] lg:max-w-[840px] mx-auto">
              <WobbleCard
                containerClassName="bg-gradient-to-br from-[#2A1F3D] via-[#1A1525] to-[#2A1F3D] min-h-[470px] lg:min-h-[376px]"
                className="flex flex-col items-center justify-center text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                {/* Heading */}
                <h2 className="max-w-2xl text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white mb-6">
                  Ready to Join Our Team?
                </h2>
                
                {/* Description */}
                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-200 mb-10 leading-relaxed">
                  We're building the future of podcast production. Join us and be part of an innovative team that's transforming how content creators share their stories with the world.
                </p>
                
                {/* Button */}
                <a
                  href="#contact"
                  className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-purple-700 text-white font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Join Our Team
                </a>
              </WobbleCard>
            </div>
          </div>
        </section>
        
        {/* Plans: What's included */}
        <Pricing />
        
        {/* Graphics Section */}
        <GraphicsSection />
        
        {/* Process: Simple & transparent */}
        <Process />
        
        {/* CTA: Book a Free Strategy Call */}
        <CtaFooter />
      </main>
      <Footer />
    </>
  );
}

// Stats Section Component
function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      value: 500,
      suffix: "Hr+",
      label: "Time Saved",
      delay: 0,
    },
    {
      value: 50,
      suffix: "M+",
      label: "Organic Views",
      delay: 200,
    },
    {
      value: 10,
      suffix: "X",
      label: "Credibility",
      delay: 400,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left flex-1 max-w-[280px] relative"
            >
              {/* Vertical Divider - Between items */}
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] w-px h-20 md:h-24 bg-white/20" />
              )}
              
              <div className="flex flex-col items-center text-center w-full">
                {/* Large Number */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    {inView ? (
                      <CountingNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2500}
                        delay={stat.delay}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}