import { useEffect, useRef, useState, useCallback } from 'react'
import type { FC } from 'react'
import type { SkillCategory } from '../../types/skills'
import { SKILL_CATEGORY_GROUPS, SKILLS_DICTIONARY } from '../../data/skills'
import './SkillExplorer.css'

export interface SkillExplorerProps {
  onDismissInspector?: () => void
}

export const SkillExplorer: FC<SkillExplorerProps> = ({ onDismissInspector }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>('react')
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | SkillCategory>('all')
  const inspectorRef = useRef<HTMLDivElement | null>(null)

  const selectedSkill = selectedSkillId ? SKILLS_DICTIONARY[selectedSkillId] : null

  // Handle closing inspector
  const handleCloseInspector = useCallback(() => {
    setSelectedSkillId(null)
    if (onDismissInspector) {
      onDismissInspector()
    }
  }, [onDismissInspector])

  // Keyboard accessibility: Close inspector on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedSkillId) {
        handleCloseInspector()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedSkillId, handleCloseInspector])

  // Smooth scroll inspector into view when a new skill is selected
  useEffect(() => {
    if (selectedSkillId && inspectorRef.current) {
      inspectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [selectedSkillId])

  const filteredGroups =
    activeCategoryFilter === 'all'
      ? SKILL_CATEGORY_GROUPS
      : SKILL_CATEGORY_GROUPS.filter((g) => g.id === activeCategoryFilter)

  return (
    <div className="skill-explorer-container" aria-label="Interactive Technical Skills Explorer">
      {/* Category Filter Tabs */}
      <nav
        className="skill-category-tabs"
        role="tablist"
        aria-label="Filter skills by engineering domain"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategoryFilter === 'all'}
          className={`category-tab-btn ${activeCategoryFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategoryFilter('all')}
        >
          All Domains
        </button>
        {SKILL_CATEGORY_GROUPS.map((group) => {
          const isActive = activeCategoryFilter === group.id
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-category={group.id}
              className={`category-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter(group.id)}
            >
              {group.shortTitle || group.title}
            </button>
          )
        })}
      </nav>

      {/* Selected Skill Inspector Panel */}
      {selectedSkill && (
        <section
          id="skill-inspector-panel"
          ref={inspectorRef}
          className="skill-inspector-panel"
          data-category={selectedSkill.category}
          role="region"
          aria-label={`Skill details for ${selectedSkill.name}`}
          tabIndex={-1}
        >
          <header className="inspector-header">
            <div className="inspector-title-group">
              <span className="inspector-category-badge">
                <span className="skill-node-indicator" aria-hidden="true" />
                <span>
                  {selectedSkill.category === 'frontend' && 'Frontend Engineering'}
                  {selectedSkill.category === 'backend' && 'Backend & APIs'}
                  {selectedSkill.category === 'database' && 'Database & Cloud'}
                  {selectedSkill.category === 'ingestion' && 'Ingestion & Analytics'}
                  {selectedSkill.category === 'tools' && 'Tools & Engineering'}
                </span>
              </span>
              <h2 className="inspector-title">{selectedSkill.name}</h2>
              <p className="inspector-tagline">{selectedSkill.tagline}</p>
            </div>

            <button
              type="button"
              className="inspector-close-btn"
              onClick={handleCloseInspector}
              aria-label="Close skill inspector panel (Press Escape)"
            >
              ✕ Close
            </button>
          </header>

          <p className="inspector-description">{selectedSkill.description}</p>

          {/* Where I've used it */}
          <div className="inspector-projects-section">
            <h3 className="inspector-section-heading">
              <span aria-hidden="true">✦</span>
              <span>Where I've used it</span>
            </h3>

            {selectedSkill.verifiedProjects.map((proj) => (
              <div key={proj.projectId} className="inspector-project-card">
                <div className="inspector-project-header">
                  <span className="inspector-project-name">{proj.projectName}</span>
                  <span className="inspector-project-role">{proj.roleTitle}</span>
                </div>

                <ul className="inspector-uses-list">
                  {proj.concreteUses.map((use, index) => (
                    <li key={index} className="inspector-use-item">
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Related Architectural Concepts */}
          {selectedSkill.relatedConcepts && selectedSkill.relatedConcepts.length > 0 && (
            <div className="inspector-concepts-section">
              <span className="inspector-concepts-label">
                Key Concepts & Related Technologies
              </span>
              <div className="inspector-concepts-list">
                {selectedSkill.relatedConcepts.map((concept) => (
                  <span key={concept} className="concept-chip">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Constellation Cluster Groups */}
      <div className="skill-groups-grid">
        {filteredGroups.map((group) => (
          <section
            key={group.id}
            className="skill-group-card"
            data-category={group.id}
            aria-label={group.title}
          >
            <header className="skill-group-header">
              <h3 className="skill-group-title">{group.title}</h3>
              <p className="skill-group-subtitle">{group.subtitle}</p>
              <p className="skill-group-desc">{group.description}</p>
            </header>

            <div
              className="skill-nodes-cluster"
              role="tablist"
              aria-label={`${group.title} skills constellation`}
            >
              {group.skillIds.map((skillId) => {
                const skill = SKILLS_DICTIONARY[skillId]
                if (!skill) return null

                const isSelected = selectedSkillId === skill.id
                const projectCount = skill.verifiedProjects.length

                return (
                  <button
                    key={skill.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls="skill-inspector-panel"
                    data-category={group.id}
                    className={`skill-node-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedSkillId(skill.id)}
                    aria-label={`Inspect ${skill.name} technology details`}
                  >
                    <span className="skill-node-indicator" aria-hidden="true" />
                    <span className="skill-node-name">{skill.name}</span>
                    <span className="skill-project-count-tag" aria-hidden="true">
                      {projectCount === 1
                        ? skill.verifiedProjects[0].projectName.split(' ')[0]
                        : `${projectCount} Projects`}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="placeholder-notice-card" style={{ marginTop: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--accent-highlight)',
          }}
        >
          ✦
        </span>
        <p className="placeholder-notice-text">
          Practical skills backed by real projects, production deployments, and hands-on problem solving.
        </p>
      </div>
    </div>
  )
}

