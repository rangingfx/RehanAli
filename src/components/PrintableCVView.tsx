import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  Download,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Briefcase,
  CheckCircle2,
  Award,
  BookOpen,
  Wrench,
  Layers,
  ShieldCheck,
  Cpu,
  Sliders,
  Copy,
  Check,
  ExternalLink,
  Factory,
  Clock,
  Sparkles,
  LayoutGrid,
  AlignLeft,
  Home,
  User,
} from 'lucide-react';
import {
  contactInfo,
  heroContent,
  professionalSummary,
  brandExperiences,
  keyResponsibilities,
  technicalExpertiseList,
  educationAndTraining,
  whyHirePoints,
  targetJobRoles,
} from '../data/profileData';
import { downloadVCard } from '../utils/vcard';
import {
  getSavedProfilePhoto,
  subscribeProfilePhoto,
  DEFAULT_PROFILE_PHOTO,
  FACTORY_ACTION_PHOTO,
} from '../utils/photoState';

interface PrintableCVViewProps {
  onBack?: () => void;
}

export const PrintableCVView: React.FC<PrintableCVViewProps> = ({ onBack }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>(getSavedProfilePhoto);
  const [copied, setCopied] = useState(false);
  const [layoutMode, setLayoutMode] = useState<'executive' | 'classic'>('executive');
  const [showFactoryProof, setShowFactoryProof] = useState(true);

  useEffect(() => {
    const unsub = subscribeProfilePhoto((photo) => {
      setProfilePhoto(photo);
    });
    return unsub;
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const copyShareLink = () => {
    const url = window.location.origin + '/cv';
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const machineryMastery = [
    { name: 'Barudan (Japan)', type: 'Multi-Head Computerized', mastery: '100%', years: '10+ Yrs' },
    { name: 'Tajima (Japan)', type: 'Multi-Head High Speed', mastery: '100%', years: '10+ Yrs' },
    { name: 'SWF (Korea)', type: 'Industrial Embroidery', mastery: '95%', years: '8+ Yrs' },
    { name: 'Feiya (China)', type: 'Industrial Multi-Head', mastery: '95%', years: '8+ Yrs' },
    { name: 'Brother & ZSK Systems', type: 'Specialty Embroidery', mastery: '90%', years: '6+ Yrs' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-10 px-3 sm:px-6">
      
      {/* ============================================================ */}
      {/* SCREEN ACTION TOOLBAR (Hidden during actual print)          */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto mb-6 no-print">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-2xl backdrop-blur-sm space-y-3">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Back to Home Button & Quick Nav */}
            <div className="flex items-center gap-2">
              {onBack ? (
                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer hover:border-slate-600 border border-slate-700/60"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-400" />
                  <span>Back to Home</span>
                </button>
              ) : (
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer hover:border-slate-600 border border-slate-700/60"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-400" />
                  <span>Back to Home</span>
                </Link>
              )}

              {/* Quick Route Links & Breadcrumb */}
              <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-800 text-xs text-slate-400 font-medium">
                <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
                  <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </Link>
                  <span className="text-slate-600">/</span>
                  <span className="text-amber-400 font-semibold" aria-current="page">CV / Resume</span>
                </nav>
                <span className="text-slate-700">|</span>
                <Link to="/profile" className="hover:text-amber-400 px-1.5 py-0.5 rounded transition-colors">
                  Profile
                </Link>
                <Link to="/work" className="hover:text-amber-400 px-1.5 py-0.5 rounded transition-colors">
                  Work
                </Link>
                <Link to="/embroidery-machine" className="hover:text-amber-400 px-1.5 py-0.5 rounded transition-colors">
                  Embroidery Machine
                </Link>
              </div>
            </div>

            {/* Layout Toggle Buttons (Executive vs Classic) */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setLayoutMode('executive')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  layoutMode === 'executive'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Modern 2-column executive resume format"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Executive Dual-Column</span>
                <span className="sm:hidden">Executive</span>
              </button>
              <button
                onClick={() => setLayoutMode('classic')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  layoutMode === 'classic'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Traditional chronological linear document format"
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Classic Document</span>
                <span className="sm:hidden">Classic</span>
              </button>
            </div>

            {/* Print & Download Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
                title="Print CV or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE AS PDF</span>
                <span className="hidden md:inline-block bg-slate-950/20 text-[10px] px-1.5 py-0.5 rounded font-mono">⌘P</span>
              </button>

              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer border border-slate-700/60"
                title="Save contact info to phone"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">vCard</span>
              </button>

              <button
                onClick={copyShareLink}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer border border-slate-700/60"
                title="Copy shareable CV link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>

              <a
                href={contactInfo.phones[0].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                title="Direct WhatsApp hiring discussion"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Practical print instructions bar */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Standard A4 Document Format. In print dialog, select <strong>Destination: Save as PDF</strong> and enable <strong>Background graphics</strong>.
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span>Direct verification:</span>
              <a href="tel:+923223988933" className="text-amber-400 hover:underline font-mono">0322 39 88 933</a>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* THE CV DOCUMENT CONTAINER (Print-ready & Web-responsive)      */}
      {/* ============================================================ */}
      <article className="max-w-5xl mx-auto bg-white text-slate-900 shadow-2xl rounded-2xl p-6 sm:p-10 lg:p-12 print-page font-sans text-xs sm:text-sm leading-normal border border-slate-200">
        
        {/* TOP HEADER SECTION */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Candidate Identity & Portrait */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-600 p-0.5 bg-slate-900 shadow-md">
                  <img
                    src={profilePhoto || DEFAULT_PROFILE_PHOTO}
                    alt="Rehan Ali - Senior Embroidery Machine Operator & Mechanical Master CV Portrait"
                    className="w-full h-full object-cover object-top rounded-[13px]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 border-2 border-white shadow-sm" title="Verified Senior Operator">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{contactInfo.statusBadge}</span>
                </div>
                
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950 uppercase leading-snug">
                  Rehan Ali – Curriculum Vitae | Senior Embroidery Machine Operator
                </h1>
                
                <div className="text-xs sm:text-sm font-extrabold text-amber-800 tracking-wide uppercase">
                  {contactInfo.title}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-600 font-medium">
                  <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200 font-semibold">
                    10+ Yrs Continuous Production
                  </span>
                  <span className="text-slate-400">•</span>
                  <span>Lahore / Punjab Industrial Zone</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Matrix Box */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 sm:p-4 text-xs space-y-1.5 min-w-[240px] shrink-0">
              <h2 className="font-bold text-[11px] uppercase tracking-wider text-slate-700 pb-1 border-b border-slate-200 flex items-center justify-between">
                <span>Contact Information</span>
                <span className="text-emerald-700 font-mono font-semibold">Immediate Joining</span>
              </h2>

              <div className="flex items-center justify-between gap-2 text-slate-800 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-600 font-normal text-[11px]">
                  <Phone className="w-3 h-3 text-amber-700" /> Primary:
                </span>
                <a href={contactInfo.phones[0].tel} className="hover:text-amber-700 font-mono text-xs">
                  {contactInfo.phones[0].display}
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 text-slate-800 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-600 font-normal text-[11px]">
                  <Phone className="w-3 h-3 text-amber-700" /> Secondary:
                </span>
                <a href={contactInfo.phones[1].tel} className="hover:text-amber-700 font-mono text-xs">
                  {contactInfo.phones[1].display}
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 text-slate-800">
                <span className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                  <MessageCircle className="w-3 h-3 text-emerald-600" /> WhatsApp:
                </span>
                <a
                  href={contactInfo.phones[0].whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-medium hover:underline text-[11px]"
                >
                  Direct Message
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 text-slate-600 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-slate-500" /> Location:
                </span>
                <span>Lahore, Pakistan</span>
              </div>

              <div className="flex items-center justify-between gap-2 text-slate-600 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-slate-500" /> Portfolio:
                </span>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 font-medium hover:underline"
                >
                  rehanali.rangingfx.com
                </a>
              </div>
            </div>

          </div>
        </header>

        {/* KEY PERFORMANCE INDICATORS ROW */}
        <div className="mb-6 rounded-xl bg-slate-900 text-white p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center print:bg-slate-100 print:text-slate-900 print:border print:border-slate-300">
          <div className="border-r border-slate-800 print:border-slate-300 last:border-none">
            <div className="text-base sm:text-xl font-black text-amber-400 print:text-amber-700">10+ Years</div>
            <div className="text-[10px] text-slate-400 print:text-slate-600 uppercase font-bold tracking-wider">Industrial Experience</div>
          </div>
          <div className="border-r border-slate-800 print:border-slate-300 last:border-none">
            <div className="text-base sm:text-xl font-black text-amber-400 print:text-amber-700">2011</div>
            <div className="text-[10px] text-slate-400 print:text-slate-600 uppercase font-bold tracking-wider">Career Inception</div>
          </div>
          <div className="border-r border-slate-800 print:border-slate-300 last:border-none">
            <div className="text-base sm:text-xl font-black text-amber-400 print:text-amber-700">Multi-Head</div>
            <div className="text-[10px] text-slate-400 print:text-slate-600 uppercase font-bold tracking-wider">Computerized Systems</div>
          </div>
          <div>
            <div className="text-base sm:text-xl font-black text-amber-400 print:text-amber-700">1,050 SPM</div>
            <div className="text-[10px] text-slate-400 print:text-slate-600 uppercase font-bold tracking-wider">High-Speed Operation</div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DUAL-COLUMN EXECUTIVE LAYOUT OR CLASSIC LINEAR               */}
        {/* ============================================================ */}
        {layoutMode === 'executive' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:grid-cols-12 print:gap-6">
            
            {/* LEFT COLUMN: SIDEBAR (4 of 12 columns on Desktop & Print) */}
            <div className="lg:col-span-4 print:col-span-4 space-y-6">
              
              {/* Machinery Mastery Card */}
              <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 break-inside-avoid">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-amber-700" />
                  <span>Embroidery Machine Skills</span>
                </h2>
                
                <div className="space-y-2.5 text-[11px]">
                  {machineryMastery.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <h3 className="flex items-center justify-between font-bold text-slate-900">
                        <span>{m.name}</span>
                        <span className="text-[10px] font-mono text-amber-800 font-extrabold">{m.years}</span>
                      </h3>
                      <div className="flex items-center justify-between text-[10px] text-slate-500">
                        <span>{m.type}</span>
                        <span className="text-emerald-700 font-semibold">{m.mastery}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-600 h-full rounded-full"
                          style={{ width: m.mastery }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Competencies */}
              <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 break-inside-avoid">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-700" />
                  <span>Technical Skills</span>
                </h2>
                
                <ul className="space-y-2 text-[11px] text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hook & Needle Timing:</strong> Precision alignment with 0.05mm clearance.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tension Balancing:</strong> Upper check-spring & lower bobbin zero-break calibration.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Needle & Hoop Matching:</strong> Chiffon, silk, organza, lawn, denim & knitwear.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Preventive Maintenance:</strong> Rotary deburring, scheduled oiling & part replacement.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Digital Pattern Loading:</strong> Design zeroing, color sequencing & stitch auditing.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Downtime Elimination:</strong> Rapid diagnostics of false stops and thread breakage.</span>
                  </li>
                </ul>
              </section>

              {/* Education & Training */}
              <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 break-inside-avoid">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>Education & Training</span>
                </h2>
                
                <div className="space-y-3 text-[11px]">
                  <div>
                    <div className="font-bold text-slate-900">
                      Apprenticeship & Technical Training
                    </div>
                    <div className="text-amber-800 font-semibold text-[10px]">
                      Industrial Textile & Embroidery Mechanics
                    </div>
                    <div className="text-slate-600 text-[10px] mt-0.5">
                      Hands-on mechanical training, rotary timing, calibration, and electrical fault detection.
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <div className="font-bold text-slate-900">
                      High School / Middle
                    </div>
                    <div className="text-slate-700 text-[10px]">
                      Albadr Public School — Completed
                    </div>
                  </div>
                </div>
              </section>

              {/* Languages & Work Availability */}
              <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 break-inside-avoid">
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-700" />
                  <span>Languages & Placement</span>
                </h2>
                
                <div className="space-y-1.5 text-[11px] text-slate-700">
                  <div className="flex justify-between">
                    <span>Urdu:</span>
                    <strong className="text-slate-900">Fluent (Native)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Punjabi:</span>
                    <strong className="text-slate-900">Fluent (Native)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical English:</span>
                    <strong className="text-slate-900">Machine Interface / Error Codes</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-600">
                    <strong>Shift Availability:</strong> Day, Night, or Rotational Shifts across Lahore & Punjab.
                  </div>
                </div>
              </section>

              {/* Verified Factory Operation Proof (Mini thumbnail) */}
              <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 break-inside-avoid">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="w-3.5 h-3.5 text-amber-700" />
                  <span className="text-[11px] font-bold text-slate-900 uppercase">On-Site Machine Proof</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-300 bg-slate-950 aspect-video relative">
                  <img
                    src={FACTORY_ACTION_PHOTO}
                    alt="Rehan Ali Operating Multi-Head Machinery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 text-[9px] text-white font-mono">
                    Live Industrial Production Floor
                  </div>
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN: MAIN EXPERIENCE & RESPONSIBILITIES (8 of 12 columns) */}
            <div className="lg:col-span-8 print:col-span-8 space-y-6">
              
              {/* Executive Summary */}
              <section className="break-inside-avoid">
                <div className="flex items-center justify-between border-b-2 border-slate-800 pb-1 mb-2">
                  <h2 className="text-sm font-black uppercase tracking-wider text-slate-950">
                    Professional Summary
                  </h2>
                  <span className="text-[11px] font-mono text-amber-800 font-bold">10+ YEARS PROVEN TRACK RECORD</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm text-justify">
                  {heroContent.supportingText}
                </p>
                <div className="mt-2 text-xs text-slate-600 italic">
                  Extensive expertise collaborating with leading Pakistani fashion houses, commercial garment exporters, and industrial embroidery mills. Recognized for exceptional stitch consistency, proactive machine troubleshooting, and maintaining high output without quality compromise.
                </div>
              </section>

              {/* Professional Experience Section */}
              <section>
                <div className="flex items-center justify-between border-b-2 border-slate-800 pb-1 mb-4">
                  <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-amber-700" />
                    <span>Work Experience</span>
                  </h2>
                  <span className="text-xs font-bold text-slate-500 font-mono">2011 — PRESENT</span>
                </div>

                <div className="space-y-4">
                  {brandExperiences.map((brand) => (
                    <div
                      key={brand.id}
                      className="border-l-2 border-amber-600 pl-3.5 py-0.5 break-inside-avoid space-y-1"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-sm font-black text-slate-950 tracking-tight">
                            {brand.brandName}
                          </h3>
                          <span className="text-slate-400 text-xs">•</span>
                          <span className="text-xs font-semibold text-amber-800">
                            {brand.role}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {brand.category}
                        </span>
                      </div>

                      <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] sm:text-xs text-slate-700">
                        {brand.highlights.map((h, i) => (
                          <li key={i} className="leading-snug">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Floor Responsibilities & SOPs */}
              <section className="break-inside-avoid pt-2">
                <div className="border-b-2 border-slate-800 pb-1 mb-3">
                  <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-700" />
                    <span>Mechanical Skills</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {keyResponsibilities.slice(0, 6).map((resp) => (
                    <div key={resp.id} className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/80">
                      <div className="font-bold text-slate-900 text-xs mb-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span>{resp.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Target Positions Card */}
              <section className="rounded-xl border border-amber-600/30 bg-amber-50/50 p-3.5 break-inside-avoid">
                <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-800" />
                  <span>Target Employment Positions:</span>
                </div>
                <div className="text-[11px] text-slate-800 font-medium leading-relaxed">
                  Senior Embroidery Machine Operator • Industrial Embroidery Technician • Mechanical Master / Maintenance Specialist • Textile Production Supervisor • Garment Production Shift Head
                </div>
              </section>

            </div>

          </div>
        ) : (
          /* ============================================================ */
          /* CLASSIC FULL-WIDTH CHRONOLOGICAL DOCUMENT LAYOUT             */
          /* ============================================================ */
          <div className="space-y-6">
            
            {/* Executive Summary */}
            <section className="break-inside-avoid">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b-2 border-slate-800 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-justify text-xs sm:text-sm">
                {heroContent.supportingText}
              </p>
            </section>

            {/* Experience Timeline */}
            <section>
              <div className="flex items-center justify-between border-b-2 border-slate-800 pb-1 mb-4">
                <h2 className="text-sm font-black uppercase tracking-wider text-slate-950">
                  Work Experience
                </h2>
                <span className="text-xs font-bold text-amber-800 font-mono">2011 — PRESENT</span>
              </div>

              <div className="space-y-4">
                {brandExperiences.map((brand) => (
                  <div key={brand.id} className="border-l-2 border-slate-300 pl-3.5 py-0.5 break-inside-avoid">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black text-slate-950">{brand.brandName}</h3>
                        <span className="text-amber-800 font-semibold">• {brand.role}</span>
                      </div>
                      <span className="text-slate-500 font-normal text-[11px]">{brand.category}</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-slate-700">
                      {brand.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills & Machinery Grid */}
            <section className="break-inside-avoid">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b-2 border-slate-800 pb-1 mb-3">
                Technical Skills &amp; Machinery Operations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1.5">Machine Operations & Mechanics:</div>
                  <ul className="space-y-1 text-slate-700 text-[11px]">
                    <li>• Multi-head computerized embroidery machines (Barudan, Tajima, SWF, Feiya)</li>
                    <li>• Hook & needle timing calibration with 0.05mm precision clearance</li>
                    <li>• Diagnostic mechanical troubleshooting and part replacement</li>
                    <li>• Preventive maintenance, belt tensioning and rotary deburring</li>
                    <li>• Downtime reduction & zero-loop tension balancing</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1.5">Quality Assurance & Operations:</div>
                  <ul className="space-y-1 text-slate-700 text-[11px]">
                    <li>• Fabric selection, backing stabilizer hooping and puckering prevention</li>
                    <li>• Precision stitch quality inspection and defect elimination</li>
                    <li>• Digital embroidery pattern layout interpretation and coordinate zeroing</li>
                    <li>• Target achievement under tight deadlines for export & luxury lines</li>
                    <li>• Junior operator training, team discipline and machine safety protocols</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education & Training */}
            <section className="break-inside-avoid">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b-2 border-slate-800 pb-1 mb-2">
                Education & Technical Training
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">
                      Apprenticeship & Practical Technical Training
                    </span>
                    <div className="text-[11px] text-slate-600">
                      Industrial Textile & Computerized Embroidery Machine Mechanics
                    </div>
                  </div>
                  <span className="font-semibold text-slate-500 text-[11px]">Completed</span>
                </div>
                <div className="flex justify-between items-start pt-1">
                  <div>
                    <span className="font-bold text-slate-900">High School / Middle</span>
                    <div className="text-[11px] text-slate-600">Albadr Public School</div>
                  </div>
                  <span className="font-semibold text-slate-500 text-[11px]">Completed</span>
                </div>
              </div>
            </section>

            {/* Target Positions */}
            <section className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs break-inside-avoid">
              <div className="font-bold text-slate-900 mb-1">Target Positions of Interest:</div>
              <div className="text-[11px] text-slate-700">
                Senior Embroidery Machine Operator • Industrial Embroidery Technician • Textile Production Supervisor • Garment Production Specialist • Maintenance Master
              </div>
            </section>

          </div>
        )}

        {/* DOCUMENT FOOTER & VERIFICATION STAMP */}
        <footer className="mt-8 pt-4 border-t border-slate-300 flex flex-wrap justify-between items-center text-[10px] text-slate-500 font-mono gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">REHAN ALI</span>
            <span>— SENIOR EMBROIDERY MACHINE OPERATOR & MECHANICAL MASTER</span>
          </div>
          <div className="flex items-center gap-3">
            <span>OFFICIAL PROFILE: HTTPS://REHANALI.RANGINGFX.COM</span>
            <span>POWERED BY RANGINGFX.COM</span>
          </div>
        </footer>

      </article>

    </div>
  );
};
