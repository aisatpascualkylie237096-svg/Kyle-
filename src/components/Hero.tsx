import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CityBackground } from './CityBackground';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(portfolio.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#050505]"
    >
      {/* Spider-web & ambient lighting accents */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#E21B2D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#123A73]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative vertical red comic stripe */}
      <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-gradient-to-b from-transparent via-[#E21B2D] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Comic Status Badges Ribbon */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#07111F] border border-[#E21B2D] text-xs font-mono text-white shadow-[0_0_12px_rgba(226,27,45,0.35)]">
            <span className="w-2 h-2 rounded-full bg-[#E21B2D] animate-ping" />
            <span className="font-bold text-[#E21B2D]">SYSTEM ONLINE</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#050505] border border-[#123A73] text-[11px] font-mono text-[#D9D9D9]">
            <Activity className="w-3 h-3 text-[#123A73]" />
            <span>BUILDING...</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#050505] border border-[#123A73] text-[11px] font-mono text-[#D9D9D9]">
            <Layers className="w-3 h-3 text-[#E21B2D]" />
            <span>PROJECTS LOADED</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#050505] border border-[#123A73] text-[11px] font-mono text-[#D9D9D9]">
            <Database className="w-3 h-3 text-[#67E8F9]" />
            <span>DATABASE CONNECTED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Column: Bold Comic Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              {/* Superhero Big Title */}
              <div className="flex items-center gap-4">
                <h1
                  id="hero-name-heading"
                  className="font-comic font-black text-7xl sm:text-8xl lg:text-9xl tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(226,27,45,0.4)]"
                >
                  {portfolio.name}
                </h1>
                <div className="h-14 w-4 bg-[#E21B2D] transform -skew-x-12 hidden sm:block shadow-[0_0_12px_#E21B2D]" />
              </div>

              {/* Subheadings */}
              <div className="mt-2 space-y-1">
                <h2
                  id="hero-subheading-1"
                  className="font-comic text-2xl sm:text-3xl text-[#E21B2D] tracking-wider uppercase flex items-center gap-2"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>COMPUTER SCIENCE STUDENT</span>
                </h2>
                <h3
                  id="hero-subheading-2"
                  className="font-comic text-xl sm:text-2xl text-[#D9D9D9] tracking-wider uppercase"
                >
                  ASPIRING SOFTWARE DEVELOPER
                </h3>
              </div>
            </div>

            {/* Main Hero Description Quote */}
            <div className="relative pl-5 border-l-4 border-[#E21B2D] bg-[#07111F]/60 p-4 rounded-r-lg border-y border-r border-[#123A73]/60 backdrop-blur-sm">
              <p
                id="hero-description-quote"
                className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed font-sans"
              >
                &ldquo;{portfolio.heroIntro}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-3 text-xs font-mono text-[#D9D9D9]">
                <span className="text-[#E21B2D] font-bold">FOCUS:</span>
                <span>Web Dev</span>
                <span>•</span>
                <span>Backend Systems</span>
                <span>•</span>
                <span>Databases</span>
                <span>•</span>
                <span>REST APIs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E21B2D] hover:bg-[#8B0A16] text-white font-comic text-xl tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(226,27,45,0.5)] hover:shadow-[0_0_28px_rgba(226,27,45,0.7)] hover:-translate-y-0.5 rounded"
              >
                <span>EXPLORE MY PROJECTS</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                id="hero-download-cv-btn"
                href={portfolio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#07111F] hover:bg-[#123A73] text-white font-comic text-xl tracking-wider uppercase border-2 border-[#123A73] hover:border-[#E21B2D] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(18,58,115,0.3)] rounded"
              >
                <FileText className="w-5 h-5 text-[#E21B2D]" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>

            {/* Social Icons & Verified Email Link */}
            <div className="pt-4 border-t border-[#123A73]/40 flex flex-wrap items-center gap-3 text-xs font-mono text-[#D9D9D9]">
              <span className="uppercase text-[#D9D9D9] font-bold tracking-wider">NETWORK:</span>

              {/* GitHub */}
              <a
                id="hero-social-github"
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-white transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#E21B2D]" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* LinkedIn */}
              <a
                id="hero-social-linkedin"
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-white transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#E21B2D]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* Verified Email with Copy Button */}
              <div className="inline-flex items-center">
                <a
                  id="hero-social-email"
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-l bg-[#07111F] border border-r-0 border-[#123A73] hover:border-[#E21B2D] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E21B2D]" />
                  <span className="text-white font-medium">{portfolio.email}</span>
                </a>
                <button
                  type="button"
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-r bg-[#07111F] border border-[#123A73] hover:bg-[#123A73] text-[#D9D9D9] hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: Original Superhero Developer Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Comic Panel Container */}
            <div className="relative w-full max-w-md bg-[#07111F] border-2 border-[#E21B2D] rounded-xl overflow-hidden shadow-[0_0_35px_rgba(226,27,45,0.35)]">
              {/* Comic Panel Header */}
              <div className="px-4 py-2.5 bg-[#050505] border-b border-[#123A73] flex items-center justify-between font-mono text-xs text-[#D9D9D9]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E21B2D] shadow-[0_0_6px_#E21B2D]" />
                  <span className="font-comic font-bold text-sm tracking-wider text-white">
                    AVATAR // DEV_SUIT_V2.7
                  </span>
                </div>
                <span className="text-[10px] text-[#E21B2D] font-bold">READY</span>
              </div>

              {/* SVG Graphic: Original Masked Developer Silhouette + Cybernetic Web Network */}
              <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-[#07111F] via-[#050505] to-[#0a182e] flex items-center justify-center overflow-hidden">
                {/* Spider-Web Circuit Matrix in the background */}
                <svg
                  className="absolute inset-0 w-full h-full text-[#123A73]/40"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  {/* Web rays */}
                  <line x1="200" y1="200" x2="20" y2="30" stroke="#123A73" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="200" y1="200" x2="380" y2="40" stroke="#123A73" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="200" y1="200" x2="30" y2="370" stroke="#123A73" strokeWidth="1" />
                  <line x1="200" y1="200" x2="370" y2="360" stroke="#123A73" strokeWidth="1" />
                  <line x1="200" y1="200" x2="200" y2="20" stroke="#E21B2D" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="200" y2="380" stroke="#E21B2D" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="20" y2="200" stroke="#123A73" strokeWidth="1" />
                  <line x1="200" y1="200" x2="380" y2="200" stroke="#123A73" strokeWidth="1" />

                  {/* Concentric Web Octagons */}
                  <polygon points="200,80 285,115 320,200 285,285 200,320 115,285 80,200 115,115" stroke="#123A73" strokeWidth="1" />
                  <polygon points="200,130 250,150 270,200 250,250 200,270 150,250 130,200 150,150" stroke="#E21B2D" strokeWidth="1.2" strokeOpacity="0.7" />

                  {/* Glowing intersection nodes */}
                  <circle cx="285" cy="115" r="3" fill="#E21B2D" className="animate-ping" />
                  <circle cx="115" cy="115" r="3" fill="#67E8F9" />
                  <circle cx="320" cy="200" r="3.5" fill="#E21B2D" />
                  <circle cx="80" cy="200" r="3.5" fill="#123A73" />
                  <circle cx="285" cy="285" r="3" fill="#67E8F9" />
                  <circle cx="115" cy="285" r="3" fill="#E21B2D" />
                </svg>

                {/* Floating Code Streams & Database Symbols */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#67E8F9]/70 space-y-0.5 pointer-events-none">
                  <div>import &#123; db &#125; from 'core';</div>
                  <div className="text-[#E21B2D]/80">const state = syncWeb();</div>
                  <div>await db.query(sql);</div>
                </div>

                <div className="absolute top-4 right-4 font-mono text-[10px] text-right text-[#D9D9D9]/70 space-y-0.5 pointer-events-none">
                  <div className="text-[#E21B2D]">PORT: 3000 [OK]</div>
                  <div>LATENCY: 12ms</div>
                  <div className="text-[#67E8F9]">AUTH: RBAC</div>
                </div>

                {/* Original Superhero Hooded / Masked Developer Silhouette */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-44 h-48 flex items-center justify-center">
                    {/* Glowing Aura */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E21B2D]/30 via-[#123A73]/20 to-transparent rounded-full blur-xl" />

                    {/* Developer Mask / Hood Silhouette (Original vector art) */}
                    <svg
                      className="w-full h-full drop-shadow-[0_0_20px_rgba(226,27,45,0.6)]"
                      viewBox="0 0 200 220"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Hood / Shoulders Contour */}
                      <path
                        d="M30 220 C30 170 50 140 70 125 C75 90 85 50 100 40 C115 50 125 90 130 125 C150 140 170 170 170 220 Z"
                        fill="#0c182b"
                        stroke="#123A73"
                        strokeWidth="2"
                      />

                      {/* Head / Mask Core */}
                      <path
                        d="M72 120 C68 85 80 52 100 48 C120 52 132 85 128 120 C125 150 100 165 100 165 C100 165 75 150 72 120 Z"
                        fill="#050810"
                        stroke="#E21B2D"
                        strokeWidth="2.5"
                      />

                      {/* Cyber Visor / Angular Eyes Glowing Red & White */}
                      <path
                        d="M80 98 L94 106 L92 114 L78 106 Z"
                        fill="#FFFFFF"
                        stroke="#E21B2D"
                        strokeWidth="2"
                        className="filter drop-shadow-[0_0_8px_#E21B2D]"
                      />
                      <path
                        d="M120 98 L106 106 L108 114 L122 106 Z"
                        fill="#FFFFFF"
                        stroke="#E21B2D"
                        strokeWidth="2"
                        className="filter drop-shadow-[0_0_8px_#E21B2D]"
                      />

                      {/* Mask Geometric Web Linework */}
                      <line x1="100" y1="48" x2="100" y2="165" stroke="#E21B2D" strokeWidth="1" strokeOpacity="0.6" />
                      <line x1="85" y1="70" x2="115" y2="70" stroke="#E21B2D" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="78" y1="130" x2="122" y2="130" stroke="#E21B2D" strokeWidth="1" strokeOpacity="0.5" />
                      <line x1="85" y1="145" x2="115" y2="145" stroke="#123A73" strokeWidth="1" />

                      {/* Tech Circuit Traces on Suit */}
                      <path d="M50 180 L70 160 L85 170" stroke="#E21B2D" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M150 180 L130 160 L115 170" stroke="#123A73" strokeWidth="1.5" strokeDasharray="2 2" />
                      
                      {/* Database chest badge */}
                      <rect x="92" y="175" width="16" height="12" rx="2" fill="#07111F" stroke="#67E8F9" strokeWidth="1" />
                      <line x1="94" y1="179" x2="106" y2="179" stroke="#67E8F9" strokeWidth="1" />
                      <line x1="94" y1="183" x2="106" y2="183" stroke="#E21B2D" strokeWidth="1" />
                    </svg>
                  </div>
                </div>

                {/* Floating Interactive Badge at bottom of graphic */}
                <div className="absolute bottom-3 inset-x-4 px-3 py-1.5 bg-[#050505]/90 border border-[#E21B2D]/50 rounded flex items-center justify-between text-[11px] font-mono text-[#D9D9D9]">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#E21B2D]" />
                    <span>FULL-STACK ARCHITECT</span>
                  </div>
                  <span className="text-[#67E8F9] font-semibold">CS // 2027</span>
                </div>
              </div>

              {/* Comic Panel Footer */}
              <div className="px-4 py-2 bg-[#0a1424] border-t border-[#123A73] flex items-center justify-between text-xs font-mono text-[#D9D9D9]">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#E21B2D]" />
                  <span>SUPABASE • POSTGRES • REACT • NODE</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#E21B2D]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle nighttime city skyline silhouette at the bottom */}
      <CityBackground />
    </section>
  );
};
