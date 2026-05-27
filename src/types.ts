export type TabType = 'home' | 'about' | 'information' | 'volunteer';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  initials: string;
}

export interface CancerFact {
  id: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ResourceLink {
  title: string;
  description: string;
  category: string;
  url: string;
}
