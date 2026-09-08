import {
  ContactInfo,
  BrandExperience,
  SkillCategory,
  KeyResponsibility,
  TechnicalExpertiseItem,
  CareerHighlight,
  EducationItem,
} from '../types';

export const contactInfo: ContactInfo = {
  name: 'REHAN ALI',
  title: 'Senior Embroidery Machine Operator & Mechanical Master',
  statusBadge: 'OPEN TO JOB OPPORTUNITIES',
  phones: [
    {
      display: '0322 39 88 933',
      raw: '03223988933',
      tel: 'tel:+923223988933',
      whatsappUrl: 'https://wa.me/923223988933?text=Hello%20Rehan%20Ali,%20I%20reviewed%20your%20embroidery%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity.',
    },
    {
      display: '0333 41 30 171',
      raw: '03334130171',
      tel: 'tel:+923334130171',
      whatsappUrl: 'https://wa.me/923334130171?text=Hello%20Rehan%20Ali,%20I%20saw%20your%20profile%20and%20would%20like%20to%20discuss%20an%20embroidery%20operator%20position.',
    },
  ],
  location: 'Lahore, Pakistan',
  website: 'https://rehanali.rangingfx.com/',
  poweredBy: {
    label: 'RanginGFX.com',
    url: 'https://rangingfx.com/',
  },
};

export const heroContent = {
  headline: 'REHAN ALI',
  titleLine1: 'Senior Embroidery Machine Operator',
  titleLine2: '& Mechanical Master',
  supportingText:
    'Highly skilled and dedicated embroidery machine operator and mechanical specialist with 10+ years of hands-on experience in textile and apparel production, specializing in computerized embroidery machinery, machine troubleshooting, maintenance, production quality, and precision embroidery.',
  status: 'OPEN TO JOB OPPORTUNITIES',
};

export const professionalSummary = {
  heading: 'Professional Summary',
  paragraphs: [
    'Highly skilled and dedicated Embroidery Machine Operator and Mechanical Master with over a decade of hands-on experience dating back to 2011 in the textile and apparel industry.',
    'Proven expertise in operating, troubleshooting, maintaining, calibrating, and optimizing complex multi-head embroidery machinery.',
    'Extensive experience collaborating with premier fashion and garment brands and textile businesses, including Maria.B, Outfitters, Bareeze, Bilal Textile, SWM, Yumie, Shaner, and AkashCollection.pk.',
    'Known for technical proficiency, mechanical problem-solving, precision embroidery, quality control, and optimizing production workflows.',
  ],
};

export const careerHighlights: CareerHighlight[] = [
  {
    id: 'exp',
    value: '10+',
    label: 'Years Experience',
    subtext: 'Continuous hands-on work in commercial textile manufacturing',
  },
  {
    id: 'start',
    value: '2011',
    label: 'Career Started',
    subtext: 'Over a decade dedicated to industrial embroidery machinery',
  },
  {
    id: 'multihead',
    value: 'Multi-Head',
    label: 'Embroidery Expertise',
    subtext: 'Computerized industrial systems & precision multi-color stitching',
  },
  {
    id: 'industrial',
    value: 'Industrial',
    label: 'Production Experience',
    subtext: 'Mass volume, tight deadlines & high-spec luxury apparel lines',
  },
  {
    id: 'mechanical',
    value: 'Technical',
    label: 'Mechanical Expertise',
    subtext: 'Diagnostic troubleshooting, preventive maintenance & part replacement',
  },
];

