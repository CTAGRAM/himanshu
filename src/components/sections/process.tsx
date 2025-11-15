"use client";

import { motion } from "framer-motion";
import { ProcessFocusCards } from "@/components/ui/process-focus-cards";

const steps = [
  {
    number: "Step 1",
    title: "Upload your files",
    description: "Share your raw audio files with your account manager through your dedicated client folder.",
    image: "https://i.ibb.co/LhgqjkkT/Whats-App-Image-2025-11-15-at-00-31-16.jpg"
  },
  {
    number: "Step 2",
    title: "We'll edit within 24 hours",
    description: "Experience fast, professional editing with a guaranteed 24-hour turnaround for the first draft.",
    image: "https://i.ibb.co/1GT9PFtR/Whats-App-Image-2025-11-15-at-00-31-50.jpg"
  },
  {
    number: "Step 3",
    title: "Deliver the finished episode",
    description: "Receive your polished episode, ready for release and listener engagement.",
    image: "https://i.ibb.co/7Jzg2c12/Whats-App-Image-2025-11-15-at-00-32-16.jpg"
  }
];

const Process = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-3 sm:mb-4 md:mb-6">
            Our Process
          </h2>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-3 sm:mb-4 md:mb-6">
            Fast. Simple. Affordable.
          </h3>
          <motion.p 
            className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4"
            variants={headingVariants}
          >
            We believe the editing process should embody all of this, and our team is committed to delivering high-quality podcast content, on time and on budget.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
        >
          <ProcessFocusCards cards={steps} />
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

