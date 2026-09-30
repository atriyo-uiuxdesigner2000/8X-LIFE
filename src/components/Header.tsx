import React from 'react';
import { Shield, Sparkles, User, ChevronRight, Layers, FileText, Users, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentView: 'broadsheet' | 'talent' | 'verticals' | 'vetting' | 'codex';
  onNavigate: (view: 'broadsheet' | 'talent' | 'verticals' | 'vetting' | 'codex') => void;
  onOpenApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenApply }) => {
  return (
    <header className="w-full bg-[#FBF8FF] border-b border-[#E5E5E5] sticky top-0 z-40">
      {/* Prototype Screen Switcher Banner (Compact, Brutalist) */}
      <div className="bg-[#0A0A0A] text-white px-4 lg:px-8 py-1.5 flex flex-wrap items-center justify-between text-[11px] font-mono tracking-wider border-b border-[#27272A]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#1D4ED8]"></span>
          <span className="text-[#A1A1AA] uppercase">Active Prototype View:</span>
          <span className="text-[#3B82F6] font-bold uppercase">{currentView}</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto py-0.5">
          <button
            onClick={() => onNavigate('broadsheet')}
            className={`px-2 py-0.5 border text-[10px] transition-colors ${
              currentView === 'broadsheet'
                ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white font-bold'
                : 'border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#71717A]'
            }`}
          >
            01 // BROADSHEET HOME
          </button>
          <button
            onClick={() => onNavigate('talent')}
            className={`px-2 py-0.5 border text-[10px] transition-colors ${
              currentView === 'talent'
                ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white font-bold'
                : 'border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#71717A]'
            }`}
          >
            02 // COHORT IX ROSTER
          </button>
          <button
            onClick={() => onNavigate('verticals')}
            className={`px-2 py-0.5 border text-[10px] transition-colors ${
              currentView === 'verticals'
                ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white font-bold'
                : 'border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#71717A]'
            }`}
          >
            03 // VERTICALS DEEP DIVE
          </button>
          <button
            onClick={() => onNavigate('vetting')}
            className={`px-2 py-0.5 border text-[10px] transition-colors ${
              currentView === 'vetting'
                ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white font-bold'
                : 'border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#71717A]'
            }`}
          >
            04 // VETTING GATEWAY (APPLY)
          </button>
          <button
            onClick={() => onNavigate('codex')}
            className={`px-2 py-0.5 border text-[10px] transition-colors ${
              currentView === 'codex'
                ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white font-bold'
                : 'border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#71717A]'
            }`}
          >
            05 // CODEX 2025 (PDF)
          </button>
        </div>
      </div>

      {/* Main Broadside Header */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-3 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('broadsheet')}
            className="flex items-baseline gap-2 group text-left"
          >
            <span className="font-editorial text-2xl lg:text-3xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#1D4ED8] transition-colors">
              8x
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#71717A] group-hover:text-[#0A0A0A] transition-colors">
              8X.LIFE
            </span>
          </button>
        </div>

        {/* Center Status Marquee / Indicator */}
        <div className="hidden md:flex items-center gap-2 border-l border-r border-[#E5E5E5] px-4 py-1">
          <span className="w-1.5 h-1.5 bg-[#1D4ED8] inline-block animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-[0.12em] text-[#0A0A0A] uppercase font-semibold">
            STATUS: ORCHESTRATING TOP 1% TALENT GLOBALLY // NY • SF • LDN • TYO
          </span>
        </div>

        {/* Nav Links & Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-4 lg:gap-6 text-xs font-mono tracking-widest uppercase">
            <button
              onClick={() => onNavigate('codex')}
              className={`transition-colors py-1 border-b ${
                currentView === 'codex'
                  ? 'border-[#1D4ED8] text-[#1D4ED8] font-bold'
                  : 'border-transparent text-[#0A0A0A] hover:text-[#1D4ED8]'
              }`}
            >
              MANIFESTO
            </button>
            <button
              onClick={() => onNavigate('verticals')}
              className={`transition-colors py-1 border-b ${
                currentView === 'verticals'
                  ? 'border-[#1D4ED8] text-[#1D4ED8] font-bold'
                  : 'border-transparent text-[#0A0A0A] hover:text-[#1D4ED8]'
              }`}
            >
              VERTICALS
            </button>
            <button
              onClick={() => onNavigate('talent')}
              className={`transition-colors py-1 border-b ${
                currentView === 'talent'
                  ? 'border-[#1D4ED8] text-[#1D4ED8] font-bold'
                  : 'border-transparent text-[#0A0A0A] hover:text-[#1D4ED8]'
              }`}
            >
              TALENT
            </button>
            <button
              onClick={onOpenApply}
              className="bg-[#0A0A0A] text-white hover:bg-[#1D4ED8] transition-colors px-3 py-1.5 font-bold tracking-wider text-[11px]"
            >
              APPLY
            </button>
          </nav>

          {/* Profile / Access Terminal Icon */}
          <button
            onClick={() => onNavigate('talent')}
            title="Sovereign Access Terminal"
            className="w-8 h-8 flex items-center justify-center border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-white transition-colors"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
