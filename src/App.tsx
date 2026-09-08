import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CareerStats } from './components/CareerStats';
import { ProfessionalSummarySection } from './components/ProfessionalSummarySection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CoreSkillsSection } from './components/CoreSkillsSection';
import { KeyResponsibilitiesSection } from './components/KeyResponsibilitiesSection';
import { MachineryExpertiseSection } from './components/MachineryExpertiseSection';
import { EducationSection } from './components/EducationSection';
import { WhyHireSection } from './components/WhyHireSection';
import { JobOpportunitySection } from './components/JobOpportunitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCVView } from './components/PrintableCVView';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return window.location.hash.replace(/^#\/?/, '');
  });

  const [isCVView, setIsCVView] = useState<boolean>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    return hash === 'cv' || hash === 'resume';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const clean = window.location.hash.replace(/^#\/?/, '');
      setCurrentHash(clean);
      if (clean === 'cv' || clean === 'resume') {
        setIsCVView(true);
      } else {
        setIsCVView(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openCV = () => {
    window.location.hash = '/cv';
    setIsCVView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCV = () => {
    window.location.hash = '/';
    setIsCVView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isCVView) {
    return <PrintableCVView onBack={closeCV} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Header onOpenCV={openCV} currentSection={currentHash} />
      
      <main className="flex-1">
        <Hero onOpenCV={openCV} />
        <CareerStats />
        <ProfessionalSummarySection />
        <ExperienceTimeline />
        <CoreSkillsSection />
        <KeyResponsibilitiesSection />
        <MachineryExpertiseSection />
        <EducationSection />
        <WhyHireSection />
        <JobOpportunitySection />
        <ContactSection />
      </main>

      <Footer onOpenCV={openCV} />
      <MobileBottomBar onOpenCV={openCV} />
    </div>
  );
}
