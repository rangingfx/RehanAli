import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      try {
        // Strip leading #
        const rawId = hash.replace(/^#/, '');
        // Only attempt element lookup if it does not look like a hash route (e.g. /cv)
        if (rawId && !rawId.startsWith('/')) {
          const element = document.getElementById(rawId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
      } catch {
        // Gracefully ignore any invalid selector
      }
    }

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      // Gracefully ignore
    }
  }, [pathname, hash]);

  return null;
}
