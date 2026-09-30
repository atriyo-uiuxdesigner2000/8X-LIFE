import React from 'react';

interface GatewaySectionProps {
  onOpenApply: () => void;
  onOpenCodex: () => void;
  onNavigate: (view: 'broadsheet' | 'talent' | 'verticals' | 'vetting' | 'codex') => void;
}

export const GatewaySection: React.FC<GatewaySectionProps> = ({
  onOpenApply,
  onOpenCodex,
  onNavigate,
}) => {
  return (
    <section className="w-full bg-[#1D4ED8] text-white py-14 lg:py-20 border-b border-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Top Header Label */}
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.18em] uppercase font-bold text-white/90 mb-4">
          <span className="w-2 h-2 bg-white inline-block"></span>
          <span>ADMISSION GATEWAY // RESTRICTED ACCESS</span>
        </div>

        {/* Big Display Headline */}
        <h2 className="font-editorial text-4xl sm:text-6xl lg:text-8xl tracking-[-0.03em] font-normal leading-[1.05] uppercase max-w-5xl mb-6">
          ARE YOU IN THE TOP 1%?
        </h2>

        {/* Subhead text */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl font-light mb-10 leading-relaxed">
          We reject 99.86% of applicants. If you survive the vetting, you will never work a standard 9-to-5 again.
        </p>

        {/* Actions & Metrics Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-white/20">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenApply}
              className="bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors"
            >
              REQUEST ACCESS VETTING
            </button>
            <button
              onClick={onOpenCodex}
              className="border border-white text-white hover:bg-white hover:text-[#1D4ED8] px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase transition-colors"
            >
              READ FULL CODEX (PDF)
            </button>
          </div>

          <div className="text-[11px] font-mono tracking-widest text-white/80 uppercase">
            AVERAGE REVIEW CYCLE: <strong className="text-white font-bold">72 HOURS</strong>
          </div>
        </div>

        {/* Subnav links in electric blue footer zone */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-wider">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('codex')}
              className="text-white hover:underline underline-offset-4 uppercase"
            >
              MANIFESTO
            </button>
            <button
              onClick={() => onNavigate('verticals')}
              className="text-white hover:underline underline-offset-4 uppercase"
            >
              VERTICALS
            </button>
            <button
              onClick={() => onNavigate('talent')}
              className="text-white hover:underline underline-offset-4 uppercase"
            >
              TALENT DIRECTORY
            </button>
            <button
              onClick={() => onNavigate('codex')}
              className="text-white hover:underline underline-offset-4 uppercase"
            >
              ETHICS & CODEX
            </button>
            <button
              onClick={onOpenApply}
              className="text-white hover:underline underline-offset-4 uppercase"
            >
              CAREERS
            </button>
          </div>
          <div className="text-white/70">
            SYS_BUILD: 2025.1.0_PROD
          </div>
        </div>

        {/* Copyright & Security Protocol */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-white/70">
          <div>
            © 2025 8X ORCHESTRATION GROUP. ALL RIGHTS RESERVED. ZERO COMMODITY WORKFORCE.
          </div>
          <div>
            SECURITY PROTOCOL: STRICT ISOLATION // ZERO DATA RETENTION
          </div>
        </div>
      </div>
    </section>
  );
};
