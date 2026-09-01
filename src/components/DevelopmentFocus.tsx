import React from 'react';
import { portfolio } from '../data/portfolio';
import { Layout, Server, Database, Layers, Sparkles, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const DevelopmentFocus: React.FC = () => {
  const iconsMap: Record<string, React.ReactNode> = {
    'web-apps': <Layout className="w-7 h-7 text-[#E21B2D]" />,
    'backend-systems': <Server className="w-7 h-7 text-[#67E8F9]" />,
    'database-systems': <Database className="w-7 h-7 text-[#E21B2D]" />,
    'fullstack-apps': <Layers className="w-7 h-7 text-[#67E8F9]" />,
  };

  return (
    <section
      id="focus"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Subtle Spider-web ambient */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#123A73]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Comic Section Number */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center justify-center w-14 h-14 bg-[#07111F] border-2 border-[#E21B2D] shadow-[0_0_15px_rgba(226,27,45,0.4)] rounded-lg">
            <span className="font-comic font-black text-2xl text-[#E21B2D]">04</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest block font-bold">
              DOMAINS // EXECUTION
            </span>
            <h2
              id="focus-section-heading"
              className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
            >
              WHAT I BUILD
            </h2>
          </div>
        </div>

        {/* 4 Superhero-Style Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.developmentFocus.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-[0_0_20px_rgba(18,58,115,0.2)] hover:shadow-[0_0_30px_rgba(226,27,45,0.35)] hover:-translate-y-1 group"
            >
              {/* Comic top corner notch */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#123A73] group-hover:bg-[#E21B2D] transition-colors comic-cut-corner" />

              <div>
                {/* Icon Container with Spider-Web Circle */}
                <div className="relative w-14 h-14 rounded-lg bg-[#050505] border border-[#123A73] flex items-center justify-center mb-6 group-hover:border-[#E21B2D] transition-colors">
                  {iconsMap[item.id] || <Sparkles className="w-7 h-7 text-[#E21B2D]" />}
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E21B2D] animate-ping" />
                </div>

                <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-wider block mb-1 font-bold">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="font-comic font-black text-2xl text-white tracking-wide uppercase mb-3 group-hover:text-[#E21B2D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#FFFFFF] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Micro Bar */}
              <div className="mt-6 pt-4 border-t border-[#123A73]/60 flex items-center justify-between text-xs font-mono text-[#D9D9D9]">
                <span>SPECIALTY // READY</span>
                <ArrowUpRight className="w-4 h-4 text-[#E21B2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
