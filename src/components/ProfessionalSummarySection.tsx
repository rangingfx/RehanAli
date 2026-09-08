import React from 'react';
import { professionalSummary, brandExperiences } from '../data/profileData';
import { CheckCircle2, Factory, Sparkles, Building2 } from 'lucide-react';

export const ProfessionalSummarySection: React.FC = () => {
  return (
    <section id="summary" className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Industry Stature
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {professionalSummary.heading}
          </h2>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Statement Box */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {professionalSummary.paragraphs.map((p, idx) => (
              <p key={idx} className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 shadow-sm">
                {p}
              </p>
            ))}
          </div>

          {/* Quick Snapshot & Collaborated Brands Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-sm font-bold text-white uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Premier Textile & Fashion Brands</span>
              </div>
              <p className="text-xs text-slate-400 pt-3 pb-4">
                Proven track record operating computerized multi-head machinery across Pakistan's top designer, export, and retail garment companies:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {brandExperiences.map((brand) => (
                  <div
                    key={brand.id}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="font-black text-sm text-white tracking-tight flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {brand.brandName}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {brand.category}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>VERIFIED CAREER RECORD</span>
                <span className="text-amber-400 font-bold">2011 – PRESENT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
