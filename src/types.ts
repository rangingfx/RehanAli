export interface ContactInfo {
  name: string;
  title: string;
  statusBadge: string;
  phones: {
    display: string;
    raw: string;
    tel: string;
    whatsappUrl: string;
  }[];
  location: string;
  email?: string;
  website: string;
  poweredBy: {
    label: string;
    url: string;
  };
}

export interface BrandExperience {
  id: string;
  brandName: string;
  role: string;
  category: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface KeyResponsibility {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CareerHighlight {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface EducationItem {
  type: string;
  title: string;
  institution: string;
  description: string;
}

export interface EmbroideryMachineBrand {
  id: string;
  name: string;
  country: string;
  flag: string;
  category: string;
  mastery: string;
  years: string;
  description: string;
  tier?: 'Budget / Industrial' | 'Industrial' | 'Commercial' | 'Multi-Head Production' | 'High-End / High-Speed';
}
