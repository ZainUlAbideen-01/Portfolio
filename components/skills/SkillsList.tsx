'use client'

import GlareHover from '../GlareHover'
import { SKILLS } from './skillsData'

interface Props {
  selectedId: string | null
  onSelect: (id: string | null) => void
}

export default function SkillsList({  }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '10px 0 0',
        justifyContent: 'center',
      }}
    >
      {SKILLS.map((skill) => {
        return (
        <GlareHover 
          key={skill.id}
          glareColor="#ffffff"
          glareOpacity={0.4}
          glareAngle={-30}
          glareSize={250}
          transitionDuration={950}
          playOnce={false}
          borderColor='white'
        >
          <div style={{ width: '50px', height: '50px', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={`/icons/${skill.icon}.svg`} alt="" style={{ filter: 'invert(1)'}}/> 
            <h2 style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffffff', margin: 0 }}>
              {skill.name.toString()}
            </h2>
          </div>
        </GlareHover>
        )
      })}
    </div>
  )
}
