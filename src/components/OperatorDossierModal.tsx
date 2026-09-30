import React, { useState } from 'react';
import { Operator } from '../data/orchestrationData';
import { X, ShieldCheck, Check, ArrowRight, MapPin, Hash, Activity } from 'lucide-react';

interface OperatorDossierModalProps {
  operator: Operator | null;
  onClose: () => void;
  onRequestAllocation: (operatorCode: string) => void;
}

export const OperatorDossierModal: React.FC<OperatorDossierModalProps> = ({
  operator,
  onClose,
  onRequestAllocation,
}) => {
  if (!operator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#0A0A0A] text-[#0A0A0A] w-full max-w-3xl my-auto relative shadow-2xl">
        {/* Top Classification Bar */}
        <div className="bg-[#0A0A0A] text-white px-4 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-widest border-b border-[#27272A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1D4ED8]"></span>
            <span>RESTRICTED DOSSIER // DECLASSIFIED TIER-0 FILE</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#A1A1AA] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dossier Content */}
        <div className="p-6 sm:p-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-[#E5E5E5]">
            {/* Portrait */}
            <div className="w-28 h-36 bg-[#181818] border border-[#0A0A0A] shrink-0 overflow-hidden relative">
              <img
                src={operator.image}
                alt={operator.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-[8px] font-mono text-white">
                {operator.code}
              </div>
            </div>

            {/* Operator Meta */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#1D4ED8] bg-[#F4F2FD] px-2 py-0.5 border border-[#1D4ED8]/30">
                  {operator.code}
                </span>
                <span className="text-[10px] font-mono tracking-widest font-bold text-white bg-[#0A0A0A] px-2 py-0.5">
                  {operator.tier}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#71717A] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#1D4ED8]" />
                  {operator.city} [{operator.coordinates}]
                </span>
              </div>

              <h3 className="font-editorial text-3xl text-[#0A0A0A] font-normal leading-tight">
                {operator.name}
              </h3>

              <div className="text-xs font-mono font-bold tracking-wider text-[#71717A] uppercase">
                {operator.role} // VERTICAL: {operator.vertical}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono pt-1">
                <span className="text-[#71717A]">CURRENT STATUS:</span>
                <span className={`font-bold ${
                  operator.status === 'DEPLOYED' ? 'text-[#1D4ED8]' : 'text-emerald-600'
                }`}>
                  ● {operator.status}
                </span>
              </div>
            </div>
          </div>

          {/* Metric Highlight Box */}
          <div className="my-6 p-4 bg-[#FBF8FF] border border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
            <div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#71717A]">
                KEY DELIVERED METRIC
              </div>
              <div className="font-editorial text-2xl text-[#1D4ED8] font-normal mt-1 tabular-nums">
                {operator.metric}
              </div>
              <div className="text-[10px] font-mono text-[#0A0A0A] mt-0.5">
                {operator.metricLabel}
              </div>
            </div>
            <div className="sm:px-4 pt-3 sm:pt-0">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#71717A]">
                VERIFIED TRANSACTION VALUE
              </div>
              <div className="font-editorial text-2xl text-[#0A0A0A] font-normal mt-1 tabular-nums">
                {operator.verifiedTransactionValue}
              </div>
              <div className="text-[10px] font-mono text-[#71717A] mt-0.5">
                Audit Trail Recorded
              </div>
            </div>
            <div className="sm:pl-4 pt-3 sm:pt-0">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#71717A]">
                CLIENT COHORT
              </div>
              <div className="font-sans text-xs font-bold text-[#0A0A0A] mt-1 leading-snug">
                {operator.clientCohort}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71717A] mb-1.5">
              BACKGROUND & VECTOR DIRECTIVE
            </div>
            <p className="font-sans text-sm text-[#1A1B22] leading-relaxed">
              {operator.bio}
            </p>
          </div>

          {/* Credentials & Deployments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-[#E5E5E5]">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71717A] mb-2">
                VERIFIED CREDENTIALS
              </div>
              <ul className="space-y-1.5 text-xs font-sans text-[#1A1B22]">
                {operator.credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1D4ED8] mt-1.5 shrink-0"></span>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#71717A] mb-2">
                NOTABLE PRIVATE DEPLOYMENTS
              </div>
              <ul className="space-y-1.5 text-xs font-sans text-[#1A1B22]">
                {operator.recentDeployments.map((dep, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-1.5 shrink-0"></span>
                    <span>{dep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[11px] font-mono text-[#71717A]">
              DISPATCH SLA: <strong className="text-[#0A0A0A]">48-HOUR MOBILIZATION</strong>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-[#E5E5E5] text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestAllocation(operator.code);
                }}
                className="px-5 py-2 bg-[#1D4ED8] hover:bg-[#0A0A0A] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <span>REQUEST ALLOCATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
