export interface TeamMember {
  id: string;
  name: {
    ja: string;
    en: string;
  };
  role: {
    ja: string;
    en: string;
  };
  department?: string;
  bio: {
    ja: string;
    en: string;
  };
  image?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  joinedYear?: number;
}

export interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  day?: number;
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  type?: "milestone" | "achievement" | "event";
}

export interface Project {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  icon: string;
  color: "primary" | "secondary" | "accent";
}
