import React, { useState } from 'react';
import { VERTICALS, VerticalData } from '../data/orchestrationData';
import { ArrowRight, CheckCircle2, ChevronRight, Calculator, Clock, ShieldCheck } from 'lucide-react';

interface VerticalsDetailViewProps {
  onBackToBroadsheet: () => void;
  onRequestAllocation: (verticalId?: string) => void;
}

export const VerticalsDetailView: React.FC<VerticalsDetailViewProps> = ({
  onBackToBroadsheet,
  onRequestAllocation,
}) => {
  const [activeTab, setActiveTab] = useState<string>(VERTICALS[0].id);

  // Scope Calculator State
  const [scopeVertical, setScopeVertical] = useState<string>('social');
  const [teamSize, setTeamSize] = useState<number>(2);
  const [durationMonths, setDurationMonths] = useState<number>(3);
  const [urgency, setUrgency] = useState<'48hr' | 'standard'>('48hr');

  const selectedVertical = VERTICALS.find((v) => v.id === activeTab) || VERTICALS[0];

  // Calculation simulation
  const baseMonthlyRate = scopeVertical === 'sales' ? 45000 : scopeVertical === 'research' ? 40000 : 35000;
  const totalAllocationBudget = baseMonthlyRate * teamSize * durationMonths * (urgency === '48hr' ? 1.15 : 1.0);
  const estimatedImpactValue = totalAllocationBudget * 8.4; // 8x return multiplier

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#0A0A0A] gap-4">
          <div>
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#1D4ED8] mb-1">
              [ 03 // INSTITUTIONAL CAPABILITIES & MATRICES ]
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0A0A0A] tracking-[-0.025em]">
              Deployment Verticals & Direct Impact
            </h1>
          </div>
          <button
            onClick={onBackToBroadsheet}
            className="text-xs font-mono tracking-wider uppercase text-[#71717A] hover:text-[#0A0A0A] border border-[#E5E5E5] px-3 py-1.5 transition-colors"
          >
            ← BACK TO BROADSHEET
          </button>
        </div>

        {/* Tab Navigation for Verticals */}
        <div className="flex border-b border-[#0A0A0A] overflow-x-auto text-xs font-mono tracking-wider">
          {VERTICALS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveTab(v.id)}
              className={`px-6 py-3.5 border-r border-[#E5E5E5] whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === v.id
                  ? 'bg-[#0A0A0A] text-white font-bold'
                  : 'bg-white text-[#71717A] hover:text-[#0A0A0A] hover:bg-[#FBF8FF]'
              }`}
            >
              <span className={activeTab === v.id ? 'text-[#3B82F6]' : 'text-[#71717A]'}>
                {v.number}
              </span>
              <span>{v.title}</span>
            </button>
          ))}
        </div>

        {/* Active Vertical Showcase */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-[#E5E5E5]">
          {/* Left Column: Thesis & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#1D4ED8] font-bold uppercase mb-2">
                VERTICAL {selectedVertical.number} // {selectedVertical.tag}
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal leading-tight mb-3">
                {selectedVertical.title}
              </h2>
              <p className="font-editorial text-xl sm:text-2xl text-[#1A1B22] italic leading-snug mb-4">
                &ldquo;{selectedVertical.subtitle}&rdquo;
              </p>
              <p className="font-sans text-sm text-[#434655] leading-relaxed">
                {selectedVertical.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71717A] mb-3">
                STANDARDIZED OPERATIONAL DELIVERABLES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {selectedVertical.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF8FF] border border-[#E5E5E5] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1D4ED8] mt-1.5 shrink-0"></span>
                    <span className="text-[#1A1B22]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audited Case Study */}
            <div className="p-6 bg-[#0A0A0A] text-white border border-[#27272A] mt-6">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#A1A1AA] border-b border-[#27272A] pb-2 mb-3">
                <span className="uppercase text-[#3B82F6] font-bold">AUDITED CASE STUDY</span>
                <span>VERIFIED IMPACT</span>
              </div>
              <div className="font-editorial text-xl text-white font-normal mb-2">
                {selectedVertical.caseStudy.client}
              </div>
              <div className="space-y-2 text-xs font-sans text-[#E4E4E7]">
                <div>
                  <strong className="text-[#A1A1AA] font-mono text-[10px] uppercase block">Challenge:</strong>
                  {selectedVertical.caseStudy.challenge}
                </div>
                <div>
                  <strong className="text-[#A1A1AA] font-mono text-[10px] uppercase block">Action:</strong>
                  {selectedVertical.caseStudy.action}
                </div>
                <div className="p-2.5 bg-[#181818] border border-[#3F3F46] mt-2">
                  <strong className="text-[#3B82F6] font-mono text-[10px] uppercase block mb-1">Delivered Alpha:</strong>
                  <span className="font-editorial text-base text-white">{selectedVertical.caseStudy.result}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Performance Matrix & Allocation CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="border border-[#0A0A0A] p-6 bg-[#FBF8FF]">
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0A0A0A] border-b border-[#0A0A0A] pb-2 mb-4 flex justify-between">
                <span>PERFORMANCE MATRIX</span>
                <span className="text-[#1D4ED8]">COHORT BENCHMARK</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-2">
                  <span className="text-xs font-mono text-[#71717A]">PIPELINE INFLUENCED:</span>
                  <span className="font-editorial text-2xl text-[#0A0A0A] font-normal tabular-nums">
                    {selectedVertical.pipelineInfluenced}
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-2">
                  <span className="text-xs font-mono text-[#71717A]">DELIVERY TURNAROUND:</span>
                  <span className="font-mono text-sm font-bold text-[#1D4ED8]">
                    {selectedVertical.turnaround}
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-[#E5E5E5] pb-2">
                  <span className="text-xs font-mono text-[#71717A]">EMPIRICAL BENCHMARK:</span>
                  <span className="font-mono text-sm font-bold text-[#0A0A0A]">
                    {selectedVertical.confidenceBenchmark}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-[#71717A]">TARGET AUDIENCE:</span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">
                    {selectedVertical.penetration}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRequestAllocation(selectedVertical.id)}
                className="mt-6 w-full py-3 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
              >
                DEPLOY {selectedVertical.title.toUpperCase()} CELL →
              </button>
            </div>

            {/* SLA Covenants */}
            <div className="border border-[#E5E5E5] p-5 text-xs font-mono text-[#71717A] space-y-2">
              <div className="text-[10px] text-[#0A0A0A] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>48-HOUR SOVEREIGN SLA</span>
              </div>
              <p className="leading-relaxed">
                Once engagement terms are counter-signed, the assigned Tier-0 operators mobilize within 48 hours. No prolonged onboarding meetings; immediate vector execution.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Capital Velocity Calculator */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto border border-[#0A0A0A] p-6 lg:p-8 bg-[#FBF8FF]">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase font-bold text-[#1D4ED8] mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>INTERACTIVE ENGAGEMENT SCOPE CALCULATOR</span>
            </div>
            <h3 className="font-editorial text-3xl text-[#0A0A0A] font-normal mb-2">
              Model Your Sovereign Network Allocation
            </h3>
            <p className="text-xs font-sans text-[#71717A] mb-8">
              Adjust required operator capacity and commitment timeline to estimate capital velocity and projected enterprise pipeline impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-[#E5E5E5]">
              {/* Select Vertical */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider font-bold text-[#0A0A0A] mb-2">
                  Select Vertical
                </label>
                <select
                  value={scopeVertical}
                  onChange={(e) => setScopeVertical(e.target.value)}
                  className="w-full p-2 border border-[#E5E5E5] bg-white text-xs font-mono focus:outline-none focus:border-[#1D4ED8]"
                >
                  <option value="social">8x Social (Narrative Capital)</option>
                  <option value="linkedin">8x LinkedIn (B2B Authority)</option>
                  <option value="research">8x Research (Deep Intelligence)</option>
                  <option value="sales">8x Sales (Revenue Orchestration)</option>
                </select>
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider font-bold text-[#0A0A0A] mb-2">
                  Operator Cell Size: <span className="text-[#1D4ED8] font-bold">{teamSize} Operators</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#1D4ED8]"
                />
                <div className="flex justify-between text-[9px] font-mono text-[#71717A] mt-1">
                  <span>1 Solo Principal</span>
                  <span>5 Multi-Domain Cell</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider font-bold text-[#0A0A0A] mb-2">
                  Commitment Duration: <span className="text-[#1D4ED8] font-bold">{durationMonths} Months</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full accent-[#1D4ED8]"
                />
                <div className="flex justify-between text-[9px] font-mono text-[#71717A] mt-1">
                  <span>1 Mo (Sprint)</span>
                  <span>12 Mo (Sovereign Retainer)</span>
                </div>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A]">
                  ESTIMATED CAPITAL COMMITMENT
                </div>
                <div className="font-editorial text-3xl text-[#0A0A0A] font-normal tabular-nums mt-1">
                  ${(totalAllocationBudget / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] font-mono text-[#71717A] mt-0.5">
                  Private placement billing
                </div>
              </div>

              <div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A]">
                  PROJECTED ENTERPRISE ATTRIBUTION
                </div>
                <div className="font-editorial text-3xl text-[#1D4ED8] font-normal tabular-nums mt-1">
                  ${(estimatedImpactValue / 1000000).toFixed(1)}M+
                </div>
                <div className="text-[10px] font-mono text-[#71717A] mt-0.5">
                  Calculated at 8.4x alpha return
                </div>
              </div>

              <div>
                <button
                  onClick={() => onRequestAllocation(scopeVertical)}
                  className="w-full py-3 bg-[#0A0A0A] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors"
                >
                  LOCK IN THIS ALLOCATION →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
