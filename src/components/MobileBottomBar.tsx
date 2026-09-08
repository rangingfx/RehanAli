import React, { useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { contactInfo } from '../data/profileData';

interface MobileBottomBarProps {
  onOpenCV: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenCV }) => {
  const [showCallSheet, setShowCallSheet] = useState(false);

  return (
    <>
      {/* Action Sheet Modal for Picking Line */}
      {showCallSheet && (
        <div className="sm:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end no-print">
          <div className="w-full bg-slate-900 border-t border-slate-700 rounded-t-2xl p-5 space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Call Rehan Ali
              </span>
              <button
                onClick={() => setShowCallSheet(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {contactInfo.phones.map((phone, idx) => (
                <a
                  key={phone.raw}
                  href={phone.tel}
                  onClick={() => setShowCallSheet(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-100 font-mono text-sm font-semibold transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white text-base">{phone.display}</div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        {idx === 0 ? 'Primary Line' : 'Secondary Line'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-sans font-bold">
                    CALL NOW →
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setShowCallSheet(false)}
              className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sticky Bottom Navigation Bar */}
      <div
        id="mobile-bottom-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 no-print shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* CALL */}
          <button
            onClick={() => setShowCallSheet(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-200 active:bg-slate-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[11px] font-bold tracking-wider uppercase">CALL</span>
          </button>

          {/* WHATSAPP */}
          <a
            href={contactInfo.phones[0].whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
            <span className="text-[11px] font-bold tracking-wider uppercase">WHATSAPP</span>
          </a>

          {/* CV */}
          <button
            onClick={onOpenCV}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-200 active:bg-slate-800 transition-colors"
          >
            <FileText className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[11px] font-bold tracking-wider uppercase">CV</span>
          </button>
        </div>
      </div>
    </>
  );
};
