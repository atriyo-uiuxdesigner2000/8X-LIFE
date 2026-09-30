import React from 'react';
import { CODEX_CLAUSES } from '../data/orchestrationData';
import { ArrowRight, BookOpen } from 'lucide-react';

interface ManifestoSectionProps {
  onOpenCodex: () => void;
  onSelectClause?: (clauseId: string) => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ onOpenCodex, onSelectClause }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 lg:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-[#0A0A0A] pb-4 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#1D4ED8] mb-1">
              [ 01 / THE MANIFESTO — SELF-SELECTION MANDATE ]
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] font-normal tracking-[-0.025em]">
              The Non-Negotiable Standard
            </h2>
          </div>
          <div className="flex items-center gap-4 text-right">
            <span className="text-[11px] font-mono tracking-wider text-[#71717A]">
              DOC: CODEX-2025 // REVISION 4.1
            </span>
            <button
              onClick={onOpenCodex}
              className="text-[11px] font-mono tracking-wider text-[#1D4ED8] hover:text-[#0A0A0A] underline underline-offset-4 font-bold flex items-center gap-1"
            >
              <span>READ CODEX</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Big Editorial Pull Quote */}
        <div className="py-10 lg:py-14 border-b border-[#E5E5E5]">
          <div className="flex items-start gap-4 lg:gap-6 max-w-5xl">
            <span className="font-editorial text-6xl sm:text-7xl lg:text-8xl text-[#1D4ED8] leading-none font-serif select-none">
              &ldquo;
            </span>
            <blockquote className="font-editorial text-2xl sm:text-4xl lg:text-[46px] leading-[1.18] text-[#0A0A0A] font-normal tracking-[-0.02em]">
              Most organizations want warm bodies to fill seats. We want obsessives who treat execution as high art.
            </blockquote>
          </div>
        </div>

        {/* 4-Card Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#E5E5E5] divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {CODEX_CLAUSES.map((clause) => (
            <div
              key={clause.id}
              onClick={() => onSelectClause ? onSelectClause(clause.id) : onOpenCodex()}
              className="p-6 lg:p-8 flex flex-col justify-between hover:bg-[#FBF8FF] transition-colors group cursor-pointer"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-[#71717A] mb-4">
                  <span className="font-bold text-[#1D4ED8] group-hover:text-[#0A0A0A] transition-colors">
                    {clause.id} // {clause.tag}
                  </span>
                  <span className="text-[#71717A] uppercase">{clause.label}</span>
                </div>

                <h3 className="font-sans font-bold text-sm lg:text-[15px] uppercase tracking-wider text-[#0A0A0A] mb-3 leading-snug">
                  {clause.title}
                </h3>

                <p className="font-sans text-xs lg:text-[13px] leading-relaxed text-[#434655] font-normal">
                  {clause.content}
                </p>
              </div>

              {/* Card Footer Metric */}
              <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-baseline justify-between text-[10px] font-mono">
                <span className="tracking-widest uppercase text-[#71717A]">
                  {clause.statLabel}
                </span>
                <span className="font-bold text-sm text-[#0A0A0A] group-hover:text-[#1D4ED8] transition-colors tabular-nums">
                  {clause.statValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
