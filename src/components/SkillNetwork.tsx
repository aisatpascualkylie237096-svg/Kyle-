import React, { useState } from 'react';
import { Layers, Server, Database, Network, Wrench, Shield, Sparkles } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  skills: string[];
}

export const SkillNetwork: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const centerNode = {
    name: 'KYLE',
    sub: 'CS 2027 // CORE',
    x: 250,
    y: 200,
  };

  const nodes: NetworkNode[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      category: 'UI & Interactivity',
      x: 100,
      y: 80,
      icon: <Layers className="w-4 h-4 text-[#E21B2D]" />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      id: 'backend',
      name: 'Backend',
      category: 'Server Logic',
      x: 400,
      y: 80,
      icon: <Server className="w-4 h-4 text-[#67E8F9]" />,
      skills: ['Node.js', 'Express.js', 'Socket.IO', 'C++', 'Java', 'Python'],
    },
    {
      id: 'database',
      name: 'Database',
      category: 'Persistence & Schemas',
      x: 420,
      y: 310,
      icon: <Database className="w-4 h-4 text-[#E21B2D]" />,
      skills: ['PostgreSQL', 'Supabase', 'MySQL', 'Relational Modeling'],
    },
    {
      id: 'apis',
      name: 'APIs',
      category: 'Endpoints & Contracts',
      x: 80,
      y: 310,
      icon: <Network className="w-4 h-4 text-[#67E8F9]" />,
      skills: ['REST APIs', 'Authentication', 'CRUD', 'JSON Payloads'],
    },
    {
      id: 'tools',
      name: 'Dev Tools',
      category: 'Workflow & DevOps',
      x: 250,
      y: 350,
      icon: <Wrench className="w-4 h-4 text-[#E21B2D]" />,
      skills: ['Git', 'GitHub', 'Docker', 'VS Code'],
    },
  ];

  return (
    <div className="bg-[#07111F] border-2 border-[#123A73] hover:border-[#E21B2D] rounded-xl p-6 relative overflow-hidden transition-all duration-300 shadow-[0_0_25px_rgba(18,58,115,0.25)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#123A73]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E21B2D] animate-ping" />
          <h4 className="font-comic font-bold text-xl text-white tracking-wider uppercase">
            DIGITAL SPIDER-WEB SKILL TOPOLOGY
          </h4>
        </div>
        <span className="font-mono text-xs text-[#D9D9D9]">
          INTERACTIVE ARCHITECTURE MAP
        </span>
      </div>

      {/* SVG Canvas for Spider-Web Network */}
      <div className="relative w-full aspect-[5/4] sm:aspect-[5/3] max-h-[440px] flex items-center justify-center">
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 10px rgba(226, 27, 45, 0.2))' }}
        >
          {/* Background Concentric Spider Web Strands */}
          <circle cx="250" cy="200" r="60" stroke="#123A73" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="250" cy="200" r="120" stroke="#123A73" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="250" cy="200" r="170" stroke="#123A73" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />

          {/* Web Strands Between Outer Nodes (The Web Ring) */}
          <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} stroke="#123A73" strokeWidth="1.2" opacity="0.7" />
          <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[2].x} y2={nodes[2].y} stroke="#123A73" strokeWidth="1.2" opacity="0.7" />
          <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[4].x} y2={nodes[4].y} stroke="#123A73" strokeWidth="1.2" opacity="0.7" />
          <line x1={nodes[4].x} y1={nodes[4].y} x2={nodes[3].x} y2={nodes[3].y} stroke="#123A73" strokeWidth="1.2" opacity="0.7" />
          <line x1={nodes[3].x} y1={nodes[3].y} x2={nodes[0].x} y2={nodes[0].y} stroke="#123A73" strokeWidth="1.2" opacity="0.7" />

          {/* Red Glowing Web Lines from Center KYLE to Each Subsystem */}
          {nodes.map((node) => {
            const isHovered = activeNodeId === node.id;
            return (
              <g key={`line-${node.id}`}>
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={isHovered ? '#FFFFFF' : '#E21B2D'}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray={isHovered ? 'none' : '4 2'}
                  className="transition-all duration-300"
                />
                {/* Mid-point web node */}
                <circle
                  cx={(centerNode.x + node.x) / 2}
                  cy={(centerNode.y + node.y) / 2}
                  r="3"
                  fill={isHovered ? '#FFFFFF' : '#E21B2D'}
                  className="animate-pulse"
                />
              </g>
            );
          })}

          {/* Center Hub: KYLE */}
          <g>
            {/* Center Outer Glow Ring */}
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="44"
              fill="#07111F"
              stroke="#E21B2D"
              strokeWidth="2.5"
              className="filter drop-shadow-[0_0_15px_#E21B2D]"
            />
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="38"
              fill="#050505"
              stroke="#123A73"
              strokeWidth="1"
            />
            {/* Center Label */}
            <text
              x={centerNode.x}
              y={centerNode.y - 2}
              textAnchor="middle"
              className="font-comic font-black fill-white text-[16px] tracking-wider select-none"
            >
              {centerNode.name}
            </text>
            <text
              x={centerNode.x}
              y={centerNode.y + 14}
              textAnchor="middle"
              className="font-mono fill-[#E21B2D] text-[9px] font-bold tracking-widest select-none"
            >
              CORE // CS
            </text>
          </g>

          {/* Subsystem Peripheral Nodes */}
          {nodes.map((node) => {
            const isHovered = activeNodeId === node.id;
            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer"
                onMouseEnter={() => setActiveNodeId(node.id)}
                onMouseLeave={() => setActiveNodeId(null)}
                onClick={() => setActiveNodeId(node.id === activeNodeId ? null : node.id)}
              >
                {/* Node circle background */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 34 : 30}
                  fill="#07111F"
                  stroke={isHovered ? '#E21B2D' : '#123A73'}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  className="transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(18,58,115,0.6)]"
                />

                {/* Node Title */}
                <text
                  x={node.x}
                  y={node.y - 2}
                  textAnchor="middle"
                  className={`font-comic font-bold text-[13px] tracking-wider select-none transition-colors ${
                    isHovered ? 'fill-[#E21B2D]' : 'fill-white'
                  }`}
                >
                  {node.name.toUpperCase()}
                </text>

                <text
                  x={node.x}
                  y={node.y + 12}
                  textAnchor="middle"
                  className="font-mono fill-[#D9D9D9] text-[8px] tracking-widest select-none"
                >
                  {node.category.toUpperCase().split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Details / Active Stack Preview */}
      <div className="mt-4 pt-4 border-t border-[#123A73] bg-[#050505] p-3.5 rounded-lg">
        {activeNodeId ? (
          <div>
            {nodes
              .filter((n) => n.id === activeNodeId)
              .map((node) => (
                <div key={node.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {node.icon}
                    <span className="font-comic text-base text-white uppercase tracking-wider font-bold">
                      {node.name} Connected Subsystems:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {node.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-[#07111F] border border-[#E21B2D] text-xs font-mono text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs font-mono text-[#D9D9D9]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E21B2D]" />
              <span>Hover or tap any subsystem node to inspect linked technical stacks.</span>
            </span>
            <span className="text-[#E21B2D] hidden sm:inline">5 DOMAINS ACTIVE</span>
          </div>
        )}
      </div>
    </div>
  );
};
