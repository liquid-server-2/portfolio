import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { PERSONAL_INFO } from '../data/personal'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import './pages.css'

export interface AboutPageProps {
  section: SectionItem
  onBack: () => void
}

export const AboutPage: FC<AboutPageProps> = ({ section, onBack }) => {
  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <article className="page-card">
        <header className="page-card-header">
          <div>
            <h3 className="page-card-title">{PERSONAL_INFO.name}</h3>
            <p className="page-card-subtitle">{PERSONAL_INFO.role}</p>
          </div>
          <div className="status-badge">
            <span className="status-badge-dot" aria-hidden="true" />
            <span>{PERSONAL_INFO.status}</span>
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {PERSONAL_INFO.bioParagraphs.map((para, index) => (
            <p key={index} className="page-card-body">
              {para}
            </p>
          ))}
        </div>
      </article>

      <section className="two-col-grid" aria-label="Core focus and principles">
        <div className="page-card">
          <h3 className="page-card-title">Core Focus</h3>
          <p className="page-card-subtitle">What I build & work with</p>
          <ul className="feature-list">
            {PERSONAL_INFO.coreFocus.map((focus, index) => (
              <li key={index} className="feature-item">
                {focus}
              </li>
            ))}
          </ul>
        </div>

        <div className="page-card">
          <h3 className="page-card-title">How I Work</h3>
          <p className="page-card-subtitle">Engineering Principles</p>
          <ul className="feature-list">
            <li className="feature-item">
              <strong>Decoupled Architecture:</strong> Clear separation between domain data, presentation state, and backend APIs.
            </li>
            <li className="feature-item">
              <strong>Type Rigor:</strong> Strong TypeScript interfaces ensuring end-to-end type safety and predictable contracts.
            </li>
            <li className="feature-item">
              <strong>User Experience First:</strong> Accessible keyboard interactions, reduced-motion compliance, and zero layout shift.
            </li>
          </ul>
        </div>
      </section>

      <section className="page-card" aria-label="Key Achievements">
        <header className="page-card-header">
          <div>
            <h3 className="page-card-title">Problem Solving & Algorithms</h3>
            <p className="page-card-subtitle">Data Structures & Competitive Programming</p>
          </div>
        </header>

        <div className="three-col-grid" style={{ marginTop: '16px' }}>
          {PERSONAL_INFO.achievements.map((ach) => (
            <div
              key={ach.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--accent-highlight)',
                  marginBottom: '4px',
                }}
              >
                {ach.metric}
              </span>
              <strong
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: 'var(--color-text-primary)',
                  marginBottom: '2px',
                }}
              >
                {ach.title}
              </strong>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-text-dim)',
                }}
              >
                {ach.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </SectionPageLayout>
  )
}
