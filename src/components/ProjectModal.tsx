import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  Database,
  Server,
  Monitor,
  User,
  Zap,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl bg-[#07111F] border-2 border-[#E21B2D] rounded-xl shadow-[0_0_50px_rgba(226,27,45,0.4)] my-8 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Comic Modal Header */}
        <div className="px-6 py-4 bg-[#050505] border-b border-[#123A73] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#E21B2D] animate-ping" />
            <div>
              <span className="font-mono text-[10px] text-[#E21B2D] font-bold uppercase tracking-widest block">
                PROJECT DOSSIER // DECLASSIFIED
              </span>
              <span className="font-comic text-xs tracking-wider uppercase text-[#D9D9D9]">
                {project.category}
              </span>
            </div>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-[#E21B2D] text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E21B2D]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Main Title & Category */}
          <div>
            <h2 className="font-comic font-black text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
              {project.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#050505] border border-[#123A73] font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* OVERVIEW & PROBLEM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#050505] border border-[#123A73] p-5 rounded-lg">
              <h3 className="font-comic text-lg text-[#E21B2D] tracking-wider uppercase mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>OVERVIEW</span>
              </h3>
              <p className="text-sm text-[#FFFFFF] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-[#050505] border border-[#123A73] p-5 rounded-lg">
              <h3 className="font-comic text-lg text-[#67E8F9] tracking-wider uppercase mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>PROBLEM SOLVED</span>
              </h3>
              <p className="text-sm text-[#FFFFFF] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* ARCHITECTURE DIAGRAM (Spider-web connected flow) */}
          <div className="bg-[#050505] border-2 border-[#123A73] p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#123A73]/50">
              <h3 className="font-comic text-xl text-white tracking-wider uppercase flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#E21B2D]" />
                <span>SYSTEM ARCHITECTURE DIAGRAM</span>
              </h3>
              <span className="font-mono text-xs text-[#E21B2D] font-bold">FLOW PIPELINE</span>
            </div>

            {/* Visual Web Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center py-2">
              <div className="bg-[#07111F] border border-[#E21B2D] p-3 rounded-lg shadow-[0_0_10px_rgba(226,27,45,0.2)]">
                <User className="w-5 h-5 text-[#E21B2D] mx-auto mb-1" />
                <span className="font-comic text-sm text-white uppercase block font-bold">USER</span>
                <span className="font-mono text-[9px] text-[#D9D9D9] block">Operator / Admin</span>
              </div>

              <div className="hidden sm:flex justify-center text-[#E21B2D]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              <div className="bg-[#07111F] border border-[#123A73] p-3 rounded-lg">
                <Monitor className="w-5 h-5 text-[#67E8F9] mx-auto mb-1" />
                <span className="font-comic text-sm text-white uppercase block font-bold">FRONTEND</span>
                <span className="font-mono text-[9px] text-[#D9D9D9] block">React / Tailwind / UI</span>
              </div>

              <div className="hidden sm:flex justify-center text-[#E21B2D]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              <div className="bg-[#07111F] border border-[#E21B2D] p-3 rounded-lg shadow-[0_0_10px_rgba(226,27,45,0.2)]">
                <Server className="w-5 h-5 text-[#E21B2D] mx-auto mb-1" />
                <span className="font-comic text-sm text-white uppercase block font-bold">EXPRESS API</span>
                <span className="font-mono text-[9px] text-[#D9D9D9] block">REST / Socket.IO</span>
              </div>
            </div>

            {/* Second row of architecture pipeline for Supabase -> Postgres */}
            <div className="mt-3 pt-3 border-t border-[#123A73]/30 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-center">
              <div className="bg-[#07111F] border border-[#123A73] p-3 rounded-lg">
                <Zap className="w-5 h-5 text-[#67E8F9] mx-auto mb-1" />
                <span className="font-comic text-sm text-white uppercase block font-bold">SUPABASE</span>
                <span className="font-mono text-[9px] text-[#D9D9D9] block">Auth & Real-time Layer</span>
              </div>

              <div className="bg-[#07111F] border border-[#E21B2D] p-3 rounded-lg shadow-[0_0_10px_rgba(226,27,45,0.2)]">
                <Database className="w-5 h-5 text-[#E21B2D] mx-auto mb-1" />
                <span className="font-comic text-sm text-white uppercase block font-bold">POSTGRESQL</span>
                <span className="font-mono text-[9px] text-[#D9D9D9] block">Relational Schemas & Triggers</span>
              </div>
            </div>
          </div>

          {/* KEY FEATURES */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="font-comic text-xl text-white tracking-wider uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E21B2D]" />
                <span>KEY SYSTEM CAPABILITIES</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 font-mono text-xs text-[#FFFFFF]">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded bg-[#050505] border border-[#123A73]"
                  >
                    <span className="text-[#E21B2D] font-bold">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TECHNICAL CHALLENGES */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="font-comic text-xl text-white tracking-wider uppercase mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#67E8F9]" />
                <span>TECHNICAL CHALLENGES OVERCOME</span>
              </h3>
              <div className="space-y-2 font-mono text-xs text-[#FFFFFF]">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="p-3 rounded bg-[#050505] border-l-2 border-[#123A73] border-y border-r border-[#123A73]/40 flex items-start gap-2.5"
                  >
                    <span className="text-[#E21B2D] font-bold font-comic text-sm">{i + 1}.</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VERIFIED RESULTS */}
          <div className="p-5 rounded bg-[#050505] border border-[#E21B2D]">
            <h3 className="font-comic text-lg text-[#E21B2D] tracking-wider uppercase mb-2">
              ENGINEERING RESULTS
            </h3>
            {project.results.map((res, i) => (
              <p key={i} className="text-sm text-[#FFFFFF] font-sans leading-relaxed">
                {res}
              </p>
            ))}
            {project.metricsPlaceholder && (
              <div className="mt-3 inline-block px-3 py-1 rounded bg-[#07111F] border border-[#123A73] font-mono text-xs text-[#67E8F9]">
                VERIFIED METRIC: {project.metricsPlaceholder}
              </div>
            )}
          </div>

          {/* LINKS & ACTIONS */}
          <div className="pt-4 border-t border-[#123A73] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#E21B2D] hover:bg-[#8B0A16] text-white font-comic text-lg uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(226,27,45,0.4)]"
              >
                <span>LIVE DEMO ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#050505] border border-[#123A73] hover:border-[#E21B2D] text-white font-comic text-lg uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4 text-[#E21B2D]" />
                <span>GITHUB ↗</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="font-comic text-base tracking-wider uppercase text-[#D9D9D9] hover:text-white transition-colors"
            >
              CLOSE DOSSIER [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
