import type { SkillCategory, Experience, NavLink, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Experience', path: '#experience' },
  { label: 'Contact', path: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/shuchintha', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/shuchinthasrinivasa/', icon: 'FaLinkedinIn' },
  { name: 'Twitter', url: 'https://twitter.com/shuchintha', icon: 'FaTwitter' },
  { name: 'Email', url: 'mailto:shuchinthas397@gmail.com', icon: 'FaEnvelope' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'FaReact',
    skills: [
      { name: 'React', level: 95, desc: 'Building complex SPAs with functional components and hooks.' },
      { name: 'Angular', level: 90, desc: 'Enterprise-grade applications using RxJS and dependency injection.' },
      { name: 'Next.js', level: 80, desc: 'Server-side rendering and static site generation for performance.' },
    ],
  },
  {
    title: 'Languages',
    icon: 'FaCode',
    skills: [
      { name: 'TypeScript', level: 95, desc: 'Strict typing for scalable and maintainable codebases.' },
      { name: 'JavaScript (ES6+)', level: 95, desc: 'Modern syntax, async/await, and functional programming patterns.' },
      { name: 'HTML5 / CSS3', level: 90, desc: 'Semantic markup and responsive modern layouts.' },
      { name: 'Python', level: 60, desc: 'Scripting, data analysis, and backend automation.' },
    ],
  },
  {
    title: 'State Management',
    icon: 'FaCubes',
    skills: [
      { name: 'Redux Toolkit', level: 90, desc: 'Unidirectional data flow with efficient slice management.' },
      { name: 'NgRx', level: 85, desc: 'Reactive state management for large scale Angular apps.' },
      { name: 'Context API', level: 90, desc: 'Lightweight global state handling for React applications.' },
      { name: 'RxJS', level: 85, desc: 'Handling asynchronous event streams and complex data flows.' },
    ],
  },
  {
    title: 'Styling & UI',
    icon: 'FaPalette',
    skills: [
      { name: 'Tailwind CSS', level: 90, desc: 'Utility-first CSS for rapid and consistent UI development.' },
      { name: 'SASS / SCSS', level: 90, desc: 'Modular styling with variables, mixins, and nesting.' },
      { name: 'Material UI', level: 85, desc: 'Implementing Google’s Material Design system in React.' },
      { name: 'Styled Components', level: 80, desc: 'CSS-in-JS for component-scoped dynamic styling.' },
    ],
  },
  {
    title: 'APIs',
    icon: 'FaServer',
    skills: [
      { name: 'GraphQL', level: 85, desc: 'Flexible data querying with Apollo Client.' },
      { name: 'RESTful APIs', level: 95, desc: 'Designing and integrating scalable HTTP services.' },
      { name: 'Node.js', level: 75, desc: 'Server-side logic and API development with Express.' },
      { name: 'OAuth / JWT', level: 85, desc: 'Implementing secure authentication and authorization flows.' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'FaTools',
    skills: [
      { name: 'Git / GitHub', level: 95, desc: 'Version control, branching strategies, and collaboration.' },
      { name: 'CI/CD Pipelines', level: 80, desc: 'Automating build, test, and deployment workflows.' },
      { name: 'Docker', level: 70, desc: 'Containerization for consistent development environments.' },
      { name: 'AI Tools (Copilot, Cursor)', level: 90, desc: 'Leveraging AI for faster coding and problem solving.' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'React Developer',
    company: 'USBank Inc.',
    duration: 'Oct 2021 – Dec 2025',
    location: 'Minneapolis, MN',
    description: [
      'Architected micro-frontend applications integrated within a monolithic architecture using React and Angular, improving system scalability and performance.',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'GraphQL', 'Material UI'],
  },
  {
    id: 2,
    role: 'React Developer',
    company: 'Sisense',
    duration: 'Jan 2021 – Oct 2021',
    location: 'San Jose, CA',
    description: [
      'Built complex Angular applications with NgRx state management and RxJS-driven data streams.',
    ],
    technologies: ['Angular', 'React', 'TypeScript',  'GraphQL'],
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Inboxhealth',
    duration: 'Feb 2019 - Dec 2020',
    location: 'New Haven, CT',
    description: [
      'Developed and shipped customer-facing dashboards using React, Context API, and Tailwind CSS.',
    ],
    technologies: ['React', 'JavaScript', 'RESTful APIs', 'Node.js'],
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'Perpetual',
    duration: 'Jan 2018 – Jan 2019',
    location: 'New Haven, CT	',
    description: [
      'Developed responsive, pixel-perfect web applications using React with functional components and Hooks.',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'RESTful APIs'],
  },
  {
    id: 5,
    role: 'Software Engineer',
    company: 'Accenture Solutions Private Limited',
    duration: 'Jan 2016 – Jan 2018 ',
    location: 'Bangalore, India',
    description: [
      'Built internal tools and contributed to front-end features using HTML, CSS, JavaScript, and jQuery.',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
  },
];
