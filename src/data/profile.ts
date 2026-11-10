export type Kind = 'work' | 'education';

export interface Entry {
  kind: Kind;
  title: string;
  org: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM
  location: string;
  summary?: string;
  skills?: string[];
}

export const contact = {
  email: 'msereeyothin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/msereeyothin/',
  github: 'https://github.com/msereeyothin',
  // Always serves the latest resume.pdf from the resume repo's main branch
  resume: 'https://github.com/msereeyothin/resume/raw/main/resume.pdf',
};

export const experience: Entry[] = [
  {
    kind: 'work',
    title: 'Software Engineer Co-op',
    org: 'Spill Center',
    start: '2025-06',
    end: '2025-12',
    location: 'Boston, MA · Hybrid',
  },
  {
    kind: 'work',
    title: 'Frontend Developer',
    org: 'Student Government Association of Northeastern University',
    start: '2025-01',
    end: '2025-04',
    location: 'Boston, MA',
    summary:
      'Improved the university senate application and nomination process using React and TypeScript.',
    skills: ['React', 'TypeScript'],
  },
  {
    kind: 'work',
    title: 'Web Developer Co-op',
    org: 'GhostLab',
    start: '2024-07',
    end: '2024-12',
    location: 'Boston, MA · Hybrid',
    summary:
      'Designed an interactive data analytics dashboard that helps engineering professors track student progress, spot trends, and provide targeted support.',
    skills: ['React.js', 'Node.js'],
  },
  {
    kind: 'work',
    title: 'Software Developer',
    org: 'Northeastern Electric Racing',
    start: '2023-09',
    end: '2024-05',
    location: 'Boston, MA',
    summary:
      'Implemented enhancements to the project management software used by a 200+ member team.',
    skills: ['Prisma', 'React.js'],
  },
  {
    kind: 'work',
    title: 'Software Development Intern',
    org: 'ECARTSTUDIO',
    start: '2023-08',
    end: '2023-09',
    location: 'Bangkok, Thailand · Hybrid',
    summary:
      'Helped build a high-traffic React and TypeScript web app for a Thai municipality, streamlining social service delivery for thousands of residents.',
    skills: ['Front-End Development', 'React.js'],
  },
];

export const education: Entry[] = [
  {
    kind: 'education',
    title: 'B.S., Computer Science',
    org: 'Northeastern University',
    start: '2022-09',
    end: '2026-05',
    location: 'Boston, MA',
  },
  {
    kind: 'education',
    title: 'High School Diploma',
    org: 'International School Bangkok',
    start: '2020-08',
    end: '2022-05',
    location: 'Bangkok, Thailand',
  },
];

export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Prisma',
  'Front-end development',
  'Project management',
  'Git & GitHub',
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export function fmt(ym: string) {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}
