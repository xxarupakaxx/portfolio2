'use client';

import Section from '../ui/Section';
import HangingSkill from '../ui/HangingSkill';

// コア技術 - よく使い慣れている技術
const coreSkills: Array<{ name: string; icon: string; level: 'core' | 'sub' }> = [
  { name: "TypeScript", icon: "/assets/typescript.svg", level: "core" },
  { name: "Go", icon: "/assets/golang.svg", level: "core" },
  { name: "Express", icon: "/assets/Express.svg", level: "core" },
  { name: "React", icon: "/assets/react.svg", level: "core" },
  { name: "Google Cloud", icon: "/assets/GoogleCloud.svg", level: "core" },
];

// その他の技術 - 経験のある技術
const otherSkills: Array<{ name: string; icon: string; level: 'core' | 'sub' }> = [
  { name: "C#", icon: "/assets/C.svg", level: "sub" },
  { name: "Scala", icon: "/assets/scala.svg", level: "sub" },
  { name: "Ruby", icon: "/assets/Ruby.svg", level: "sub" },
  { name: "Node.js", icon: "/assets/Node.js.svg", level: "sub" },
  { name: "Next.js", icon: "/assets/Next.js.svg", level: "sub" },
  { name: "GraphQL", icon: "/assets/graphql.svg", level: "sub" },
  { name: "Firebase", icon: "/assets/firebase.svg", level: "sub" },
  { name: "Astro", icon: "/assets/astro.svg", level: "sub" },
  { name: "Unity", icon: "/assets/Unity.svg", level: "sub" },
  { name: "Unreal Engine", icon: "/assets/Unreal Engine.svg", level: "sub" },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-6 font-serif">Art of Tech</h2>
      </div>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-4">
        
        {/* コア技術 */}
        <div>
          <h3 className="text-2xl font-serif text-primary dark:text-white mb-8 text-center pb-4 relative
                         after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                         after:w-24 after:h-px after:bg-gray-200 dark:after:bg-gray-800">
            コア技術
          </h3>
          <p className="text-body text-center mb-6 text-sm">よく使い慣れている技術スタック</p>
          <div className="flex flex-wrap justify-center gap-8">
            {coreSkills.map((skill, idx) => (
              <HangingSkill 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                delay={idx * 0.05} 
              />
            ))}
          </div>
        </div>

        {/* その他の技術 */}
        <div>
          <h3 className="text-2xl font-serif text-primary dark:text-white mb-8 text-center pb-4 relative
                         after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                         after:w-24 after:h-px after:bg-gray-200 dark:after:bg-gray-800">
            その他の技術
          </h3>
          <p className="text-body text-center mb-6 text-sm">経験のある技術</p>
          <div className="flex flex-wrap justify-center gap-8">
            {otherSkills.map((skill, idx) => (
              <HangingSkill 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                delay={idx * 0.05} 
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
