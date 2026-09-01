import type { FC } from 'react'
import type { SectionItem } from '../types/section'
import { PERSONAL_INFO } from '../data/personal'
import { SectionPageLayout } from '../components/layout/SectionPageLayout'
import './pages.css'

export interface ContactPageProps {
  section: SectionItem
  onBack: () => void
}

export const ContactPage: FC<ContactPageProps> = ({ section, onBack }) => {
  return (
    <SectionPageLayout section={section} onBack={onBack}>
      <div className="two-col-grid">
        {/* Left Column: Direct Communication */}
        <article className="page-card" aria-label="Direct Contact Options">
          <header className="page-card-header">
            <div>
              <h3 className="page-card-title">Let's talk.</h3>
              <p className="page-card-subtitle">Have a project, opportunity, or just want to say hi?</p>
            </div>
            <div className="status-badge">
              <span className="status-badge-dot" aria-hidden="true" />
              <span>Available</span>
            </div>
          </header>

          <p className="page-card-body">
            I'm always open to discussing full-stack software engineering roles, interesting projects,
            or engineering collaborations.
          </p>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Email */}
            <div className="contact-item-card">
              <span className="contact-item-icon" aria-hidden="true">✉</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="contact-item-label">Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="contact-item-value"
                  style={{ color: 'var(--accent-highlight)' }}
                  aria-label={`Send email to ${PERSONAL_INFO.email}`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item-card">
              <span className="contact-item-icon" aria-hidden="true">☎</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="contact-item-label">Phone</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="contact-item-value"
                  style={{ color: 'var(--accent-highlight)' }}
                  aria-label={`Call ${PERSONAL_INFO.phone}`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item-card">
              <span className="contact-item-icon" aria-hidden="true">⌖</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20from%20Portfolio`}
              className="action-btn-primary"
              aria-label={`Send email to ${PERSONAL_INFO.name}`}
            >
              <span>Send an Email</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        {/* Right Column: Public Profiles & Links */}
        <article className="page-card" aria-label="Public Profiles and Handles">
          <header className="page-card-header">
            <div>
              <h3 className="page-card-title">Find Me Online</h3>
              <p className="page-card-subtitle">Profiles, Repositories & Resume</p>
            </div>
          </header>

          <p className="page-card-body">
            Check out my GitHub repositories, LinkedIn profile, competitive programming stats, or download my resume.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {PERSONAL_INFO.socialLinks.map((link) => (
              <div key={link.platform} className="contact-item-card">
                <span className="contact-item-icon" aria-hidden="true">
                  {link.platform === 'GitHub'
                    ? '⌥'
                    : link.platform === 'LinkedIn'
                    ? '⌘'
                    : link.platform === 'CodeChef'
                    ? '★'
                    : '📄'}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className="contact-item-label">{link.platform}</span>
                  {link.url.startsWith('http') ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-value"
                      style={{ color: 'var(--accent-highlight)' }}
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <a
                      href={link.url}
                      className="contact-item-value"
                      style={{ color: 'var(--accent-highlight)' }}
                    >
                      {link.label} ↓
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="placeholder-notice-card" style={{ marginTop: '20px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--accent-highlight)',
              }}
            >
              💬
            </span>
            <p className="placeholder-notice-text">
              Feel free to reach out anytime via email or connect on LinkedIn.
            </p>
          </div>
        </article>
      </div>
    </SectionPageLayout>
  )
}
