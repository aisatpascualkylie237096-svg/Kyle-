import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronRight,
  Database,
  Server,
  Activity,
} from 'lucide-react';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = portfolio.projects;

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Spider-web & ambient lighting */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E21B2D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#123A73]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Comic Section Number */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 bg-[#07111F] border-2 border-[#E21B2D] shadow-[0_0_15px_rgba(226,27,45,0.4)] rounded-lg">
              <span className="font-comic font-black text-2xl text-[#E21B2D]">03</span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest block font-bold">
                PORTFOLIO // MISSIONS
              </span>
              <h2
                id="projects-section-heading"
                className="font-comic font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
              >
                MY PROJECTS
              </h2>
            </div>
          </div>

          <p className="text-sm font-mono text-[#D9D9D9] max-w-md">
            &ldquo;Real applications built while developing my skills in software engineering.&rdquo;
          </p>
        </div>

        {/* Comic Panel Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${colSpan} relative`}
              >
                <div
                  id={`project-card-${project.id}`}
                  className="group h-full bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_0_20px_rgba(18,58,115,0.3)] hover:shadow-[0_0_35px_rgba(226,27,45,0.4)] hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Comic Red Diagonal Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#E21B2D] comic-cut-corner group-hover:scale-110 transition-transform" />

                  {/* Web pattern reveal on card hover */}
                  <div className="absolute inset-0 bg-web-grid opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  <div>
                    {/* Project Number & Category Pill */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#123A73]/70">
                      <div className="flex items-center gap-3">
                        <span className="font-comic font-black text-2xl text-[#E21B2D] group-hover:scale-125 transition-transform duration-300 inline-block">
                          0{idx + 1}
                        </span>
                        <span className="font-comic text-xs tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#050505] border border-[#123A73] text-[#D9D9D9]">
                          {project.category}
                        </span>
                      </div>

                      {isFeatured && (
                        <span className="px-2.5 py-0.5 rounded bg-[#E21B2D] font-comic text-xs uppercase tracking-wider text-white font-bold shadow-[0_0_8px_#E21B2D]">
                          FEATURED CORE SYSTEM
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-comic font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight mb-3 group-hover:text-[#E21B2D] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#FFFFFF] leading-relaxed mb-5 font-sans">
                      {project.description}
                    </p>

                    {/* Problem Solved Highlight */}
                    <div className="p-3.5 rounded bg-[#050505] border-l-2 border-[#E21B2D] border-y border-r border-[#123A73]/40 mb-6">
                      <span className="font-mono text-[11px] text-[#E21B2D] font-bold uppercase tracking-wider block mb-1">
                        PROBLEM SOLVED:
                      </span>
                      <p className="font-sans text-xs text-[#D9D9D9] leading-normal">
                        {project.problem}
                      </p>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mb-6">
                      <span className="font-mono text-[11px] text-[#D9D9D9] uppercase tracking-wider block mb-2 font-semibold">
                        TECH STACK:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#050505] border border-[#123A73] font-mono text-xs text-white group-hover:border-[#E21B2D]/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links Bar */}
                  <div className="pt-4 border-t border-[#123A73]/70 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#E21B2D] hover:bg-[#8B0A16] text-white font-comic text-sm uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(226,27,45,0.4)]"
                      >
                        <span>LIVE DEMO ↗</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#050505] border border-[#123A73] hover:border-[#E21B2D] text-white font-comic text-sm uppercase tracking-wider transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#E21B2D]" />
                        <span>GITHUB ↗</span>
                      </a>
                    </div>

                    <button
                      id={`inspect-project-${project.id}-btn`}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 font-comic text-sm tracking-wider uppercase text-[#D9D9D9] hover:text-[#E21B2D] transition-colors"
                    >
                      <span>INSPECT ARCHITECTURE</span>
                      <ChevronRight className="w-4 h-4 text-[#E21B2D]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Detailed Comic Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
