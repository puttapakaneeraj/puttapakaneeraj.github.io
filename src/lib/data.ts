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
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const PROFILE_DATA = {
  name: 'Alex Doe',
  title: 'Full-Stack Software Developer',
  summary:
    "A passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With over 5 years of experience, I specialize in JavaScript ecosystems, particularly React and Node.js, and I'm always excited to learn new technologies.",
  resumeUrl: '/resume.pdf',
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
  level: number;
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
      { name: 'React / Next.js', level: 95, icon: Code },
      { name: 'TypeScript', level: 90, icon: Code },
      { name: 'Tailwind CSS', level: 98, icon: Paintbrush },
      { name: 'HTML5 & CSS3', level: 95, icon: Code },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 90, icon: Code },
      { name: 'Python / Django', level: 75, icon: Code },
      { name: 'PostgreSQL', level: 85, icon: Database },
      { name: 'Firebase', level: 88, icon: Cloud },
    ],
  },
  {
    name: 'AI & Tooling',
    icon: Bot,
    skills: [
      { name: 'Genkit / Firebase GenAI', level: 80, icon: Bot },
      { name: 'Docker', level: 82, icon: Code },
      { name: 'Git & GitHub', level: 95, icon: Github },
      { name: 'CI/CD', level: 78, icon: Code },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', level: 95, icon: Code },
      { name: 'Team Collaboration', level: 92, icon: Users },
      { name: 'Communication', level: 90, icon: Code },
      { name: 'Project Management', level: 85, icon: Code },
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

export const TESTIMONIALS_DATA = [
  {
    text: "Alex is a phenomenal developer. His attention to detail and ability to tackle complex problems is second to none. He was a huge asset to our team.",
    author: 'Jane Smith',
    role: 'Project Manager, Tech Solutions Inc.',
    avatarUrl: getImageUrl('testimonial-1'),
    avatarHint: getImageHint('testimonial-1'),
  },
  {
    text: "Working with Alex was a pleasure. He's a great communicator and always delivers high-quality, clean code on time. Highly recommended!",
    author: 'John Davis',
    role: 'Lead Designer, Innovate Co.',
    avatarUrl: getImageUrl('testimonial-2'),
    avatarHint: getImageHint('testimonial-2'),
  },
  {
    text: "He has a deep understanding of modern web technologies and a great eye for design. He transformed our ideas into a functional and beautiful product.",
    author: 'Emily White',
    role: 'CEO, StartupX',
    avatarUrl: getImageUrl('testimonial-3'),
    avatarHint: getImageHint('testimonial-3'),
  },
];
