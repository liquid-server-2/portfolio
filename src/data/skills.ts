import type { SkillCategoryGroup, SkillDetail } from '../types/skills'

export const SKILL_CATEGORY_GROUPS: readonly SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Client Architecture & UI Systems',
    description: 'Component-driven client applications, state synchronization, and accessible responsive interfaces.',
    skillIds: ['react', 'typescript', 'javascript-esnext', 'modern-css-canvas', 'vite'],
  },
  {
    id: 'backend',
    title: 'Backend & Services',
    subtitle: 'Services, APIs & Architecture',
    description: 'Scalable server frameworks, REST & WebSocket protocols, enterprise Java/Python services, and session security.',
    skillIds: ['spring-boot', 'fastapi', 'java-core', 'python', 'rest-apis', 'express-websockets'],
  },
  {
    id: 'database',
    title: 'Database & Cloud DevOps',
    subtitle: 'Relational Storage & Cloud Infrastructure',
    description: 'ACID-compliant relational schemas, indexed optimization, AWS infrastructure, Docker containerization, and CI/CD pipelines.',
    skillIds: ['postgresql', 'mysql', 'aws-cloud', 'docker-ci-cd', 'sqlalchemy', 'render'],
  },
  {
    id: 'ingestion',
    title: 'Ingestion & Analytics',
    subtitle: 'Data Pipelines & Risk Engines',
    description: 'Binary spreadsheet parsing, automated classification pipelines, cash flow rollups, and heuristic risk algorithms.',
    skillIds: ['hdfc-parser', 'csv-ingestion', 'categorization-engine', 'risk-engine', 'cash-flow-analytics'],
  },
  {
    id: 'tools',
    title: 'AI Tooling & Engineering Standards',
    subtitle: 'AI Tools, Testing & Core Concepts',
    description: 'AI-assisted development with Cursor/Claude/GPT, Git workflows, compiler design, and OOP/SOLID design patterns.',
    skillIds: ['ai-assisted-dev', 'git-github', 'dev-tools', 'automated-testing', 'dsa-oop-concepts'],
  },
]

