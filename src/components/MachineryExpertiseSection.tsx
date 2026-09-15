import React, { useState } from 'react';
import { technicalExpertiseList, embroideryMachineBrands } from '../data/profileData';
import {
  Layers,
  Monitor,
  Cog,
  Compass,
  Sliders,
  Disc,
  Wrench,
  ShieldCheck,
  Workflow,
  CheckSquare,
  Cpu,
  Factory,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const MachineryExpertiseSection: React.FC = () => {
  const [filterRegion, setFilterRegion] = useState<'all' | 'china' | 'japan-korea'>('all');

  const filteredBrands = embroideryMachineBrands.filter((b) => {
    if (filterRegion === 'china') return b.country === 'China';
    if (filterRegion === 'japan-korea') return b.country === 'Japan' || b.country === 'Korea';
    return true;
  });

  const getTechIcon = (id: string) => {
    switch (id) {
      case 'tech-1':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'tech-2':
        return <Monitor className="w-5 h-5 text-amber-400" />;
      case 'tech-3':
        return <Cog className="w-5 h-5 text-amber-400" />;
      case 'tech-4':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'tech-5':
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'tech-6':
        return <Disc className="w-5 h-5 text-amber-400" />;
      case 'tech-7':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'tech-8':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'tech-9':
        return <Workflow className="w-5 h-5 text-amber-400" />;
      case 'tech-10':
        return <CheckSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="machinery" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================ */}
        {/* BRAND COMPETENCIES & INDUSTRIAL MACHINERY PORTFOLIO          */}
        {/* ============================================================ */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Factory className="w-3.5 h-3.5" />
                Industrial Brand Competencies
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Embroidery Machine Brands Mastered
              </h2>
              <p className="text-slate-400 text-base mt-2">
                Operational command and mechanical calibration across leading Chinese industrial & budget machines alongside premier Japanese and Korean multi-head systems.
              </p>
            </div>

            {/* Region Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-950 border border-slate-800 p-1 rounded-xl self-start md:self-auto text-xs font-medium">
              <button
                onClick={() => setFilterRegion('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterRegion === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Brands ({embroideryMachineBrands.length})
              </button>
              <button
                onClick={() => setFilterRegion('china')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterRegion === 'china'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                China 🇨🇳 ({embroideryMachineBrands.filter((b) => b.country === 'China').length})
              </button>
              <button
                onClick={() => setFilterRegion('japan-korea')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterRegion === 'japan-korea'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Japan &amp; Korea 🇯🇵🇰🇷 ({embroideryMachineBrands.filter((b) => b.country !== 'China').length})
              </button>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl" role="img" aria-label={brand.country}>
                        {brand.flag}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                          {brand.name}
                        </h3>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {brand.country}
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {brand.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Experience:</span>
                    <span className="text-white font-bold">{brand.years}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400">Mastery:</span>
                    <span className="text-amber-400 font-bold">{brand.mastery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* TECHNICAL EXPERTISE BREAKDOWN (10 Core Modules)             */}
        {/* ============================================================ */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Cog className="w-3.5 h-3.5" />
              Operational Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Machinery &amp; Technical Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              In-depth mechanical, electrical, and operational proficiency across industrial computerized embroidery setups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {technicalExpertiseList.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                      {getTechIcon(item.id)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      MOD #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>PRACTICAL EXP</span>
                  <span className="text-amber-400 font-bold">10+ YRS</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
