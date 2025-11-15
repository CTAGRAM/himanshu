"use client";

import { CheckCircle } from "lucide-react";

const services = [
  "Video podcast production",
  "Transcripts, show notes & title options",
  "Research & script support",
  "Podcast consulting",
  "Animation / sonic branding",
  "Publishing & distribution",
  "Growth & marketing support"
];

const ValueProps = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
            What's included
          </h2>
          <p className="text-text-secondary text-lg text-center mb-16">
            Comprehensive podcast production services to elevate your show
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-card rounded-[16px] p-6 hover:bg-card-hover transition-colors duration-300 shadow-card"
              >
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-foreground text-lg">
                  {service}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-text-secondary text-base">
              Editing starts from <span className="text-foreground font-semibold">~$150</span> per episode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;