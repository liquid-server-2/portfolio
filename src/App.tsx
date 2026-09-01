import { useEffect, useMemo, useRef } from 'react'
import type { FC } from 'react'
import type { SectionId } from './types/section'
import type { BurstOrigin } from './types/transition'
import { SECTIONS_DATA } from './data/sections'
import { useSectionTransition } from './hooks/useSectionTransition'
import { HomeScreen } from './pages/HomeScreen'
import { SectionRegistry } from './components/sections/SectionRegistry'
import { PageTransition } from './components/transitions/PageTransition'
import './App.css'

const App: FC = () => {
  const {
    transitionState,
    activeSectionId,
    burstOrigin,
    selectSection,
    returnToHome,
  } = useSectionTransition({
    burstDuration: 480,
    enterDuration: 360,
    exitDuration: 320,
  })

  const lastSelectedSectionRef = useRef<SectionId | null>(null)

  // Track the selected section to restore focus upon return
  const handleSelectSection = (id: SectionId, origin?: BurstOrigin) => {
    lastSelectedSectionRef.current = id
    selectSection(id, origin)
  }

  // Restore keyboard focus to the clicked bubble when returning home
  useEffect(() => {
    if (transitionState === 'idle' && lastSelectedSectionRef.current) {
      const sectionId = lastSelectedSectionRef.current
      // Brief delay to allow DOM reconciliation
      const timer = window.setTimeout(() => {
        const bubbleBtn = document.querySelector<HTMLButtonElement>(
          `[data-section="${sectionId}"] button`
        )
        bubbleBtn?.focus()
      }, 50)

      return () => window.clearTimeout(timer)
    }
  }, [transitionState])

  const activeSection = useMemo(() => {
    if (!activeSectionId) return null
    return SECTIONS_DATA.find((s) => s.id === activeSectionId) ?? null
  }, [activeSectionId])

  return (
    <div className="app-container">
      <PageTransition
        state={transitionState}
        activeSection={activeSection}
        burstOrigin={burstOrigin}
        homeContent={
          <HomeScreen
            onSelectSection={handleSelectSection}
            activeSectionId={activeSectionId}
            transitionState={transitionState}
          />
        }
        sectionContent={
          <SectionRegistry
            section={activeSection}
            onBack={returnToHome}
          />
        }
      />
    </div>
  )
}

export default App
