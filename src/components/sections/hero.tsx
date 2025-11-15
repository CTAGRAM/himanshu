"use client";

import { TailwindConnectButton } from "@/components/ui/tailwind-connect-button";
import { AnimatedText } from "@/components/ui/animated-text";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#75FB7E] rounded-full opacity-15 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.1s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#75FB7E] rounded-full opacity-10 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.3s' }} 
        />
        <div 
          className="absolute top-1/3 right-1/3 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 bg-[#75FB7E] rounded-full opacity-12 blur-[50px] sm:blur-[70px] md:blur-[80px] lg:blur-[100px] hero-fade-in" 
          style={{ animationDelay: '0.2s' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Main Heading: You Host We Handle the Rest */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 sm:mb-5">
          <div className="text-center">
            <AnimatedText 
              text="You Host" 
              as="span"
              delay={0}
              wordDelay={0.15}
            />
          </div>
          <div className="text-center -mt-0.5 sm:-mt-1">
            <AnimatedText 
              text="We Handle the Rest" 
              as="span"
              delay={0.3}
              wordDelay={0.12}
            />
          </div>
        </h1>
        
        {/* Combined Subheading: Podcast Editing Experts Here to Elevate Your Show */}
        <h2 className="font-display text-[1.455rem] sm:text-[1.819rem] md:text-[2.183rem] lg:text-[2.91rem] text-foreground leading-tight mb-5 sm:mb-6 md:mb-7 px-4" style={{ fontWeight: 675 }}>
          <AnimatedText 
            text="Podcast Editing Experts Here to Elevate Your Show" 
            as="span"
            delay={0.8}
            wordDelay={0.08}
            className="gold-text gold-text__highlight"
          />
        </h2>
        
        {/* Description */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-text-secondary/80 max-w-2xl mx-auto px-4">
          <AnimatedText 
            text="Fast, flawless podcast editing — designed for busy creators worldwide under $1200/Month!" 
            as="span"
            delay={1.5}
            wordDelay={0.06}
          />
        </p>
        
        <div 
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center items-center hero-fade-in-up px-4"
          style={{ animationDelay: '1.15s' }}
        >
          <TailwindConnectButton
            href="#contact"
            className="text-base sm:text-lg md:text-xl py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10"
            containerClassName="w-full sm:w-auto"
          >
            Book a Free Strategy Call
          </TailwindConnectButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;