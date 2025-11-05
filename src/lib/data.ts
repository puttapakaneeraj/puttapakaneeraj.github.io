import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Paintbrush,
  Server,
  Users,
  type LucideIcon,
  Bot,
  Monitor,
  Database,
  Cloud,
  Layers,
  Component,
  BrainCircuit,
  MessageCircle,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const PROFILE_DATA = {
  name: 'Alex Doe',
  title: 'Full-Stack Software Developer',
  summary:
    "A passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With over 5 years of experience, I specialize in JavaScript ecosystems, particularly React and Node.js, and I'm always excited to learn new technologies.",
  resumeUrl: '/resume.pdf',
  email: 'hello@alexdoe.com',
  location: 'New York, NY, USA',
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: Twitter,
  },
];

type Skill = {
  name: string;
  icon: LucideIcon;
};

type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'React / Next.js', icon: Component },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Paintbrush },
      { name: 'HTML5 & CSS3', icon: Code },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', icon: Layers },
      { name: 'Python / Django', icon: Code },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Firebase', icon: Cloud },
    ],
  },
  {
    name: 'AI & DevOps',
    icon: Bot,
    skills: [
      { name: 'Genkit / Gemini', icon: BrainCircuit },
      { name: 'Docker', icon: Code },
      { name: 'Git & GitHub', icon: Github },
      { name: 'CI/CD Pipelines', icon: Code },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Agile Methodologies', icon: Layers },
      { name: 'Team Collaboration', icon: Users },
      { name: 'Effective Communication', icon: MessageCircle },
      { name: 'Problem Solving', icon: BrainCircuit },
    ],
  },
];

export const EXPERIENCE_DATA = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description:
      'Led the development of a new client-facing analytics dashboard using Next.js and Chart.js, improving data visualization and user engagement by 40%. Mentored junior developers and conducted code reviews to maintain high code quality.',
  },
  {
    company: 'Innovate Co.',
    role: 'Full-Stack Developer',
    period: '2019 - 2021',
    description:
      'Developed and maintained RESTful APIs with Node.js and Express for a suite of internal tools. Collaborated with the design team to implement responsive user interfaces with React, resulting in a 25% increase in user satisfaction.',
  },
  {
    company: 'Web Wizards Agency',
    role: 'Junior Web Developer',
    period: '2017 - 2019',
    description:
      'Built and maintained client websites using HTML, CSS, and JavaScript. Gained foundational experience in version control with Git and agile development methodologies.',
  },
];

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

export const PROJECTS_DATA = [
  {
    title: 'Project Nova',
    description: 'A comprehensive project management tool designed to streamline team workflows and enhance productivity. Features include task tracking, real-time collaboration, and reporting.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: getImageUrl('project-1'),
    imageHint: getImageHint('project-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Connectify',
    description: 'A social networking platform for professionals to connect, share insights, and build their personal brand. Includes a real-time chat feature and a dynamic content feed.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    imageUrl: getImageUrl('project-2'),
    imageHint: getImageHint('project-2'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DataViz Pro',
    description: 'A data visualization tool that transforms complex datasets into beautiful, interactive charts and graphs. Built for data analysts and business intelligence teams.',
    techStack: ['Vue.js', 'D3.js', 'Python', 'Django'],
    imageUrl: getImageUrl('project-3'),
    imageHint: getImageHint('project-3'),
    liveUrl: '#',
    githubUrl: '#',
  },
];
