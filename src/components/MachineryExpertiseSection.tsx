import React from 'react';
import { technicalExpertiseList } from '../data/profileData';
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
} from 'lucide-react';

export const MachineryExpertiseSection: React.FC = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Cog className="w-3.5 h-3.5" />
            Specialized Machinery
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Machinery & Technical Expertise
          </h2>
          <p className="text-slate-400 text-base mt-2">
            In-depth mechanical, electrical, and operational proficiency across industrial computerized embroidery setups.
          </p>
        </div>

        {/* Technical Grid (10 items) */}
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
    </section>
  );
};
