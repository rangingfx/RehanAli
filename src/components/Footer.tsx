import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/profileData';
import { Phone, MessageCircle, FileText, ArrowUp, ExternalLink, ShieldCheck, Download } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';
import { openDownloadCVModal } from '../utils/cvDownload';
import {
  getSavedProfilePhoto,
  subscribeProfilePhoto,
  DEFAULT_PROFILE_PHOTO,
} from '../utils/photoState';

interface FooterProps {
  onOpenCV?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>(getSavedProfilePhoto);

  useEffect(() => {
    const unsub = subscribeProfilePhoto((photo) => setProfilePhoto(photo));
    return unsub;
  }, []);

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
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-3.5 group focus:outline-none w-fit cursor-pointer"
              title="Return to Home"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-amber-500/80 p-0.5 bg-slate-950 shadow-lg shadow-amber-500/10 group-hover:border-amber-400 group-hover:scale-105 transition-all shrink-0">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Rehan Ali - Senior Embroidery Machine Operator & Mechanical Master"
                    className="w-full h-full object-cover object-top rounded-[9px]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center text-amber-400 font-black tracking-tight text-base group-hover:text-amber-300 transition-colors">
                    RA
                  </div>
                )}
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>{contactInfo.name}</span>
                  <span className="text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded">
                    10+ Yrs
                  </span>
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {contactInfo.title}
                </div>
              </div>
            </Link>

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
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home (/)
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-amber-400 transition-colors">
                  Profile & About (/profile)
                </Link>
              </li>
              <li>
                <Link to="/cv" className="hover:text-amber-400 transition-colors">
                  CV & Resume (/cv)
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-amber-400 transition-colors">
                  Work Experience (/work)
                </Link>
              </li>
              <li>
                <Link to="/embroidery-machine" className="hover:text-amber-400 transition-colors">
                  Embroidery Machine (/embroidery-machine)
                </Link>
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
                onClick={openDownloadCVModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                title="Download CV (PDF) or Print"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
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
