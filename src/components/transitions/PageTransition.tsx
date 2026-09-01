import type { FC, ReactNode } from 'react'
import type { SectionItem } from '../../types/section'
import type { BurstOrigin, TransitionState } from '../../types/transition'
import { BubbleBurst } from './BubbleBurst'
import './PageTransition.css'

export interface PageTransitionProps {
  state: TransitionState
  activeSection: SectionItem | null
  burstOrigin: BurstOrigin | null
  homeContent: ReactNode
  sectionContent: ReactNode
}

export const PageTransition: FC<PageTransitionProps> = ({
  state,
  activeSection,
  burstOrigin,
  homeContent,
  sectionContent,
}) => {
  // Determine visibility and CSS state classes for both layers
  const isHomeVisible = state === 'idle' || state === 'bursting' || state === 'exiting'
  const isSectionVisible = state === 'entering' || state === 'active' || state === 'exiting'

  let homeClass = 'home-idle'
  if (state === 'bursting') homeClass = 'home-bursting'
  else if (state === 'entering' || state === 'active') homeClass = 'home-hidden'
  else if (state === 'exiting') homeClass = 'home-reconstructing'

  let sectionClass = 'section-active'
  if (state === 'entering') sectionClass = 'section-entering'
  else if (state === 'exiting') sectionClass = 'section-exiting'

  return (
    <div className="page-transition-wrapper">
      {/* Transient Particle Burst Layer */}
      {state === 'bursting' && activeSection && (
        <BubbleBurst section={activeSection} origin={burstOrigin} />
      )}

      {/* Home Screen Layer */}
      {isHomeVisible && (
        <div className={`page-layer ${homeClass}`} aria-hidden={state !== 'idle'}>
          {homeContent}
        </div>
      )}

      {/* Section View Layer */}
      {isSectionVisible && (
        <div className={`page-layer ${sectionClass}`} aria-hidden={state === 'exiting'}>
          {sectionContent}
        </div>
      )}
    </div>
  )
}
