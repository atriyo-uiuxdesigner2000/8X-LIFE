import React, { useState } from 'react';
import { OPERATORS, Operator } from '../data/orchestrationData';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

interface CohortGridProps {
  onSelectOperator: (operator: Operator) => void;
  onViewFullRoster: () => void;
}

export const CohortGrid: React.FC<CohortGridProps> = ({ onSelectOperator, onViewFullRoster }) => {
  const [hoveredOpId, setHoveredOpId] = useState<string | null>(null);

  // Take first 9 operators for the 3x3 archival dispatch block
  const displayOperators = OPERATORS.slice(0, 9);

  return (
    <section className="w-full bg-[#FBF8FF] py-8 lg:py-12 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Outer Archival Box with 1px border */}
        <div className="border border-[#0A0A0A] bg-[#0A0A0A] text-white">
          {/* Top Archival Header Strip */}
          <div className="bg-[#08080A] border-b border-[#222226] px-4 py-2.5 flex flex-wrap items-center justify-between text-[11px] font-mono tracking-widest text-[#8E8E93]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
              <span className="font-bold text-white uppercase tracking-[0.16em]">
                ARCHIVAL DISPATCH: COHORT IX // PRIVATE PORTFOLIO [UNCOMPROMISING SEVERITY]
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <span className="hidden sm:inline text-[#71717A]">CLASSIFICATION: ZERO TOLERANCE</span>
              <span className="hidden sm:inline text-[#A1A1AA]">REC_REF: [8X_EDITORIAL_2025_091]</span>
              <span className="text-[#3B82F6] flex items-center gap-1 font-semibold">
                LATENCY: 12ms <span className="inline-block w-1.5 h-1.5 bg-[#1D4ED8] animate-pulse"></span>
              </span>
            </div>
          </div>

          {/* 3x3 Photo Grid Container with relative overlays */}
          <div className="relative bg-[#0A0A0A] overflow-hidden">
            {/* The 3x3 Grid */}
            <div className="grid grid-cols-3 gap-[1px] bg-[#1E1E22]">
              {displayOperators.map((op, idx) => {
                // Focus Mode Target: 4th item (idx=3, selector: div:nth-of-type(4) > img)
                const isSelectedBrutalTarget = idx === 3;
                const isOtherSeriousOperator = idx === 2 || idx === 5;

                return (
                  <div
                    key={op.id}
                    onClick={() => onSelectOperator(op)}
                    onMouseEnter={() => setHoveredOpId(op.id)}
                    onMouseLeave={() => setHoveredOpId(null)}
                    className="relative aspect-square sm:aspect-[4/3] lg:aspect-[1.25/1] bg-[#0A0A0C] overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={op.image}
                      alt={op.name}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isSelectedBrutalTarget
                          ? 'object-[center_16%] grayscale contrast-[290%] brightness-[62%] group-hover:contrast-[320%] group-hover:brightness-[68%] scale-[1.10]'
                          : isOtherSeriousOperator
                          ? 'object-[center_18%] grayscale contrast-[240%] brightness-[68%] group-hover:contrast-[260%] group-hover:brightness-[74%] scale-[1.05]'
                          : 'object-center grayscale contrast-[195%] brightness-[78%] group-hover:contrast-[215%] group-hover:brightness-[84%]'
                      }`}
                      style={{
                        filter: isSelectedBrutalTarget
                          ? 'grayscale(100%) contrast(290%) brightness(62%) drop-shadow(0 0 8px rgba(0,0,0,1))'
                          : isOtherSeriousOperator
                          ? 'grayscale(100%) contrast(240%) brightness(68%) drop-shadow(0 0 4px rgba(0,0,0,1))'
                          : 'grayscale(100%) contrast(195%) brightness(78%) drop-shadow(0 0 2px rgba(0,0,0,0.9))'
                      }}
                    />
                    
                    {/* Harsh tactical contrast vignette with sharp chiaroscuro shading */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/45 pointer-events-none transition-opacity ${
                      isSelectedBrutalTarget
                        ? 'opacity-90 group-hover:opacity-65'
                        : isOtherSeriousOperator
                        ? 'opacity-85 group-hover:opacity-60'
                        : 'opacity-80 group-hover:opacity-50'
                    }`}></div>

                    {/* Corner Code Tag */}
                    <div className="absolute top-2 left-2 text-[9px] font-mono tracking-widest text-white/90 bg-black/90 px-1 py-0.5 border border-white/20">
                      {op.code}
                    </div>

                    {/* Hover Information Layer */}
                    <div className={`absolute bottom-2 left-2 right-2 text-white transition-all duration-200 ${
                      hoveredOpId === op.id ? 'opacity-100 translate-y-0' : 'opacity-0 sm:opacity-75 sm:translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}>
                      <div className="text-[10px] font-mono text-[#3B82F6] tracking-wider uppercase font-semibold">
                        {op.role}
                      </div>
                      <div className="text-xs font-mono text-white tracking-wide truncate">
                        {op.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Top-Left Floating Archival Badge */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 bg-[#FFFFFF] text-[#0A0A0A] p-3 sm:p-4 max-w-[240px] sm:max-w-[280px] border border-[#0A0A0A] shadow-none pointer-events-auto">
              <div className="text-[9px] font-mono tracking-[0.16em] uppercase font-bold text-[#71717A] mb-1">
                CURATED OPERATORS
              </div>
              <div className="font-editorial text-sm sm:text-base italic text-[#0A0A0A] leading-tight mb-2">
                "Execution as high art."
              </div>
              <div className="text-[9px] font-mono tracking-widest text-[#1D4ED8] font-bold uppercase">
                COHORT IX <span className="text-[#0A0A0A]">TIER 0 VERIFIED</span>
              </div>
            </div>

            {/* Bottom-Right Floating Deployment Badge */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-10 bg-[#0A0A0A]/95 text-white p-3 sm:p-4 border border-[#3F3F46] max-w-[260px] sm:max-w-[300px] pointer-events-auto">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.14em] uppercase text-[#A1A1AA] mb-2 border-b border-[#27272A] pb-1">
                <span>ROSTER ASSIGNMENTS</span>
                <span className="text-[#3B82F6] font-bold">ACTIVE DEPLOYMENTS</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono">
                <div className="flex justify-between items-center text-[#E4E4E7]">
                  <span className="tracking-wide">CHIEF OF RESEARCH</span>
                  <span className="text-[#3B82F6] font-bold">[LON-01]</span>
                </div>
                <div className="flex justify-between items-center text-[#E4E4E7]">
                  <span className="tracking-wide">LEAD STRATEGIST</span>
                  <span className="text-[#3B82F6] font-bold">[NYC-04]</span>
                </div>
                <div className="flex justify-between items-center text-[#E4E4E7]">
                  <span className="tracking-wide">HEAD OF DISTRIBUTION</span>
                  <span className="text-[#3B82F6] font-bold">[SFO-09]</span>
                </div>
              </div>
              <button
                onClick={onViewFullRoster}
                className="mt-2.5 w-full py-1 text-center bg-[#18181B] hover:bg-[#1D4ED8] text-white text-[9px] font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-1"
              >
                <span>OPEN FULL DOSSIER DIRECTORY</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Bottom Metrics & Barcode Footer Strip */}
          <div className="bg-[#FFFFFF] text-[#0A0A0A] border-t border-[#0A0A0A] px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5] items-center">
            {/* Metric 01 */}
            <div className="pr-4">
              <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">
                METRIC 01
              </div>
              <div className="font-editorial text-2xl lg:text-3xl text-[#0A0A0A] leading-none mt-1 font-normal tabular-nums">
                $1.4B+
              </div>
              <div className="text-[9px] font-mono tracking-wider uppercase text-[#71717A] mt-1">
                CUMULATIVE TRANSACTION VALUE DRIVEN
              </div>
            </div>

            {/* Metric 02 */}
            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">
                METRIC 02
              </div>
              <div className="font-editorial text-2xl lg:text-3xl text-[#0A0A0A] leading-none mt-1 font-normal tabular-nums">
                0.00%
              </div>
              <div className="text-[9px] font-mono tracking-wider uppercase text-[#71717A] mt-1">
                HEADCOUNT OUTSOURCING TOLERANCE
              </div>
            </div>

            {/* Metric 03 */}
            <div className="lg:px-4 pt-3 lg:pt-0">
              <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">
                METRIC 03
              </div>
              <div className="font-editorial text-2xl lg:text-3xl text-[#0A0A0A] leading-none mt-1 font-normal tabular-nums">
                48 HR
              </div>
              <div className="text-[9px] font-mono tracking-wider uppercase text-[#71717A] mt-1">
                SOVEREIGN NETWORK MOBILIZATION
              </div>
            </div>

            {/* Barcode & Hash */}
            <div className="lg:pl-4 pt-3 lg:pt-0 flex flex-col items-start lg:items-end justify-center">
              {/* Scalable SVG Barcode */}
              <div className="h-6 w-32 flex items-center justify-between gap-[2px]">
                {[3, 1, 2, 4, 1, 3, 2, 1, 5, 2, 1, 3, 4, 1, 2, 3, 1, 4, 2].map((w, i) => (
                  <div
                    key={i}
                    className="h-full bg-[#0A0A0A]"
                    style={{ width: `${w * 1.5}px` }}
                  ></div>
                ))}
              </div>
              <div className="text-[9px] font-mono tracking-[0.12em] uppercase text-[#71717A] mt-1">
                AUTH_HASH: <strong className="text-[#0A0A0A]">8X_7719_HUMAN_CAP</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
