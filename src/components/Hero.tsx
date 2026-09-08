import React from 'react';
import {
  Phone,
  MessageCircle,
  FileText,
  Briefcase,
  CheckCircle,
  ChevronRight,
  ArrowDown,
  Download,
} from 'lucide-react';
import { heroContent, contactInfo } from '../data/profileData';
import { EmbroideryMachineryVisual } from './EmbroideryMachineryVisual';
import { downloadVCard } from '../utils/vcard';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            
            {/* Highly Visible Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px] font-bold">
                {heroContent.status}
              </span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-emerald-200/80 font-normal">Ready for Interview</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08]">
                {heroContent.headline}
              </h1>
              <div className="text-xl sm:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent leading-snug">
                {heroContent.titleLine1} <br className="hidden sm:inline" />
                {heroContent.titleLine2}
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {heroContent.supportingText}
            </p>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Primary CTA: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Briefcase className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {/* Secondary CTA: WhatsApp Me */}
              <a
                href={contactInfo.phones[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Me</span>
              </a>

              {/* Third CTA: View Experience */}
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-all"
              >
                <span>View Experience</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              {/* Fourth CTA: Download / Print CV */}
              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download / Print CV</span>
              </button>
            </div>

            {/* Clickable Phone Number Pills & Quick Save */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Direct Telephone (Click to Call):
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {contactInfo.phones.map((phone, idx) => (
                  <a
                    key={phone.raw}
                    href={phone.tel}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-100 hover:text-amber-400 transition-all text-xs sm:text-sm font-mono font-medium group"
                    title={`Call Line ${idx + 1}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>{phone.display}</span>
                    <span className="text-[10px] text-slate-500 font-sans">
                      {idx === 0 ? '(Primary)' : '(Alt)'}
                    </span>
                  </a>
                ))}

                <button
                  onClick={downloadVCard}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
                  title="Save Rehan Ali's contact card to phone"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>Save Contact (.vcf)</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: High-Precision Industrial Machine Visual */}
          <div className="lg:col-span-6 xl:col-span-5">
            <EmbroideryMachineryVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
