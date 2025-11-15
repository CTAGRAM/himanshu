"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Consistent Presence",
    description: "For solo creators starting a show.",
    price: "Contact us",
    features: [
      "1 episode/mo (30–60 min)",
      "6 short clips with animated captions",
      "Audio mix + color; 1 thumbnail/episode",
      "Titles/descriptions + basic show notes",
      "Distribution: YouTube, Spotify, Apple (we post)",
      "Reporting: monthly summary (views, top clips)",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Multi-Platform Engine",
    description: "For teams ready to scale content and leads.",
    price: "Contact us",
    features: [
      "2 episodes/mo",
      "12 short clips + 2 thumbnail variants/episode",
      "Chapter markers, guest reels, audiograms",
      "Titles/descriptions + platform-specific copy",
      "Publishing calendar & scheduling",
      "Reporting: bi-weekly dashboard + next steps",
    ],
    cta: "Scale My Show",
    popular: true,
  },
  {
    name: "Authority",
    subtitle: "Producer-Level Support",
    description: "For executives/brands that want a dedicated crew.",
    price: "Contact us",
    features: [
      "Weekly episodes + unlimited clip batch from source files",
      "Recording prep & run-of-show; research & prompts",
      "Guest coordination templates, remote tech support",
      "Paid cut-downs & highlight compilations",
      "Dedicated producer + Slack channel",
      "Reporting: in-depth analytics & experiments",
    ],
    cta: "Talk to a Producer",
    popular: false,
  },
];

const addOns = [
  "In-studio recording",
  "Shorts-only packages",
  "Blog repurposing",
  "Newsletter",
  "Paid distribution",
  "Shorts ads testing",
  "Microsite/landing page",
  "YouTube SEO",
  "Vertical channel setup",
];

const Pricing = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Plans
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            What's included
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            return (
              <div
                key={plan.name}
                className={`relative bg-secondary rounded-[24px] p-8 md:p-10 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary shadow-elevated-card' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-secondary-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {plan.subtitle}
                  </p>
                  <p className="text-base text-text-secondary mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-secondary-foreground">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <Link href="#contact" className="block mb-8">
                  <Button className="w-full bg-accent text-accent-foreground rounded-[12px] px-6 py-4 font-semibold text-base transition-all duration-300 hover:shadow-button-hover">
                    {plan.cta}
                  </Button>
                </Link>

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
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Add-ons
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {addOns.map((addOn, index) => (
              <span
                key={index}
                className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground font-medium"
              >
                {addOn}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

