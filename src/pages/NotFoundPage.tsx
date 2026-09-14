import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/useSEO';
import {
  Home,
  User,
  Briefcase,
  Cpu,
  FileText,
  Phone,
  MessageCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { contactInfo } from '../data/profileData';

export const NotFoundPage: React.FC = () => {
  useSEO({
    title: '404 - Page Not Found | Rehan Ali Portfolio',
    description:
      "The requested page could not be found. Return to Rehan Ali's portfolio, professional profile, work experience, embroidery machinery expertise, or printable CV.",
    canonicalUrl: 'https://rehanali.rangingfx.com/',
    noindex: true,
  });

  const availableRoutes = [
    { label: 'Home Page', path: '/', icon: Home, desc: 'Portfolio overview and highlights' },
    { label: 'Profile & About', path: '/profile', icon: User, desc: 'Personal background, strengths & education' },
    { label: 'Work Experience', path: '/work', icon: Briefcase, desc: 'Commercial brand track record & SOPs' },
    { label: 'Embroidery Machine', path: '/embroidery-machine', icon: Cpu, desc: 'Barudan/Tajima multi-head machinery & calibration' },
    { label: 'Printable CV', path: '/cv', icon: FileText, desc: 'Complete executive resume & PDF format' },
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Icon & Error Code */}
        <div className="space-y-3">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2 shadow-xl shadow-amber-500/5">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <div className="text-sm font-mono font-bold text-amber-400 uppercase tracking-widest">
            Error 404 • Page Not Found
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Looking for Rehan Ali's Work?
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            The link or URL you requested does not exist. Choose one of the verified direct routes below to navigate through the portfolio:
          </p>
        </div>

        {/* Available Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {availableRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.path}
                to={route.path}
                className="group flex items-start gap-3.5 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-850 transition-all shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500/10 transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{route.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{route.desc}</p>
                  <span className="text-[10px] font-mono text-amber-500/80 mt-1 block">
                    {route.path}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Primary Return Button & Contact */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <a
            href={contactInfo.phones[0].whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Contact via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
