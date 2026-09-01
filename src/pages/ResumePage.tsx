import { useState } from 'react'
import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { PERSONAL_INFO } from '../data/personal'
import { EXPERIENCE_DATA } from '../data/experience'
import { EDUCATION_DATA } from '../data/education'
import { PROJECTS_DATA } from '../data/projects'
import { SKILL_CATEGORY_GROUPS, SKILLS_DICTIONARY } from '../data/skills'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import './pages.css'
import './ResumePage.css'

export interface ResumePageProps {
  section: SectionItem
  onBack: () => void
}

export const ResumePage: FC<ResumePageProps> = ({ section, onBack }) => {
  // State tracking expanded entries
  const [expandedExpIds, setExpandedExpIds] = useState<Set<string>>(
    () => new Set(EXPERIENCE_DATA.map((e) => e.id))
  )
  const [expandedProjIds, setExpandedProjIds] = useState<Set<string>>(
    () => new Set(PROJECTS_DATA.map((p) => p.id))
  )
  const [expandedSkillGroupIds, setExpandedSkillGroupIds] = useState<Set<string>>(
    () => new Set(SKILL_CATEGORY_GROUPS.map((g) => g.id))
  )

  const isAllExpanded =
    expandedExpIds.size === EXPERIENCE_DATA.length &&
    expandedProjIds.size === PROJECTS_DATA.length &&
    expandedSkillGroupIds.size === SKILL_CATEGORY_GROUPS.length

  const handleToggleAll = () => {
    if (isAllExpanded) {
      setExpandedExpIds(new Set())
      setExpandedProjIds(new Set())
      setExpandedSkillGroupIds(new Set())
    } else {
      setExpandedExpIds(new Set(EXPERIENCE_DATA.map((e) => e.id)))
      setExpandedProjIds(new Set(PROJECTS_DATA.map((p) => p.id)))
      setExpandedSkillGroupIds(new Set(SKILL_CATEGORY_GROUPS.map((g) => g.id)))
    }
  }

  const toggleExperience = (id: string) => {
    setExpandedExpIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const toggleProject = (id: string) => {
    setExpandedProjIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const toggleSkillGroup = (id: string) => {
    setExpandedSkillGroupIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <div className="resume-container">
        {/* Top Actions & Controls Bar */}
        <div className="resume-action-bar" role="toolbar" aria-label="Resume actions and controls">
          <div className="resume-action-group">
            {/* Download/View PDF Action */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_Chaturvedi_Resume.pdf"
              className="action-btn-primary"
              aria-label="Download or view Prakhar Chaturvedi's Resume PDF"
            >
              <span>📄</span>
              <span>Download Resume (PDF)</span>
              <span aria-hidden="true">↓</span>
            </a>

            {/* Quick External Profile Links */}
            {PERSONAL_INFO.linkedinUrl && (
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn-secondary"
                aria-label="Open Prakhar's LinkedIn profile in a new tab"
              >
                <span>⌘</span>
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {PERSONAL_INFO.githubUrl && (
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn-secondary"
                aria-label="Open Prakhar's GitHub profile in a new tab"
              >
                <span>⌥</span>
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {PERSONAL_INFO.email && (
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Inquiry`}
                className="action-btn-secondary"
                aria-label="Send an email inquiry"
              >
                <span>✉</span>
                <span>Email</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="resume-btn-toggle"
            onClick={handleToggleAll}
            aria-label={isAllExpanded ? 'Collapse all resume sections' : 'Expand all resume sections'}
          >
            <span>{isAllExpanded ? '▴' : '▾'}</span>
            <span>{isAllExpanded ? 'Collapse All' : 'Expand All'}</span>
          </button>
        </div>

        {/* Master Digital Resume Document Card */}
        <article className="resume-document-card" aria-label="Resume Document">
          {/* Header */}
          <header className="resume-doc-header">
            <div className="resume-header-top">
              <div>
                <h1 className="resume-candidate-name">{PERSONAL_INFO.name}</h1>
                <p className="resume-candidate-title">{PERSONAL_INFO.role}</p>
              </div>

              <div className="resume-meta-badge">
                <span className="status-badge-dot" aria-hidden="true" />
                <span>Resume • 2026</span>
              </div>
            </div>

            {/* Contact Matrix */}
            <div className="resume-contact-bar" aria-label="Candidate contact and profile links">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="resume-contact-link"
                aria-label={`Email: ${PERSONAL_INFO.email}`}
              >
                <span className="resume-contact-icon">✉</span>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="resume-contact-link"
                aria-label={`Phone: ${PERSONAL_INFO.phone}`}
              >
                <span className="resume-contact-icon">☎</span>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <span className="resume-contact-link">
                <span className="resume-contact-icon">⌖</span>
                <span>{PERSONAL_INFO.location}</span>
              </span>

              {PERSONAL_INFO.githubUrl && (
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-contact-link"
                  aria-label="GitHub Profile"
                >
                  <span className="resume-contact-icon">⌥</span>
                  <span>github.com/liquid-server-2 ↗</span>
                </a>
              )}

              {PERSONAL_INFO.linkedinUrl && (
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-contact-link"
                  aria-label="LinkedIn Profile"
                >
                  <span className="resume-contact-icon">⌘</span>
                  <span>linkedin.com/in/prakhar-chaturvedi-18ab75379 ↗</span>
                </a>
              )}

              {PERSONAL_INFO.codechefUrl && (
                <a
                  href={PERSONAL_INFO.codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-contact-link"
                  aria-label="CodeChef Profile"
                >
                  <span className="resume-contact-icon">★</span>
                  <span>codechef.com/users/jwell (3-Star) ↗</span>
                </a>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-summary-section" aria-labelledby="resume-summary-heading">
            <h2 id="resume-summary-heading" className="resume-section-title">
              Professional Summary
            </h2>
            {PERSONAL_INFO.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="resume-summary-text">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Main 2-Column Layout */}
          <div className="resume-main-grid">
            {/* Left / Primary Column: Experience & Projects */}
            <div className="resume-column">
              {/* Professional Experience Section */}
              <section aria-labelledby="resume-experience-heading">
                <h2 id="resume-experience-heading" className="resume-section-title">
                  Work Experience
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {EXPERIENCE_DATA.map((exp) => {
                    const isExpanded = expandedExpIds.has(exp.id)
                    const contentId = `exp-details-${exp.id}`

                    return (
                      <article key={exp.id} className="resume-entry-card">
                        <button
                          type="button"
                          className="resume-entry-header"
                          onClick={() => toggleExperience(exp.id)}
                          aria-expanded={isExpanded}
                          aria-controls={contentId}
                        >
                          <div>
                            <h3 className="resume-entry-role">
                              {exp.role}
                              <span className="resume-entry-toggle-indicator" aria-hidden="true">
                                {isExpanded ? '▴' : '▾'}
                              </span>
                            </h3>
                            <p className="resume-entry-org">
                              {exp.company}
                              {exp.location && (
                                <span style={{ color: 'var(--color-text-dim)', fontWeight: 400 }}>
                                  {' '}• {exp.location}
                                </span>
                              )}
                            </p>
                          </div>

                          <span className="resume-entry-period">{exp.period}</span>
                        </button>

                        <p className="resume-entry-desc">{exp.description}</p>

                        {/* Expandable Responsibility Bullets */}
                        {isExpanded && exp.highlights && exp.highlights.length > 0 && (
                          <div id={contentId}>
                            <ul className="resume-highlights-list">
                              {exp.highlights.map((bullet, idx) => (
                                <li key={idx} className="resume-highlight-item">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.techStack && exp.techStack.length > 0 && (
                          <div className="tech-pills-list" aria-label="Technologies used">
                            {exp.techStack.map((tech) => (
                              <span key={tech} className="tech-pill highlight">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>

              {/* Technical Projects Section */}
              <section aria-labelledby="resume-projects-heading">
                <h2 id="resume-projects-heading" className="resume-section-title">
                  Featured Projects
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {PROJECTS_DATA.map((project) => {
                    const isExpanded = expandedProjIds.has(project.id)
                    const contentId = `proj-details-${project.id}`

                    return (
                      <article key={project.id} className="resume-entry-card">
                        <button
                          type="button"
                          className="resume-entry-header"
                          onClick={() => toggleProject(project.id)}
                          aria-expanded={isExpanded}
                          aria-controls={contentId}
                        >
                          <div>
                            <h3 className="resume-entry-role">
                              {project.title}
                              <span className="resume-entry-toggle-indicator" aria-hidden="true">
                                {isExpanded ? '▴' : '▾'}
                              </span>
                            </h3>
                            <p className="resume-entry-org">{project.tagline}</p>
                          </div>

                          <span className="resume-entry-period">{project.status}</span>
                        </button>

                        <p className="resume-entry-desc">{project.description}</p>

                        {/* Expandable Project Highlights */}
                        {isExpanded && project.highlights && project.highlights.length > 0 && (
                          <div id={contentId}>
                            <ul className="resume-highlights-list">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="resume-highlight-item">
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.techStack && project.techStack.length > 0 && (
                          <div className="tech-pills-list" aria-label="Technologies used in project">
                            {project.techStack.map((tech) => (
                              <span key={tech} className="tech-pill highlight">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {(project.demoUrl || project.githubUrl) && (
                          <div className="resume-entry-links">
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-mini-link"
                                aria-label={`View live demo for ${project.title}`}
                              >
                                <span>Live Demo ↗</span>
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-mini-link"
                                aria-label={`View source code for ${project.title} on GitHub`}
                              >
                                <span>GitHub ↗</span>
                              </a>
                            )}
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>
            </div>

            {/* Right / Secondary Column: Skills, Education & Achievements */}
            <div className="resume-column">
              {/* Technical Skills Matrix */}
              <section aria-labelledby="resume-skills-heading">
                <h2 id="resume-skills-heading" className="resume-section-title">
                  Technical Skills
                </h2>

                <div>
                  {SKILL_CATEGORY_GROUPS.map((group) => {
                    const isExpanded = expandedSkillGroupIds.has(group.id)
                    const contentId = `skill-group-${group.id}`

                    return (
                      <div key={group.id} className="resume-skill-block">
                        <button
                          type="button"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            textAlign: 'left',
                            marginBottom: '8px',
                          }}
                          onClick={() => toggleSkillGroup(group.id)}
                          aria-expanded={isExpanded}
                          aria-controls={contentId}
                        >
                          <h3 className="resume-skill-title">{group.title}</h3>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              color: 'var(--accent-highlight)',
                            }}
                          >
                            {isExpanded ? '▴' : '▾'}
                          </span>
                        </button>

                        <div id={contentId} className="resume-skill-pills">
                          {group.skillIds.map((skillId) => {
                            const skill = SKILLS_DICTIONARY[skillId]
                            if (!skill) return null

                            return (
                              <span key={skill.id} className="resume-skill-chip" title={skill.tagline}>
                                {skill.name}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Education Section */}
              <section aria-labelledby="resume-education-heading">
                <h2 id="resume-education-heading" className="resume-section-title">
                  Education
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {EDUCATION_DATA.map((edu) => (
                    <article key={edu.id} className="resume-sidebar-card">
                      <h3 className="resume-edu-degree">{edu.degree}</h3>
                      <p className="resume-edu-inst">{edu.institution}</p>
                      <span className="resume-edu-period">{edu.period}</span>
                    </article>
                  ))}
                </div>
              </section>

              {/* Achievements Section */}
              <section aria-labelledby="resume-achievements-heading">
                <h2 id="resume-achievements-heading" className="resume-section-title">
                  Achievements
                </h2>

                <div className="resume-sidebar-card">
                  {PERSONAL_INFO.achievements.map((ach) => (
                    <div key={ach.id} className="resume-achieve-item">
                      <span className="resume-achieve-metric">{ach.metric}</span>
                      <span className="resume-achieve-label">{ach.title}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </SectionPageLayout>
  )
}
