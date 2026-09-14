import React, { useState, useEffect } from 'react';
import {
  Printer,
  Download,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Briefcase,
  CheckCircle,
  Award,
  BookOpen,
  Wrench,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import {
  contactInfo,
  heroContent,
  professionalSummary,
  brandExperiences,
  skillCategories,
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
} from '../utils/photoState';

interface PrintableCVViewProps {
  onBack: () => void;
}

export const PrintableCVView: React.FC<PrintableCVViewProps> = ({ onBack }) => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(getSavedProfilePhoto);

  useEffect(() => {
    const unsub = subscribeProfilePhoto((photo) => {
      setProfilePhoto(photo);
    });
    return unsub;
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-10 px-4 sm:px-6">
      
      {/* Top Action Toolbar (Hidden during actual print) */}
      <div className="max-w-4xl mx-auto mb-6 no-print">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT CV / SAVE AS PDF</span>
            </button>

            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Contact (.vcf)</span>
            </button>

            <a
              href={contactInfo.phones[0].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-2">
          Tip: Select <strong>"Save as PDF"</strong> in your browser's print dialog to export a clean digital document.
        </p>
      </div>

      {/* Printable Sheet Container (Styled for A4 / Print preview) */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl rounded-xl p-8 sm:p-12 print-page font-sans text-xs sm:text-sm leading-normal border border-slate-200">
        
        {/* CV Header */}
        <div className="border-b-2 border-slate-900 pb-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              {/* Profile Photo on CV (If user has uploaded their real photo) */}
              {profilePhoto && (
                <div className="shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-100 shadow-sm">
                    <img
                      src={profilePhoto}
                      alt="Rehan Ali"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
                  {contactInfo.name}
                </h1>
                <div className="text-sm sm:text-base font-bold text-amber-800 mt-0.5">
                  {contactInfo.title}
                </div>
                <div className="inline-block mt-1.5 px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-wider border border-emerald-300">
                  ● {contactInfo.statusBadge}
                </div>
              </div>
            </div>

            {/* Header Contact Box */}
            <div className="text-left sm:text-right space-y-1 text-slate-700 text-xs sm:text-xs">
              <div className="flex sm:justify-end items-center gap-1.5 font-bold text-slate-900">
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <a href={contactInfo.phones[0].tel} className="hover:underline font-mono">
                  {contactInfo.phones[0].display}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 font-bold text-slate-900">
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <a href={contactInfo.phones[1].tel} className="hover:underline font-mono">
                  {contactInfo.phones[1].display}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Lahore / Punjab, Pakistan</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 text-slate-600">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>rehanali.rangingfx.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Executive Summary
          </h2>
          <p className="text-slate-700 leading-relaxed text-justify">
            {heroContent.supportingText}
          </p>
        </div>

        {/* Career Highlights Row */}
        <div className="mb-6 bg-slate-50 border border-slate-200 rounded-lg p-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div>
            <div className="text-lg font-black text-slate-900">10+ Years</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Experience</div>
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">2011</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Career Started</div>
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">Multi-Head</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Computerized Systems</div>
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">Mechanical</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Master Specialist</div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-6">
          <div className="flex items-center justify-between border-b border-slate-300 pb-1 mb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
              Professional Experience
            </h2>
            <span className="text-xs font-bold text-amber-800">
              Senior Embroidery Machine Operator & Technical Specialist (2011 – Present)
            </span>
          </div>
          <p className="text-xs text-slate-600 mb-4 italic">
            Extensive long-term career collaborating with premier fashion, apparel, and textile manufacturing houses:
          </p>

          <div className="space-y-4">
            {brandExperiences.map((brand) => (
              <div key={brand.id} className="border-l-2 border-slate-300 pl-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="text-sm font-black text-slate-900">{brand.brandName}</span>
                  <span className="text-slate-500 font-normal">{brand.category}</span>
                </div>
                <div className="text-[11px] font-semibold text-amber-900 mb-1">
                  {brand.role}
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-700">
                  {brand.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills & Technical Expertise */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
            Technical Competencies & Machinery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-bold text-slate-900 mb-1.5">Machine Operations & Mechanics:</div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• Multi-head embroidery machines & computerized systems</li>
                <li>• Machine troubleshooting, calibration & alignment</li>
                <li>• Preventive maintenance, mechanical repair & part replacement</li>
                <li>• Needle point selection, check-spring and hoop adjustment</li>
                <li>• Downtime reduction & fault diagnosis</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-1.5">Quality Assurance & Management:</div>
              <ul className="space-y-1 text-slate-700 text-[11px]">
                <li>• Fabric selection, stabilizer backing application & thread tension</li>
                <li>• Precision stitch quality inspection & defect detection</li>
                <li>• Digital embroidery patterns & design layout interpretation</li>
                <li>• Production target achievement & workflow discipline</li>
                <li>• Junior operator training & team safety support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Training */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
            Education & Technical Training
          </h2>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-slate-900">
                  Specialized Mechanical & Technical Training / Apprenticeship
                </span>
                <div className="text-[11px] text-slate-600">
                  Specialized hands-on training and practical experience in industrial textile and embroidery machine mechanics.
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
        </div>

        {/* Target Roles & Value */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs">
          <div className="font-bold text-slate-900 mb-1">Target Positions of Interest:</div>
          <div className="text-[11px] text-slate-700">
            Senior Embroidery Machine Operator • Embroidery Machine Technician • Textile Production Supervisor • Industrial Embroidery Specialist • Garment Production Master
          </div>
        </div>

        {/* CV Footer */}
        <div className="mt-8 pt-4 border-t border-slate-300 flex flex-wrap justify-between items-center text-[10px] text-slate-500 font-mono">
          <span>REHAN ALI — CURRICULUM VITAE</span>
          <span>POWERED BY RANGINGFX.COM</span>
          <span>HTTPS://REHANALI.RANGINGFX.COM</span>
        </div>

      </div>
    </div>
  );
};
