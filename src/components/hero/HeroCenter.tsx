import type { FC } from 'react'
import './HeroCenter.css'

export const HeroCenter: FC = () => {
  return (
    <section className="hero-center-container" aria-label="Introduction">
      <div className="hero-ambient-halo" aria-hidden="true" />
      
      <h1 className="hero-title">Prakhar</h1>

      <div className="hero-subtitle-container">
        <span className="hero-subtitle-line" aria-hidden="true" />
        <h2 className="hero-subtitle">Full-Stack Software Engineer</h2>
        <span className="hero-subtitle-line line-right" aria-hidden="true" />
      </div>

      <div className="hero-micro-hint" aria-hidden="true">
        <span>Click an area to explore</span>
      </div>
    </section>
  )
}
