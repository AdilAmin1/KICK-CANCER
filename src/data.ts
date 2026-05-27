import { TeamMember, CancerFact, ResourceLink } from './types';

export const KICK_ACRONYM = [
  {
    letter: 'K',
    title: 'Kids',
    description: 'Prioritizing childhood joy by delivering premium, surprise-filled care packages directly to pediatric oncology patients during treatment.'
  },
  {
    letter: 'I',
    title: 'In',
    description: 'Providing active outreach to brave children currently inside clinics, children’s hospitals, and local cancer treatment centers.'
  },
  {
    letter: 'C',
    title: 'Chemo',
    description: 'Designing specialist items that explicitly help comfort young patients, reducing the side effects and sensory strain of chemotherapy.'
  },
  {
    letter: 'K',
    title: 'Kits',
    description: 'Assembling each custom-packed kit with high-quality organic balms, extra-soft cozy beanies, stress rings, and interactive games.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Founder & Family Support Lead',
    bio: 'An oncology nurse practitioner and mother of a survivor, Sarah dedicated her life to helping childhood cancer families navigate the physical and emotional challenges of treatment.',
    initials: 'SJ'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Community Outreach Director',
    bio: 'Marcus coordinates the local chapters and volunteer networks, creating uplifting play-based events, hospital visits, and school fundraiser partnerships.',
    initials: 'MC'
  },
  {
    id: '3',
    name: 'Dr. Evelyn Martinez',
    role: 'Medical Advisor & Research Liaison',
    bio: 'A leading pediatric oncologist who translates complex medical science into understandable milestones for families, while advocating for safer pediatric clinical trials.',
    initials: 'EM'
  },
  {
    id: '4',
    name: 'David Vance',
    role: 'Family Advocacy Coordinator',
    bio: 'David works directly with newly diagnosed families to connect them with financial grants, emotional support resources, and peer mentorship networks.',
    initials: 'DV'
  }
];

export const CANCER_FACTS: CancerFact[] = [
  {
    id: 'fact-1',
    title: 'The Leading Cause',
    description: 'Cancer is the leading cause of death by disease for children in the United States.',
    stat: 'No. 1',
    statLabel: 'Disease Threat'
  },
  {
    id: 'fact-2',
    title: 'New Diagnoses',
    description: 'Every year, more than 15,000 children and teenagers under the age of 20 are diagnosed with cancer in the US alone.',
    stat: '15,000+',
    statLabel: 'Children/Year'
  },
  {
    id: 'fact-3',
    title: 'Treatment Disparity',
    description: 'Pediatric cancers require completely different therapies than adult cancers. Yet, historically, only a tiny fraction of global cancer research funding goes specifically toward childhood cancer.',
    stat: '4%',
    statLabel: 'Federal Funding'
  },
  {
    id: 'fact-4',
    title: 'Survival Milestones',
    description: 'Thanks to decades of research and pediatric care advocacy, the overall survival rate has risen, although certain pediatric cancer subtypes still have very low survival rates.',
    stat: '85%',
    statLabel: 'Survival Rate'
  }
];

export const RESOURCES: ResourceLink[] = [
  {
    title: 'The Gold Ribbon Alliance',
    description: 'Interactive guides, educational toolkits, and safety manuals to help families organize their homes and care routines after a diagnosis.',
    category: 'Guides & Support',
    url: 'https://www.acco.org' 
  },
  {
    title: 'The Brave Hearts Club',
    description: 'A global peer support and advocacy network connecting young survivors and siblings to share uplifting stories, art, and lifetime friendship.',
    category: 'Community Support',
    url: 'https://www.alexslemonade.org'
  },
  {
    title: 'Pediatric Cancer Action Network',
    description: 'Understand the landscape of scientific pediatric trials, clinical study registries, and active legislative actions advocating for healthcare reform.',
    category: 'Medical Research',
    url: 'https://www.stjude.org'
  }
];
