import React, { useState } from 'react';
import { ArrowLeft, Printer, Download, Check, Shield } from 'lucide-react';
import { CODEX_CLAUSES } from '../data/orchestrationData';

interface CodexDocumentViewProps {
  onBackToBroadsheet: () => void;
  onOpenApply: () => void;
  initialClause?: string | null;
}

export const CodexDocumentView: React.FC<CodexDocumentViewProps> = ({
  onBackToBroadsheet,
  onOpenApply,
  initialClause,
}) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="w-full bg-[#FBF8FF] min-h-screen py-10">
      <div className="max-w-[960px] mx-auto px-4 lg:px-8">
        {/* Document Action Ribbon */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#0A0A0A] gap-4 mb-8">
          <button
            onClick={onBackToBroadsheet}
            className="text-xs font-mono tracking-wider uppercase text-[#71717A] hover:text-[#0A0A0A] border border-[#E5E5E5] px-3 py-1.5 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO BROADSHEET</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 border border-[#E5E5E5] text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 bg-[#0A0A0A] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'CODEX-2025.PDF READY' : 'DOWNLOAD CODEX (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Archival Document Container */}
        <div className="bg-[#FFFFFF] border border-[#0A0A0A] p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Archival Header Classification */}
          <div className="border-b-2 border-[#0A0A0A] pb-6 mb-8 flex flex-wrap justify-between items-baseline text-[11px] font-mono tracking-widest text-[#71717A]">
            <div>
              <span className="font-bold text-[#0A0A0A]">8X FOUNDATION ARCHIVE</span> // SYSTEM DIRECTIVE
            </div>
            <div>
              DOC_REF: <strong className="text-[#0A0A0A]">CODEX-2025 // REVISION 4.1</strong>
            </div>
          </div>

          {/* Document Title */}
          <div className="mb-10">
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-[#1D4ED8] mb-2">
              FOUNDATIONAL CHARTER & CONSTITUTION
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#0A0A0A] font-normal tracking-[-0.03em] leading-tight mb-4">
              The Sovereign Talent Codex
            </h1>
            <p className="font-editorial text-xl sm:text-2xl italic text-[#434655]">
              &ldquo;Most organizations want warm bodies to fill seats. We want obsessives who treat execution as high art.&rdquo;
            </p>
          </div>

          {/* Preface / Preamble */}
          <div className="py-6 border-t border-b border-[#E5E5E5] space-y-4 text-xs sm:text-sm font-sans leading-relaxed text-[#1A1B22]">
            <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-[#0A0A0A] first-letter:leading-none">
              The modern corporation has transformed into an insulation layer: a multi-layered bureaucracy designed to protect median performance from direct exposure to commercial reality. In this environment, top-tier minds are throttled by consensus theater, arbitrary standups, and political survival games.
            </p>
            <p>
              8x was founded on an opposing premise: exceptional humans perform exponentially better when unencumbered by managerial overhead. We do not provide employment; we provide an autonomous arena where sovereign operators execute high-conviction imperatives directly alongside visionary founders.
            </p>
          </div>

          {/* The Core Covenants */}
          <div className="py-8 space-y-10">
            {CODEX_CLAUSES.map((clause, idx) => (
              <div key={clause.id} className="border-b border-[#E5E5E5] pb-8 last:border-b-0">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-2">
                  <span className="text-[#1D4ED8] font-bold">CLAUSE {clause.id} // {clause.tag}</span>
                  <span className="uppercase">{clause.label}</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal mb-3">
                  {clause.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#1A1B22] leading-relaxed mb-4">
                  {clause.content}
                </p>
                <div className="p-3.5 bg-[#FBF8FF] border border-[#E5E5E5] text-xs font-mono text-[#434655] flex justify-between items-baseline">
                  <span>OPERATIONAL MEASURE: <strong className="text-[#0A0A0A]">{clause.statLabel}</strong></span>
                  <span className="text-[#1D4ED8] font-bold text-sm tabular-nums">{clause.statValue}</span>
                </div>
                <p className="mt-3 text-xs font-sans text-[#71717A] italic">
                  Note: {clause.subtext}
                </p>
              </div>
            ))}

            {/* Additional Clause 05 */}
            <div className="border-b border-[#E5E5E5] pb-8">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A] mb-2">
                <span className="text-[#1D4ED8] font-bold">CLAUSE 05 // TERMINATION COVENANT</span>
                <span className="uppercase">INSTANTANEOUS</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal mb-3">
                MUTUAL RIGHT OF IMMEDIATE ROTATION.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#1A1B22] leading-relaxed mb-4">
                Both client and operator maintain the unrestricted right to terminate an engagement within 24 hours without penalty if mathematical rigor or cultural alignment falls below the 99th percentile threshold. We do not tolerate sunk-cost fallacies.
              </p>
              <div className="p-3.5 bg-[#FBF8FF] border border-[#E5E5E5] text-xs font-mono text-[#434655] flex justify-between items-baseline">
                <span>ROTATION PENALTY: <strong className="text-[#0A0A0A]">ZERO DOLLARS</strong></span>
                <span className="text-[#1D4ED8] font-bold text-sm">24 HR DISSOLUTION</span>
              </div>
            </div>
          </div>

          {/* Seal & Signoff */}
          <div className="pt-8 border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71717A]">
                PROMULGATED BY 8X ORCHESTRATION COUNCIL
              </div>
              <div className="font-editorial text-lg text-[#0A0A0A] mt-1">
                Ratified Across London, New York, San Francisco, Tokyo.
              </div>
            </div>

            <button
              onClick={onOpenApply}
              className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
            >
              APPLY TO THE NETWORK →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
