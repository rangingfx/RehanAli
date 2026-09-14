import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface RouteBreadcrumb {
  label: string;
  fullTitle: string;
}

const ROUTE_MAP: Record<string, RouteBreadcrumb> = {
  '/profile': {
    label: 'Profile',
    fullTitle: 'Professional Profile',
  },
  '/cv': {
    label: 'CV & Resume',
    fullTitle: 'Complete CV / Resume',
  },
  '/work': {
    label: 'Work Experience',
    fullTitle: 'Work & Industrial Experience',
  },
  '/embroidery-machine': {
    label: 'Embroidery Machine',
    fullTitle: 'Embroidery Machine Expertise',
  },
  '/contact': {
    label: 'Contact',
    fullTitle: 'Contact Rehan Ali',
  },
};

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Do not render breadcrumbs on homepage
  if (rawPath === '/' || rawPath === '/home') {
    return null;
  }

  const currentRoute = ROUTE_MAP[rawPath] || {
    label: 'Page Not Found',
    fullTitle: '404 - Page Not Found',
  };

  const canonicalUrl = `https://rehanali.rangingfx.com${rawPath}`;

  return (
    <nav
      id="site-breadcrumb"
      aria-label="Breadcrumb"
      className="no-print bg-slate-900/60 border-b border-slate-800/80 text-xs text-slate-400 backdrop-blur-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-1.5"
        >
          {/* Item 1: Home */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="inline-flex items-center"
          >
            <Link
              to="/"
              itemProp="item"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors font-medium py-0.5"
            >
              <Home className="w-3.5 h-3.5 text-amber-500/80 shrink-0" aria-hidden="true" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Separator */}
          <li aria-hidden="true" className="inline-flex items-center text-slate-600">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>

          {/* Item 2: Current Page */}
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="inline-flex items-center"
          >
            <span
              itemProp="name"
              className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none"
              aria-current="page"
              title={currentRoute.fullTitle}
            >
              {currentRoute.label}
            </span>
            <meta itemProp="position" content="2" />
            <meta itemProp="item" content={canonicalUrl} />
          </li>
        </ol>

        {/* Quick subtitle or role context on wider screens */}
        <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-500">
          <span>Rehan Ali</span>
          <span className="text-slate-700">•</span>
          <span className="text-slate-400 font-medium">{currentRoute.fullTitle}</span>
        </div>
      </div>
    </nav>
  );
};
