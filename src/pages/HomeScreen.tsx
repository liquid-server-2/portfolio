import type { FC } from 'react'
import type { SectionId } from '../types/section'
import type { BurstOrigin, TransitionState } from '../types/transition'
import { AmbientBackground } from '../components/ambient/AmbientBackground'
import { HeroCenter } from '../components/hero/HeroCenter'
import { BubbleField } from '../components/bubbles/BubbleField'
import './HomeScreen.css'

export interface HomeScreenProps {
  onSelectSection?: (id: SectionId, origin?: BurstOrigin) => void
  activeSectionId?: SectionId | null
  transitionState?: TransitionState
}

export const HomeScreen: FC<HomeScreenProps> = ({
  onSelectSection,
  activeSectionId = null,
  transitionState = 'idle',
}) => {
  return (
    <main className="home-screen-viewport">
      {/* Layer 1: Atmospheric Background, Glow Orbs & Particles */}
      <AmbientBackground />

      {/* Layer 2: Minimalist personal header */}
      <header className="home-screen-header" aria-hidden="true">
        <div className="home-brand-logo">
          <span className="home-brand-dot" />
          <span>Prakhar Chaturvedi</span>
        </div>
        <div className="home-sys-meta">
          <span>Portfolio • 2026</span>
        </div>
      </header>

      {/* Layer 3: Central Hero Heading */}
      <HeroCenter />

      {/* Layer 4: Orbital Floating Interactive Bubbles */}
      <BubbleField
        onSelectSection={onSelectSection}
        activeSectionId={activeSectionId}
        transitionState={transitionState}
      />

      {/* Layer 5: Footer navigation hint */}
      <footer className="home-screen-footer" aria-hidden="true">
        <div className="home-footer-hint">
          <span>Click any topic to explore</span>
        </div>
      </footer>
    </main>
  )
}
