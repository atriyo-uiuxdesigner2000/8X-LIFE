import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Terminal, RefreshCw } from 'lucide-react';

interface VettingGatewayViewProps {
  onBackToBroadsheet: () => void;
  onOpenCodex: () => void;
}

export const VettingGatewayView: React.FC<VettingGatewayViewProps> = ({
  onBackToBroadsheet,
  onOpenCodex,
}) => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationLogs, setEvaluationLogs] = useState<string[]>([]);
  const [testResult, setTestResult] = useState<'pass' | 'fail' | null>(null);

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [selectedVertical, setSelectedVertical] = useState<string>('Sales');
  const [impactMetric, setImpactMetric] = useState<string>('$15M');
  const [impactDescription, setImpactDescription] = useState<string>('Closed $15M enterprise contracts across EMEA with 0 internal SDR support.');
  const [scenarioAnswer, setScenarioAnswer] = useState<string>('direct_inversion');
  const [obsessionStandups, setObsessionStandups] = useState<string>('zero');
  const [obsessionAccountability, setObsessionAccountability] = useState<string>('extreme_ownership');

  const runVettingEngine = () => {
    setIsEvaluating(true);
    setCurrentStage(4);
    setEvaluationLogs([]);

    const steps = [
      'INITIALIZING 8X HEURISTIC FILTER [SYS_VERIFY_v4.1]...',
      'PARSING COMMERCIAL IMPACT THRESHOLDS...',
      `EVALUATING DECLARED VECTOR: [${impactMetric}] // MINIMUM ADMISSION BENCHMARK $10M+`,
      'AUDITING SCENARIO RESOLUTION TACTICS...',
      'CHECKING CODEX 2025 ALIGNMENT (STANDUPS=0.00, OWNERSHIP=BINARY)...',
      'CALCULATING PERCENTILE RANKING AGAINST N=1,784,200 SCRUTINIZED CANDIDATES...'
    ];

    let delay = 300;
    steps.forEach((step, index) => {
      setTimeout(() => {
        setEvaluationLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setTimeout(() => {
            // Determine pass or fail
            const isPassing =
              obsessionStandups === 'zero' &&
              obsessionAccountability === 'extreme_ownership' &&
              scenarioAnswer === 'direct_inversion';

            setTestResult(isPassing ? 'pass' : 'fail');
            setIsEvaluating(false);
          }, 800);
        }
      }, delay);
      delay += 500;
    });
  };

  const resetTest = () => {
    setCurrentStage(1);
    setIsEvaluating(false);
    setTestResult(null);
    setEvaluationLogs([]);
  };

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen py-10">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#0A0A0A] gap-4">
          <div>
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#1D4ED8] mb-1">
              [ 04 // RESTRICTED ACCESSION GATEWAY — SELECTION RATIO 0.14% ]
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0A0A0A] tracking-[-0.025em]">
              Vetting Assessment Simulator
            </h1>
          </div>
          <button
            onClick={onBackToBroadsheet}
            className="text-xs font-mono tracking-wider uppercase text-[#71717A] hover:text-[#0A0A0A] border border-[#E5E5E5] px-3 py-1.5 transition-colors"
          >
            ← BACK TO BROADSHEET
          </button>
        </div>

        {/* Progress Stepper (Brutalist) */}
        <div className="py-6 border-b border-[#E5E5E5] grid grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className={`p-2 border ${currentStage >= 1 ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white font-bold' : 'border-[#E5E5E5] text-[#71717A]'}`}>
            01 // IMPACT
          </div>
          <div className={`p-2 border ${currentStage >= 2 ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white font-bold' : 'border-[#E5E5E5] text-[#71717A]'}`}>
            02 // SCENARIO
          </div>
          <div className={`p-2 border ${currentStage >= 3 ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white font-bold' : 'border-[#E5E5E5] text-[#71717A]'}`}>
            03 // CODEX
          </div>
          <div className={`p-2 border ${currentStage >= 4 ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white font-bold' : 'border-[#E5E5E5] text-[#71717A]'}`}>
            04 // VERDICT
          </div>
        </div>

        {/* Form Container */}
        <div className="py-8">
          {/* Stage 1: Commercial Impact */}
          {currentStage === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal mb-2">
                  Stage 1: Proof of Commercial Impact
                </h2>
                <p className="text-xs font-sans text-[#71717A] leading-relaxed">
                  We reject resumes, subjective pedigree, and participation awards. Provide unambiguous quantitative proof of what you have built, closed, or scaled.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Julian Vance"
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Encrypted Contact (Signal / Email)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="julian@sovereign-alpha.io"
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Primary Sovereign Vector
                  </label>
                  <select
                    value={selectedVertical}
                    onChange={(e) => setSelectedVertical(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  >
                    <option value="Research">Research & Competitive Intelligence</option>
                    <option value="LinkedIn">B2B Authority & Executive Narrative</option>
                    <option value="Social">Social Distribution & Zeitgeist Architecture</option>
                    <option value="Sales">Revenue Orchestration & Whale Outbound</option>
                    <option value="Systems">Sovereign Systems & Distributed Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Audited Impact Metric (e.g. $10M+ ARR, 50M+ Views)
                  </label>
                  <input
                    type="text"
                    value={impactMetric}
                    onChange={(e) => setImpactMetric(e.target.value)}
                    placeholder="$15M"
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none font-bold text-[#1D4ED8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                  Vector Impact Narrative (Concrete outcome without fluff)
                </label>
                <textarea
                  rows={3}
                  value={impactDescription}
                  onChange={(e) => setImpactDescription(e.target.value)}
                  className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-sans focus:border-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStage(2)}
                  className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                  <span>PROCEED TO STAGE 2</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Stage 2: Autonomous High-Stakes Scenario */}
          {currentStage === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal mb-2">
                  Stage 2: High-Stakes Scenario Test
                </h2>
                <p className="text-xs font-sans text-[#71717A] leading-relaxed">
                  You are deployed without onboarding into an environment with high stakes, low information, and zero hand-holding.
                </p>
              </div>

              <div className="p-5 bg-[#0A0A0A] text-white border border-[#27272A] text-xs font-mono space-y-2">
                <div className="text-[10px] text-[#3B82F6] font-bold uppercase tracking-wider">
                  MANDATE DIRECTIVE: 48-HOUR SPRINT
                </div>
                <p className="font-editorial text-base text-[#F4F2FD] leading-relaxed">
                  "You are deployed to a frontier AI client whose key commercial pipeline has collapsed. The board has scheduled an emergency capital allocation vote in 48 hours. The founder is unreachable. You have no internal documentation or manager to ask for guidance. What is your immediate protocol?"
                </p>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A]">
                  Select Your Operational Protocol:
                </label>

                <div
                  onClick={() => setScenarioAnswer('direct_inversion')}
                  className={`p-4 border cursor-pointer transition-colors text-xs ${
                    scenarioAnswer === 'direct_inversion'
                      ? 'border-[#1D4ED8] bg-[#F4F2FD]'
                      : 'border-[#E5E5E5] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="font-mono font-bold text-[#0A0A0A] mb-1">
                    PROTOCOL ALPHA: DIRECT COMMERCIAL INVERSION
                  </div>
                  <div className="font-sans text-[#434655]">
                    Independently bypass internal hierarchy. Run direct competitive intelligence teardown, contact 3 target decacorn buyers within my sovereign network, and present signed Letters of Intent directly to the board 4 hours before the vote.
                  </div>
                </div>

                <div
                  onClick={() => setScenarioAnswer('stakeholder_alignment')}
                  className={`p-4 border cursor-pointer transition-colors text-xs ${
                    scenarioAnswer === 'stakeholder_alignment'
                      ? 'border-[#1D4ED8] bg-[#F4F2FD]'
                      : 'border-[#E5E5E5] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="font-mono font-bold text-[#0A0A0A] mb-1">
                    PROTOCOL BETA: STAKEHOLDER COMMITTEE & RETROSPECTIVE
                  </div>
                  <div className="font-sans text-[#434655]">
                    Schedule an emergency alignment call with the product team to uncover blockers, create a Jira retro board, and present a revised 6-month roadmap proposal to the board.
                  </div>
                </div>

                <div
                  onClick={() => setScenarioAnswer('wait_for_clarification')}
                  className={`p-4 border cursor-pointer transition-colors text-xs ${
                    scenarioAnswer === 'wait_for_clarification'
                      ? 'border-[#1D4ED8] bg-[#F4F2FD]'
                      : 'border-[#E5E5E5] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="font-mono font-bold text-[#0A0A0A] mb-1">
                    PROTOCOL GAMMA: SCOPE PAUSE & RE-ASSESSMENT
                  </div>
                  <div className="font-sans text-[#434655]">
                    Pause all outbound activity until the founder returns so that you do not step on internal political toes or send inconsistent external messaging.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStage(1)}
                  className="px-4 py-2 border border-[#E5E5E5] text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0A0A0A]"
                >
                  ← BACK
                </button>
                <button
                  onClick={() => setCurrentStage(3)}
                  className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                  <span>PROCEED TO STAGE 3</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Stage 3: The Obsession Index & Codex 2025 */}
          {currentStage === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal mb-2">
                  Stage 3: The Obsession Index & Codex Alignment
                </h2>
                <p className="text-xs font-sans text-[#71717A] leading-relaxed">
                  Survival in 8x is governed by the Non-Negotiable Standard. Test your alignment with the fundamental covenants of Codex 2025.
                </p>
              </div>

              {/* Standup Preference */}
              <div className="p-4 border border-[#E5E5E5] bg-[#FBF8FF] space-y-3">
                <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0A0A0A]">
                  COVENANT 02: DAILY STANDUPS & SUPERVISION TOLERANCE
                </div>
                <div className="space-y-2 text-xs font-sans">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="standups"
                      checked={obsessionStandups === 'zero'}
                      onChange={() => setObsessionStandups('zero')}
                      className="accent-[#1D4ED8]"
                    />
                    <span><strong>0.00 MIN.</strong> I reject daily status check-ins and surveillance. I only require the objective and deliver reality.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="standups"
                      checked={obsessionStandups === '30min'}
                      onChange={() => setObsessionStandups('30min')}
                      className="accent-[#1D4ED8]"
                    />
                    <span><strong>15–30 MIN.</strong> I prefer regular standups to share daily progress with my project manager.</span>
                  </label>
                </div>
              </div>

              {/* Accountability */}
              <div className="p-4 border border-[#E5E5E5] bg-[#FBF8FF] space-y-3">
                <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0A0A0A]">
                  COVENANT 01: RESULTS & COMMODITY ROTATION
                </div>
                <div className="space-y-2 text-xs font-sans">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="accountability"
                      checked={obsessionAccountability === 'extreme_ownership'}
                      onChange={() => setObsessionAccountability('extreme_ownership')}
                      className="accent-[#1D4ED8]"
                    />
                    <span><strong>BINARY VERDICT.</strong> If the mandate did not ship, I accept 100% personal responsibility and immediate rotation out.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="accountability"
                      checked={obsessionAccountability === 'nuanced'}
                      onChange={() => setObsessionAccountability('nuanced')}
                      className="accent-[#1D4ED8]"
                    />
                    <span><strong>NUANCED CONTEXT.</strong> Macro headwinds, market conditions, and client dysfunction should mitigate outcome accountability.</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStage(2)}
                  className="px-4 py-2 border border-[#E5E5E5] text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0A0A0A]"
                >
                  ← BACK
                </button>
                <button
                  onClick={runVettingEngine}
                  className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                  <span>EXECUTE ALGORITHMIC SCRUTINY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Stage 4: Algorithmic Verification Engine Terminal & Verdict */}
          {currentStage === 4 && (
            <div className="space-y-6">
              {/* Terminal Screen */}
              <div className="bg-[#0A0A0A] border border-[#27272A] p-6 text-white font-mono text-xs shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-3 mb-4 text-[10px] text-[#71717A]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>8X_ADMISSION_CORE // KERNEL EVALUATION</span>
                  </div>
                  <div className="text-[#3B82F6]">
                    {isEvaluating ? 'PROCESSING...' : 'ANALYSIS COMPLETE'}
                  </div>
                </div>

                <div className="space-y-1.5 min-h-[140px] text-[#E4E4E7]">
                  {evaluationLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#1D4ED8]">❯</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  {isEvaluating && (
                    <div className="inline-block w-2 h-4 bg-[#3B82F6] animate-pulse ml-2"></div>
                  )}
                </div>
              </div>

              {/* Final Verdict Cards */}
              {!isEvaluating && testResult === 'pass' && (
                <div className="border border-[#1D4ED8] bg-[#F4F2FD] p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-[#1D4ED8] font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5 text-[#1D4ED8]" />
                    <span>ADMISSION VERDICT: TOP 0.14% ELIGIBILITY CONFIRMED</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#0A0A0A] font-normal">
                    Welcome to the Sovereign Frontier.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#1A1B22] leading-relaxed">
                    Your declared commercial velocity (${impactMetric}) and refusal to tolerate corporate process aligns with the Codex 2025 mandate. Your provisional dossier has been compiled.
                  </p>

                  <div className="p-4 bg-white border border-[#E5E5E5] font-mono text-xs space-y-1.5">
                    <div className="flex justify-between text-[#71717A] text-[10px]">
                      <span>CRYPTOGRAPHIC ACCESSION HASH:</span>
                      <span className="text-[#1D4ED8] font-bold">8X_ALPHA_COHORT_X_9988_VERIFIED</span>
                    </div>
                    <div className="text-[#0A0A0A]">
                      APPLICANT: <strong>{fullName || 'CANDIDATE_UNIDENTIFIED'}</strong>
                    </div>
                    <div className="text-[#0A0A0A]">
                      VECTOR: <strong>{selectedVertical} // TIER-0 PROSPECT</strong>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => alert(`Provisional Accession Token [8X_ALPHA_COHORT_X_9988] recorded for ${email || 'candidate'}. An 8x orchestrator will dispatch an encrypted PGP briefing.`)}
                      className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
                    >
                      SUBMIT DOSSIER TO ROTATION DISPATCH →
                    </button>
                    <button
                      onClick={resetTest}
                      className="px-4 py-3 border border-[#E5E5E5] text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0A0A0A]"
                    >
                      RE-RUN TEST
                    </button>
                  </div>
                </div>
              )}

              {!isEvaluating && testResult === 'fail' && (
                <div className="border border-[#0A0A0A] bg-[#FFF5F5] p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-5 h-5 text-rose-700" />
                    <span>ADMISSION VERDICT: CRITERIA UNMET (ROTATION APPLIED)</span>
                  </div>

                  <h3 className="font-editorial text-3xl text-[#0A0A0A] font-normal">
                    Scored in the 98.4th Percentile.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#434655] leading-relaxed">
                    We strictly orchestrate the top 0.14% (99.86th percentile). Your protocol selection favored committee consensus, delayed action, or supervisory overhead rather than sovereign binary outcomes.
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={resetTest}
                      className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#1D4ED8] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>RETRY SIMULATION</span>
                    </button>
                    <button
                      onClick={onOpenCodex}
                      className="text-xs font-mono text-[#1D4ED8] hover:underline underline-offset-4"
                    >
                      Review Codex 2025 Principles →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
