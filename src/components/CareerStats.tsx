import React from 'react';
import { careerHighlights } from '../data/profileData';
import { Award, Calendar, Layers, Factory, Wrench } from 'lucide-react';

export const CareerStats: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'start':
        return <Calendar className="w-5 h-5 text-amber-400" />;
      case 'multihead':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'industrial':
        return <Factory className="w-5 h-5 text-amber-400" />;
      case 'mechanical':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-10 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {careerHighlights.map((stat) => (
            <div
              key={stat.id}
              className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 hover:border-amber-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/90 group-hover:border-amber-500/30 transition-colors">
                  {getIcon(stat.id)}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  VERIFIED
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-snug line-clamp-2">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
