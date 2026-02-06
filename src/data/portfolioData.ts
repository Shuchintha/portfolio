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
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2023 – Present',
    location: 'Milpitas, CA',
    description: [
      'Led migration of a monolithic Angular app to micro-frontend React architecture, improving load times by 40%.',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'GraphQL', 'Material UI'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'DataStream Solutions',
    duration: 'Jun 2021 – Dec 2022',
    location: 'Austin, TX',
    description: [
      'Built complex Angular applications with NgRx state management and RxJS-driven data streams.',
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'RESTful APIs'],
  },
  {
    id: 3,
    role: 'React Developer',
    company: 'CloudNine Systems',
    duration: 'Aug 2020 – May 2021',
    location: 'San Jose, CA',
    description: [
      'Developed and shipped customer-facing dashboards using React, Context API, and Tailwind CSS.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Context API', 'Docker'],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'CreativeEdge Digital',
    duration: 'Jan 2020 – Jul 2020',
    location: 'Remote',
    description: [
      'Developed responsive, pixel-perfect web applications using React with functional components and Hooks.',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'REST APIs', 'Figma'],
  },
  {
    id: 5,
    role: 'Junior Developer',
    company: 'BrightPath Labs',
    duration: 'Jun 2019 – Dec 2019',
    location: 'Bangalore, India',
    description: [
      'Built internal tools and contributed to front-end features using HTML, CSS, JavaScript, and jQuery.',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
  },
];
