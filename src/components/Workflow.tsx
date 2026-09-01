import React from 'react';
import { Search, PenTool, Hammer, CheckCircle, RefreshCw, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Problem Exploration',
      description: 'Understand the problem, gather domain constraints, and establish clear functional requirements.',
      icon: <Search className="w-5 h-5 text-[#E21B2D]" />,
    },
    {
      number: '02',
      title: 'DESIGN',
      tagline: 'System & Schema Architecture',
      description: 'Plan the database schema, relational keys, REST contracts, and frontend component workflows.',
      icon: <PenTool className="w-5 h-5 text-[#67E8F9]" />,
    },
    {
      number: '03',
      title: 'BUILD',
      tagline: 'Full-Stack Implementation',
      description: 'Develop the frontend interfaces, backend services, endpoints, and database integrations cleanly.',
      icon: <Hammer className="w-5 h-5 text-[#E21B2D]" />,
    },
    {
      number: '04',
      title: 'TEST',
      tagline: 'Quality & Debugging',
      description: 'Find and fix edge cases, validate API response envelopes, and ensure transactional data integrity.',
      icon: <CheckCircle className="w-5 h-5 text-[#67E8F9]" />,
    },
    {
      number: '05',
      title: 'IMPROVE',
      tagline: 'Refinement & Optimization',
      description: 'Optimize queries, refine user experience, polish styling, and prepare systems for deployment.',
      icon: <RefreshCw className="w-5 h-5 text-[#E21B2D]" />,
    },
  ];

  return (
    <section
      id="workflow"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Spider-web & ambient grid */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E21B2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#07111F] border border-[#E21B2D] text-xs font-mono text-white mb-3 shadow-[0_0_12px_rgba(226,27,45,0.3)]">
            <Zap className="w-3.5 h-3.5 text-[#E21B2D]" />
            <span>EXECUTION PROTOCOL</span>
          </div>

          <h2
            id="workflow-section-heading"
            className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
          >
            MY WORKFLOW
          </h2>
          <p className="mt-2 text-base font-mono text-[#D9D9D9]">
            A structured, web-connected software engineering timeline from concept to deployment.
          </p>
        </div>

        {/* Vertical Web-Connected Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Web Strand (Vertical Line) */}
          <div className="hidden sm:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#E21B2D] via-[#123A73] to-[#E21B2D] shadow-[0_0_8px_#E21B2D]" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Card Container */}
                  <div className="w-full sm:w-[calc(50%-40px)]">
                    <div className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 relative transition-all duration-300 shadow-[0_0_20px_rgba(18,58,115,0.2)] hover:shadow-[0_0_30px_rgba(226,27,45,0.35)] group">
                      {/* Corner notch */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-[#123A73] group-hover:bg-[#E21B2D] transition-colors comic-cut-corner" />

                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#123A73]/60">
                        <span className="font-comic font-black text-2xl text-[#E21B2D]">
                          {step.number} — {step.title}
                        </span>
                        <div className="p-2 rounded bg-[#050505] border border-[#123A73]">
                          {step.icon}
                        </div>
                      </div>

                      <span className="font-mono text-xs text-[#67E8F9] block mb-2 font-bold uppercase tracking-wider">
                        {step.tagline}
                      </span>

                      <p className="text-sm text-[#FFFFFF] leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Web Node Circle */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#07111F] border-2 border-[#E21B2D] items-center justify-center shadow-[0_0_15px_#E21B2D] z-10">
                    <span className="font-comic font-black text-base text-white">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
