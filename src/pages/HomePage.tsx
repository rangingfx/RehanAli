import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CareerStats } from '../components/CareerStats';
import { ContactSection } from '../components/ContactSection';
import { useSEO } from '../utils/useSEO';
import {
  User,
  Briefcase,
  Cpu,
  FileText,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { contactInfo, brandExperiences } from '../data/profileData';

export const HomePage: React.FC = () => {
  useSEO({
    title: 'Rehan Ali | Senior Embroidery Machine Operator & Mechanical Master',
    description:
      'Rehan Ali is a Senior Embroidery Machine Operator and Mechanical Master with 10+ years of textile and garment industry experience in computerized embroidery machine operation, mechanical maintenance, troubleshooting, and production quality control.',
    canonicalUrl: 'https://rehanali.rangingfx.com/',
    ogTitle: 'Rehan Ali | Senior Embroidery Machine Operator & Mechanical Master',
    ogDescription:
      'Senior Embroidery Machine Operator and Mechanical Master with 10+ years of textile and garment industry experience in computerized embroidery machine operation, maintenance, and troubleshooting.',
    ogType: 'website',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Rehan Ali Portfolio & CV',
        alternateName: [
          'Rehan Ali Embroidery Specialist',
          'Rehan Ali Mechanical Master',
          'Rehan Ali Senior Embroidery Machine Operator',
        ],
        url: 'https://rehanali.rangingfx.com/',
        description:
          'Senior Embroidery Machine Operator and Mechanical Master portfolio and CV showcasing 10+ years of textile industry experience.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rehan Ali',
        jobTitle: 'Senior Embroidery Machine Operator & Mechanical Master',
        url: 'https://rehanali.rangingfx.com/',
        image: 'https://rehanali.rangingfx.com/rehen.jpeg',
        telephone: ['+923223988933', '+923334130171'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        description:
          'Senior Embroidery Machine Operator & Mechanical Master with 10+ years hands-on experience in computerized embroidery machinery, mechanical maintenance, troubleshooting, and production quality control.',
        knowsAbout: [
          'Computerized Embroidery Machinery',
          'Yuemei Embroidery Machines',
          'SWM Industrial Embroidery Machinery',
          'Humble Commercial Embroidery',
          'AA Champion Industrial Embroidery',
          'Great Multi-Head Production Machines',
          'Pro Maker Industrial Embroidery Systems',
          'Hook and Needle Timing Calibration (0.05mm)',
          'Thread Tension Balancing & Zero Loop Tuning',
          'Mechanical Troubleshooting & Maintenance',
          'Garment & Textile Quality Control',
          'Industrial Multi-Head Embroidery Production',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Senior Embroidery Machine Operator & Mechanical Master',
          occupationLocation: {
            '@type': 'Country',
            name: 'Pakistan',
          },
          skills:
            'Multi-head embroidery machine operation, mechanical maintenance, rotary hook calibration, timing adjustment, textile quality inspection',
        },
      },
    ],
  });

  return (
    <div className="space-y-0">
      {/* 1. Hero Section with Direct Route CTAs */}
      <Hero />

      {/* 2. Key Performance Metrics */}
      <CareerStats />

      {/* 3. Executive Highlights & Guided Clean Route Portals */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Portfolio Sections</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Industrial Mastery & Professional Experience
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore Rehan Ali's verified profile, brand track record, machinery technical specifications, and official curriculum vitae.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Profile */}
            <Link
              to="/profile"
              className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-500/60 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <User className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Professional Profile</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Personal background, core strengths, textile craftsmanship, education, and reasons to hire.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800/80 text-xs font-semibold text-amber-400 flex items-center gap-1">
                <span>View Full Profile</span>
                <span>→</span>
              </div>
            </Link>

            {/* Card 2: Work */}
            <Link
              to="/work"
              className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-500/60 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Work Experience</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Collaborations with Maria.B, Outfitters, Bareeze, Bilal Textile, plus standard operating procedures.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800/80 text-xs font-semibold text-amber-400 flex items-center gap-1">
                <span>View Brand History</span>
                <span>→</span>
              </div>
            </Link>

            {/* Card 3: Embroidery Machine */}
            <Link
              to="/embroidery-machine"
              className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-500/60 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Embroidery Machine</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Yuemei, SWM, Humble, AA Champion, Great &amp; Pro Maker multi-head machinery, needle-hook timing &amp; live photos.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-800/80 text-xs font-semibold text-amber-400 flex items-center gap-1">
                <span>View Machine Specs</span>
                <span>→</span>
              </div>
            </Link>

            {/* Card 4: CV / Resume */}
            <Link
              to="/cv"
              className="group relative rounded-2xl bg-amber-950/30 border border-amber-500/40 p-6 hover:border-amber-400 hover:bg-amber-950/40 transition-all duration-200 flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Print-Ready A4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                    <span>Printable CV / Resume</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Official curriculum vitae formatted for print, PDF download, and HR verification.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5 border-t border-amber-500/30 text-xs font-bold text-amber-300 flex items-center gap-1">
                <span>Open Full CV</span>
                <span>→</span>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* 4. Brand Collaborations Teaser */}
      <section className="py-14 sm:py-18 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                Proven Industry Experience
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Trusted by Top Fashion & Garment Brands
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Explore All Brand Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandExperiences.slice(0, 4).map((brand) => (
              <div
                key={brand.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span className="text-base font-black text-amber-400">{brand.brandName}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">{brand.category}</span>
                </div>
                <div className="text-xs text-slate-300 font-semibold mb-2">{brand.role}</div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {brand.highlights[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <ContactSection />
    </div>
  );
};
