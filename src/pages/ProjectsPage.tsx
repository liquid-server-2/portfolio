import { useState } from 'react'
import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { PROJECTS_DATA } from '../data/projects'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import { FinSightCaseStudy } from '../components/projects/FinSightCaseStudy'
import './pages.css'

export interface ProjectsPageProps {
  section: SectionItem
  onBack: () => void
}

export const ProjectsPage: FC<ProjectsPageProps> = ({ section, onBack }) => {
  const [activeView, setActiveView] = useState<'gallery' | 'finsight-case-study'>('gallery')

  // Handle navigation: Escape or Back button goes from Case Study -> Gallery -> Home
  const handleBackNavigation = () => {
    if (activeView === 'finsight-case-study') {
      setActiveView('gallery')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      onBack()
    }
  }

  if (activeView === 'finsight-case-study') {
    return (
      <SectionPageLayout section={section} onBack={handleBackNavigation}>
        <FinSightCaseStudy onBack={() => setActiveView('gallery')} />
      </SectionPageLayout>
    )
  }

  return (
    <SectionPageLayout section={section} onBack={handleBackNavigation}>
      {PROJECTS_DATA.map((project) => {
        const isFinSight = project.id === 'finsight'

        return (
          <article
            key={project.id}
            className={`page-card ${isFinSight ? 'featured-project-card' : ''}`}
            style={
              isFinSight
                ? {
                    border: '1px solid rgba(6, 182, 212, 0.35)',
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.08) 0%, rgba(14, 18, 28, 0.85) 100%)',
                    boxShadow:
                      '0 24px 60px -12px rgba(0, 0, 0, 0.7), 0 0 28px rgba(6, 182, 212, 0.12)',
                  }
                : undefined
            }
          >
            <header className="page-card-header">
              <div>
                {isFinSight && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: '#06b6d4',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    ★ Featured Project
                  </span>
                )}
                <h3 className="page-card-title">{project.title}</h3>
                <p className="page-card-subtitle">{project.tagline}</p>
              </div>

              <div className="status-badge">
                <span className="status-badge-dot" aria-hidden="true" />
                <span>{project.status}</span>
              </div>
            </header>

            <p className="page-card-body">{project.description}</p>

            <h4
              style={{
                margin: '20px 0 0',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-highlight)',
              }}
            >
              Key Highlights
            </h4>

            <ul className="feature-list">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="feature-item">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="tech-pills-list" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-pill highlight">
                  {tech}
                </span>
              ))}
            </div>

            <footer className="page-card-footer">
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                {isFinSight && (
                  <button
                    type="button"
                    className="action-btn-primary"
                    onClick={() => {
                      setActiveView('finsight-case-study')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    aria-label="Explore FinSight interactive case study"
                  >
                    <span>View Case Study</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-secondary"
                    aria-label={`Open live demonstration for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn-secondary"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </footer>
          </article>
        )
      })}
    </SectionPageLayout>
  )
}
