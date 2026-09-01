import React from 'react';

export const CityBackground: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none h-48 sm:h-64 z-0">
      {/* Blue Atmospheric Fog & Horizon Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#07111F]/80 to-transparent" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-32 bg-[#123A73]/25 blur-3xl animate-skyline-glow" />

      {/* SVG City Skyline Silhouette with glowing windows & red signal beacons */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full text-[#07111F] preserve-3d opacity-80"
        viewBox="0 0 1440 240"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deep background layer buildings (dark blue/black) */}
        <path
          d="M0 240 L0 180 L40 180 L40 140 L80 140 L80 170 L130 170 L130 120 L150 90 L170 120 L170 180 L230 180 L230 100 L280 100 L280 160 L340 160 L340 80 L380 80 L380 190 L450 190 L450 130 L520 130 L520 70 L530 40 L540 70 L570 70 L570 170 L640 170 L640 110 L700 110 L700 190 L760 190 L760 90 L820 90 L820 160 L880 160 L880 60 L920 60 L920 180 L990 180 L990 120 L1060 120 L1060 80 L1100 80 L1100 170 L1180 170 L1180 100 L1240 100 L1240 160 L1310 160 L1310 70 L1320 50 L1330 70 L1360 70 L1360 180 L1440 180 L1440 240 Z"
          fill="#0a1526"
        />

        {/* Foreground sharp buildings */}
        <path
          d="M0 240 L0 195 L60 195 L60 155 L110 155 L110 205 L190 205 L190 135 L250 135 L250 185 L310 185 L310 115 L360 115 L360 210 L420 210 L420 145 L490 145 L490 195 L580 195 L580 125 L650 125 L650 200 L730 200 L730 130 L790 130 L790 185 L850 185 L850 105 L900 105 L900 195 L970 195 L970 140 L1030 140 L1030 215 L1120 215 L1120 135 L1190 135 L1190 190 L1270 190 L1270 120 L1340 120 L1340 195 L1440 195 L1440 240 Z"
          fill="#050912"
        />

        {/* Glowing Yellow & Cyan Windows */}
        <rect x="50" y="165" width="4" height="6" fill="#FDE047" opacity="0.8" />
        <rect x="90" y="170" width="4" height="6" fill="#67E8F9" opacity="0.6" />
        <rect x="200" y="150" width="5" height="5" fill="#FDE047" opacity="0.7" />
        <rect x="215" y="165" width="5" height="5" fill="#FDE047" opacity="0.9" />
        <rect x="325" y="130" width="4" height="6" fill="#67E8F9" opacity="0.8" />
        <rect x="340" y="145" width="4" height="6" fill="#FDE047" opacity="0.6" />
        <rect x="505" y="160" width="6" height="6" fill="#FDE047" opacity="0.85" />
        <rect x="600" y="140" width="5" height="5" fill="#67E8F9" opacity="0.75" />
        <rect x="615" y="155" width="5" height="5" fill="#FDE047" opacity="0.9" />
        <rect x="745" y="145" width="4" height="6" fill="#67E8F9" opacity="0.8" />
        <rect x="865" y="125" width="5" height="5" fill="#FDE047" opacity="0.7" />
        <rect x="880" y="140" width="5" height="5" fill="#FDE047" opacity="0.8" />
        <rect x="1000" y="150" width="5" height="5" fill="#67E8F9" opacity="0.9" />
        <rect x="1140" y="150" width="4" height="6" fill="#FDE047" opacity="0.85" />
        <rect x="1285" y="135" width="5" height="5" fill="#67E8F9" opacity="0.7" />
        <rect x="1300" y="150" width="5" height="5" fill="#FDE047" opacity="0.9" />

        {/* Antennas & Glowing Red Beacon Towers */}
        <line x1="530" y1="40" x2="530" y2="15" stroke="#E21B2D" strokeWidth="2" />
        <circle cx="530" cy="15" r="3" fill="#E21B2D" className="animate-ping" />

        <line x1="880" y1="60" x2="880" y2="35" stroke="#E21B2D" strokeWidth="1.5" />
        <circle cx="880" cy="35" r="2.5" fill="#E21B2D" />

        <line x1="1320" y1="50" x2="1320" y2="25" stroke="#E21B2D" strokeWidth="2" />
        <circle cx="1320" cy="25" r="3" fill="#E21B2D" className="animate-ping" />
      </svg>
    </div>
  );
};
