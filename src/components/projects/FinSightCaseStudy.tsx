import { useRef, useState } from 'react'
import type { FC } from 'react'
import { FINSIGHT_DATA } from '../../data/finsight'
import './FinSightCaseStudy.css'

export interface FinSightCaseStudyProps {
  onBack: () => void
}

export const FinSightCaseStudy: FC<FinSightCaseStudyProps> = ({ onBack }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('hdfc-parser')
  const [selectedTechName, setSelectedTechName] = useState<string>('FastAPI')
  const nodeInspectorRef = useRef<HTMLDivElement | null>(null)

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    // On mobile / narrow viewports, smoothly scroll the inspector card into view
    if (typeof window !== 'undefined' && window.innerWidth < 768 && nodeInspectorRef.current) {
      nodeInspectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const selectedNode =
    FINSIGHT_DATA.architectureNodes.find((n) => n.id === selectedNodeId) ??
    FINSIGHT_DATA.architectureNodes[0]

  const selectedTech =
    FINSIGHT_DATA.techStackRoles.find((t) => t.name === selectedTechName) ??
    FINSIGHT_DATA.techStackRoles[0]

  return (
    <article className="finsight-casestudy-container" aria-label="FinSight Project Deep Dive">
      {/* 1. HERO SECTION */}
      <section className="case-study-hero">
        <header className="case-study-hero-header">
          <div className="case-study-badge">
            <span className="status-badge-dot" aria-hidden="true" />
            <span>{FINSIGHT_DATA.status}</span>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={FINSIGHT_DATA.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-primary"
              aria-label="Open FinSight live web application"
            >
              <span>Live Demo</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={FINSIGHT_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-secondary"
              aria-label="Open FinSight repository on GitHub"
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <h1 className="case-study-title">{FINSIGHT_DATA.title}</h1>
        <p className="case-study-tagline">{FINSIGHT_DATA.tagline}</p>
        <p className="case-study-desc">{FINSIGHT_DATA.heroDescription}</p>

        <div className="tech-pills-list" style={{ marginTop: '24px' }}>
          {FINSIGHT_DATA.techStackRoles.map((tech) => (
            <span key={tech.name} className="tech-pill highlight">
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="page-card">
        <h2 className="page-card-title">{FINSIGHT_DATA.problem.title}</h2>
        <p className="page-card-subtitle">Statement Ingestion Challenge</p>
        <p className="page-card-body" style={{ marginTop: '14px' }}>
          {FINSIGHT_DATA.problem.summary}
        </p>
      </section>

      {/* 3. PRODUCT FLOW */}
      <section className="page-card">
        <h2 className="page-card-title">End-to-End Processing Flow</h2>
        <p className="page-card-subtitle">From Raw Statement to Actionable Intelligence</p>

        <div className="flow-steps-grid">
          {FINSIGHT_DATA.productFlow.map((step) => (
            <div key={step.step} className="flow-step-card">
              <span className="flow-step-num">{`Step ${step.step}`}</span>
              <h3 className="flow-step-title">{step.title}</h3>
              <p className="flow-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE ARCHITECTURE & DATA FLOW */}
      <section className="page-card" aria-label="Interactive Architecture Explorer">
        <header className="page-card-header">
          <div>
            <h2 className="page-card-title">System Architecture</h2>
            <p className="page-card-subtitle">Select any node to inspect data flow & responsibilities</p>
          </div>
        </header>

        <div className="architecture-visualizer-container">
          <div className="arch-flow-canvas">
            {/* Step 1 */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'statement' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('statement')}
              aria-label="Select Bank Statement Node"
            >
              <div>
                <span className="arch-node-label">Bank Statement</span>
                <span className="arch-node-sub">Raw Ingestion Source (.xls / .csv)</span>
              </div>
              <span className="arch-node-tag">Source</span>
            </button>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 2 */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'hdfc-parser' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('hdfc-parser')}
              aria-label="Select HDFC & CSV Parser Node"
            >
              <div>
                <span className="arch-node-label">HDFC .xls & CSV Parser</span>
                <span className="arch-node-sub">Dynamic Header & Table Boundary Detection</span>
              </div>
              <span className="arch-node-tag">Python / xlrd</span>
            </button>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 3 */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'pipeline' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('pipeline')}
              aria-label="Select Transaction Pipeline Node"
            >
              <div>
                <span className="arch-node-label">Transaction Normalization Pipeline</span>
                <span className="arch-node-sub">Schema Validation & Signed Decimal Parsing</span>
              </div>
              <span className="arch-node-tag">FastAPI / Pydantic</span>
            </button>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 4 */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'categorization' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('categorization')}
              aria-label="Select Categorization Engine Node"
            >
              <div>
                <span className="arch-node-label">Deterministic Categorization Engine</span>
                <span className="arch-node-sub">Merchant Normalization & User Rule Assignment</span>
              </div>
              <span className="arch-node-tag">Regex / Rules</span>
            </button>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 5: DB */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'postgresql' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('postgresql')}
              aria-label="Select PostgreSQL Database Node"
            >
              <div>
                <span className="arch-node-label">PostgreSQL Relational DB</span>
                <span className="arch-node-sub">Isolated User Records & Categorized Ledgers</span>
              </div>
              <span className="arch-node-tag">SQLAlchemy / Supabase</span>
            </button>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 6: Parallel Analytics & Risk */}
            <div className="arch-parallel-row">
              <button
                type="button"
                className={`arch-node-btn ${selectedNodeId === 'analytics' ? 'selected' : ''}`}
                onClick={() => handleNodeSelect('analytics')}
                aria-label="Select Analytics Engine Node"
              >
                <div>
                  <span className="arch-node-label">Cash Flow Analytics</span>
                  <span className="arch-node-sub">Exact Decimal Aggregations</span>
                </div>
                <span className="arch-node-tag">FastAPI</span>
              </button>

              <button
                type="button"
                className={`arch-node-btn ${selectedNodeId === 'risk-engine' ? 'selected' : ''}`}
                onClick={() => handleNodeSelect('risk-engine')}
                aria-label="Select 7-Signal Risk Engine Node"
              >
                <div>
                  <span className="arch-node-label">7-Signal Risk Engine</span>
                  <span className="arch-node-sub">Deterministic Heuristic Engine</span>
                </div>
                <span className="arch-node-tag">Algorithms</span>
              </button>
            </div>

            <span className="arch-connector-arrow" aria-hidden="true">↓</span>

            {/* Step 7: Dashboard UI */}
            <button
              type="button"
              className={`arch-node-btn ${selectedNodeId === 'dashboard' ? 'selected' : ''}`}
              onClick={() => handleNodeSelect('dashboard')}
              aria-label="Select React Client UI Node"
            >
              <div>
                <span className="arch-node-label">React Client Dashboard</span>
                <span className="arch-node-sub">Interactive Analytics, Uploads & Risk Alerts</span>
              </div>
              <span className="arch-node-tag">React / TypeScript</span>
            </button>
          </div>

          {/* Node Inspector Details Card */}
          <div
            ref={nodeInspectorRef}
            className="node-inspector-card"
            role="region"
            aria-label="Selected Architecture Node Details"
          >
            <header className="node-inspector-header">
              <div>
                <h3 className="node-inspector-title">{selectedNode.label}</h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#67e8f9',
                    letterSpacing: '0.08em',
                  }}
                >
                  {selectedNode.subtitle}
                </span>
              </div>
              <div className="tech-pills-list" style={{ marginTop: 0 }}>
                {selectedNode.technologies.map((t) => (
                  <span key={t} className="tech-pill highlight">
                    {t}
                  </span>
                ))}
              </div>
            </header>

            <p className="page-card-body">{selectedNode.roleDescription}</p>

            <div className="node-io-grid">
              <div className="node-io-item">
                <span className="node-io-label">Input Artifact</span>
                <span className="node-io-val">{selectedNode.inputs}</span>
              </div>
              <div className="node-io-item">
                <span className="node-io-label">Output Result</span>
                <span className="node-io-val">{selectedNode.outputs}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HDFC .XLS PARSER ENGINEERING */}
      <section className="page-card">
        <h2 className="page-card-title">{FINSIGHT_DATA.hdfcParserDetails.title}</h2>
        <p className="page-card-subtitle">Direct Binary BIFF8 Ingestion with Dynamic Header Detection</p>

        <div className="flow-steps-grid">
          {FINSIGHT_DATA.hdfcParserDetails.features.map((feature) => (
            <div key={feature.title} className="flow-step-card">
              <h3 className="flow-step-title">{feature.title}</h3>
              <p className="flow-step-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CATEGORIZATION & ANALYTICS */}
      <section className="two-col-grid">
        <div className="page-card">
          <h2 className="page-card-title">{FINSIGHT_DATA.categorizationDetails.title}</h2>
          <p className="page-card-subtitle">Hierarchical Keyword Classification & User Rules</p>

          <div style={{ margin: '16px 0' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--accent-highlight)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              10 Supported Standard Categories
            </span>
            <div className="tech-pills-list" style={{ marginTop: '8px' }}>
              {FINSIGHT_DATA.categorizationDetails.supportedCategories.map((cat) => (
                <span key={cat} className="tech-pill">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <ul className="feature-list">
            {FINSIGHT_DATA.categorizationDetails.features.map((feat) => (
              <li key={feat.title} className="feature-item">
                <strong>{feat.title}:</strong> {feat.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="page-card">
          <h2 className="page-card-title">{FINSIGHT_DATA.analyticsDetails.title}</h2>
          <p className="page-card-subtitle">Exact Decimal Cash Flow Aggregations</p>

          <ul className="feature-list" style={{ marginTop: '16px' }}>
            {FINSIGHT_DATA.analyticsDetails.metrics.map((metric) => (
              <li key={metric.name} className="feature-item">
                <strong>{metric.name}:</strong> {metric.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. RISK DETECTION RULES */}
      <section className="page-card" aria-label="7-Signal Risk Engine Details">
        <header className="page-card-header">
          <div>
            <h2 className="page-card-title">7-Signal Heuristic Risk Engine</h2>
            <p className="page-card-subtitle">Deterministic Pattern Recognition & Outlier Logic</p>
          </div>
          <span className="status-badge">
            <span className="status-badge-dot" aria-hidden="true" />
            <span>7 Risk Signals</span>
          </span>
        </header>

        {/* Stability Index Box */}
        <div
          style={{
            background: 'rgba(6, 182, 212, 0.06)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '14px',
            padding: '18px 22px',
            margin: '16px 0 24px',
          }}
        >
          <h3
            style={{
              margin: '0 0 6px',
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              color: '#67e8f9',
            }}
          >
            {FINSIGHT_DATA.stabilityIndexModel.title}
          </h3>
          <p
            style={{
              margin: '0 0 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: '#f8fafc',
            }}
          >
            {FINSIGHT_DATA.stabilityIndexModel.formula}
          </p>
          <div className="flow-steps-grid" style={{ marginTop: '10px' }}>
            {FINSIGHT_DATA.stabilityIndexModel.levels.map((lvl) => (
              <div
                key={lvl.level}
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <strong
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: lvl.level === 'HIGH' ? '#fda4af' : lvl.level === 'MODERATE' ? '#fde68a' : '#bae6fd',
                  }}
                >
                  {lvl.level}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#94a3b8' }}>
                  {lvl.condition}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="risk-signals-grid">
          {FINSIGHT_DATA.riskSignals.map((signal) => (
            <div key={signal.code} className={`risk-card severity-${signal.severity}`}>
              <div className="risk-header">
                <span className="risk-code">{signal.code}</span>
                <span className={`risk-severity-badge severity-${signal.severity}`}>
                  {signal.severity.toUpperCase()}
                </span>
              </div>

              <h3 className="flow-step-title">{signal.title}</h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#67e8f9' }}>
                Required History: {signal.minHistory}
              </span>
              <p className="flow-step-desc">{signal.description}</p>

              <div className="risk-condition-box">
                <div style={{ marginBottom: '6px' }}>
                  <strong style={{ color: '#e2e8f0' }}>Formula: </strong>
                  <span>{signal.formula}</span>
                </div>
                <div style={{ marginBottom: '6px' }}>
                  <strong style={{ color: '#e2e8f0' }}>Trigger: </strong>
                  <span>{signal.triggerCondition}</span>
                </div>
                <div>
                  <strong style={{ color: '#e2e8f0' }}>Severity Rule: </strong>
                  <span>{signal.severityRule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE TECH STACK EXPLORER */}
      <section className="page-card" aria-label="Interactive Technology Stack Explorer">
        <header className="page-card-header">
          <div>
            <h2 className="page-card-title">Technology Stack Explorer</h2>
            <p className="page-card-subtitle">Click any technology to review its specific architectural role</p>
          </div>
        </header>

        <div className="tech-explorer-container">
          <div className="tech-pills-interactive" role="tablist" aria-label="FinSight Technologies">
            {FINSIGHT_DATA.techStackRoles.map((tech) => (
              <button
                key={tech.name}
                type="button"
                role="tab"
                aria-selected={selectedTechName === tech.name}
                className={`tech-interactive-btn ${selectedTechName === tech.name ? 'selected' : ''}`}
                onClick={() => setSelectedTechName(tech.name)}
              >
                {tech.name}
              </button>
            ))}
          </div>

          <div className="tech-role-card" role="tabpanel" aria-label={`${selectedTech.name} details`}>
            <span className="tech-role-title">
              {`${selectedTech.name} • ${selectedTech.category}`}
            </span>
            <p className="tech-role-desc">{selectedTech.role}</p>
          </div>
        </div>
      </section>

      {/* 9. SECURITY & DEPLOYMENT */}
      <section className="two-col-grid">
        <div className="page-card">
          <h2 className="page-card-title">{FINSIGHT_DATA.securityModel.title}</h2>
          <p className="page-card-subtitle">Tenant Isolation & Session Management</p>

          <ul className="feature-list">
            {FINSIGHT_DATA.securityModel.features.map((feat) => (
              <li key={feat.title} className="feature-item">
                <strong>{feat.title}:</strong> {feat.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="page-card">
          <h2 className="page-card-title">{FINSIGHT_DATA.deploymentModel.title}</h2>
          <p className="page-card-subtitle">Cloud Topology & Hosting</p>

          <ul className="feature-list">
            {FINSIGHT_DATA.deploymentModel.services.map((svc) => (
              <li key={svc.tier} className="feature-item">
                <strong>{svc.tier} ({svc.platform}):</strong> {svc.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. TESTING & RELIABILITY */}
      <section className="page-card">
        <h2 className="page-card-title">{FINSIGHT_DATA.testingModel.title}</h2>
        <p className="page-card-subtitle">Automated tests, linting, and build verification</p>

        <div className="testing-facts-grid" style={{ marginTop: '20px' }}>
          {FINSIGHT_DATA.testingModel.facts.map((fact) => (
            <div key={fact.label} className="testing-fact-card">
              <span className="testing-fact-value">{fact.value}</span>
              <span className="testing-fact-label">{fact.label}</span>
              <p className="testing-fact-detail">{fact.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOOTER ACTION */}
      <footer className="page-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          type="button"
          className="section-back-btn"
          onClick={onBack}
          aria-label="Return to projects gallery"
        >
          <span className="section-back-arrow" aria-hidden="true">←</span>
          <span>Back to Projects Gallery</span>
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={FINSIGHT_DATA.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-primary"
          >
            <span>Launch FinSight</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </article>
  )
}
