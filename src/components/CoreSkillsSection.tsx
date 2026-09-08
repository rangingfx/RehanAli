import React from 'react';
import { skillCategories } from '../data/profileData';
import {
  Cpu,
  Wrench,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';

export const CoreSkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Core Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Comprehensive operational mastery combining computerized machinery control, mechanical fault diagnosis, and meticulous quality standards.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 transition-transform shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED PROFICIENCY</span>
                <span className="text-amber-400 font-bold">10+ YRS MASTERED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
