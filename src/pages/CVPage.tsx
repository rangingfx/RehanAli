import React from 'react';
import { useSEO } from '../utils/useSEO';
import { PrintableCVView } from '../components/PrintableCVView';

export const CVPage: React.FC = () => {
  useSEO({
    title: 'Rehan Ali CV / Resume | Senior Embroidery Machine Operator',
    description:
      'Official CV and professional resume of Rehan Ali, Senior Embroidery Machine Operator & Mechanical Master. 10+ years textile industry experience, Yuemei, SWM, Humble, AA Champion, Great, and Pro Maker machinery expertise, brand history, and contact details.',
    canonicalUrl: 'https://rehanali.rangingfx.com/cv',
    ogTitle: 'Rehan Ali CV / Resume | Senior Embroidery Machine Operator',
    ogDescription:
      'Official resume and CV of Rehan Ali, Senior Embroidery Machine Operator & Mechanical Master. 10+ years industrial experience, computerized embroidery machinery expertise, brand collaborations, and verified contact info.',
    ogType: 'profile',
    breadcrumbs: [
      { name: 'Home', item: 'https://rehanali.rangingfx.com/' },
      { name: 'CV & Resume', item: 'https://rehanali.rangingfx.com/cv' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'DigitalDocument',
      name: 'Rehan Ali CV / Resume | Senior Embroidery Machine Operator',
      author: {
        '@type': 'Person',
        name: 'Rehan Ali',
        jobTitle: 'Senior Embroidery Machine Operator & Mechanical Master',
        url: 'https://rehanali.rangingfx.com/',
        image: 'https://rehanali.rangingfx.com/rehen.jpeg',
        telephone: ['+923223988933', '+923334130171'],
      },
      url: 'https://rehanali.rangingfx.com/cv',
      description:
        'Official CV and professional resume of Rehan Ali, Senior Embroidery Machine Operator & Mechanical Master with 10+ years industrial experience.',
    },
  });

  return <PrintableCVView />;
};
