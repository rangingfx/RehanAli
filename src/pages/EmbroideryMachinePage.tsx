import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/useSEO';
import { MachineryExpertiseSection } from '../components/MachineryExpertiseSection';
import { EmbroideryMachineryVisual } from '../components/EmbroideryMachineryVisual';
import { ContactSection } from '../components/ContactSection';
import {
  Cpu,
  Home,
  ChevronRight,
  FileText,
  Briefcase,
  Wrench,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Sparkles,
} from 'lucide-react';
import { FACTORY_ACTION_PHOTO } from '../utils/photoState';

export const EmbroideryMachinePage: React.FC = () => {
  useSEO({
    title: 'Embroidery Machine Operation & Mechanical Expertise | Rehan Ali',
    description:
      'Technical expertise in industrial computerized embroidery machines: Barudan, Tajima, multi-head systems, mechanical maintenance, rotary hook timing, and error troubleshooting.',
    canonicalUrl: 'https://rehanali.rangingfx.com/embroidery-machine',
    ogTitle: 'Embroidery Machine Operation & Mechanical Expertise | Rehan Ali',
    ogDescription:
      'Technical expertise in industrial computerized embroidery machines: Barudan, Tajima, multi-head systems, mechanical maintenance, rotary hook timing, and error troubleshooting.',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://rehanali.rangingfx.com/' },
      { name: 'Embroidery Machine Operation', item: 'https://rehanali.rangingfx.com/embroidery-machine' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Industrial Embroidery Machine Operation & Mechanical Maintenance',
      description:
        'Technical expertise in industrial computerized embroidery machines: Barudan, Tajima, multi-head systems, mechanical maintenance, rotary hook timing, and error troubleshooting.',
      url: 'https://rehanali.rangingfx.com/embroidery-machine',
      author: {
        '@type': 'Person',
        name: 'Rehan Ali',
        jobTitle: 'Senior Embroidery Machine Operator & Mechanical Master',
        url: 'https://rehanali.rangingfx.com/embroidery-machine',
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
                <span className="text-amber-400 font-semibold" aria-current="page">Embroidery Machine</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Multi-Head Computerized Operations</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Industrial Embroidery Machine Operation &amp; Mechanical Maintenance
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Expert operation and maintenance of Barudan, Tajima, SWF, Feiya, and Brother computerized embroidery machines. Specializing in mechanical timing, rotary hook calibration, zero-loop tension balancing, and uptime optimization.
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
                <span>Work Experience</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 1. Interactive Technical Visual & Real On-Site Factory Proof */}
      <section className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Engineering & Live Floor Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Multi-Head Machine Schematics & Calibration Mechanics
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Explore the animated multi-head synchronization, hook-to-needle 0.05mm timing alignment, thread tension architecture, and live photographic verification from the industrial production floor.
            </p>
          </div>

          <EmbroideryMachineryVisual />
        </div>
      </section>

      {/* 2. Comprehensive Machinery Breakdown Section */}
      <MachineryExpertiseSection />

      {/* 3. Core Mechanical Calibration Standards Table */}
      <section className="py-14 sm:py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <Wrench className="w-6 h-6 text-amber-400" />
              <span>Standard Operating Procedures for Machine Tuning</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Rigorous mechanical standards enforced daily by Rehan Ali to ensure uninterrupted shifts and zero thread breaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rotary Hook Alignment</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calibration of rotary hook tip to needle scarf at precisely 198°–202° shaft angle with 0.05mm clearance. Eliminates skipped stitches, split filament, and needle collisions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Break Tension Setup</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-tension sub-discs, main disc springs, and take-up lever check springs calibrated for rayon, polyester, metallic lurex, and multi-ply cord yarns.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fabric & Stabilizer Selection</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom hooping tension and stabilizer matching (tearaway, cutaway, water-soluble Solvy) across delicate chiffon, organza, lawn, heavy denim, and stretch knitwear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Footer Banner */}
      <section className="py-10 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Review Rehan Ali's Complete Credentials</div>
            <div className="text-xs text-slate-400">Access work history across top fashion brands or view printable CV.</div>
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
