import React from 'react';
import { portfolio } from '../data/portfolio';
import { Search, Compass, Hammer, CheckSquare, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const getStepIcon = (step: string) => {
  const iconProps = { className: "w-5 h-5 text-white" };
  switch (step) {
    case '01': return <Search {...iconProps} />;
    case '02': return <Compass {...iconProps} />;
    case '03': return <Hammer {...iconProps} />;
    case '04': return <CheckSquare {...iconProps} />;
    default: return <Search {...iconProps} />;
  }
};

export const TechnicalApproach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-[#080808] relative border-t border-[#292929]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-4 w-1.5 bg-[#B00020] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B00020] font-semibold">
              Methodology & Workflow
            </span>
            <span className="h-4 w-1.5 bg-[#B00020] inline-block" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            HOW I APPROACH DEVELOPMENT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D6D6D6]">
            A structured, engineering-first development lifecycle designed for clarity, data integrity, and iterative improvement.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-[#292929] z-0" />
          <div className="hidden lg:block absolute top-12 left-12 w-2/3 h-0.5 bg-gradient-to-r from-[#B00020] to-[#7A0015] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {portfolio.approachSteps.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="flex items-center gap-4 lg:flex-col lg:gap-0">
                  <div className="w-14 h-14 rounded-full bg-[#141414] border-2 border-[#292929] group-hover:border-[#B00020] flex items-center justify-center transition-all duration-300 shadow-xl group-hover:shadow-[#B00020]/30 group-hover:bg-[#B00020] shrink-0 mb-4">
                    {getStepIcon(stepItem.step)}
                  </div>
                  
                  <div className="lg:hidden">
                    <span className="font-mono text-xs font-bold text-[#B00020] uppercase tracking-wider block">
                      PHASE {stepItem.step}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {stepItem.step} — {stepItem.title}
                    </h3>
                  </div>
                </div>

                {/* Desktop Step Info Card */}
                <div className="w-full bg-[#141414] border border-[#292929] group-hover:border-[#B00020]/50 rounded-lg p-5 transition-colors mt-2">
                  <span className="hidden lg:block font-mono text-xs font-bold text-[#B00020] uppercase tracking-wider mb-1">
                    PHASE {stepItem.step}
                  </span>
                  <h3 className="hidden lg:block font-display font-bold text-xl text-white mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D6D6D6] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
