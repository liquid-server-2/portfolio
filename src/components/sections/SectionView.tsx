import { useEffect, useRef } from 'react'
import type { CSSProperties, FC } from 'react'
import type { SectionItem } from '../../types/section'
import { SectionIcon } from '../icons/SectionIcon'
import './SectionView.css'

export interface SectionViewProps {
  section: SectionItem
  onBack: () => void
}

export const SectionView: FC<SectionViewProps> = ({ section, onBack }) => {
  const backButtonRef = useRef<HTMLButtonElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Focus Back button upon entrance for keyboard accessibility
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
    '--accent-glow-subtle': section.accentColor.glow.replace(')', ', 0.15)').replace('rgba', 'rgba'),
    '--accent-border': section.accentColor.border,
    '--accent-highlight': section.accentColor.highlight,
  } as CSSProperties

  return (
    <div
      ref={containerRef}
      className="section-view-container"
      style={customStyles}
      tabIndex={-1}
      role="region"
      aria-label={`${section.title} section details`}
    >
      {/* Dynamic Ambient Accent Atmosphere */}
      <div className="section-view-ambient-glow" aria-hidden="true" />

      {/* Top Header Controls */}
      <header className="section-view-header">
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

      {/* Main Content Card */}
      <div className="section-content-card">
        <div className="section-hero-icon-wrapper" aria-hidden="true">
          <SectionIcon name={section.iconName} size={32} />
        </div>

        <h1 className="section-title">{section.title}</h1>
        <h2 className="section-subtitle">{section.subtitle}</h2>

        <div className="section-divider" aria-hidden="true" />
      </div>

      <footer className="section-view-footer" aria-hidden="true">
        <span>Press [Esc] or click Back to return</span>
      </footer>
    </div>
  )
}
