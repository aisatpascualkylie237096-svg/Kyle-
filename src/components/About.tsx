import React from 'react';
import { portfolio } from '../data/portfolio';
import { GraduationCap, BookOpen, Layers, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Subtle Spider-web ambient grid */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#123A73]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Comic Section Number */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center justify-center w-14 h-14 bg-[#07111F] border-2 border-[#E21B2D] shadow-[0_0_15px_rgba(226,27,45,0.4)] rounded-lg">
            <span className="font-comic font-black text-2xl text-[#E21B2D]">01</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest block font-bold">
              ORIGIN // PROFILE
            </span>
            <h2
              id="about-section-heading"
              className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
            >
              ABOUT KYLE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative Comic Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Comic Panel Box */}
            <div className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] p-6 sm:p-8 rounded-xl relative transition-all duration-300 shadow-[0_0_20px_rgba(18,58,115,0.2)]">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#E21B2D] comic-cut-corner" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#050505] border border-[#123A73] text-xs font-mono text-[#D9D9D9] mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#E21B2D]" />
                <span>MISSION STATEMENT</span>
              </div>

              <p className="text-lg sm:text-xl text-[#FFFFFF] leading-relaxed font-sans font-normal mb-6">
                &ldquo;{portfolio.aboutText}&rdquo;
              </p>

              {/* Core Development Pillars */}
              <div className="pt-4 border-t border-[#123A73]/50">
                <h4 className="font-comic text-lg text-[#E21B2D] uppercase tracking-wider mb-3">
                  CORE SPECIALIZATION
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-[#D9D9D9]">
                  <div className="flex items-center gap-2 p-2 rounded bg-[#050505] border border-[#123A73]">
                    <CheckCircle2 className="w-4 h-4 text-[#E21B2D] shrink-0" />
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#050505] border border-[#123A73]">
                    <CheckCircle2 className="w-4 h-4 text-[#E21B2D] shrink-0" />
                    <span>Backend Development</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#050505] border border-[#123A73]">
                    <CheckCircle2 className="w-4 h-4 text-[#E21B2D] shrink-0" />
                    <span>Database Systems</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-[#050505] border border-[#123A73]">
                    <CheckCircle2 className="w-4 h-4 text-[#E21B2D] shrink-0" />
                    <span>REST APIs & Cloud Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Comic-Panel Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div
              id="about-education-card"
              className="h-full bg-[#07111F] border-2 border-[#E21B2D] rounded-xl p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_0_25px_rgba(226,27,45,0.25)] hover:shadow-[0_0_35px_rgba(226,27,45,0.4)] transition-all duration-300"
            >
              {/* Comic Banner Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#123A73]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-[#E21B2D] text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-comic font-bold text-lg tracking-wider text-white">
                    ACADEMIC HQ
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#050505] border border-[#E21B2D] font-mono text-[11px] text-[#E21B2D] font-bold">
                  VERIFIED
                </span>
              </div>

              {/* Education Content */}
              <div className="py-6 space-y-4">
                <div>
                  <span className="font-mono text-xs text-[#D9D9D9] uppercase tracking-wider block mb-1">
                    DEGREE PROGRAM
                  </span>
                  <h3 className="font-comic font-black text-2xl sm:text-3xl text-white tracking-wide leading-tight">
                    {portfolio.education.degree.toUpperCase()}
                  </h3>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#D9D9D9] uppercase tracking-wider block mb-1">
                    INSTITUTION
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">
                    {portfolio.education.school}
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#050505] border border-[#123A73] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#D9D9D9] uppercase tracking-wider block">
                      TIMELINE
                    </span>
                    <span className="font-comic text-xl text-[#E21B2D] font-black">
                      EXPECTED GRADUATION: {portfolio.education.expectedGraduation}
                    </span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#123A73]" />
                </div>
              </div>

              {/* Footer CTA in Card */}
              <div className="pt-4 border-t border-[#123A73] flex items-center justify-between">
                <span className="font-mono text-xs text-[#D9D9D9]">
                  STATUS: ACTIVE STUDENT
                </span>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-1.5 font-comic text-sm tracking-wider uppercase text-[#E21B2D] hover:text-white transition-colors"
                >
                  <span>VIEW FILE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
