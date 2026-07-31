import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiNeo4j,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiDotnet,
  SiGit,
  SiGithub,
  SiNetlify,
} from '@icons-pack/react-simple-icons'

import {
  Database,
  Brain,
  BrainCircuit,
  Boxes,
  Webhook,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

export interface Skill {
  id: number
  name: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SKILLS: Skill[] = [
  { id: 1, name: 'HTML', icon: SiHtml5 },
  { id: 2, name: 'CSS', icon: SiCss },
  { id: 3, name: 'Tailwind CSS', icon: SiTailwindcss },
  { id: 4, name: 'JavaScript', icon: SiJavascript },
  { id: 5, name: 'TypeScript', icon: SiTypescript },
  { id: 6, name: 'React', icon: SiReact },
  { id: 7, name: 'Next.js', icon: SiNextdotjs },

  { id: 8, name: 'Node.js', icon: SiNodedotjs },
  { id: 9, name: 'Express.js', icon: SiExpress },
  { id: 10, name: 'Nest.js', icon: SiNestjs },

  { id: 11, name: 'MongoDB', icon: SiMongodb },
  { id: 12, name: 'SQL', icon: Database },
  { id: 13, name: 'Neo4j', icon: SiNeo4j },

  { id: 14, name: 'Python', icon: SiPython },
  { id: 15, name: 'C++', icon: SiCplusplus },
  { id: 16, name: 'C#', icon: SiSharp },

  { id: 17, name: '.NET', icon: SiDotnet },

  { id: 18, name: 'Computer Vision', icon: Brain },
  { id: 19, name: 'Deep Learning', icon: BrainCircuit },
  { id: 20, name: 'Model Training', icon: Brain },

  { id: 21, name: 'Git', icon: SiGit },
  { id: 22, name: 'GitHub', icon: SiGithub },
  { id: 23, name: 'Netlify', icon: SiNetlify },

  { id: 24, name: 'OOP', icon: Boxes },
  { id: 25, name: 'REST APIs', icon: Webhook },
]