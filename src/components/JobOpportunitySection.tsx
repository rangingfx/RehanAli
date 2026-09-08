import React from 'react';
import { targetJobRoles, contactInfo } from '../data/profileData';
import { Phone, MessageCircle, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

export const JobOpportunitySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            
            {/* Pulsing Open Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="uppercase font-bold tracking-wider">
                {contactInfo.statusBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Looking for a Skilled Embroidery Professional?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Rehan Ali is currently open to suitable job opportunities and factory roles across the following positions:
            </p>

            {/* Target Job Role Tags */}
            <div className="pt-3 pb-6 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {targetJobRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 hover:border-amber-500/40 transition-colors shadow-sm flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>{role}</span>
                </span>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Briefcase className="w-4 h-4" />
                <span>CONTACT REHAN ALI</span>
              </a>

              <a
                href={contactInfo.phones[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WHATSAPP DIRECT</span>
              </a>
            </div>

            {/* Telephone Links */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
              <span>Direct Phone Lines:</span>
              {contactInfo.phones.map((p, idx) => (
                <a
                  key={p.raw}
                  href={p.tel}
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{p.display}</span>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
