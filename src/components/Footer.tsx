import React from 'react';
import { portfolio } from '../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp, Code2, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t-2 border-[#123A73] text-white py-14 relative overflow-hidden">
      {/* Top red micro accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E21B2D] to-transparent shadow-[0_0_8px_#E21B2D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#123A73]/60">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-2.5 h-6 bg-[#E21B2D] transform -skew-x-12" />
              <span className="font-comic font-black text-3xl tracking-wider text-white">
                {portfolio.name.toUpperCase()}
              </span>
            </div>
            <p className="font-comic text-base text-[#E21B2D] tracking-wider uppercase">
              COMPUTER SCIENCE STUDENT
            </p>
            <p className="font-mono text-xs text-[#D9D9D9]">
              {portfolio.education.school} • Expected Graduation: {portfolio.education.expectedGraduation}
            </p>
          </div>

          {/* Social Icons with Spider-Web Border Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-[#E21B2D] hover:scale-110 transition-all shadow-[0_0_10px_rgba(18,58,115,0.3)]"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              id="footer-linkedin-link"
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-[#E21B2D] hover:scale-110 transition-all shadow-[0_0_10px_rgba(18,58,115,0.3)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${portfolio.email}`}
              className="p-3 rounded-lg bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] hover:text-[#E21B2D] hover:scale-110 transition-all shadow-[0_0_10px_rgba(18,58,115,0.3)]"
              aria-label="Send Email to Kyle"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#07111F] border border-[#123A73] hover:border-[#E21B2D] text-[#D9D9D9] hover:text-white font-comic text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_0_10px_rgba(18,58,115,0.3)]"
              aria-label="Scroll to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 text-[#E21B2D]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#D9D9D9] text-center sm:text-left">
          <div>
            <p>© 2026 {portfolio.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#D9D9D9] mt-0.5">
              Email: {portfolio.email}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#E21B2D]" />
            <span className="font-comic font-black text-sm tracking-wider uppercase text-white">
              POWERED BY CODE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
