import React, { useState } from 'react';
import {
  Cpu,
  Wrench,
  Layers,
  CheckCircle,
  Sliders,
  ShieldCheck,
  Maximize2,
  Factory,
  Sparkles,
  Camera,
} from 'lucide-react';
import { FACTORY_ACTION_PHOTO } from '../utils/photoState';
import { PhotoLightboxModal } from './PhotoLightboxModal';

interface EmbroideryMachineryVisualProps {
  onOpenLightbox?: (src: string, title: string, subtitle: string) => void;
}

export const EmbroideryMachineryVisual: React.FC<EmbroideryMachineryVisualProps> = ({
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<'factory' | 'multihead' | 'needle' | 'control'>('factory');
  const [isLocalLightboxOpen, setIsLocalLightboxOpen] = useState(false);

  const handleOpenPhoto = () => {
    if (onOpenLightbox) {
      onOpenLightbox(
        FACTORY_ACTION_PHOTO,
        'Rehan Ali — Industrial Multi-Head Embroidery Machine in Operation',
        'Live on-site textile factory production, monitoring computerized multi-head stitch alignment and thread tension.'
      );
    } else {
      setIsLocalLightboxOpen(true);
    }
  };

  return (
    <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Subtle technical grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-3.5 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
            {activeTab === 'factory' ? (
              <>
                <Factory className="w-3.5 h-3.5 text-amber-400" />
                <span>VERIFIED FACTORY FLOOR OPERATION</span>
              </>
            ) : (
              <span>SPEC // TECHNICAL MACHINERY HUD</span>
            )}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-[11px] font-medium">
          <button
            onClick={() => setActiveTab('factory')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'factory'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Real on-site photo of Rehan Ali operating the machine"
          >
            <Camera className="w-3 h-3 text-amber-400" />
            <span>Live Action</span>
          </button>
          <button
            onClick={() => setActiveTab('multihead')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'multihead'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Schematic
          </button>
          <button
            onClick={() => setActiveTab('needle')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'needle'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Needle Bar
          </button>
          <button
            onClick={() => setActiveTab('control')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'control'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Diagnostics
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-[290px] sm:min-h-[350px]">
        {/* FACTORY ACTION REAL PHOTO VIEW */}
        {activeTab === 'factory' && (
          <div className="relative w-full rounded-xl overflow-hidden group border border-slate-800 bg-slate-950 shadow-inner">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src={FACTORY_ACTION_PHOTO}
                alt="Rehan Ali operating industrial computerized embroidery machine"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top HUD Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-bold text-amber-400 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ON-SITE // PRODUCTION FLOOR</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-medium text-slate-300 shadow-lg">
                  <span>TAJIMA & BARUDAN CLASS</span>
                </div>
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={handleOpenPhoto}
                className="absolute top-3 right-3 sm:top-auto sm:bottom-3 sm:right-3 p-2 rounded-lg bg-slate-950/85 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-700/80 hover:border-amber-400 transition-all shadow-xl active:scale-95 group/btn"
                title="Click to inspect full resolution photograph"
              >
                <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
              </button>

              {/* Bottom Caption Overlay */}
              <div
                onClick={handleOpenPhoto}
                className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Operation
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Multi-Head Synchronization
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Rehan Ali at the Computerized Multi-Head Control Station
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 mt-0.5 font-normal">
                  Supervising synchronized needle heads, thread tension cones, and real-time embroidery fabric feed.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'multihead' && (
          <svg
            viewBox="0 0 600 360"
            className="w-full h-auto max-h-[340px] drop-shadow-md select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="amberThread" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Heavy Main Machine Beam */}
            <rect x="20" y="40" width="560" height="42" rx="4" fill="url(#beamGrad)" stroke="#475569" strokeWidth="1.5" />
            <line x1="30" y1="61" x2="570" y2="61" stroke="#64748B" strokeWidth="1" strokeDasharray="8 4" />

            {/* Thread Stand Rails (Top) */}
            <line x1="40" y1="16" x2="560" y2="16" stroke="#475569" strokeWidth="2" />
            {[80, 140, 200, 260, 320, 380, 440, 500].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="16" x2={x} y2="40" stroke="#64748B" strokeWidth="1.5" />
                <circle cx={x} cy="14" r="5" fill="#334155" stroke="#F59E0B" strokeWidth="1" />
                {/* Thread cones */}
                <path d={`M ${x - 6} 22 L ${x + 6} 22 L ${x + 4} 34 L ${x - 4} 34 Z`} fill={i % 2 === 0 ? "#F59E0B" : "#E2E8F0"} />
              </g>
            ))}

            {/* 4 Synchronized Multi-Head Units */}
            {[70, 200, 330, 460].map((hx, idx) => (
              <g key={idx} className="transition-transform duration-300 hover:translate-y-0.5">
                {/* Head Housing */}
                <rect x={hx} y="80" width="80" height="135" rx="5" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                
                {/* Head Label */}
                <rect x={hx + 10} y="86" width="60" height="14" rx="2" fill="#0F172A" />
                <text x={hx + 40} y="96" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  HEAD #{idx + 1}
                </text>

                {/* Rotary Tension Knobs */}
                <circle cx={hx + 25} cy="120" r="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                <circle cx={hx + 55} cy="120" r="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                <circle cx={hx + 25} cy="120" r="3" fill="#F59E0B" />
                <circle cx={hx + 55} cy="120" r="3" fill="#F59E0B" />

                {/* Take-Up Levers */}
                <path d={`M ${hx + 30} 145 L ${hx + 40} 138 L ${hx + 50} 145`} fill="none" stroke="#E2E8F0" strokeWidth="2" />

                {/* Lower Needle Bar Array */}
                <rect x={hx + 20} y="170" width="40" height="35" rx="2" fill="#0F172A" stroke="#334155" />
                <line x1={hx + 30} y1="170" x2={hx + 30} y2="215" stroke="#94A3B8" strokeWidth="1.5" />
                <line x1={hx + 40} y1="170" x2={hx + 40} y2="225" stroke="#F8FAFC" strokeWidth="2" />
                <line x1={hx + 50} y1="170" x2={hx + 50} y2="215" stroke="#94A3B8" strokeWidth="1.5" />

                {/* Needle Point & Active Thread */}
                <polygon points={`${hx + 38},225 ${hx + 42},225 ${hx + 40},234`} fill="#F8FAFC" />
                <path d={`M ${hx + 40} 228 Q ${hx + 45} 242, ${hx + 40} 250`} fill="none" stroke="url(#amberThread)" strokeWidth="1.5" />
              </g>
            ))}

            {/* Industrial Flatbed & Precision Embroidery Frame */}
            <rect x="20" y="248" width="560" height="92" rx="4" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />

            {/* Fabric Base Plate (Navy textile texture) */}
            <rect x="40" y="258" width="520" height="72" rx="3" fill="#0F172A" stroke="#1E293B" />
            <line x1="40" y1="294" x2="560" y2="294" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

            {/* Precision Embroidery Stitches (Gold satin motif on fabric) */}
            <g>
              <path
                d="M 60 294 Q 80 278, 110 294 T 160 294 T 210 294 T 260 294 T 310 294 T 360 294 T 410 294 T 460 294 T 510 294"
                fill="none"
                stroke="url(#amberThread)"
                strokeWidth="2.5"
                strokeDasharray="3 1.5"
              />
              <path
                d="M 60 294 Q 80 310, 110 294 T 160 294 T 210 294 T 260 294 T 310 294 T 360 294 T 410 294 T 460 294 T 510 294"
                fill="none"
                stroke="#FCD34D"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            </g>

            {/* Real-time status indicators in bed */}
            <rect x="210" y="308" width="180" height="22" rx="4" fill="#020617" stroke="#1E293B" />
            <circle cx="225" cy="319" r="3.5" fill="#10B981" />
            <text x="236" y="323" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
              SYNCHRONIZED // 1,050 SPM
            </text>
          </svg>
        )}

        {activeTab === 'needle' && (
          <svg
            viewBox="0 0 600 360"
            className="w-full h-auto max-h-[340px] drop-shadow-md select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="steelBar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>

            {/* Tension Disc Assembly Closeup */}
            <g transform="translate(40, 20)">
              <rect x="0" y="0" width="220" height="310" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="110" y="28" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold" fontFamily="monospace">
                TENSION ASSEMBLY
              </text>
              <line x1="20" y1="40" x2="200" y2="40" stroke="#1E293B" strokeWidth="1" />

              {/* Rotary Tension Dial */}
              <circle cx="110" cy="110" r="48" fill="#1E293B" stroke="#475569" strokeWidth="3" />
              <circle cx="110" cy="110" r="38" fill="#0B1120" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 3" />
              {/* Dial tick marks */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <line
                  key={i}
                  x1={110 + 32 * Math.cos((deg * Math.PI) / 180)}
                  y1={110 + 32 * Math.sin((deg * Math.PI) / 180)}
                  x2={110 + 44 * Math.cos((deg * Math.PI) / 180)}
                  y2={110 + 44 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />
              ))}
              <circle cx="110" cy="110" r="14" fill="#334155" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="110" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                #3.8
              </text>

              {/* Check Spring */}
              <path d="M 68 120 Q 60 160, 75 190 T 110 205" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
              <text x="110" y="235" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                Calibrated Check Spring
              </text>
              <rect x="25" y="255" width="170" height="36" rx="4" fill="#1E293B" />
              <text x="110" y="272" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ✓ BALANCED TENSION
              </text>
              <text x="110" y="284" textAnchor="middle" fill="#64748B" fontSize="8">
                Zero loop / Zero thread-break
              </text>
            </g>

            {/* Needle & Rotary Hook Alignment Schematic */}
            <g transform="translate(300, 20)">
              <rect x="0" y="0" width="260" height="310" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="130" y="28" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold" fontFamily="monospace">
                NEEDLE & ROTARY HOOK TIMING
              </text>
              <line x1="20" y1="40" x2="240" y2="40" stroke="#1E293B" strokeWidth="1" />

              {/* Vertical Needle Bar */}
              <rect x="124" y="55" width="12" height="150" rx="2" fill="url(#steelBar)" stroke="#334155" />
              <rect x="116" y="90" width="28" height="20" rx="3" fill="#1E293B" stroke="#475569" />

              {/* Needle Tip & Scarf */}
              <polygon points="124,205 136,205 130,238" fill="url(#steelBar)" />
              {/* Needle Eye */}
              <ellipse cx="130" cy="226" rx="2" ry="4" fill="#0B1120" />

              {/* Thread through Eye */}
              <path d="M 90 140 L 128 226 L 155 250" fill="none" stroke="#F59E0B" strokeWidth="2" />

              {/* Fabric Layer */}
              <rect x="40" y="235" width="180" height="8" rx="1" fill="#3B82F6" opacity="0.8" />
              <text x="218" y="242" fill="#93C5FD" fontSize="8" fontFamily="monospace">
                FABRIC
              </text>

              {/* Stabilizer Backing */}
              <rect x="40" y="243" width="180" height="4" rx="1" fill="#E2E8F0" opacity="0.6" />
              <text x="218" y="248" fill="#CBD5E1" fontSize="7" fontFamily="monospace">
                BACKING
              </text>

              {/* Rotary Hook Point passing needle scarf */}
              <circle cx="155" cy="265" r="28" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M 145 240 Q 155 255, 133 227" fill="none" stroke="#10B981" strokeWidth="2" />
              <circle cx="132" cy="227" r="3" fill="#10B981" />
              <text x="130" y="295" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                HOOK CLEARANCE: 0.05mm
              </text>
            </g>
          </svg>
        )}

        {activeTab === 'control' && (
          <div className="w-full max-w-lg mx-auto py-2">
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  SYSTEM DIAGNOSTIC CONSOLE
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  CALIBRATED & VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500">OPERATIONAL STATUS</div>
                  <div className="text-white font-bold mt-0.5">READY FOR PRODUCTION</div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500">PRIMARY SPEED RANGE</div>
                  <div className="text-amber-400 font-bold mt-0.5">850 – 1,100 SPM</div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500">MECHANICAL HEALTH</div>
                  <div className="text-emerald-400 font-bold mt-0.5">100% PREVENTIVE CHECKED</div>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500">EXPERIENCE BASELINE</div>
                  <div className="text-white font-bold mt-0.5">2011 – PRESENT (10+ YRS)</div>
                </div>
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Multi-head frame synchronization & computerized needle sequencing verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Upper thread spring tension & lower bobbin case balancing tuned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Rotary hook timing & clearance checked for zero skipped stitches</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer info pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-800/80 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Multi-Head Command</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Wrench className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Mechanical Master</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Sliders className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Precision Calibration</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Zero-Defect QC</span>
        </div>
      </div>

      {/* Fallback local Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={isLocalLightboxOpen}
        onClose={() => setIsLocalLightboxOpen(false)}
        imageSrc={FACTORY_ACTION_PHOTO}
        title="Rehan Ali — Industrial Multi-Head Embroidery Machine in Operation"
        subtitle="Live on-site textile factory production, monitoring computerized multi-head stitch alignment and thread tension."
        badge="ON-SITE VERIFICATION"
      />
    </div>
  );
};
