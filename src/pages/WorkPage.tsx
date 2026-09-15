import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/useSEO';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { KeyResponsibilitiesSection } from '../components/KeyResponsibilitiesSection';
import { JobOpportunitySection } from '../components/JobOpportunitySection';
import { ContactSection } from '../components/ContactSection';
import {
  Briefcase,
  Home,
  ChevronRight,
  FileText,
  Cpu,
  CheckCircle2,
  Calendar,
  Award,
} from 'lucide-react';

export const WorkPage: React.FC = () => {
  useSEO({
    title: 'Embroidery Work Experience & Brand Portfolio | Rehan Ali',
    description:
      "Explore Rehan Ali's embroidery work experience across top Pakistani fashion brands including Maria.B, Bareeze, Kayseria, Asim Jofa, Sana Safinaz, Nishat Linen, and Cross Stitch.",
    canonicalUrl: 'https://rehanali.rangingfx.com/work',
    ogTitle: 'Embroidery Work Experience & Brand Portfolio | Rehan Ali',
    ogDescription:
      '10+ years of proven commercial textile production across premier Pakistani fashion export houses and industrial embroidery mills.',
    ogType: 'profile',
    breadcrumbs: [
      { name: 'Home', item: 'https://rehanali.rangingfx.com/' },
      { name: 'Work Experience', item: 'https://rehanali.rangingfx.com/work' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Embroidery Work Experience & Brand Portfolio | Rehan Ali',
      description:
        "Explore Rehan Ali's embroidery work experience across top Pakistani fashion brands including Maria.B, Bareeze, Kayseria, Asim Jofa, Sana Safinaz, Nishat Linen, and Cross Stitch.",
      url: 'https://rehanali.rangingfx.com/work',
      mainEntity: {
        '@type': 'Person',
        name: 'Rehan Ali',
        jobTitle: 'Senior Embroidery Machine Operator & Mechanical Master',
        url: 'https://rehanali.rangingfx.com/work',
        image: 'https://rehanali.rangingfx.com/rehen.jpeg',
      },
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
                <span className="text-amber-400 font-semibold" aria-current="page">Work Experience</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>2011 — Present • 10+ Years Continuous</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Embroidery Work Experience &amp; Brand Collaborations
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Extensive track record delivering high-density luxury embroidery and large-scale commercial runs for renowned Pakistani apparel brands.
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
                to="/embroidery-machine"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Machinery Specs</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 1. Full Experience Timeline with Brands */}
      <ExperienceTimeline />

      {/* 2. Key Responsibilities & Factory Floor SOPs */}
      <KeyResponsibilitiesSection />

      {/* 3. Job Opportunities & Placement Target Roles */}
      <JobOpportunitySection />

      {/* Quick Navigation Footer Banner */}
      <section className="py-10 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Need detailed technical machinery specifications or full CV?</div>
            <div className="text-xs text-slate-400">View Barudan/Tajima machine calibration details or download the printable CV.</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/embroidery-machine"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-200 text-xs font-semibold transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>Embroidery Machine →</span>
            </Link>
            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable CV →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <ContactSection />
    </div>
  );
};
