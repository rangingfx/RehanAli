import React from 'react';
import { educationAndTraining } from '../data/profileData';
import { GraduationCap, Wrench, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-14 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Education & Technical Training
          </h2>
        </div>

        {/* 2-column clean card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationAndTraining.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-md hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {idx === 0 ? (
                      <Wrench className="w-5 h-5 text-amber-400" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-200 mt-2">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>QUALIFICATION STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  COMPLETED
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
