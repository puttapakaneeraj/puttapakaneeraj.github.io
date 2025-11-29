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
  name: 'Neeraj Goud',
  title: 'Software Developer',
  summary:
    "Crafting seamless digital experiences through clean code, creative logic, and modern design — turning ideas into impactful solutions.",
  email: 'neerajkumarputtapaka@gmail.com',
  location: 'Hyderabad, India',
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/NeerajGoud1',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/neeraj-puttapaka-5b8a19319/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/neeraj_goud1',
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
    name: 'Frameworks/Libraries',
    
    icon: Server,
    skills: [
      { name: 'NodeJS / ExpressJS', icon: Layers },
      { name: 'ReactJS / NextJS', icon: Code },
      { name: 'Redux / Recoil', icon: Database },
        { name: 'Tailwind', icon: Cloud },
    ],
  },
 

  {
    name: 'DevOps/Tools',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: Code },
      {name : 'Kubernetes', icon: Cloud},
      { name: 'Git & GitHub', icon: Github },
      { name: 'CI/CD Pipelines', icon: Code },
      {name : 'Postman', icon: MessageCircle},
    ],
  },
  
  {
    name: 'Languages',
    icon: Code,
    skills: [
      { name: 'Java', icon: BrainCircuit },
      { name: 'JavaScript', icon: Code },
      { name: 'Python', icon: MessageCircle },
      { name: 'TypeScript', icon: Bot },
      {name : 'C/C++', icon: Monitor},
    ],
  },
   {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Component },
      { name: 'MySQL', icon: Code },
      { name: 'Firebase', icon: Paintbrush },
      {name : 'Supabase', icon: Layers},  
    
    ],
  },
];

export const EXPERIENCE_DATA = [
    {
    company : "EazyByts",
    role : "Web Developer Intern",
    period: 'OCT 2025 - NOV 2025',
    description : "Contributed to full-stack development by building responsive UIs, developing backend APIs, managing databases, and deploying application modules. Collaborated closely with the team to implement end-to-end features, resolve issues, and improve overall project performance."

  },
  {
    company: 'Apna College',
    role: 'Teaching Assistant & Mentor',
    period: 'June 2025 - Oct 2025',
    description:
      " Mentored and resolved queries for 500+ students on Data Structures & Algorithms, and the MERN stack Development via Discord channels.  Facilitated peer-to-peer mentorship, fostering a collaborative learning community across 3,000+ active learners."
  },


];

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

export const PROJECTS_DATA = [
  {
    title: 'TradeHive',
    description: 'A full stock trading simulation web application that allows users to register, authenticate, and securely buy/sell stocks with real-time position and holdings tracking.',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Material-UI'],
    imageUrl: getImageUrl('project-1'),
    imageHint: getImageHint('project-1'),
    liveUrl: 'https://tradehive-eight.vercel.app/',
    githubUrl: 'https://github.com/NeerajGoud1/TradeHive',
  },
  {
    title: 'StallOS',
    description: 'An application that leverages artificial intelligence to empower street food vendors.',
    techStack: ['React', 'Node.js', 'Supabse', 'Vapi', 'ChartJs', 'Gemini'],
    imageUrl: getImageUrl('project-2'),
    imageHint: getImageHint('project-2'),
    liveUrl: 'https://stall-os.vercel.app/',
    githubUrl: 'https://github.com/NeerajGoud1/StallOss',
  },
  {
    title: 'Higher Studies',
    description: 'A full-stack application for college automation to manage student higher studies and competitive exam data.',
    techStack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Tailwind CSS'],
    imageUrl: getImageUrl('project-3'),
    imageHint: getImageHint('project-3'),
    liveUrl: 'https://higherstudies.vercel.app/',
    githubUrl: 'https://github.com/NeerajGoud1/HIgherStudiesFinal',
  },
];
