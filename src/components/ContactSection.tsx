import React, { useState } from 'react';
import { contactInfo } from '../data/profileData';
import {
  Phone,
  PhoneCall,
  MessageCircle,
  Mail,
  Download,
  Copy,
  Check,
  Send,
  Building,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export const ContactSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Quick message builder state
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('Senior Embroidery Machine Operator');
  const [factoryLocation, setFactoryLocation] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  const copyToClipboard = (text: string, idx: number) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {
          // Ignore permission denial
        });
      }
    } catch {
      // Ignore
    }
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `Hello Rehan Ali,\n\nI am contacting you from ${companyName || 'our textile company'}${
      factoryLocation ? ` located in ${factoryLocation}` : ''
    } regarding a job opportunity for: ${jobRole}.\n\n${
      inquiryNotes ? `Details: ${inquiryNotes}\n\n` : ''
    }Please let us know your availability for an interview.`;

    const encoded = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/923223988933?text=${encoded}`;
    try {
      const opened = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!opened) {
        window.location.href = waUrl;
      }
    } catch {
      window.location.href = waUrl;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            Looking for an experienced embroidery machine operator and mechanical specialist? Contact Rehan Ali to discuss employment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone & WhatsApp Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Contact Lines
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Click below to call immediately or start a WhatsApp chat.
                </p>
              </div>

              {/* Phone Line 1 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                      Primary Line
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phones[0].raw, 0)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedIndex === 0 ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedIndex === 0 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-2xl font-black font-mono text-white tracking-tight">
                  {contactInfo.phones[0].display}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={contactInfo.phones[0].tel}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>CALL NOW</span>
                  </a>
                  <a
                    href={contactInfo.phones[0].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Phone Line 2 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                      Secondary Line
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phones[1].raw, 1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedIndex === 1 ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedIndex === 1 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-2xl font-black font-mono text-white tracking-tight">
                  {contactInfo.phones[1].display}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={contactInfo.phones[1].tel}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>CALL NOW</span>
                  </a>
                  <a
                    href={contactInfo.phones[1].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Save VCard Button */}
              <button
                onClick={downloadVCard}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Save Rehan Ali's Contact Card to Phone (.vcf)</span>
              </button>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  Lahore / Punjab, Pakistan
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  Immediate Joining
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Job Inquiry Composer */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-800">
                <Send className="w-4 h-4 text-amber-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  SEND MESSAGE / INQUIRY
                </h3>
              </div>

              <p className="text-xs text-slate-400 mb-5">
                Fill in your company details to send a structured employment inquiry directly to Rehan Ali via WhatsApp.
              </p>

              <form onSubmit={handleSendQuickMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Textile Mill / Factory Name:
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Crescent Bahuman, Nishat, Bareeze Studio..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Position Offered:
                    </label>
                    <select
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option>Senior Embroidery Machine Operator</option>
                      <option>Embroidery Machine Operator</option>
                      <option>Embroidery Machine Technician</option>
                      <option>Embroidery Mechanical Technician</option>
                      <option>Textile Production Specialist</option>
                      <option>Garment Embroidery Master</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Factory Location / City:
                    </label>
                    <input
                      type="text"
                      value={factoryLocation}
                      onChange={(e) => setFactoryLocation(e.target.value)}
                      placeholder="e.g. Lahore, Faisalabad, Karachi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Notes / Production Details (Optional):
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryNotes}
                    onChange={(e) => setInquiryNotes(e.target.value)}
                    placeholder="Briefly describe shift requirements, machine setup, or interview scheduling..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>SEND MESSAGE ON WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
