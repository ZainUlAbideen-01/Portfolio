'use client'

import GlareHover from '../GlareHover'
import { SKILLS } from './skillsData'

interface Props {
  selectedId: string | null
  onSelect: (id: string | null) => void
}

const ITEM_SIZE = 'clamp(70px, 22vw, 120px)'

export default function SkillsList({  }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(10px, 3vw, 20px)',
        padding: '10px 0 0',
        justifyContent: 'center',
      }}
    >
      {SKILLS.map((skill) => {
        return (
        <GlareHover 
          key={skill.id}
          width={ITEM_SIZE}
          height={ITEM_SIZE}
          borderWidth="clamp(2px, 0.6vw, 4px)"
          glareColor="#ffffff"
          glareOpacity={0.4}
          glareAngle={-30}
          glareSize={250}
          transitionDuration={950}
          playOnce={false}
          borderColor='white'
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(5px, 1.5vw, 10px)',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(4px, 1.5vw, 10px)',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={`/icons/${skill.icon}.svg`}
              alt=""
              style={{ filter: 'invert(1)', width: '55%', height: 'auto' }}
            />
            <h2
              style={{
                fontSize: 'clamp(0.62rem, 2.4vw, 1rem)',
                fontWeight: '600',
                color: '#ffffffff',
                margin: 0,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              {skill.name.toString()}
            </h2>
          </div>
        </GlareHover>
        )
      })}
    </div>
  )
}