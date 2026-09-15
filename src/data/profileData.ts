import {
  ContactInfo,
  BrandExperience,
  SkillCategory,
  KeyResponsibility,
  TechnicalExpertiseItem,
  CareerHighlight,
  EducationItem,
  EmbroideryMachineBrand,
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
    'Highly skilled and dedicated embroidery machine operator and mechanical specialist with 10+ years of hands-on experience in textile and apparel production, specializing in computerized embroidery machinery (Yuemei, SWM, Humble, AA Champion, Great, Pro Maker, Barudan, Tajima, SWF), machine troubleshooting, maintenance, and production quality control.',
  status: 'OPEN TO JOB OPPORTUNITIES',
};

export const professionalSummary = {
  heading: 'Professional Summary',
  paragraphs: [
    'Highly skilled and dedicated Embroidery Machine Operator and Mechanical Master with over a decade of hands-on experience dating back to 2011 in the textile and apparel industry.',
    'Proven expertise in operating, troubleshooting, maintaining, calibrating, and optimizing complex multi-head industrial embroidery machinery.',
    'Extensive hands-on operational and mechanical mastery across leading industrial machinery brands: Yuemei (Budget / industrial), SWM (Industrial embroidery), Humble (Commercial embroidery), AA Champion (Industrial embroidery), Great (Multi-head production), Pro Maker, Barudan, Tajima, SWF, and Feiya.',
    'Collaborated with premier fashion and garment brands and textile export houses, including Maria.B, Outfitters, Bareeze, Bilal Textile, Shaner, and AkashCollection.pk.',
    'Known for technical proficiency, mechanical problem-solving, 0.05mm rotary hook timing calibration, precision thread tension balancing, and optimizing high-capacity production workflows.',
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
      'Multi-head industrial embroidery machines',
      'Yuemei, SWM & Humble operations',
      'AA Champion, Great & Pro Maker systems',
      'Barudan & Tajima computerized setups',
      'SWF & Feiya multi-needle machinery',
      'Computerized control panels (Dahao & Tajima)',
      'High-speed frame alignment & calibration',
      'High-capacity mass production operation',
    ],
  },
  {
    id: 'mechanical-expertise',
    title: 'Mechanical Expertise',
    icon: 'Wrench',
    skills: [
      'Rotary hook & needle timing (0.05mm calibration)',
      'Machine troubleshooting & fault diagnosis',
      'Preventive maintenance & lubrication schedule',
      'Mechanical repair & worn part replacement',
      'Needle bar & presser foot synchronization',
      'Thread tension disc & check spring balancing',
      'Production downtime reduction & quick fixes',
    ],
  },
  {
    id: 'production-qc',
    title: 'Production & Quality Control',
    icon: 'CheckCircle2',
    skills: [
      'Fabric selection & stabilizer backing matching',
      'Thread tension management (zero-loop tuning)',
      'Stitch quality inspection & puckering prevention',
      'Defect detection (skipped stitches, broken threads)',
      'Production monitoring & shift output logging',
      'Luxury apparel & bulk industrial quality assurance',
    ],
  },
  {
    id: 'design-pattern',
    title: 'Design & Pattern Interpretation',
    icon: 'Layers',
    skills: [
      'Digital embroidery pattern reading (DST, DSB)',
      'Design layout interpretation & coordinate zeroing',
      'Color stop sequencing & multi-cone setup',
      'Pattern scaling & embroidery field placement',
      'Specialty attachments (sequin, cording, boring)',
      'Pre-production trial runs & strike-offs',
    ],
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    icon: 'ShieldCheck',
    skills: [
      'Meticulous attention to stitch detail',
      'Hand-eye coordination & rapid thread knotting',
      'Floor teamwork & junior operator mentoring',
      'Punctual time management & shift discipline',
      'Fast mechanical problem solving under pressure',
      'Industrial safety & machine floor standards',
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
  '10+ years continuous hands-on industrial embroidery experience',
  'Versatile brand operation: Yuemei, SWM, Humble, AA Champion, Great, Pro Maker, Barudan, Tajima & SWF',
  'Expertise in both Budget / Industrial and High-End Multi-Head machinery',
  'Advanced mechanical troubleshooting & 0.05mm rotary hook timing calibration',
  'Proactive preventive maintenance & continuous downtime reduction',
  'Zero-defect quality inspection & thread tension balancing',
  'Deep familiarity with diverse fabrics: lawn, silk, chiffon, denim, knits & heavy wool',
  'Proven high-speed output under intense seasonal production deadlines',
  'Team player, active mentor, and disciplined shift operator',
  'Available for immediate full-time employment & production trials',
];

export const targetJobRoles: string[] = [
  'Embroidery Machine Operator',
  'Senior Embroidery Machine Operator',
  'Embroidery Machine Technician',
  'Embroidery Mechanical Technician',
  'Textile Production Specialist',
  'Garment Embroidery Supervisor',
  'Industrial Embroidery Master',
  'Textile Machinery Maintenance Specialist',
];

export const embroideryMachineBrands: EmbroideryMachineBrand[] = [
  {
    id: 'yuemei',
    name: 'Yuemei',
    country: 'China',
    flag: '🇨🇳',
    category: 'Budget / industrial',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Budget & industrial multi-head embroidery machines, widely relied on for high-volume commercial apparel runs. Expert in Dahao computerized control, frame tensioning, and speed optimization.',
    tier: 'Budget / Industrial',
  },
  {
    id: 'swm',
    name: 'SWM',
    country: 'China',
    flag: '🇨🇳',
    category: 'Industrial embroidery',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Heavy-duty industrial embroidery machinery engineered for continuous round-the-clock factory shifts. Skilled in drive motor alignment, frame synchronization, and minimal vibration operation.',
    tier: 'Industrial',
  },
  {
    id: 'humble',
    name: 'Humble',
    country: 'China',
    flag: '🇨🇳',
    category: 'Commercial embroidery',
    mastery: '90%',
    years: '7+ Yrs',
    description:
      'Commercial embroidery machinery optimized for flexible garment runs, flat apparel, custom boutique embroidery, and fast turnaround production jobs.',
    tier: 'Commercial',
  },
  {
    id: 'aa-champion',
    name: 'AA Champion',
    country: 'China',
    flag: '🇨🇳',
    category: 'Industrial embroidery',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Rugged industrial embroidery machines built for dense thread coverage, sequence stitching, and durable mechanical performance under heavy daily factory workloads.',
    tier: 'Industrial',
  },
  {
    id: 'great',
    name: 'Great',
    country: 'China',
    flag: '🇨🇳',
    category: 'Multi-head production',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'High-capacity multi-head production systems designed for large yardage fabric rolls, all-over lawn patterns, and synchronized multi-panel garment embroidery.',
    tier: 'Multi-Head Production',
  },
  {
    id: 'pro-maker',
    name: 'Pro Maker',
    country: 'China',
    flag: '🇨🇳',
    category: 'Industrial embroidery',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Advanced computerized industrial embroidery machines featuring high-speed stitch capability, precision needle bar actuation, and electronic tension stabilization.',
    tier: 'Industrial',
  },
  {
    id: 'barudan',
    name: 'Barudan',
    country: 'Japan',
    flag: '🇯🇵',
    category: 'Multi-Head Computerized',
    mastery: '100%',
    years: '10+ Yrs',
    description:
      'Japanese gold-standard multi-head embroidery systems. Complete operational mastery including 0.05mm rotary hook clearance, individual head timing, and zero-break calibration.',
    tier: 'High-End / High-Speed',
  },
  {
    id: 'tajima',
    name: 'Tajima',
    country: 'Japan',
    flag: '🇯🇵',
    category: 'Multi-Head High Speed',
    mastery: '100%',
    years: '10+ Yrs',
    description:
      'Top-tier Japanese computerized high-speed multi-head machinery. Precision execution of luxury lawn, intricate multi-color designer patterns, and electronic diagnostics.',
    tier: 'High-End / High-Speed',
  },
  {
    id: 'swf',
    name: 'SWF',
    country: 'Korea',
    flag: '🇰🇷',
    category: 'Industrial Embroidery',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Durable Korean industrial multi-head machinery known for dual-function versatility and heavy-gauge fabric handling.',
    tier: 'Industrial',
  },
  {
    id: 'feiya',
    name: 'Feiya',
    country: 'China',
    flag: '🇨🇳',
    category: 'Industrial Multi-Head',
    mastery: '95%',
    years: '8+ Yrs',
    description:
      'Versatile Chinese industrial multi-head systems. Proven track record in rapid maintenance, parts interchangeability, and dependable factory output.',
    tier: 'Industrial',
  },
];
