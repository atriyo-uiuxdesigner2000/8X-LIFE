import React from 'react';

interface HeroSectionProps {
  onOpenApply: () => void;
  onExploreVerticals: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onExploreVerticals }) => {
  return (
    <section className="w-full border-b border-[#E5E5E5] bg-[#FBF8FF]">
      {/* Top Hairline Meta Banner */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-2.5 border-b border-[#E5E5E5] flex flex-wrap items-center justify-between text-[11px] font-mono tracking-widest text-[#71717A]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#0A0A0A]">VOL. 04 / GLOBAL HUMAN INFRASTRUCTURE</span>
          <span className="text-[#1D4ED8]">■</span>
          <span>SELECTION RATIO: <strong className="text-[#0A0A0A]">0.14%</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>TOTAL ACTIVE OPERATORS: <strong className="text-[#0A0A0A] tabular-nums">250,000+</strong></span>
          <span className="hidden sm:inline text-[#1D4ED8] font-bold">NET_LATENCY: 12MS // ALLOCATED</span>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 pt-10 pb-12 lg:pt-14 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Headline in Newsreader */}
        <div className="lg:col-span-8">
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[76px] leading-[1.02] tracking-[-0.035em] text-[#0A0A0A] font-normal lowercase max-w-4xl">
            we don't hire employees. we orchestrate the top 1% of humans.
          </h1>
        </div>

        {/* Right: Directive Box */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E5E5E5] pt-6 lg:pt-0 lg:pl-8 space-y-6">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-[0.16em] text-[#1D4ED8] uppercase mb-3">
              [SYS_DIRECTIVE: HUMAN_ALPHA]
            </div>
            <p className="font-sans text-[14px] leading-relaxed text-[#1A1B22] font-normal">
              AI creates commodities. Humans create alpha. 8x is not an outsourcing agency or a talent pool—it is an autonomous orchestration layer deploying elite minds into high-leverage business imperatives.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E5E5]">
            <div className="flex items-baseline justify-between text-[11px] font-mono mb-2">
              <span className="tracking-widest uppercase text-[#71717A]">APPLICANT ADMISSION RATE</span>
              <span className="font-bold text-[#0A0A0A] tabular-nums">0.14%</span>
            </div>
            {/* Visual admission rate indicator */}
            <div className="w-full h-1.5 bg-[#E5E5E5] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[0.8%] bg-[#1D4ED8]"></div>
            </div>
            <div className="mt-2 text-[10px] font-mono tracking-wider text-[#71717A] tabular-nums">
              N=1,784,200 SCRUTINIZED / 2,497 ORCHESTRATED
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Micro Metadata Rule */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 border-t border-[#E5E5E5] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
        <div className="py-3 md:pr-6">
          <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">PROTOCOL</div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] mt-0.5">
            SOVEREIGN ALLOCATION
          </div>
        </div>
        <div className="py-3 md:px-6">
          <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">VETTING ARCHITECTURE</div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] mt-0.5">
            PROOF OF COMMERCIAL IMPACT
          </div>
        </div>
        <div className="py-3 md:pl-6">
          <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#71717A]">NETWORK VELOCITY</div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] mt-0.5">
            HYPER-CONCENTRATED ALPHA
          </div>
        </div>
      </div>
    </section>
  );
};
