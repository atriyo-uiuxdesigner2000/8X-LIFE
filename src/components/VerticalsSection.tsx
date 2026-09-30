import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VERTICALS, VerticalData } from '../data/orchestrationData';

interface VerticalsSectionProps {
  onSelectVertical: (vertical: VerticalData) => void;
  onRequestAllocation: (verticalId?: string) => void;
}

export const VerticalsSection: React.FC<VerticalsSectionProps> = ({
  onSelectVertical,
  onRequestAllocation,
}) => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-14 lg:py-20 border-b border-[#27272A]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-[#27272A] pb-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#3B82F6] mb-2">
              [ 02 / DEPLOYMENT VERTICALS ] — INSTITUTIONAL SCALE
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.025em] text-white">
              Specialized Sovereign Networks
            </h2>
          </div>
          <div className="lg:col-span-5 text-[#A1A1AA] text-xs sm:text-sm font-sans leading-relaxed">
            Specialized autonomous human networks driving high-leverage commercial velocity for frontier technology and global enterprise.
          </div>
        </div>

        {/* 2x2 Architectural Grid with hairline dividers and connector points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#27272A] divide-y lg:divide-y-0 lg:divide-x divide-[#27272A] relative">
          {/* Connector points indicator */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-2 h-2 bg-[#1D4ED8] border border-white/20"></div>

          {/* Vertical 01: 8x Social */}
          <div 
            onClick={() => onSelectVertical(VERTICALS[0])}
            className="p-6 lg:p-10 flex flex-col justify-between hover:bg-[#111113] transition-colors group cursor-pointer border-b border-[#27272A]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
                  <span>VERTICAL 01 // NARRATIVE CAPITAL</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Title */}
              <h3 className="font-editorial text-3xl lg:text-4xl text-white font-normal mb-3 group-hover:text-[#3B82F6] transition-colors">
                8x Social
              </h3>

              {/* Copy */}
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Sovereign media distribution networks and viral narrative architects. Engineering cultural zeitgeists and non-linear attention capture for category creators.
              </p>
            </div>

            {/* Sub-Metric Module */}
            <div className="border border-[#27272A] bg-[#141416] p-4 text-[11px] font-mono">
              <div className="flex justify-between items-center text-[9px] text-[#71717A] tracking-widest uppercase border-b border-[#27272A] pb-1.5 mb-3">
                <span>ENTERPRISE ATTRIBUTION</span>
                <span className="text-[#3B82F6]">DIRECT REVENUE</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">$128M</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">PIPELINE INFLUENCED</div>
                </div>
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">88</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">FOUNDER PROFILES MANAGED</div>
                </div>
              </div>
              <div className="border-t border-[#27272A] pt-2 flex justify-between items-center text-[9px] text-[#A1A1AA]">
                <span>CLIENT COHORT</span>
                <span className="text-white font-bold tracking-wider">FORTUNE 500 / DECACORNS</span>
              </div>
            </div>
          </div>

          {/* Vertical 02 & Impact Register Module */}
          <div className="border-b border-[#27272A] flex flex-col divide-y divide-[#27272A]">
            {/* Impact Register Box (Top right corner of the grid in image) */}
            <div className="p-6 lg:p-8 bg-[#121214]">
              <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#71717A] mb-3">
                <span>IMPACT REGISTER</span>
                <span className="text-white font-bold">Q4 AUDITED</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-3">
                <div>
                  <div className="font-editorial text-2xl lg:text-3xl text-white tabular-nums">+4.2B</div>
                  <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider mt-0.5">
                    VERIFIED IMPRESSIONS
                  </div>
                </div>
                <div>
                  <div className="font-editorial text-2xl lg:text-3xl text-white tabular-nums">14</div>
                  <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider mt-0.5">
                    SOVEREIGN ACCOUNTS
                  </div>
                </div>
              </div>
              <div className="border-t border-[#27272A] pt-2 flex justify-between items-center text-[9px] font-mono text-[#71717A]">
                <span>AUDIENCE PENETRATION</span>
                <span className="text-[#3B82F6] font-bold">TOP 0.01% GLOBAL</span>
              </div>
            </div>

            {/* Vertical 02: 8x LinkedIn */}
            <div 
              onClick={() => onSelectVertical(VERTICALS[1])}
              className="p-6 lg:p-8 hover:bg-[#111113] transition-colors group cursor-pointer flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
                    <span>VERTICAL 02 // B2B AUTHORITY</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-editorial text-3xl text-white font-normal mb-2 group-hover:text-[#3B82F6] transition-colors">
                  8x LinkedIn
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Executive ghostwriting and B2B narrative dominance for Fortune 500 CEOs and decacorn founders. Transforming individual authority into commercial velocity.
                </p>
              </div>

              {/* Delivery Speed / Benchmark */}
              <div className="border border-[#27272A] bg-[#141416] p-4 text-[11px] font-mono">
                <div className="flex justify-between items-center text-[9px] text-[#71717A] tracking-widest uppercase border-b border-[#27272A] pb-1.5 mb-3">
                  <span>DELIVERY SPEED</span>
                  <span className="text-[#3B82F6]">RIGOR VERIFIED</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="font-editorial text-2xl text-white font-normal tabular-nums">480+</div>
                    <div className="text-[9px] text-[#71717A] uppercase mt-0.5">INSTITUTIONAL MEMOS</div>
                  </div>
                  <div>
                    <div className="font-editorial text-2xl text-white font-normal tabular-nums">18 HR</div>
                    <div className="text-[9px] text-[#71717A] uppercase mt-0.5">AVG. TURNAROUND</div>
                  </div>
                </div>
                <div className="border-t border-[#27272A] pt-2 flex justify-between items-center text-[9px] text-[#A1A1AA]">
                  <span>ACCURACY BENCHMARK</span>
                  <span className="text-white font-bold tracking-wider">99.4% EMPIRICAL CONFIDENCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical 03: 8x Research */}
          <div 
            onClick={() => onSelectVertical(VERTICALS[2])}
            className="p-6 lg:p-10 flex flex-col justify-between hover:bg-[#111113] transition-colors group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
                  <span>VERTICAL 03 // INTELLIGENCE</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="font-editorial text-3xl lg:text-4xl text-white font-normal mb-3 group-hover:text-[#3B82F6] transition-colors">
                8x Research
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Deep-dive competitive intelligence, macroeconomic synthesis, and technical due diligence executed by specialized domain experts at instantaneous turnaround.
              </p>
            </div>

            <div className="border border-[#27272A] bg-[#141416] p-4 text-[11px] font-mono">
              <div className="flex justify-between items-center text-[9px] text-[#71717A] tracking-widest uppercase border-b border-[#27272A] pb-1.5 mb-3">
                <span>CONVERSION DISCIPLINE</span>
                <span className="text-[#3B82F6]">CAPITAL VELOCITY</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">$42M</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">ARR CLOSED FY24</div>
                </div>
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">41.8%</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">ENTERPRISE WIN RATE</div>
                </div>
              </div>
              <div className="border-t border-[#27272A] pt-2 flex justify-between items-center text-[9px] text-[#A1A1AA]">
                <span>DEAL ARCHITECTURE</span>
                <span className="text-white font-bold tracking-wider">7-FIGURE MINIMUM ACV</span>
              </div>
            </div>
          </div>

          {/* Vertical 04: 8x Sales */}
          <div 
            onClick={() => onSelectVertical(VERTICALS[3])}
            className="p-6 lg:p-10 flex flex-col justify-between hover:bg-[#111113] transition-colors group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
                  <span>VERTICAL 04 // REVENUE ORCHESTRATION</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="font-editorial text-3xl lg:text-4xl text-white font-normal mb-3 group-hover:text-[#3B82F6] transition-colors">
                8x Sales
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-8">
                High-velocity enterprise outbound operators and deal architects closing 7-figure ACVs. Eliminating friction in complex global commercial cycles.
              </p>
            </div>

            <div className="border border-[#27272A] bg-[#141416] p-4 text-[11px] font-mono">
              <div className="flex justify-between items-center text-[9px] text-[#71717A] tracking-widest uppercase border-b border-[#27272A] pb-1.5 mb-3">
                <span>PIPELINE ORCHESTRATION</span>
                <span className="text-[#3B82F6]">EXECUTIVE ENGAGEMENT</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">$380M</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">LIFETIME DEAL INFLUENCE</div>
                </div>
                <div>
                  <div className="font-editorial text-2xl text-white font-normal tabular-nums">100%</div>
                  <div className="text-[9px] text-[#71717A] uppercase mt-0.5">UNBROKEN TIER-1 PLACEMENT</div>
                </div>
              </div>
              <div className="border-t border-[#27272A] pt-2 flex justify-between items-center text-[9px] text-[#A1A1AA]">
                <span>DEPLOYMENT SPEED</span>
                <span className="text-white font-bold tracking-wider">48 HR SOVEREIGN DISPATCH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fast Action Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#71717A]">
            LOOKING TO DEPLOY AN 8X SOVEREIGN CELL FOR YOUR ORGANIZATION?
          </div>
          <button
            onClick={() => onRequestAllocation()}
            className="px-5 py-2.5 bg-white text-[#0A0A0A] hover:bg-[#1D4ED8] hover:text-white font-bold tracking-wider transition-colors uppercase text-[11px]"
          >
            REQUEST SOVEREIGN ALLOCATION →
          </button>
        </div>
      </div>
    </section>
  );
};
