"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CountingNumber } from '@/components/ui/counting-number';
import { TailwindConnectButton } from '@/components/ui/tailwind-connect-button';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: "Start-Up Plan",
    pods: 4,
    price: 1200,
    pricePerPod: 300,
    features: [
      "4 pod video edit",
      "4 pod audio edit",
      "4 trailer",
      "4 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  },
  {
    name: "Growth Plan",
    pods: 8,
    price: 2000,
    pricePerPod: 250,
    popular: true,
    features: [
      "8 pod video edit",
      "8 pod audio edit",
      "8 trailer",
      "8 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  },
  {
    name: "Creator Plan",
    pods: 12,
    price: 2400,
    pricePerPod: 200,
    features: [
      "12 pod video edit",
      "12 pod audio edit",
      "12 trailer",
      "12 shorts",
      "YT thumbnail",
      "Audio cover",
      "Distribution on all audio platforms",
      "Distribution on all social media platforms for long and short content",
      "Promotion campaigns"
    ]
  }
];

const Pricing = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">
            Pricing Plans
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-4">
            Choose the perfect plan to scale your podcast production
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => {
            const baseDelay = index * 150; // Stagger each card
            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "relative bg-secondary rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col h-full",
                  hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 sm:mb-8">
                  <h3 className="text-3xl font-bold text-secondary-foreground mb-3">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-secondary-foreground">
                      $<CountingNumber value={plan.price} duration={2000} delay={baseDelay + 100} />
                    </span>
                  </div>
                  <p className="text-base text-secondary-foreground/80">
                    <CountingNumber value={plan.pods} duration={1500} delay={baseDelay + 200} /> Pod - $<CountingNumber value={plan.price} duration={2000} delay={baseDelay + 300} />{plan.name === "Creator Plan" ? "" : " "}($<CountingNumber value={plan.pricePerPod} duration={1500} delay={baseDelay + 400} /> per pod)
                  </p>
                </div>

                <div className="flex-grow mb-6 sm:mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-icon-accent flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-secondary-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full mt-auto flex justify-center">
                  <TailwindConnectButton
                    className="w-full text-center py-2.5 px-6 font-semibold text-base"
                    containerClassName="w-full"
                  >
                    Get Started
                  </TailwindConnectButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary text-lg">
            Need a custom plan?{" "}
            <a href="#" className="text-primary hover:text-primary/80 font-semibold underline transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
