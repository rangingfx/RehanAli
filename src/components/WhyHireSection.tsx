import React from 'react';
import { whyHirePoints } from '../data/profileData';
import { CheckCircle2, ShieldCheck, Briefcase, Award, ArrowRight } from 'lucide-react';

export const WhyHireSection: React.FC = () => {
  return (
    <section id="why-hire" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Employer Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Hire Rehan Ali
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Key operational strengths, work ethic, and factory-floor value delivered to garment manufacturers and textile export houses.
          </p>
        </div>

        {/* Checkmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {whyHirePoints.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-950/80 border border-slate-800/90 p-4 sm:p-5 flex items-start gap-3.5 hover:border-amber-500/40 transition-all group shadow-sm"
            >
              <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {point}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-600">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Employer Confidence Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-950 to-slate-900 border border-amber-500/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              Factory Ready • Immediate Availability
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Prepared to lead machine runs, optimize production lines, and minimize downtime.
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-amber-500/20 transition-all shrink-0 active:scale-95"
          >
            <span>Discuss Employment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
