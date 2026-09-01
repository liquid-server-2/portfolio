import type { ExperienceItem } from '../types/experience'

export const EXPERIENCE_DATA: readonly ExperienceItem[] = [
  {
    id: 'exp-sahir-web-solutions',
    role: 'Web Development Intern',
    company: 'Sahir Web Solutions',
    period: 'August 2026 – Present',
    location: 'Chandigarh',
    description:
      'Developed and tested customer-facing web features for kigo.ca, a live real-estate platform serving property buyers, sellers, and agents across Canada, along with internal CRM systems.',
    highlights: [
      'Developed and tested customer-facing web features for kigo.ca, a live real-estate platform serving property buyers, sellers, and agents across Canada.',
      'Contributed to development and testing of the company’s internal CRM product.',
      'Deployed and hosted application components using AWS EC2 and S3.',
      'Used Docker to standardize local development environments.',
      'Built and maintained CI/CD pipelines with GitHub Actions to automate testing and deployment across release cycles.',
      'Contributed to 3+ full-stack modules end-to-end.',
      'Implemented property search and filter functionality across 500+ live listings, achieving an estimated 25% reduction in average response time.',
      'Used Cursor, Claude, and GPT for AI-assisted development and debugging.',
    ],
    techStack: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'AWS EC2',
      'AWS S3',
      'Docker',
      'GitHub Actions',
      'AI-Assisted Dev',
    ],
    isPlaceholder: false,
  },
  {
    id: 'exp-internz-valley',
    role: 'Java Development Intern',
    company: 'Internz Valley',
    period: 'May 2025 – July 2025',
    location: 'Remote',
    description:
      'Worked with Java, object-oriented/interface-driven design and backend development foundations.',
    highlights: [
      'Built foundational skills in modular, interface-driven Java design and SOLID principles under senior engineer guidance.',
      'Practiced structured exception handling and debugging on sample service classes.',
    ],
    techStack: ['Java', 'OOP', 'SOLID', 'Interface-Driven Design', 'Exception Handling'],
    isPlaceholder: false,
  },
]
