import React from 'react';
import Link from 'next/link';

const SuccessStoriesHeader = () => {
  return (
    <section className="bg-[#0A0A14] pt-[120px]">
      <div className="container mx-auto px-6 md:px-20">
        <div 
          className="flex flex-col items-center text-center animate-in fade-in duration-500"
        >
          <h2 className="font-display text-[64px] font-bold leading-none tracking-[-0.02em] text-white">
            Success Stories
          </h2>
          <p className="mt-4 max-w-[490px] text-[18px] text-[#94a3b8]">
            Clients don't just love us because we save them time, it's because we also get them results.
          </p>
          <Link
            href="/client-success"
            className="mt-8 inline-block rounded-[8px] bg-accent text-accent-foreground px-8 py-3 text-base font-medium transition-opacity hover:opacity-90"
          >
            View All Client Success
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesHeader;