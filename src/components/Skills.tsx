import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { SkillNetwork } from './SkillNetwork';
import {
  Code,
  Layers,
  Database,
  Wrench,
  BookMarked,
  Sparkles,
  Zap,
  Cpu,
  Terminal,
  Server,
  Share2,
} from 'lucide-react';
import { motion } from 'motion/react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code className="w-4 h-4 text-[#E21B2D]" />,
    'Frameworks & Libraries': <Layers className="w-4 h-4 text-[#67E8F9]" />,
    'Databases': <Database className="w-4 h-4 text-[#E21B2D]" />,
    'Tools & Platforms': <Wrench className="w-4 h-4 text-[#67E8F9]" />,
    'Core Fundamentals': <BookMarked className="w-4 h-4 text-[#E21B2D]" />,
  };

  const allCategories = portfolio.skillsCategories;

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Spider-web & ambient lighting */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E21B2D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Comic Section Number */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 bg-[#07111F] border-2 border-[#E21B2D] shadow-[0_0_15px_rgba(226,27,45,0.4)] rounded-lg">
              <span className="font-comic font-black text-2xl text-[#E21B2D]">02</span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest block font-bold">
                CAPABILITIES // ARSENAL
              </span>
              <h2
                id="skills-section-heading"
                className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
              >
                MY POWERS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#07111F] border border-[#123A73] font-mono text-xs text-[#D9D9D9]">
            <Zap className="w-3.5 h-3.5 text-[#E21B2D]" />
            <span>CATEGORIZED TECH STACK</span>
          </div>
        </div>

        {/* Top Part: Interactive Spider-Web Network Visualization */}
        <div className="mb-14">
          <SkillNetwork />
        </div>

        {/* Bottom Part: Clean Categorized Technology Badges (NO percentage bars) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#123A73] pb-3">
            <h3 className="font-comic text-2xl text-white tracking-wider uppercase flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#E21B2D]" />
              <span>SUPERHERO TECH ARSENAL</span>
            </h3>
            <span className="font-mono text-xs text-[#D9D9D9]">NO METRIC SLIDERS • PURE PRACTICAL CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-[0_0_15px_rgba(18,58,115,0.2)] group"
              >
                {/* Comic Corner Marker */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#123A73] group-hover:bg-[#E21B2D] transition-colors comic-cut-corner" />

                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded bg-[#050505] border border-[#123A73]">
                      {categoryIcons[category.title] || <Cpu className="w-4 h-4 text-[#E21B2D]" />}
                    </div>
                    <h4 className="font-comic font-black text-xl text-white tracking-wider uppercase">
                      {category.title}
                    </h4>
                  </div>

                  <p className="font-mono text-xs text-[#D9D9D9] mb-4">
                    {category.description}
                  </p>

                  {/* Clean Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded bg-[#050505] border border-[#123A73] group-hover:border-[#E21B2D]/60 hover:bg-[#123A73]/40 text-xs font-mono text-[#FFFFFF] font-medium transition-colors cursor-default"
                        title={skill.description}
                      >
                        <span className="text-[#E21B2D] mr-1.5">•</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#123A73]/50 flex items-center justify-between text-[11px] font-mono text-[#D9D9D9]">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span className="text-[#E21B2D] font-bold">READY</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
