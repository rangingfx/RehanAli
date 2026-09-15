import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/useSEO';
import { CareerStats } from '../components/CareerStats';
import { ProfessionalSummarySection } from '../components/ProfessionalSummarySection';
import { CoreSkillsSection } from '../components/CoreSkillsSection';
import { EducationSection } from '../components/EducationSection';
import { WhyHireSection } from '../components/WhyHireSection';
import { ContactSection } from '../components/ContactSection';
import {
  User,
  ArrowRight,
  Briefcase,
  Cpu,
  FileText,
  ChevronRight,
  Home,
  ShieldCheck,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  useSEO({
    title: 'Rehan Ali Profile | Senior Embroidery Machine Operator & Mechanical Master',
    description:
      "Explore Rehan Ali's professional profile: 10+ years of textile industry experience, embroidery machine operation, mechanical troubleshooting, core technical skills, and production strengths in Pakistan.",
    canonicalUrl: 'https://rehanali.rangingfx.com/profile',
    ogTitle: 'Rehan Ali Profile | Senior Embroidery Machine Operator & Mechanical Master',
    ogDescription:
      '10+ years of textile craftsmanship, mechanical troubleshooting, needle-to-hook calibration, and production leadership in computerized embroidery.',
    ogType: 'profile',
    breadcrumbs: [
      { name: 'Home', item: 'https://rehanali.rangingfx.com/' },
      { name: 'Professional Profile', item: 'https://rehanali.rangingfx.com/profile' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Rehan Ali',
        jobTitle: 'Senior Embroidery Machine Operator & Mechanical Master',
        url: 'https://rehanali.rangingfx.com/profile',
        image: 'https://rehanali.rangingfx.com/rehen.jpeg',
        telephone: ['+923223988933', '+923334130171'],
      },
      name: 'Rehan Ali Profile | Senior Embroidery Machine Operator & Mechanical Master',
      url: 'https://rehanali.rangingfx.com/profile',
    },
  });

  return (
    <div className="space-y-0">
      {/* Breadcrumb & Section Header Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Accessible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-medium">
            <ol className="flex items-center gap-2">
              <li className="flex items-center gap-2">
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
              </li>
              <li>
                <span className="text-amber-400 font-semibold" aria-current="page">Profile</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Senior Machine Operator &amp; Technician</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Rehan Ali – Professional Profile &amp; Technical Expertise
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Comprehensive overview of Rehan Ali's 10+ years of craftsmanship in computerized embroidery machinery, mechanical troubleshooting, maintenance, and textile production excellence.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Work History</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Key Career Metrics */}
      <CareerStats />

      {/* 1. Professional Summary (Detailed narrative) */}
      <ProfessionalSummarySection />

      {/* 2. Core Skills & Technical Capabilities */}
      <CoreSkillsSection />

      {/* 3. Education & Apprenticeship Training */}
      <EducationSection />

      {/* 4. Why Hire Rehan Ali */}
      <WhyHireSection />

      {/* Quick Navigation Footer Banner */}
      <section className="py-10 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Looking for brand-specific experience or machine details?</div>
            <div className="text-xs text-slate-400">Explore full work history or computerized embroidery machine specs.</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-200 text-xs font-semibold transition-all"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Work Experience →</span>
            </Link>
            <Link
              to="/embroidery-machine"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-200 text-xs font-semibold transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>Embroidery Machine →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <ContactSection />
    </div>
  );
};