export const SKILLS_DICTIONARY: Record<string, SkillDetail> = {
  react: {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    tagline: 'Component Architecture, React 19/18 & Interactive UI',
    description:
      'Declarative, component-driven client architecture leveraging modern hooks, lifecycle orchestration, and performant virtual DOM rendering.',
    highlight: true,
    relatedConcepts: ['Hooks (useState, useEffect, useMemo, useCallback)', 'Context API', 'Component Lifecycle', 'Virtual DOM', 'State Machines'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Frontend Client Architecture',
        concreteUses: [
          'Interactive financial dashboard rendering cash flow charts and monthly trend graphs.',
          'Multi-format statement upload workflows with real-time validation error feedback.',
          'Dynamic transaction ledger table with inline category classification controls.',
          '7-signal risk report feed with severity badges and evidence drill-down drawers.',
        ],
      },
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Orchestration & State Machine',
        concreteUses: [
          'State machine transition coordinator managing home, bursting, entering, and exiting lifecycles.',
          'Dynamic section registry decoupling navigation routes without heavy router dependencies.',
          'Custom hooks for focus management, timer cleanups, and reduced-motion detection.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Client UI Interface',
        concreteUses: [
          'Responsive dashboard for expense tracking, role-based navigation, and category aggregations.',
        ],
      },
    ],
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    tagline: 'Type-Safe Contracts & Compile-Time Rigor',
    description:
      'Strongly typed JavaScript providing compile-time defect prevention, structured domain interfaces, and exhaustive pattern validation.',
    highlight: true,
    relatedConcepts: ['Generics', 'Discriminated Unions', 'Interface Contracts', 'Strict Null Checking', 'verbatimModuleSyntax'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'API Contracts & Client Typing',
        concreteUses: [
          'Strict TypeScript models mirroring backend Pydantic API response schemas.',
          'Type definitions for transaction entries, risk reports, and analytical rollups.',
          'Generic API client utility enforcing request payload and response contracts.',
        ],
      },
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'System Domain & Component Props',
        concreteUses: [
          'Strict domain interfaces for SectionItem, ProjectItem, SkillDetail, and TransitionState.',
          'Type-safe component prop contracts preventing runtime undefined errors.',
          'Full compliance with TypeScript 5.8+ and ESLint strict typechecking.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Authored type-safe frontend modules and component properties for customer-facing real-estate features.',
        ],
      },
    ],
  },

  'javascript-esnext': {
    id: 'javascript-esnext',
    name: 'JavaScript (ESNext) & Node.js',
    category: 'frontend',
    tagline: 'Modern ECMAScript Standards & Event-Driven Runtimes',
    description:
      'Modern JavaScript syntax including Promises, async/await, array transformations, destructuring, and Node.js runtime environments.',
    relatedConcepts: ['Promises / Async-Await', 'Array Methods (map, filter, reduce)', 'Closures', 'Destructuring & Spread', 'Node.js Runtime'],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Engineered and tested client-side real estate search and filter functionality across 500+ live property listings.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Client Logic & Data Transformations',
        concreteUses: [
          'Asynchronous fetch pipeline with response transformation and error handling.',
          'Date formatting and localized currency display utilities.',
        ],
      },
      {
        projectId: 'real-time-chat',
        projectName: 'Real-Time Chat Application',
        roleTitle: 'Node.js & WebSocket Communication',
        concreteUses: [
          'Event-driven message routing and connection handling on Node.js.',
        ],
      },
    ],
  },

  'modern-css-canvas': {
    id: 'modern-css-canvas',
    name: 'HTML, CSS, Bootstrap & Responsive UI',
    category: 'frontend',
    tagline: 'Semantic HTML, Glassmorphism, Bootstrap & Responsive Layouts',
    description:
      'Modern web styling leveraging CSS Custom Properties, Bootstrap grids, Thymeleaf templates, and accessible responsive layouts across devices.',
    highlight: true,
    relatedConcepts: ['CSS Custom Properties', 'Bootstrap Grid', 'Thymeleaf', 'Backdrop Filter', 'prefers-reduced-motion', 'Responsive Breakpoints'],
    verifiedProjects: [
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Atmospheric Physics & Visual Design',
        concreteUses: [
          'Zero-gravity floating keyframe physics driven by individualized CSS variables per bubble.',
          'Layered glassmorphic frosted cards with specular reflections and accent glows.',
          'Comprehensive prefers-reduced-motion media query overrides for complete accessibility.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Built responsive, cross-browser web interfaces for Canadian real-estate platform listings.',
        ],
      },
    ],
  },

  vite: {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    tagline: 'Fast Development Server & ESM Bundler',
    description:
      'Modern frontend tooling utilizing native ES modules for instantaneous Hot Module Replacement (HMR) and Rollup-powered production builds.',
    relatedConcepts: ['ES Modules', 'HMR', 'Rollup Asset Bundling', 'Tree Shaking', 'CSS Code Splitting'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Build Tooling & Production Bundler',
        concreteUses: [
          'Configured optimized static distribution deployed seamlessly on Render web services.',
          'Sub-second local development feedback with React Fast Refresh.',
        ],
      },
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Build Engine & Asset Pipeline',
        concreteUses: [
          'Production build compilation generating minified CSS/JS chunks with zero warnings.',
          'Fast TypeScript compilation workflow integrated with tsc -b.',
        ],
      },
    ],
  },

  'spring-boot': {
    id: 'spring-boot',
    name: 'Spring Boot & Spring MVC',
    category: 'backend',
    tagline: 'Enterprise Java Microservices & MVC Architecture',
    description:
      'Enterprise backend framework providing robust dependency injection, Spring MVC controllers, Hibernate ORM data access, JDBC, and JWT security.',
    highlight: true,
    relatedConcepts: ['Controller-Service-Repository', 'Spring MVC', 'Hibernate ORM', 'JDBC', 'JWT Security', 'Role-Based Access Control (RBAC)'],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Spring Boot Backend Architecture',
        concreteUses: [
          'Engineered Controller-Service-Repository architecture for structured enterprise expense tracking.',
          'Configured stateless JWT authentication and role-based authorization for protected financial endpoints.',
          'Integrated Hibernate ORM and JDBC for robust MySQL relational persistence.',
          'Built centralized exception handling and request input validation pipelines.',
        ],
      },
    ],
  },

  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    tagline: 'High-Performance Asynchronous Python Framework',
    description:
      'Modern, high-performance Python web framework based on Starlette and Pydantic, providing native async endpoints, dependency injection, and automatic OpenAPI documentation.',
    highlight: true,
    relatedConcepts: ['Async Endpoints', 'Dependency Injection (Depends)', 'HTTPException Handling', 'OpenAPI / Swagger', 'Middleware'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Core Backend Service Layer',
        concreteUses: [
          'Engineered asynchronous REST API endpoints for statement ingestion, accounts, transactions, and risk reports.',
          'Implemented dependency injection (get_db, get_current_user) for database sessions and auth boundaries.',
          'Configured CORS and secure HTTP-only cookie headers for cross-origin deployment.',
        ],
      },
    ],
  },

  'java-core': {
    id: 'java-core',
    name: 'Java (Core, OOP & SOLID)',
    category: 'backend',
    tagline: 'Object-Oriented Design, SOLID Principles & Clean Code',
    description:
      'Robust object-oriented programming in Java utilizing interface-driven design, SOLID principles, structured exception handling, and enterprise design patterns.',
    highlight: true,
    relatedConcepts: ['OOP Principles (Encapsulation, Polymorphism, Inheritance, Abstraction)', 'SOLID Principles', 'Interface-Driven Design', 'Exception Handling', 'Design Patterns'],
    verifiedProjects: [
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Java Development Intern',
        concreteUses: [
          'Engineered modular, interface-driven Java service classes adhering to SOLID principles.',
          'Practiced structured exception handling and backend debugging on sample service architectures.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Java Backend Development',
        concreteUses: [
          'Implemented domain models, repositories, and business service logic in Java.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Core Java & Data Management',
        concreteUses: [
          'Built structured object models and CRUD database routines in Java.',
        ],
      },
    ],
  },

  python: {
    id: 'python',
    name: 'Python 3',
    category: 'backend',
    tagline: 'Algorithmic Logic, Ingestion & Data Precision',
    description:
      'Versatile backend programming language utilized for data ingestion algorithms, statistical calculations, and exact financial arithmetic.',
    highlight: true,
    relatedConcepts: ['Decimal Monetary Precision', 'collections.defaultdict', 'List Comprehensions', 'Type Hinting (typing)', 'unittest'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Core Ingestion & Risk Algorithm Engine',
        concreteUses: [
          'Engineered native BIFF8 .xls binary parser utilizing xlrd to extract transactions from HDFC exports.',
          'Implemented statistical outlier calculations utilizing Median and Interquartile Range (IQR).',
          'Enforced exact Decimal monetary arithmetic across all cash flow and risk calculations to eliminate floating-point errors.',
        ],
      },
    ],
  },

  'rest-apis': {
    id: 'rest-apis',
    name: 'RESTful API Design & Input Validation',
    category: 'backend',
    tagline: 'Resource-Oriented Architecture & Robust Contract Envelopes',
    description:
      'Structured API design adhering to HTTP standards, semantic status codes, input validation, deterministic error responses, and predictable JSON payloads.',
    relatedConcepts: ['HTTP Status Codes (200, 201, 401, 403, 404)', 'Resource Routing', 'Input Validation', 'Standardized API Envelopes', 'Exception Handling'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'API Architecture & Route Specifications',
        concreteUses: [
          'Designed resource endpoints: /api/accounts, /api/transactions, /api/analytics, /api/risk.',
          'Standardized HTTP error envelopes with clear detail messages.',
          'Multi-part form data endpoint (/api/statements/upload) supporting both .xls and .csv files.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'RESTful Endpoints & Response Standardization',
        concreteUses: [
          'Implemented standardized API response envelopes and centralized global exception handling.',
        ],
      },
    ],
  },

  'express-websockets': {
    id: 'express-websockets',
    name: 'Express.js & WebSockets',
    category: 'backend',
    tagline: 'Real-Time Communication & Lightweight Backend Services',
    description:
      'Low-latency bidirectional real-time communication via WebSockets combined with lightweight Node.js/Express service architectures.',
    relatedConcepts: ['WebSockets', 'Bidirectional Communication', 'Express.js Middleware', 'Event-Driven Architecture'],
    verifiedProjects: [
      {
        projectId: 'real-time-chat',
        projectName: 'Real-Time Chat Application',
        roleTitle: 'WebSocket Communication Protocol',
        concreteUses: [
          'Implemented real-time bidirectional communication channel for instant user messaging.',
          'Managed WebSocket connection lifecycle and event routing.',
        ],
      },
    ],
  },

  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL & Supabase',
    category: 'database',
    tagline: 'ACID-Compliant Relational Database & Cloud Storage',
    description:
      'Robust open-source relational database management system providing ACID guarantees, foreign key integrity, and indexed transactional queries hosted on Supabase.',
    highlight: true,
    relatedConcepts: ['Relational Schemas', 'Foreign Key Constraints', 'Multi-Tenant Isolation', 'B-Tree Indexes', 'Supabase Cloud Hosting'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Primary Relational Data Store',
        concreteUses: [
          'Persists core entities: users, accounts, transactions, merchants, and custom merchant rules.',
          'Maintains foreign key integrity between users, accounts, and individual transactions.',
          'Indexed lookups by account_id and user_id ensuring fast analytical queries and strict tenant isolation.',
        ],
      },
    ],
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL (Schema Design & Indexing)',
    category: 'database',
    tagline: 'Schema Design, Indexing & Query Optimization',
    description:
      'Relational database management specializing in normalized schema design, primary/foreign key relationships, index optimization, and efficient query execution.',
    highlight: true,
    relatedConcepts: ['Schema Design', 'B-Tree Indexing', 'Query Optimization', 'Foreign Key Constraints', 'DBMS Principles'],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Relational Database Design',
        concreteUses: [
          'Designed relational schema for user expenses, categories, and audit timestamps.',
          'Implemented indexed database queries for fast expense retrieval and category aggregation.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Data Modeling & Persistence',
        concreteUses: [
          'Engineered student records relational tables with constraint validations.',
        ],
      },
    ],
  },

  'aws-cloud': {
    id: 'aws-cloud',
    name: 'AWS Cloud (EC2 & S3)',
    category: 'database',
    tagline: 'Cloud Infrastructure & Object Storage Deployment',
    description:
      'Deploying and hosting production application components and static digital assets using Amazon Elastic Compute Cloud (EC2) and Amazon Simple Storage Service (S3).',
    highlight: true,
    relatedConcepts: ['AWS EC2', 'AWS S3', 'Cloud Hosting', 'Asset Storage', 'Production Deployment'],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Deployed and hosted application components using AWS EC2 and S3 for Canadian real-estate platform.',
        ],
      },
    ],
  },

  'docker-ci-cd': {
    id: 'docker-ci-cd',
    name: 'Docker & GitHub Actions CI/CD',
    category: 'database',
    tagline: 'Containerization & Automated Deployment Pipelines',
    description:
      'Standardizing local and production runtime environments with Docker containers, and automating build, test, and deployment workflows with GitHub Actions.',
    highlight: true,
    relatedConcepts: ['Docker Containers', 'Dockerfile', 'GitHub Actions', 'CI/CD Pipelines', 'Automated Testing'],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Standardized local development environments across the engineering team with Docker.',
          'Built and maintained automated CI/CD pipelines with GitHub Actions across release cycles.',
        ],
      },
    ],
  },

  sqlalchemy: {
    id: 'sqlalchemy',
    name: 'SQLAlchemy 2.0',
    category: 'database',
    tagline: 'Object-Relational Mapping (ORM) & Session Management',
    description:
      'Comprehensive Python SQL toolkit and Object-Relational Mapper enabling clean, declarative database modeling and transactional operations.',
    relatedConcepts: ['Declarative Base', 'mapped_column / relationship', 'SessionLocal Contexts', 'Transactional Commits / Rollbacks'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'ORM Modeling & Query Layer',
        concreteUses: [
          'Defined declarative entity models for User, Account, Transaction, Merchant, and MerchantRule.',
          'Engineered clean session generator (get_db) ensuring automatic session closure and transaction rollback on error.',
          'Constructed filtered queries with ownership verification across all endpoints.',
        ],
      },
    ],
  },

  render: {
    id: 'render',
    name: 'Render Cloud Deployment',
    category: 'database',
    tagline: 'Unified Cloud Hosting & Web Service Deployment',
    description:
      'Cloud platform hosting static web applications and containerized backend web services with automated Git deployment hooks and SSL certificates.',
    relatedConcepts: ['Static Web Services', 'Web Service Containers', 'Automated CI/CD Deploys', 'Environment Variables Management'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Production Hosting Infrastructure',
        concreteUses: [
          'Deploys static web service hosting the production Vite React frontend (https://finsight-frontend-ymn9.onrender.com).',
          'Hosts containerized Python/FastAPI backend API service with environment variable secrets management.',
          'Configured automatic deploy webhooks triggered upon Git push to main repository.',
        ],
      },
    ],
  },

  'hdfc-parser': {
    id: 'hdfc-parser',
    name: 'HDFC .xls Binary Parser',
    category: 'ingestion',
    tagline: 'Legacy BIFF8 Spreadsheet Ingestion Engine',
    description:
      'Specialized parser extracting structured financial ledgers from legacy binary Excel (Excel 97-2004) exports generated by HDFC NetBanking.',
    highlight: true,
    relatedConcepts: ['xlrd BIFF8 Reader', 'Dynamic Header Detection', 'Date Serial Normalization', 'Footer Exclusion Markers'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Banking Format Ingestion Engine',
        concreteUses: [
          'Dynamically scans first 50 rows to identify transaction table header boundaries ("Date", "Narration", "Withdrawal", "Deposit").',
          'Parses numeric date serials via xlrd.xldate_as_tuple and string formats into timezone-aware UTC datetimes.',
          'Safely terminates parsing upon encountering footer markers ("statement summary", "closing bal", "dr count", "registered office address").',
          'Validates withdrawal and deposit column exclusivity, extracting signed decimal transaction values.',
        ],
      },
    ],
  },

  'csv-ingestion': {
    id: 'csv-ingestion',
    name: 'CSV Ingestion Pipeline',
    category: 'ingestion',
    tagline: 'Delimited Statement Ingestion & Schema Normalization',
    description:
      'Configurable ingestion pipeline parsing generic delimited bank statement files and mapping variable columns into standard transaction schemas.',
    relatedConcepts: ['CSV Parsing', 'Column Mapping', 'Delimiter Detection', 'Schema Validation'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Generic Ingestion Pipeline',
        concreteUses: [
          'Parses standard CSV exports, cleans whitespace, validates date fields, and extracts monetary debit/credit amounts.',
          'Feeds validated records directly into the normalization and categorization pipeline.',
        ],
      },
    ],
  },

  'categorization-engine': {
    id: 'categorization-engine',
    name: 'Deterministic Categorization',
    category: 'ingestion',
    tagline: 'Hierarchical Keyword Rules & Custom Merchant Mapping',
    description:
      'Algorithmic transaction classifier matching normalized merchant narratives against verified category keyword dictionaries with user custom rule overrides.',
    highlight: true,
    relatedConcepts: ['10 Standard Categories', 'Regex Normalization', 'Hierarchical Precedence', 'User Custom Rule Persistence'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Transaction Classification System',
        concreteUses: [
          'Normalizes raw narrative strings (stripping UPI reference codes and punctuation).',
          'Applies deterministic rules across 10 categories (Income, Food & Dining, Transportation, Entertainment, Shopping, Bills & Utilities, Healthcare, Travel, Transfer, Other).',
          'Supports user-defined custom merchant rule overrides stored in PostgreSQL.',
        ],
      },
    ],
  },

  'risk-engine': {
    id: 'risk-engine',
    name: '7-Signal Heuristic Risk Engine',
    category: 'ingestion',
    tagline: 'Deterministic Anomaly Heuristics & Stability Index',
    description:
      'Mathematical risk engine evaluating 7 deterministic heuristics (Unusual Transactions, Spending Spikes, Cash Flow Deficits, Category Concentration, Discretionary Ratio, Recurring Creep, Cash Flow Trend) and scoring a 0-100 Stability Index.',
    highlight: true,
    relatedConcepts: ['Median & IQR Outliers', 'Baseline Spending Comparisons', 'Consecutive Negative Flows', 'Stability Index Formula'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Financial Intelligence Engine',
        concreteUses: [
          'Calculates statistical transaction outliers: max(Q3 + 1.5*IQR, 3.0*Median) on accounts with >= 5 debits.',
          'Flags month-over-month spending spikes (>= 25% increase and >= 500 currency units).',
          'Detects persistent multi-month cash flow deficits and recurring subscription increases (> 15%).',
          'Computes the 0-100 Stability Index: 100 - (25*High + 10*Moderate + 5*Low).',
        ],
      },
    ],
  },

  'cash-flow-analytics': {
    id: 'cash-flow-analytics',
    name: 'Decimal Cash Flow Analytics',
    category: 'ingestion',
    tagline: 'Exact Monetary Aggregations & Trend Tracking',
    description:
      'High-precision financial analytics module calculating total inflows, outflows, net cash flow, category breakdowns, and chronological multi-month trajectories.',
    relatedConcepts: ['Decimal Monetary Precision', 'Category Breakdown %', 'Monthly Inflow/Outflow Rollups', 'Average Transaction Volume'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Financial Aggregation Engine',
        concreteUses: [
          'Calculates total income and total spending with exact Decimal precision.',
          'Computes category-wise percentage allocations sorted in descending order.',
          'Aggregates monthly trend records grouped chronologically by YYYY-MM.',
        ],
      },
    ],
  },

  'ai-assisted-dev': {
    id: 'ai-assisted-dev',
    name: 'AI-Assisted Development (Cursor, Claude, GPT)',
    category: 'tools',
    tagline: 'Accelerated Codebase Engineering & Intelligent Debugging',
    description:
      'Leveraging modern AI-assisted development tools (Cursor, Claude, GPT) for rapid architectural scaffolding, test generation, refactoring, and complex debugging.',
    highlight: true,
    relatedConcepts: ['Cursor IDE', 'Claude 3.7 / 3.5 Sonnet', 'GPT-4o', 'Prompt Engineering', 'AI Pair Programming'],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Utilized Cursor, Claude, and GPT for AI-assisted frontend and backend module engineering, reducing response times and accelerating release cycles.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Architecture & Test Scaffolding',
        concreteUses: [
          'Accelerated creation of 20 automated unit test fixtures and heuristic boundary validations.',
        ],
      },
    ],
  },

  'git-github': {
    id: 'git-github',
    name: 'Git & GitHub Version Control',
    category: 'tools',
    tagline: 'Distributed Version Control & Collaborative Git Workflows',
    description:
      'Systematic version control managing branch lifecycles, commit hygiene, pull requests, and automated deployment integrations.',
    relatedConcepts: ['Branch Strategies', 'Atomic Commits', 'Remote Repositories', 'Pull Requests', 'CI/CD Integrations'],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Managed feature branches, code reviews, and automated CI/CD deployment triggers on GitHub.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Source Control & Deployment Triggers',
        concreteUses: [
          'Managed full-stack repository with clean commit history across backend and frontend services.',
        ],
      },
    ],
  },

  'dev-tools': {
    id: 'dev-tools',
    name: 'Developer Tools & IDEs',
    category: 'tools',
    tagline: 'Maven, npm, Postman, VS Code & IntelliJ IDEA',
    description:
      'Proficiency with industry-standard development toolchains: Maven build lifecycle, npm dependency management, Postman API testing, VS Code, and IntelliJ IDEA.',
    relatedConcepts: ['Maven', 'npm', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Build Lifecycles'],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Build Tooling & API Testing',
        concreteUses: [
          'Configured Maven build dependencies for Spring Boot, Hibernate, and MySQL.',
          'Tested and validated REST API endpoints and JWT authorization headers using Postman.',
        ],
      },
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Java IDE & Debugging',
        concreteUses: [
          'Developed and debugged modular Java service classes in IntelliJ IDEA.',
        ],
      },
    ],
  },

  'automated-testing': {
    id: 'automated-testing',
    name: 'Automated Testing & Quality',
    category: 'tools',
    tagline: 'Unit Testing, Regression Suites & Exception Handling',
    description:
      'Comprehensive automated backend test suites testing parsing accuracy, schema boundary limits, and anomaly heuristic calculations.',
    highlight: true,
    relatedConcepts: ['Python unittest', 'Test Isolation', 'Edge Case Fixtures', 'Regression Testing', 'Centralized Exception Handling'],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Backend Test Suite Architecture',
        concreteUses: [
          'Authored 20 verified backend automated tests (11 risk engine tests, 4 API authorization/isolation tests, 5 regression tests).',
          'Verified edge-case guards: zero transactions (INSUFFICIENT_DATA), single transaction, normal spending without false alarms, and decimal zero-division safety.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'API Validation & Exception Handling',
        concreteUses: [
          'Centralized global exception handling and request payload validation.',
        ],
      },
    ],
  },

  'dsa-oop-concepts': {
    id: 'dsa-oop-concepts',
    name: 'DSA, OOP, DBMS & Compiler Concepts',
    category: 'tools',
    tagline: '400+ DSA Solved, LeetCode Knight, CodeChef 3-Star & Core CS',
    description:
      'Strong computer science foundation covering Data Structures & Algorithms (400+ problems solved, LeetCode Knight badge, CodeChef 3-Star rating), Object-Oriented Programming (OOP/SOLID), DBMS, and Compiler Design.',
    highlight: true,
    relatedConcepts: ['Data Structures & Algorithms', 'LeetCode Knight', 'CodeChef 3-Star', 'OOP & SOLID', 'DBMS & Indexing', 'Compiler Design & Lexical/Syntax Analysis'],
    verifiedProjects: [
      {
        projectId: 'lexical-syntax-analyzer',
        projectName: 'Lexical and Syntax Analyzer',
        roleTitle: 'Compiler Design Implementation',
        concreteUses: [
          'Explored token stream generation and syntax analysis according to formal language grammars.',
        ],
      },
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'OOP & SOLID Foundations',
        concreteUses: [
          'Practiced object-oriented design patterns and SOLID principles on Java service architectures.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Algorithmic Anomaly Detection',
        concreteUses: [
          'Applied sorting, percentile calculations, and heuristic pattern recognition algorithms to financial ledger data.',
        ],
      },
    ],
  },
}
