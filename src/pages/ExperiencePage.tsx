import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { EXPERIENCE_DATA } from '../data/experience'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import './pages.css'

export interface ExperiencePageProps {
  section: SectionItem
  onBack: () => void
}

export const ExperiencePage: FC<ExperiencePageProps> = ({ section, onBack }) => {
  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <div className="timeline-container" role="feed" aria-label="Professional Experience Timeline">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="timeline-card-wrapper">
            <div className="timeline-node-marker" aria-hidden="true" />
            <article className="page-card" aria-labelledby={`exp-title-${exp.id}`}>
              <header className="page-card-header">
                <div>
                  <h3 id={`exp-title-${exp.id}`} className="page-card-title">{exp.role}</h3>
                  <p className="page-card-subtitle">
                    {exp.company}
                    {exp.location && (
                      <span style={{ color: 'var(--color-text-dim)', fontWeight: 400, marginLeft: '6px' }}>
                        • {exp.location}
                      </span>
                    )}
                  </p>
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
                  {exp.period}
                </span>
              </header>

              <p className="page-card-body">{exp.description}</p>

              {(exp.highlights ?? exp.achievements) && (
                <ul className="feature-list" style={{ marginTop: '16px' }}>
                  {(exp.highlights ?? exp.achievements)!.map((item, idx) => (
                    <li key={idx} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {exp.techStack && exp.techStack.length > 0 && (
                <div className="tech-pills-list" aria-label="Technologies and domains">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-pill highlight">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </div>
        ))}
      </div>
    </SectionPageLayout>
  )
}
