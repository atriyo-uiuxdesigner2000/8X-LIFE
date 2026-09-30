import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface AllocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVerticalId?: string;
}

export const AllocationModal: React.FC<AllocationModalProps> = ({
  isOpen,
  onClose,
  defaultVerticalId,
}) => {
  const [vertical, setVertical] = useState<string>(defaultVerticalId || 'research');
  const [orgName, setOrgName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('48hr');
  const [budgetTier, setBudgetTier] = useState<string>('enterprise_100k');
  const [mandateScope, setMandateScope] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#0A0A0A] text-[#0A0A0A] w-full max-w-2xl my-auto relative shadow-2xl">
        {/* Top Header */}
        <div className="bg-[#0A0A0A] text-white px-4 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-widest border-b border-[#27272A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1D4ED8]"></span>
            <span>RESTRICTED INTAKE // SOVEREIGN ALLOCATION DISPATCH</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0A0A0A] font-normal leading-tight mb-2">
                  Mobilize an 8x Sovereign Cell
                </h3>
                <p className="text-xs font-sans text-[#71717A] leading-relaxed">
                  Provide your organization’s mandate. We match you with Tier-0 operators mobilized within 48 hours under strict mutual confidentiality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Target Vertical
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  >
                    <option value="social">8x Social (Narrative Capital)</option>
                    <option value="linkedin">8x LinkedIn (B2B Executive Authority)</option>
                    <option value="research">8x Research (Deep Intelligence & Diligence)</option>
                    <option value="sales">8x Sales (Enterprise Outbound & ACV)</option>
                    <option value="cell">Multi-Domain Sovereign Cell (Combined)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Deployment Urgency
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  >
                    <option value="48hr">Immediate (Mobilize within 48 Hours)</option>
                    <option value="2weeks">Sprint Planning (Within 14 Days)</option>
                    <option value="quarter">Quarterly Institutional Retainer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Enterprise / Fund Name
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. Apex Sovereign Capital"
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                    Lead Partner Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="partner@fund.com"
                    className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-mono focus:border-[#1D4ED8] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                  Allocated Capital Commitment Tier
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  {[
                    { id: 'standard_45k', label: '$45k / mo (1 Lead)' },
                    { id: 'enterprise_100k', label: '$100k / mo (Cell)' },
                    { id: 'sovereign_250k', label: '$250k+ (Hyper-Scale)' },
                  ].map((tier) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setBudgetTier(tier.id)}
                      className={`p-2 border text-center transition-colors ${
                        budgetTier === tier.id
                          ? 'border-[#1D4ED8] bg-[#F4F2FD] text-[#1D4ED8] font-bold'
                          : 'border-[#E5E5E5] text-[#71717A] hover:border-[#0A0A0A]'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold tracking-wider text-[#0A0A0A] mb-1.5">
                  Audacious Objective / Primary Mandate
                </label>
                <textarea
                  rows={3}
                  value={mandateScope}
                  onChange={(e) => setMandateScope(e.target.value)}
                  placeholder="Describe the high-stakes commercial or narrative hurdle you need solved..."
                  className="w-full p-2.5 border border-[#E5E5E5] bg-[#FBF8FF] text-xs font-sans focus:border-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[10px] font-mono text-[#71717A]">
                  PROTOCOL: <strong className="text-[#0A0A0A]">HARDWARE SHA-256 PGP ENCRYPTED</strong>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>SUBMIT ALLOCATION REQUEST</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#F4F2FD] border border-[#1D4ED8] text-[#1D4ED8] flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-[#1D4ED8] uppercase font-bold">
                MANDATE TRANSMISSION RECORDED
              </div>

              <h3 className="font-editorial text-3xl text-[#0A0A0A] font-normal">
                Allocation Directive Dispatched
              </h3>

              <p className="text-xs font-sans text-[#71717A] max-w-md mx-auto leading-relaxed">
                An 8x Sovereign Allocator for <strong className="text-[#0A0A0A]">{orgName || 'your fund'}</strong> has initiated the 48-hour roster matching sequence. An encrypted dispatch will arrive at <span className="font-mono text-[#0A0A0A]">{contactEmail || 'your email'}</span>.
              </p>

              <div className="p-4 bg-[#FBF8FF] border border-[#E5E5E5] text-xs font-mono text-[#71717A] max-w-md mx-auto text-left space-y-1">
                <div className="flex justify-between">
                  <span>DISPATCH TICKET:</span>
                  <span className="text-[#0A0A0A] font-bold">8X_ORD_2025_9941</span>
                </div>
                <div className="flex justify-between">
                  <span>SLA MOBILIZATION:</span>
                  <span className="text-[#1D4ED8] font-bold">T-MINUS 48:00:00</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#1D4ED8] transition-colors"
                >
                  RETURN TO CONSOLE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
