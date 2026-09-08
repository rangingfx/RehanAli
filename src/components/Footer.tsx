import React from 'react';
import { contactInfo } from '../data/profileData';
import { Phone, MessageCircle, FileText, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs no-print pb-20 sm:pb-12 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Availability */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-sm">
                RA
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  {contactInfo.name}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {contactInfo.title}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated embroidery machine operator and mechanical master with over 10 years of industrial production experience. Available for immediate employment opportunities across Pakistan.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{contactInfo.statusBadge}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#summary" className="hover:text-amber-400 transition-colors">
                  Professional Summary
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors">
                  Experience Timeline (2011–Present)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors">
                  Core Skills & Capabilities
                </a>
              </li>
              <li>
                <a href="#responsibilities" className="hover:text-amber-400 transition-colors">
                  Key Responsibilities
                </a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-amber-400 transition-colors">
                  Machinery & Technical Expertise
                </a>
              </li>
              <li>
                <a href="#why-hire" className="hover:text-amber-400 transition-colors">
                  Why Hire Rehan Ali
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCV}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Printable CV & Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={contactInfo.phones[0].tel} className="hover:text-amber-400">
                  {contactInfo.phones[0].display}
                </a>
                <span className="text-[10px] text-slate-500 font-sans">(Primary)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={contactInfo.phones[1].tel} className="hover:text-amber-400">
                  {contactInfo.phones[1].display}
                </a>
                <span className="text-[10px] text-slate-500 font-sans">(Secondary)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={contactInfo.phones[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs transition-colors"
              >
                <span>Save Contact</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Powered by RanginGFX.com */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Rehan Ali. All rights reserved. Senior Embroidery Machine Operator & Mechanical Master.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://rangingfx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors font-medium"
            >
              <span>Powered by: <strong>RanginGFX.com</strong></span>
              <ExternalLink className="w-3 h-3 text-amber-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
