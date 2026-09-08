import React from 'react';
import { keyResponsibilities } from '../data/profileData';
import {
  PlaySquare,
  Settings2,
  Scissors,
  CheckCircle,
  Gauge,
  AlertTriangle,
  Palette,
  Users,
  Check,
} from 'lucide-react';

export const KeyResponsibilitiesSection: React.FC = () => {
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <PlaySquare className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Settings2 className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Scissors className="w-5 h-5 text-amber-400" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <Gauge className="w-5 h-5 text-amber-400" />;
      case 6:
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 7:
        return <Palette className="w-5 h-5 text-amber-400" />;
      case 8:
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Check className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="responsibilities" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Gauge className="w-3.5 h-3.5" />
            Operational Duties
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Key Responsibilities
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Day-to-day industrial floor execution, mechanical precision, and supervisory production standards.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {keyResponsibilities.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{item.id}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>STANDARD DUTY</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
