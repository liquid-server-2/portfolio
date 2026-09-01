import { useEffect, useRef } from 'react'
import type { CSSProperties, FC, ReactNode } from 'react'
import type { SectionItem } from '../../types/section'
import { SectionIcon } from '../icons/SectionIcon'
import './SectionPageLayout.css'

export interface SectionPageLayoutProps {
  section: SectionItem
  onBack: () => void
  children: ReactNode
}

export const SectionPageLayout: FC<SectionPageLayoutProps> = ({
  section,
  onBack,
  children,
}) => {
  const backButtonRef = useRef<HTMLButtonElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Focus Back button upon mount for keyboard accessibility
  useEffect(() => {
    backButtonRef.current?.focus()
  }, [])

  // Global Escape key listener to return to home
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onBack])

  const customStyles: CSSProperties = {
    '--accent-primary': section.accentColor.primary,
    '--accent-glow': section.accentColor.glow,
    '--accent-glow-subtle': section.accentColor.glow.replace(')', ', 0.12)').replace('rgba', 'rgba'),
    '--accent-border': section.accentColor.border,
    '--accent-highlight': section.accentColor.highlight,
  } as CSSProperties

  return (
    <div
      ref={containerRef}
      className="section-layout-container"
      style={customStyles}
      tabIndex={-1}
      role="region"
      aria-label={`${section.title} section page`}
    >
      {/* Dynamic Ambient Accent Atmosphere */}
      <div className="section-layout-ambient-glow" aria-hidden="true" />

      {/* Top Header Controls */}
      <header className="section-layout-header">
        <button
          ref={backButtonRef}
          type="button"
          className="section-back-btn"
          onClick={onBack}
          aria-label="Return to portfolio home space"
        >
          <span className="section-back-arrow" aria-hidden="true">
            ←
          </span>
          <span>Back to Home</span>
        </button>

        <div className="section-tag-badge" aria-hidden="true">
          <span>{section.title}</span>
        </div>
      </header>

      {/* Section Title Banner */}
      <div className="section-layout-banner">
        <div className="section-banner-icon" aria-hidden="true">
          <SectionIcon name={section.iconName} size={28} />
        </div>

        <h1 className="section-banner-title">{section.title}</h1>
        <h2 className="section-banner-subtitle">{section.subtitle}</h2>

        <div className="section-banner-line" aria-hidden="true" />
      </div>

      {/* Section Body Content */}
      <div className="section-layout-content">{children}</div>

      {/* Footer Return Hint */}
      <footer className="section-layout-footer" aria-hidden="true">
        <span className="section-footer-dot" />
        <span>Press [Esc] or click Back to return home</span>
      </footer>
    </div>
  )
}
