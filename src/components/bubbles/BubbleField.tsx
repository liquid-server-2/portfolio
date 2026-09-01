import type { FC } from 'react'
import type { SectionId, SectionItem } from '../../types/section'
import type { BurstOrigin, TransitionState } from '../../types/transition'
import { SECTIONS_DATA } from '../../data/sections'
import { Bubble } from './Bubble'
import './BubbleField.css'

export interface BubbleFieldProps {
  sections?: readonly SectionItem[]
  onSelectSection?: (id: SectionId, origin?: BurstOrigin) => void
  activeSectionId?: SectionId | null
  transitionState?: TransitionState
}

export const BubbleField: FC<BubbleFieldProps> = ({
  sections = SECTIONS_DATA,
  onSelectSection,
  activeSectionId = null,
  transitionState = 'idle',
}) => {
  const isBurstingPhase = transitionState === 'bursting'

  return (
    <nav className="bubble-field-container" aria-label="Portfolio main navigation">
      {sections.map((section) => {
        const isSelected = activeSectionId === section.id
        const isBursting = isBurstingPhase && isSelected
        const isOtherBursting = isBurstingPhase && !isSelected

        return (
          <Bubble
            key={section.id}
            section={section}
            onSelect={onSelectSection}
            isBursting={isBursting}
            isOtherBursting={isOtherBursting}
          />
        )
      })}
    </nav>
  )
}
