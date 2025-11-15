"use client";

import { TailwindConnectButton } from "@/components/ui/tailwind-connect-button";

const CtaFooter = () => {
  // Split the heading into parts for staggered animation
  const headingParts = [
    { text: "Let's build your show", delay: 0.2 },
    { text: "without the overwhelm.", delay: 0.4 }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#100D1B] via-[#1A1525] to-[#100D1B] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden border-t border-primary/20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#75FB7E] rounded-full opacity-20 blur-[80px] sm:blur-[100px] md:blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.1s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#75FB7E] rounded-full opacity-15 blur-[80px] sm:blur-[100px] md:blur-[120px] hero-fade-in" 
          style={{ animationDelay: '0.3s' }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">
          {headingParts.map((part, index) => (
            <span key={index}>
              <span
                className="hero-word inline-block"
                style={{
                  animationDelay: `${part.delay}s`,
                }}
              >
                {part.text}
              </span>
              {index < headingParts.length - 1 && ' '}
            </span>
          ))}
        </h2>
        <p 
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-3 sm:mb-4 px-4 hero-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          15 minutes to map your plan, timelines, and first month's content calendar.
        </p>
        <p 
          className="text-sm sm:text-base md:text-lg text-text-secondary/80 max-w-xl mx-auto mb-8 sm:mb-10 px-4 hero-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Email us at <a href="mailto:hello@yourdomain.com" className="text-primary underline hover:text-primary/80 transition-colors">hello@yourdomain.com</a> or DM <a href="#" className="text-primary underline hover:text-primary/80 transition-colors">@yourhandle</a>.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-fade-in-up px-4"
          style={{ animationDelay: '1s' }}
        >
          <TailwindConnectButton
            href="#contact"
            id="contact"
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

export default CtaFooter;