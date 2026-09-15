import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Download,
  Printer,
  FileText,
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { downloadCVPdfFile, triggerPrintToPDF } from '../utils/cvDownload';

export const DownloadCVModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-download-cv-modal', handleOpen);
    return () => window.removeEventListener('open-download-cv-modal', handleOpen);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDirectDownload = () => {
    setDownloadTriggered(true);
    downloadCVPdfFile();
    setTimeout(() => {
      setDownloadTriggered(false);
    }, 2500);
  };

  const handlePrintAction = () => {
    setIsOpen(false);
    triggerPrintToPDF(navigate);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 no-print"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-cv-title"
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 text-slate-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-5 pr-8">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="download-cv-title" className="text-lg font-bold text-white tracking-tight">
                Download Rehan Ali's CV
              </h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Senior Embroidery Machine Operator &amp; Mechanical Master (10+ Yrs Exp)
            </p>
          </div>
        </div>

        {/* Action Choices */}
        <div className="space-y-3.5">
          {/* Choice 1: Browser Print-to-PDF (Formatted Web Resume) */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all group">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Print to PDF (Formatted A4 Layout)</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-medium">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Opens your browser's print dialog to save as A4 PDF with full styling and photos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-lg p-2.5 my-2 border border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Select <strong>Destination: Save as PDF</strong> and check <strong>Background graphics</strong>.
              </span>
            </div>

            <button
              onClick={handlePrintAction}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-[0.99] cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Open Print-to-PDF Dialog</span>
            </button>
          </div>

          {/* Choice 2: Direct PDF File Download */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <Download className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Direct PDF File Download</span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded font-mono">
                      .PDF (~5 KB)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Download the pre-compiled standalone PDF document directly to your device.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDirectDownload}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 hover:border-slate-600 transition-all active:scale-[0.99] cursor-pointer"
            >
              {downloadTriggered ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Download Started!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Standalone PDF File</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Footer Links */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/cv');
            }}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View Full Interactive CV Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] text-slate-500">Lahore, Pakistan</span>
        </div>
      </div>
    </div>
  );
};