export const brandExperiences: BrandExperience[] = [
  {
    id: 'mariab',
    brandName: 'MARIA.B',
    role: 'Senior Embroidery Operator',
    category: 'Luxury Fashion & Formal Wear',
    highlights: [
      'Operated high-speed computerized embroidery machines.',
      'Produced intricate embroidery for luxury lawn and formal wear collections.',
      'Executed complex multi-color embroidery patterns.',
      'Maintained precise fabric placement.',
      'Ensured consistent stitch quality and production standards.',
    ],
  },
  {
    id: 'outfitters',
    brandName: 'OUTFITTERS',
    role: 'Embroidery Production Specialist',
    category: 'Contemporary Apparel & Retail Fashion',
    highlights: [
      'Managed embroidery production for contemporary apparel.',
      'Maintained fast production output without compromising quality.',
      'Configured machines for different fabrics.',
      'Worked with denim, knits, cotton blends, and other materials.',
      'Adjusted machine settings according to production requirements.',
    ],
  },
  {
    id: 'bareeze',
    brandName: 'BAREEZE',
    role: 'Master Embroidery Craftsman',
    category: 'Haute Couture & Heritage Textiles',
    highlights: [
      'Produced premium embroidered textiles.',
      'Worked with delicate fabrics requiring exceptional precision.',
      'Managed thread tension and machine settings.',
      'Performed detailed quality inspections.',
      'Maintained luxury-level production standards.',
    ],
  },
  {
    id: 'bilal-swm',
    brandName: 'BILAL TEXTILE & SWM',
    role: 'Machine Operator & Mechanical Technician',
    category: 'Industrial Textile Manufacturing',
    highlights: [
      'Operated industrial embroidery machinery.',
      'Managed daily production targets.',
      'Performed routine machine maintenance.',
      'Conducted machine calibration.',
      'Diagnosed mechanical issues.',
      'Performed rapid troubleshooting to reduce production downtime.',
    ],
  },
  {
    id: 'yumie-shaner-akash',
    brandName: 'YUMIE, SHANER & AKASHCOLLECTION.PK',
    role: 'Custom Embroidery Specialist',
    category: 'Bespoke Collections & Commercial Orders',
    highlights: [
      'Produced custom embroidery for commercial orders.',
      'Worked on bespoke collections.',
      'Supported online retail production.',
      'Interpreted new embroidery design drafts.',
      'Conducted initial machine setup and trial runs.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'machine-operations',
    title: 'Machine Operations',
    icon: 'Cpu',
    skills: [
      'Multi-head embroidery machines',
      'Computerized embroidery systems',
      'Machine setup',
      'Calibration',
      'Alignment',
      'Production operation',
    ],
  },
  {
    id: 'mechanical-expertise',
    title: 'Mechanical Expertise',
    icon: 'Wrench',
    skills: [
      'Machine troubleshooting',
      'Preventive maintenance',
      'Mechanical repair',
      'Part replacement',
      'Machine adjustment',
      'Fault diagnosis',
      'Downtime reduction',
    ],
  },
  {
    id: 'production-qc',
    title: 'Production & Quality Control',
    icon: 'CheckCircle2',
    skills: [
      'Fabric selection',
      'Stabilizer application',
      'Thread tension management',
      'Stitch quality inspection',
      'Defect detection',
      'Production monitoring',
      'Quality assurance',
    ],
  },
  {
    id: 'design-pattern',
    title: 'Design & Pattern Interpretation',
    icon: 'Layers',
    skills: [
      'Digital embroidery patterns',
      'Design layout interpretation',
      'Color coordination',
      'Pattern scaling',
      'Fabric placement',
      'Trial production',
    ],
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    icon: 'ShieldCheck',
    skills: [
      'Attention to detail',
      'Hand-eye coordination',
      'Teamwork',
      'Time management',
      'Problem solving',
      'Production discipline',
      'Fast-paced work environments',
    ],
  },
];

export const keyResponsibilities: KeyResponsibility[] = [
  {
    id: 1,
    title: 'Machine Operation',
    description:
      'Set up, operate, and monitor single-head and multi-head commercial embroidery machines.',
    icon: 'PlaySquare',
  },
  {
    id: 2,
    title: 'Machine Maintenance',
    description:
      'Perform cleaning, oiling, mechanical inspections, adjustments, and part replacement.',
    icon: 'Settings2',
  },
  {
    id: 3,
    title: 'Material Selection',
    description:
      'Select appropriate needles, threads, backing materials, and hoops according to fabric requirements.',
    icon: 'Scissors',
  },
  {
    id: 4,
    title: 'Quality Control',
    description:
      'Inspect finished embroidery for loose threads, puckering, misalignment, thread tension problems, and stitching defects.',
    icon: 'SearchCheck',
  },
  {
    id: 5,
    title: 'Production Management',
    description:
      'Maintain production workflow and help achieve daily production targets.',
    icon: 'Gauge',
  },
  {
    id: 6,
    title: 'Technical Troubleshooting',
    description:
      'Diagnose and resolve mechanical and operational problems quickly to minimize downtime.',
    icon: 'AlertTriangle',
  },
  {
    id: 7,
    title: 'Design Implementation',
    description:
      'Interpret digital embroidery designs and translate them into accurate finished textile products.',
    icon: 'Palette',
  },
  {
    id: 8,
    title: 'Team Support',
    description:
      'Assist junior operators and team members with machine handling, production procedures, and safety practices.',
    icon: 'Users',
  },
];

export const technicalExpertiseList: TechnicalExpertiseItem[] = [
  {
    id: 'tech-1',
    title: 'Multi-Head Embroidery Machines',
    description: 'Expert operational command across multi-head setups, synchronization, and simultaneous multi-panel stitching.',
    icon: 'Layers',
  },
  {
    id: 'tech-2',
    title: 'Computerized Embroidery Systems',
    description: 'Direct digital interface management, program loading, coordinate zeroing, and needle sequencing.',
    icon: 'Monitor',
  },
  {
    id: 'tech-3',
    title: 'Industrial Textile Machinery',
    description: 'Deep mechanical familiarity with high-cycle industrial drive assemblies, bobbin hooks, and rotary shuttles.',
    icon: 'Cog',
  },
  {
    id: 'tech-4',
    title: 'Machine Calibration',
    description: 'Fine adjustment of needle clearance, timing synchronization, presser foot height, and frame travel.',
    icon: 'Compass',
  },
  {
    id: 'tech-5',
    title: 'Thread Tension Adjustment',
    description: 'Precision upper thread check-spring tuning and lower bobbin case tension balancing across varying thread weights.',
    icon: 'Sliders',
  },
  {
    id: 'tech-6',
    title: 'Needle & Hoop Selection',
    description: 'Matching needle point styles (ballpoint, sharp, wedge) and hoop dimensions to delicate chiffon, heavy denim, or knitwear.',
    icon: 'Disc',
  },
  {
    id: 'tech-7',
    title: 'Mechanical Troubleshooting',
    description: 'Root-cause diagnosis of thread breaks, skipped stitches, false thread alarms, needle deflection, and mechanical binding.',
    icon: 'Tool',
  },
  {
    id: 'tech-8',
    title: 'Preventive Maintenance',
    description: 'Scheduled lubrication, rotary hook deburring, lint clearance, belt tension checks, and proactive wearable part replacement.',
    icon: 'ShieldCheck',
  },
  {
    id: 'tech-9',
    title: 'Production Setup',
    description: 'Frame framing, stabilizer backing layering, color stop planning, and sample strike-off approval.',
    icon: 'Workflow',
  },
  {
    id: 'tech-10',
    title: 'Quality Inspection',
    description: 'Rigorous 100% inspection against shrinkage, puckering, loop forming, missed fills, and pattern distortion.',
    icon: 'CheckSquare',
  },
];

export const educationAndTraining: EducationItem[] = [
  {
    type: 'Mechanical & Technical Training',
    title: 'Apprenticeship / Technical Training',
    institution: 'Industrial Textile & Embroidery Machine Mechanics',
    description:
      'Specialized hands-on training and practical experience in industrial textile and embroidery machine mechanics.',
  },
  {
    type: 'Formal Education',
    title: 'High School / Middle',
    institution: 'Albadr Public School',
    description: 'Foundational academic education.',
  },
];

export const whyHirePoints: string[] = [
  '10+ years practical industry experience',
  'Strong embroidery machine operation skills',
  'Advanced mechanical troubleshooting ability',
  'Preventive maintenance experience',
  'Excellent attention to embroidery quality',
  'Experience with different textile materials',
  'Ability to work under production pressure',
  'Fast problem solving',
  'Team-oriented professional',
  'Ready for new job opportunities',
];

export const targetJobRoles: string[] = [
  'Embroidery Machine Operator',
  'Senior Embroidery Machine Operator',
  'Embroidery Machine Technician',
  'Embroidery Mechanical Technician',
  'Textile Production',
  'Garment Production',
  'Industrial Embroidery',
  'Textile Machinery Maintenance',
];
