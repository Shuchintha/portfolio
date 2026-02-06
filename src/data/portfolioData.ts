import type { SkillCategory, Experience, NavLink, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/shuchintha', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/shuchintha', icon: 'FaLinkedinIn' },
  { name: 'Twitter', url: 'https://twitter.com/shuchintha', icon: 'FaTwitter' },
  { name: 'Email', url: 'mailto:shuchintha@example.com', icon: 'FaEnvelope' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Frameworks',
    icon: 'FaReact',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Angular', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 65 },
    ],
  },
  {
    title: 'Languages',
    icon: 'FaCode',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    title: 'State Management',
    icon: 'FaCubes',
    skills: [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'NgRx', level: 85 },
      { name: 'Context API', level: 90 },
      { name: 'RxJS', level: 85 },
    ],
  },
  {
    title: 'Styling & UI',
    icon: 'FaPalette',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material UI', level: 85 },
      { name: 'SASS / SCSS', level: 90 },
      { name: 'Styled Components', level: 80 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'FaServer',
    skills: [
      { name: 'GraphQL', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'Node.js', level: 75 },
      { name: 'OAuth / JWT', level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'FaTools',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'AI Tools (Copilot, Cursor)', level: 90 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2023 – Present',
    location: 'San Francisco, CA',
    description: [
      'Led the migration of a monolithic Angular app to a micro-frontend React architecture, improving load times by 40%.',
      'Architected a scalable design system using Material UI and Tailwind CSS, adopted across 5+ product teams.',
      'Implemented real-time data dashboards using GraphQL subscriptions and Redux Toolkit for state management.',
      'Mentored a team of 4 junior developers and conducted code reviews to ensure code quality and best practices.',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'GraphQL', 'Material UI', 'Micro-Frontends'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'DataStream Solutions',
    duration: 'Jun 2021 – Dec 2022',
    location: 'Austin, TX',
    description: [
      'Built and maintained complex Angular applications with NgRx state management and RxJS-driven data streams.',
      'Developed secure authentication flows using OAuth 2.0 and JWT token management.',
      'Integrated RESTful and GraphQL APIs to power interactive data visualization components.',
      'Improved application performance by implementing lazy loading, code splitting, and optimized bundle strategies.',
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'OAuth', 'RESTful APIs'],
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'CreativeEdge Digital',
    duration: 'Mar 2020 – May 2021',
    location: 'Remote',
    description: [
      'Developed responsive, pixel-perfect web applications using React with functional components and Hooks API.',
      'Translated complex Figma designs into accessible, performant UI components.',
      'Collaborated with backend engineers to design and consume RESTful API contracts.',
      'Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment.',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'REST APIs', 'GitHub Actions', 'Figma'],
  },
];
