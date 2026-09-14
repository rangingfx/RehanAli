import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  FileText,
  Printer,
  Menu,
  X,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import { contactInfo } from '../data/profileData';
import { downloadVCard } from '../utils/vcard';
import {
  getSavedProfilePhoto,
  subscribeProfilePhoto,
} from '../utils/photoState';

interface HeaderProps {
  onOpenCV: () => void;
  currentSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCV, currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(getSavedProfilePhoto);

  useEffect(() => {
    const unsub = subscribeProfilePhoto((photo) => setProfilePhoto(photo));
    return unsub;
  }, []);

  const navLinks = [
    { label: 'Summary', href: '#summary' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Responsibilities', href: '#responsibilities' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Why Hire', href: '#why-hire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100 no-print transition-all">
      {/* Top Status Announcement Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
              {contactInfo.statusBadge}
            </span>
            <span className="hidden sm:inline text-slate-400">• Textile & Garment Industry</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:inline text-slate-400">Direct Contact:</span>
            <a
              href={contactInfo.phones[0].tel}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-mono"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{contactInfo.phones[0].display}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={contactInfo.phones[1].tel}
              className="hidden sm:flex text-slate-300 hover:text-white transition-colors items-center gap-1 font-mono"
            >
              <span>{contactInfo.phones[1].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Branding */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-500/70 p-0.5 bg-slate-950 shadow-md shadow-amber-500/10 shrink-0">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Rehan Ali"
                className="w-full h-full object-cover rounded-[6px]"
              />
            ) : (
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center text-amber-400 font-black tracking-tight text-base group-hover:text-amber-300 transition-colors">
                RA
              </div>
            )}
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
              <span>{contactInfo.name}</span>
              <span className="hidden lg:inline-block text-[10px] uppercase font-semibold tracking-wider bg-slate-800 text-amber-400 px-2 py-0.5 rounded border border-slate-700">
                10+ Yrs Exp
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs">
              Senior Embroidery Machine Operator & Mechanical Master
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                currentSection === link.href.replace('#', '')
                  ? 'text-amber-400 bg-slate-800/80 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* CV Action Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-amber-500/50 bg-slate-900 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-sm active:scale-95"
            title="View, Print or Download Rehan Ali's CV"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Print / View CV</span>
          </button>

          {/* Quick Call Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900 text-slate-200 hover:text-white text-xs font-medium transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {phoneDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-100"
                onClick={() => setPhoneDropdownOpen(false)}
              >
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Call Directly
                </div>
                {contactInfo.phones.map((phone, i) => (
                  <a
                    key={phone.raw}
                    href={phone.tel}
                    className="flex items-center justify-between px-3 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <span className="font-mono">{phone.display}</span>
                    <span className="text-[10px] text-slate-500">Line {i + 1}</span>
                  </a>
                ))}
                <div className="border-t border-slate-800 my-1" />
                <button
                  onClick={downloadVCard}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Save Contact to Phone (.vcf)</span>
                </button>
              </div>
            )}
          </div>

          {/* WhatsApp Primary CTA */}
          <a
            href={contactInfo.phones[0].whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950/50 transition-all active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenCV}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-amber-400"
            title="View CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <a
            href={contactInfo.phones[0].whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-600 text-white"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 hover:text-amber-400 hover:border-slate-700 text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Quick Contact
            </div>
            <div className="grid grid-cols-2 gap-2">
              {contactInfo.phones.map((p, i) => (
                <a
                  key={p.raw}
                  href={p.tel}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{p.display}</span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 text-slate-100 text-xs font-semibold border border-slate-700"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View / Print CV</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadVCard();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Save Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
