import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { EDUCATION_DATA } from '../data/education'
import { PERSONAL_INFO } from '../data/personal'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import './pages.css'

export interface EducationPageProps {
  section: SectionItem
  onBack: () => void
}

export const EducationPage: FC<EducationPageProps> = ({ section, onBack }) => {
  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {EDUCATION_DATA.map((edu) => (
          <article key={edu.id} className="page-card" aria-label="Academic Education">
            <header className="page-card-header">
              <div>
                <h3 className="page-card-title">{edu.degree}</h3>
                <p className="page-card-subtitle">{edu.institution}</p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--accent-highlight)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  whiteSpace: 'nowrap',
                }}
              >
                {edu.period}
              </span>
            </header>

            {edu.highlights && edu.highlights.length > 0 && (
              <ul className="feature-list" style={{ marginTop: '16px' }}>
                {edu.highlights.map((highlight, index) => (
                  <li key={index} className="feature-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        {/* Complementary Problem-Solving Stats */}
        <article className="page-card" aria-label="Algorithmic & Problem Solving">
          <header className="page-card-header">
            <div>
              <h3 className="page-card-title">Problem Solving & DSA</h3>
              <p className="page-card-subtitle">Competitive programming & data structures</p>
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
        </article>
      </div>
    </SectionPageLayout>
  )
}
