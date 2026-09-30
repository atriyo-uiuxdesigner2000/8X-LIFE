import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] text-[#0A0A0A] py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        {/* Main 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#E5E5E5]">
          {/* Column 1: Archival Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#1D4ED8]">
              8X.LIFE ARCHIVE [SYS.2024]
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-[#0A0A0A] leading-snug font-normal max-w-md">
              Sovereign talent networks for high-velocity research and hyper-scale engineering.
            </p>
          </div>

          {/* Column 2: Global Node Locations */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#71717A]">
              LOCATIONS
            </div>
            <ul className="space-y-1 text-xs font-mono text-[#0A0A0A]">
              <li className="flex justify-between sm:justify-start sm:gap-2">
                <span>NEW YORK</span>
                <span className="text-[#71717A]">[40.7128° N]</span>
              </li>
              <li className="flex justify-between sm:justify-start sm:gap-2">
                <span>SAN FRANCISCO</span>
                <span className="text-[#71717A]">[37.7749° N]</span>
              </li>
              <li className="flex justify-between sm:justify-start sm:gap-2">
                <span>LONDON</span>
                <span className="text-[#71717A]">[51.5074° N]</span>
              </li>
              <li className="flex justify-between sm:justify-start sm:gap-2">
                <span>TOKYO</span>
                <span className="text-[#71717A]">[35.6762° N]</span>
              </li>
            </ul>
          </div>

          {/* Column 3: System Protocols */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.16em] uppercase font-bold text-[#71717A]">
              SYSTEM PROTOCOLS
            </div>
            <ul className="space-y-1 text-xs font-mono text-[#0A0A0A]">
              <li className="flex justify-between">
                <span className="text-[#71717A]">ENCRYPTION:</span>
                <span className="font-semibold">HARDWARE SHA-256</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#71717A]">VERIFICATION:</span>
                <span className="font-semibold">PROOF OF IMPACT</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#71717A]">ALLOCATION:</span>
                <span className="font-semibold">PRIVATE PLACEMENT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Directive & Legal */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wider text-[#71717A]">
          <div>
            © 2024 8X.LIFE FOUNDATION. STRICTLY CONFIDENTIAL. ALL RIGHTS RESERVED.
          </div>
          <div className="uppercase">
            DESIGN DIRECTIVE: <strong className="text-[#0A0A0A]">HIGH-PERFORMANCE EDITORIAL BRUTALISM</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
