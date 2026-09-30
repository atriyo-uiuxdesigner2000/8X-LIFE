import React, { useState } from 'react';
import { OPERATORS, Operator } from '../data/orchestrationData';
import { Search, Filter, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface TalentDirectoryViewProps {
  onSelectOperator: (operator: Operator) => void;
  onRequestAllocation: (operatorCode?: string) => void;
  onBackToBroadsheet: () => void;
}

export const TalentDirectoryView: React.FC<TalentDirectoryViewProps> = ({
  onSelectOperator,
  onRequestAllocation,
  onBackToBroadsheet,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('ALL');
  const [selectedVertical, setSelectedVertical] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = ['ALL', 'London', 'New York', 'San Francisco', 'Tokyo', 'Zurich', 'Boston', 'Singapore', 'Berlin', 'Paris'];
  const verticals = ['ALL', 'Research', 'Social', 'LinkedIn', 'Sales', 'Systems'];

  const filteredOperators = OPERATORS.filter((op) => {
    const matchesCity = selectedCity === 'ALL' || op.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesVertical = selectedVertical === 'ALL' || op.vertical === selectedVertical;
    const matchesSearch =
      op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.metricLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCity && matchesVertical && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Breadcrumb / Top Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#0A0A0A] gap-4">
          <div>
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#1D4ED8] mb-1">
              [ 02 // ARCHIVAL REGISTRY — SOVEREIGN OPERATORS ]
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-[#0A0A0A] tracking-[-0.025em]">
              Cohort IX & X Active Roster
            </h1>
          </div>
          <button
            onClick={onBackToBroadsheet}
            className="text-xs font-mono tracking-wider uppercase text-[#71717A] hover:text-[#0A0A0A] border border-[#E5E5E5] px-3 py-1.5 transition-colors"
          >
            ← BACK TO BROADSHEET
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="py-6 border-b border-[#E5E5E5] space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by code (e.g. LON-01), specialty, or impact metric..."
              className="w-full pl-9 pr-4 py-2 border border-[#E5E5E5] text-xs font-mono focus:outline-none focus:border-[#1D4ED8] bg-[#FBF8FF] text-[#0A0A0A] placeholder-[#A1A1AA]"
            />
          </div>

          {/* Filter Pills / Segments */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-[11px] font-mono">
            {/* City Segment */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#71717A] uppercase">NODE:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-2 py-0.5 border transition-colors ${
                    selectedCity === city
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-bold'
                      : 'border-[#E5E5E5] text-[#71717A] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Vertical Segment */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#71717A] uppercase">VERTICAL:</span>
              {verticals.map((vert) => (
                <button
                  key={vert}
                  onClick={() => setSelectedVertical(vert)}
                  className={`px-2 py-0.5 border transition-colors ${
                    selectedVertical === vert
                      ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] font-bold'
                      : 'border-[#E5E5E5] text-[#71717A] hover:border-[#1D4ED8] hover:text-[#1D4ED8]'
                  }`}
                >
                  {vert}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counter and Results */}
        <div className="py-4 flex justify-between items-center text-xs font-mono text-[#71717A]">
          <div>
            SHOWING <strong className="text-[#0A0A0A]">{filteredOperators.length}</strong> VERIFIED SOVEREIGN OPERATORS
          </div>
          <div>
            STATUS: <span className="text-[#1D4ED8] font-bold">100% PRIVATE PLACEMENT</span>
          </div>
        </div>

        {/* Operator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E5E5]">
          {filteredOperators.map((operator) => (
            <div
              key={operator.id}
              onClick={() => onSelectOperator(operator)}
              className="border-r border-b border-[#E5E5E5] p-6 hover:bg-[#FBF8FF] transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-20 bg-[#181818] border border-[#0A0A0A] overflow-hidden shrink-0">
                    <img
                      src={operator.image}
                      alt={operator.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A] mb-1">
                      <span className="font-bold text-[#1D4ED8]">{operator.code}</span>
                      <span className={`font-semibold ${
                        operator.status === 'DEPLOYED' ? 'text-[#1D4ED8]' : 'text-emerald-700'
                      }`}>
                        {operator.status}
                      </span>
                    </div>
                    <h3 className="font-editorial text-xl text-[#0A0A0A] font-normal leading-tight group-hover:text-[#1D4ED8] transition-colors">
                      {operator.name}
                    </h3>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mt-1">
                      {operator.role}
                    </div>
                  </div>
                </div>

                {/* Bio Excerpt */}
                <p className="font-sans text-xs text-[#434655] line-clamp-2 leading-relaxed mb-4">
                  {operator.bio}
                </p>

                {/* Key Metric Tile */}
                <div className="bg-[#F4F2FD] border border-[#E5E5E5] p-3 mb-4">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#71717A]">
                    {operator.metricLabel}
                  </div>
                  <div className="font-editorial text-2xl text-[#0A0A0A] font-normal mt-0.5 tabular-nums">
                    {operator.metric}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#71717A] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#1D4ED8]" />
                  {operator.city}
                </span>
                <span className="text-[#1D4ED8] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>INSPECT DOSSIER</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredOperators.length === 0 && (
          <div className="py-16 text-center border border-[#E5E5E5] my-6">
            <div className="font-editorial text-2xl text-[#0A0A0A] mb-2">No matching operators found</div>
            <p className="text-xs font-mono text-[#71717A]">Try clearing your search filters or node criteria.</p>
          </div>
        )}

        {/* Global Roster Callout */}
        <div className="mt-12 p-8 bg-[#0A0A0A] text-white flex flex-wrap items-center justify-between gap-6 border border-[#27272A]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#3B82F6] font-bold mb-1">
              SOVEREIGN CLUSTER MOBILIZATION
            </div>
            <div className="font-editorial text-2xl text-white font-normal">
              Need a multi-operator cell deployed to your enterprise?
            </div>
            <p className="text-xs font-sans text-[#A1A1AA] mt-1 max-w-xl">
              We orchestrate cohesive teams of research leads, narrative architects, and deal principals within 48 hours under strict non-disclosure.
            </p>
          </div>
          <button
            onClick={() => onRequestAllocation()}
            className="px-6 py-3 bg-[#1D4ED8] hover:bg-white hover:text-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          >
            REQUEST SOVEREIGN ALLOCATION →
          </button>
        </div>
      </div>
    </div>
  );
};
