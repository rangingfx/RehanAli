import React, { useState } from 'react';
import { brandExperiences } from '../data/profileData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Award, Factory } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const filteredBrands =
    selectedBrand === 'all'
      ? brandExperiences
      : brandExperiences.filter((b) => b.id === selectedBrand);

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Verified Work History
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Experience Timeline
            </h2>
            <div className="mt-2 text-base sm:text-lg text-amber-400 font-semibold flex items-center gap-2">
              <span>Senior Embroidery Machine Operator & Technical Specialist</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-mono">2011 – Present</span>
            </div>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              A long-term career working with leading textile houses, export houses, garment businesses, and prominent fashion labels.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedBrand === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Labels ({brandExperiences.length})
            </button>
            {brandExperiences.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedBrand === b.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {b.brandName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-10">
          {filteredBrands.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-sm shadow-amber-500/30" />

              {/* Card Body */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-xl hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {item.brandName}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2">
                      <Factory className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    2011 – Present Era
                  </div>
                </div>

                {/* Specific Responsibilities & Achievements */}
                <div className="mt-5 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Key Technical Responsibilities & Execution:
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
