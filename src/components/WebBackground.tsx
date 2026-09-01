import React from 'react';

export const WebBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Navy / Black background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#07111F] to-[#050505] opacity-90" />

      {/* Subtle Spider-Web Grid */}
      <div className="absolute inset-0 bg-web-grid opacity-30" />

      {/* Spider-Web Radial Vector Graphic - Top Right Corner */}
      <svg
        className="absolute -top-24 -right-24 w-[500px] h-[500px] text-[#E21B2D]/15 animate-web-pulse"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Radial Web Rays */}
        <line x1="500" y1="0" x2="0" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="500" y1="0" x2="100" y2="500" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="0" x2="250" y2="500" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="0" x2="400" y2="500" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="0" x2="0" y2="250" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="1" />
        
        {/* Concentric Web Arcs */}
        <circle cx="500" cy="0" r="80" stroke="currentColor" strokeWidth="1" />
        <circle cx="500" cy="0" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="500" cy="0" r="240" stroke="currentColor" strokeWidth="1" />
        <circle cx="500" cy="0" r="330" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="500" cy="0" r="420" stroke="currentColor" strokeWidth="1" />

        {/* Glowing Red Intersections */}
        <circle cx="420" cy="80" r="3" fill="#E21B2D" className="animate-ping" />
        <circle cx="340" cy="160" r="3" fill="#E21B2D" />
        <circle cx="260" cy="240" r="4" fill="#E21B2D" />
        <circle cx="170" cy="330" r="3" fill="#123A73" />
      </svg>

      {/* Spider-Web Radial Vector Graphic - Bottom Left Corner */}
      <svg
        className="absolute -bottom-20 -left-20 w-[460px] h-[460px] text-[#123A73]/20 animate-web-pulse"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: '3s' }}
      >
        <line x1="0" y1="500" x2="500" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="500" x2="400" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="500" x2="250" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="500" x2="100" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="500" x2="500" y2="400" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="500" x2="500" y2="250" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="500" x2="500" y2="100" stroke="currentColor" strokeWidth="1" />
        
        <circle cx="0" cy="500" r="90" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="500" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="0" cy="500" r="280" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="500" r="380" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />

        <circle cx="100" cy="400" r="3" fill="#E21B2D" />
        <circle cx="200" cy="300" r="3" fill="#123A73" />
        <circle cx="320" cy="180" r="4" fill="#E21B2D" />
      </svg>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E21B2D]/8 rounded-full blur-[140px]" />
      <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] bg-[#123A73]/15 rounded-full blur-[160px]" />
    </div>
  );
};
