"use client";

import { CountingNumber } from '@/components/ui/counting-number';

const StatsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Results
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12">
            Fast, simple, affordable delivery
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold text-foreground mb-4">
                <CountingNumber value={24} suffix="" duration={2000} delay={100} />
                <span className="text-success-metric">hr</span>
              </div>
              <p className="text-muted text-lg uppercase tracking-wider">
                First draft turnaround
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-bold text-foreground mb-4">
                ~$<CountingNumber value={1000} suffix="" duration={2000} delay={300} />
              </div>
              <p className="text-muted text-lg uppercase tracking-wider">
                Monthly budget target
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-text-secondary text-lg">
              Editing starts from ~$150 per episode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;