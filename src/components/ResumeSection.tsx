import React from 'react';
import { portfolio } from '../data/portfolio';
import { Download, ExternalLink, ShieldAlert, FileText, Lock, CheckCircle2, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export const ResumeSection: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative py-24 bg-[#050505] border-t border-[#123A73]/30 overflow-hidden"
    >
      {/* Spider-web & ambient lighting */}
      <div className="absolute inset-0 bg-web-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E21B2D]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Secret File Card (Classified Dossier Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#07111F] border-2 border-[#E21B2D] rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(226,27,45,0.35)]"
          >
            {/* Top Red Classified Header Stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E21B2D] via-[#123A73] to-[#E21B2D]" />

            {/* Background Halftone / Circuit Watermark */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 text-[#E21B2D]/10 pointer-events-none">
              <ShieldAlert className="w-full h-full" />
            </div>

            {/* Dossier Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#123A73]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#050505] border border-[#E21B2D] text-[#E21B2D] shadow-[0_0_12px_rgba(226,27,45,0.4)]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#E21B2D] uppercase tracking-widest font-bold block">
                    CLASSIFIED FILE // CODE_NAME: KYLE
                  </span>
                  <h2
                    id="resume-section-heading"
                    className="font-comic font-black text-4xl sm:text-5xl text-white uppercase tracking-tight"
                  >
                    SECRET FILE
                  </h2>
                </div>
              </div>

              {/* Red Stamp Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#050505] border-2 border-[#E21B2D] transform rotate-1 shadow-[0_0_10px_rgba(226,27,45,0.3)]">
                <Lock className="w-3.5 h-3.5 text-[#E21B2D]" />
                <span className="font-comic font-bold text-xs tracking-wider uppercase text-[#E21B2D]">
                  CLEARANCE: LEVEL 5 GRANTED
                </span>
              </div>
            </div>

            {/* Resume Description Quote */}
            <p
              id="resume-description-text"
              className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed mb-8 font-sans max-w-2xl"
            >
              &ldquo;Access my resume for an overview of my education, technical skills, projects, and development experience.&rdquo;
            </p>

            {/* Snapshot of dossier contents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono text-xs">
              <div className="p-3 rounded bg-[#050505] border border-[#123A73]">
                <span className="text-[#D9D9D9] block text-[10px] uppercase">ACADEMIC RECORD</span>
                <span className="text-white font-bold">BS Computer Science (2027)</span>
              </div>

              <div className="p-3 rounded bg-[#050505] border border-[#123A73]">
                <span className="text-[#D9D9D9] block text-[10px] uppercase">PRIMARY SPECIALTY</span>
                <span className="text-white font-bold">Full-Stack & Backend Systems</span>
              </div>

              <div className="p-3 rounded bg-[#050505] border border-[#123A73]">
                <span className="text-[#D9D9D9] block text-[10px] uppercase">VERIFIED STATUS</span>
                <span className="text-[#67E8F9] font-bold">Open to Opportunities</span>
              </div>
            </div>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="resume-download-btn"
                href={portfolio.resume}
                download="Kyle_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#E21B2D] hover:bg-[#8B0A16] text-white font-comic text-xl tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(226,27,45,0.45)] hover:shadow-[0_0_28px_rgba(226,27,45,0.65)] hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD CV ↓</span>
              </a>

              <a
                id="resume-view-btn"
                href={portfolio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#050505] border-2 border-[#123A73] hover:border-[#E21B2D] text-white font-comic text-xl tracking-wider uppercase transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5 text-[#E21B2D]" />
                <span>VIEW RESUME ↗</span>
              </a>
            </div>

            {/* Footer Bar of File */}
            <div className="mt-8 pt-4 border-t border-[#123A73]/50 flex items-center justify-between font-mono text-[11px] text-[#D9D9D9]">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#E21B2D]" />
                <span>ARCHIVE: /public/resume.pdf</span>
              </div>
              <span className="text-[#67E8F9]">STANDARDS: PDF/A COMPLIANT</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
