import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CohortGrid } from './components/CohortGrid';
import { ManifestoSection } from './components/ManifestoSection';
import { VerticalsSection } from './components/VerticalsSection';
import { GatewaySection } from './components/GatewaySection';
import { FooterSection } from './components/FooterSection';
import { TalentDirectoryView } from './components/TalentDirectoryView';
import { VerticalsDetailView } from './components/VerticalsDetailView';
import { VettingGatewayView } from './components/VettingGatewayView';
import { CodexDocumentView } from './components/CodexDocumentView';
import { OperatorDossierModal } from './components/OperatorDossierModal';
import { AllocationModal } from './components/AllocationModal';
import { Operator, VerticalData } from './data/orchestrationData';

export default function App() {
  const [currentView, setCurrentView] = useState<'broadsheet' | 'talent' | 'verticals' | 'vetting' | 'codex'>('broadsheet');
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(null);
  const [selectedVertical, setSelectedVertical] = useState<VerticalData | null>(null);
  const [isAllocationModalOpen, setIsAllocationModalOpen] = useState<boolean>(false);
  const [allocationVerticalId, setAllocationVerticalId] = useState<string | undefined>(undefined);
  const [initialCodexClause, setInitialCodexClause] = useState<string | null>(null);

  // Handlers
  const handleOpenApply = () => {
    setCurrentView('vetting');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCodex = (clauseId?: string) => {
    if (clauseId) setInitialCodexClause(clauseId);
    setCurrentView('codex');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestAllocation = (verticalOrOpCode?: string) => {
    setAllocationVerticalId(verticalOrOpCode);
    setIsAllocationModalOpen(true);
  };

  const handleSelectVerticalFromGrid = (vert: VerticalData) => {
    setSelectedVertical(vert);
    setCurrentView('verticals');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectClauseFromManifesto = (clauseId: string) => {
    handleOpenCodex(clauseId);
  };

  return (
    <div className="min-h-screen bg-[#FBF8FF] text-[#1A1B22] font-sans flex flex-col selection:bg-[#1D4ED8] selection:text-white">
      {/* Universal Header with prototype view switcher */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenApply={handleOpenApply}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'broadsheet' && (
          <div className="w-full">
            {/* 1. Hero Section matching broadsheet */}
            <HeroSection
              onOpenApply={handleOpenApply}
              onExploreVerticals={() => {
                setCurrentView('verticals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Archival Dispatch Cohort IX Grid matching image */}
            <CohortGrid
              onSelectOperator={(op) => setSelectedOperator(op)}
              onViewFullRoster={() => {
                setCurrentView('talent');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. The Manifesto Section matching image */}
            <ManifestoSection
              onOpenCodex={() => handleOpenCodex()}
              onSelectClause={handleSelectClauseFromManifesto}
            />

            {/* 4. Specialized Sovereign Networks (Verticals) matching image */}
            <VerticalsSection
              onSelectVertical={handleSelectVerticalFromGrid}
              onRequestAllocation={handleRequestAllocation}
            />

            {/* 5. Admission Gateway (Electric Blue) matching image */}
            <GatewaySection
              onOpenApply={handleOpenApply}
              onOpenCodex={() => handleOpenCodex()}
              onNavigate={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 6. Broadside Archival Footer matching image */}
            <FooterSection />
          </div>
        )}

        {currentView === 'talent' && (
          <TalentDirectoryView
            onSelectOperator={(op) => setSelectedOperator(op)}
            onRequestAllocation={handleRequestAllocation}
            onBackToBroadsheet={() => {
              setCurrentView('broadsheet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'verticals' && (
          <VerticalsDetailView
            onBackToBroadsheet={() => {
              setCurrentView('broadsheet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestAllocation={handleRequestAllocation}
          />
        )}

        {currentView === 'vetting' && (
          <VettingGatewayView
            onBackToBroadsheet={() => {
              setCurrentView('broadsheet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCodex={() => handleOpenCodex()}
          />
        )}

        {currentView === 'codex' && (
          <CodexDocumentView
            onBackToBroadsheet={() => {
              setCurrentView('broadsheet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenApply={handleOpenApply}
            initialClause={initialCodexClause}
          />
        )}
      </main>

      {/* Operator Dossier Modal */}
      <OperatorDossierModal
        operator={selectedOperator}
        onClose={() => setSelectedOperator(null)}
        onRequestAllocation={(opCode) => handleRequestAllocation(opCode)}
      />

      {/* Enterprise Allocation Intake Modal */}
      <AllocationModal
        isOpen={isAllocationModalOpen}
        onClose={() => setIsAllocationModalOpen(false)}
        defaultVerticalId={allocationVerticalId}
      />
    </div>
  );
}
