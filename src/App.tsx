import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { MainLayout } from './components/MainLayout';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { WorkPage } from './pages/WorkPage';
import { EmbroideryMachinePage } from './pages/EmbroideryMachinePage';
import { CVPage } from './pages/CVPage';
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * Automatically redirects legacy hash-based links (e.g. /#/cv, /#cv, /#experience)
 * to the new clean URL structure for backwards compatibility.
 */
function LegacyHashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const hash = window.location.hash.toLowerCase();
      if (!hash) return;

      if (hash === '#/cv' || hash === '#cv' || hash === '#resume') {
        navigate('/cv', { replace: true });
      } else if (hash === '#/profile' || hash === '#profile') {
        navigate('/profile', { replace: true });
      } else if (hash === '#/work' || hash === '#work' || hash === '#experience') {
        navigate('/work', { replace: true });
      } else if (hash === '#/embroidery-machine' || hash === '#machinery') {
        navigate('/embroidery-machine', { replace: true });
      } else if (hash === '#/' || hash === '#/home' || hash === '#home') {
        navigate('/', { replace: true });
      }
    } catch {
      // Safe fallback
    }
  }, [navigate, location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <LegacyHashRedirect />
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/embroidery-machine" element={<EmbroideryMachinePage />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
