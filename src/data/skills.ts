import type { SkillCategoryGroup, SkillDetail } from '../types/skills'

export const SKILL_CATEGORY_GROUPS: readonly SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    shortTitle: 'Frontend',
    subtitle: 'Client Architecture & UI Systems',
    description: 'Component-driven client applications, state synchronization, and accessible responsive interfaces.',
    skillIds: ['react', 'typescript', 'javascript-esnext', 'modern-css-canvas', 'vite'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    shortTitle: 'Backend & APIs',
    subtitle: 'Services, APIs & Architecture',
    description: 'Scalable server frameworks, REST & WebSocket protocols, enterprise Java/Python services, and session security.',
    skillIds: [
      'python',
      'fastapi',
      'java-core',
      'spring-boot',
      'spring-mvc',
      'express',
      'nodejs',
      'rest-apis',
      'jdbc',
      'sqlalchemy',
      'websockets',
    ],
  },
  {
    id: 'database',
    title: 'Database & Cloud',
    shortTitle: 'Database & Cloud',
    subtitle: 'Relational Storage & Infrastructure',
    description: 'ACID-compliant relational schemas, indexed optimization, AWS infrastructure, Docker containerization, and CI/CD pipelines.',
    skillIds: [
      'postgresql',
      'mysql',
      'sql',
      'sqlalchemy',
      'aws-ec2',
      'aws-s3',
      'supabase',
      'render',
      'docker',
      'github-actions',
    ],
  },
  {
    id: 'ingestion',
    title: 'Ingestion & Analytics',
    shortTitle: 'Ingestion & Analytics',
    subtitle: 'Data Pipelines & Risk Engines',
    description: 'Binary spreadsheet parsing, automated classification pipelines, cash flow rollups, and deterministic heuristic risk algorithms.',
    skillIds: [
      'hdfc-xls-parsing',
      'xlrd',
      'csv-ingestion',
      'transaction-normalization',
      'merchant-normalization',
      'categorization',
      'merchant-rules',
      'financial-analytics',
      'statistical-analysis',
      'risk-engine',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Engineering',
    shortTitle: 'Tools & Engineering',
    subtitle: 'Engineering Standards, Tooling & CS Foundations',
    description: 'Distributed version control, IDEs and build systems, AI-assisted development (Cursor/Claude/GPT), and core CS foundations.',
    skillIds: [
      'git',
      'github',
      'maven',
      'npm',
      'postman',
      'vscode',
      'intellij-idea',
      'cursor',
      'claude',
      'gpt',
      'oop',
      'solid',
      'dsa',
      'dbms',
      'mvc',
    ],
  },
]

export const SKILLS_DICTIONARY: Record<string, SkillDetail> = {
  /* =========================================================================
   * 1. FRONTEND ENGINEERING (Reference Implementation)
   * ========================================================================= */
  react: {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    tagline: 'Component Architecture, React 19/18 & Interactive UI',
    description:
      'Declarative, component-driven client architecture leveraging modern hooks, lifecycle orchestration, and performant virtual DOM rendering.',
    highlight: true,
    relatedConcepts: [
      'Hooks (useState, useEffect, useMemo, useCallback)',
      'Context API',
      'Component Lifecycle',
      'Virtual DOM',
      'State Machines',
    ],
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
    relatedConcepts: [
      'Generics',
      'Discriminated Unions',
      'Interface Contracts',
      'Strict Null Checking',
      'verbatimModuleSyntax',
    ],
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
    name: 'JavaScript (ESNext)',
    category: 'frontend',
    tagline: 'Modern ECMAScript Standards & Event-Driven Runtimes',
    description:
      'Modern JavaScript syntax including Promises, async/await, array transformations, destructuring, and Node.js runtime environments.',
    relatedConcepts: [
      'Promises / Async-Await',
      'Array Methods (map, filter, reduce)',
      'Closures',
      'Destructuring & Spread',
      'Event Loop',
    ],
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
    name: 'HTML, CSS & Responsive UI',
    category: 'frontend',
    tagline: 'Semantic HTML, Glassmorphism, Bootstrap & Responsive Layouts',
    description:
      'Modern web styling leveraging CSS Custom Properties, Bootstrap grids, Thymeleaf templates, and accessible responsive layouts across devices.',
    highlight: true,
    relatedConcepts: [
      'CSS Custom Properties',
      'Bootstrap Grid',
      'Thymeleaf',
      'Backdrop Filter',
      'prefers-reduced-motion',
      'Responsive Breakpoints',
    ],
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
    relatedConcepts: [
      'ES Modules',
      'HMR',
      'Rollup Asset Bundling',
      'Tree Shaking',
      'CSS Code Splitting',
    ],
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

  /* =========================================================================
   * 2. BACKEND & APIs
   * ========================================================================= */
  python: {
    id: 'python',
    name: 'Python',
    category: 'backend',
    tagline: 'Backend Logic, Data Ingestion & Mathematical Precision',
    description:
      'Core programming language utilized for FinSight backend architecture, in-memory statement ingestion, mathematical outlier calculations, and exact Decimal monetary operations.',
    highlight: true,
    relatedConcepts: [
      'FastAPI',
      'Pydantic Models',
      'SQLAlchemy 2.0',
      'Decimal Precision (decimal.Decimal)',
      'collections.defaultdict',
      'unittest Test Suites',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Core Ingestion & Algorithm Engine',
        concreteUses: [
          'Engineered native BIFF8 .xls binary parser utilizing xlrd to extract transaction ledgers from HDFC exports.',
          'Implemented statistical outlier calculations utilizing Median and Interquartile Range (IQR).',
          'Enforced exact Decimal monetary arithmetic across all cash flow aggregations to eliminate floating-point precision errors.',
          'Authored 20 automated unit test fixtures covering edge cases and heuristic boundaries.',
        ],
      },
    ],
  },

  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    tagline: 'High-Performance Asynchronous Python Web Framework',
    description:
      'Modern, high-performance Python web framework based on Starlette and Pydantic, providing native async endpoints, dependency injection, and automatic OpenAPI documentation.',
    highlight: true,
    relatedConcepts: [
      'Async Endpoints',
      'Dependency Injection (Depends)',
      'HTTPException Handling',
      'OpenAPI / Swagger Generation',
      'CORS & Cookie Middleware',
      'Pydantic Request/Response Models',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Core Backend Service Layer',
        concreteUses: [
          'Engineered asynchronous REST API endpoints for statement ingestion, accounts, transactions, and risk reports.',
          'Implemented session-based authentication and secure HTTP-only cookie management with user isolation.',
          'Built multi-part statement upload processing pipeline handling both .xls and .csv bank files.',
          'Structured analytical rollup and cash flow endpoints serving interactive charts.',
          'Implemented 7-signal risk analysis endpoints computing deterministic stability scores.',
        ],
      },
    ],
  },

  'java-core': {
    id: 'java-core',
    name: 'Java',
    category: 'backend',
    tagline: 'Modular Java Design, OOP Foundations & Clean Code',
    description:
      'Robust object-oriented programming in Java utilizing interface-driven design, SOLID principles, structured exception handling, and enterprise design patterns.',
    highlight: true,
    relatedConcepts: [
      'OOP (Encapsulation, Polymorphism, Inheritance, Abstraction)',
      'SOLID Principles',
      'Interface-Driven Design',
      'Structured Exception Handling',
      'Generics & Collections Framework',
      'Design Patterns',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Java Backend Architecture',
        concreteUses: [
          'Implemented modular backend service layer, domain entity models, and business validation rules.',
          'Applied interface-driven design to decouple business services from database persistence.',
          'Built centralized exception handling and structured error responses.',
        ],
      },
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Java Development Intern',
        concreteUses: [
          'Engineered modular, interface-driven Java service classes adhering to SOLID principles under senior engineering guidance.',
          'Practiced structured exception handling and backend debugging on sample service architectures.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Core Java & Data Management',
        concreteUses: [
          'Built structured object models, exception wrappers, and CRUD database routines in Java.',
        ],
      },
    ],
  },

  'spring-boot': {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'backend',
    tagline: 'Enterprise Java Microservices & Backend Architecture',
    description:
      'Enterprise backend framework providing robust dependency injection, Spring MVC controllers, Hibernate ORM data access, JDBC connectivity, and JWT security.',
    highlight: true,
    relatedConcepts: [
      'Controller-Service-Repository Architecture',
      'Dependency Injection & Inversion of Control',
      'Hibernate ORM',
      'JDBC Connectivity',
      'JWT Stateless Security',
      'Role-Based Access Control (RBAC)',
    ],
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

  'spring-mvc': {
    id: 'spring-mvc',
    name: 'Spring MVC',
    category: 'backend',
    tagline: 'MVC Architecture, Request Routing & REST Controllers',
    description:
      'Spring framework web MVC module handling HTTP request routing, REST controller mappings, input validation, and clear presentation/service layer separation.',
    relatedConcepts: [
      '@RestController & @RequestMapping',
      'Input Validation (@Valid / @NotNull)',
      '@ExceptionHandler & ControllerAdvice',
      'HTTP Message Conversion',
      'Presentation vs. Service Layer Separation',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'REST Controllers & Request Routing',
        concreteUses: [
          'Designed REST controllers mapping HTTP verbs (GET, POST, PUT, DELETE) to expense and category resources.',
          'Configured `@ExceptionHandler` advice for centralized and consistent error response envelopes.',
          'Maintained strict separation of presentation logic from service business operations and repository data layers.',
        ],
      },
    ],
  },

  express: {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    tagline: 'Lightweight Node.js Web Application Framework',
    description:
      'Minimal and flexible Node.js web application framework providing middleware routing and HTTP server capabilities.',
    relatedConcepts: [
      'Middleware Pipeline',
      'HTTP Routing',
      'JSON Body Parsing',
      'Static Asset Serving',
      'WebSocket Upgrade Handlers',
    ],
    verifiedProjects: [
      {
        projectId: 'real-time-chat',
        projectName: 'Real-Time Chat Application',
        roleTitle: 'Server Routing & Middleware',
        concreteUses: [
          'Configured Express HTTP server paired with WebSocket upgrade handlers.',
          'Implemented middleware for request routing, CORS configuration, and static asset serving.',
        ],
      },
    ],
  },

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    tagline: 'Event-Driven JavaScript Backend Runtime',
    description:
      'Asynchronous, event-driven JavaScript runtime built on Chrome\'s V8 engine for building scalable real-time network applications.',
    relatedConcepts: [
      'Event Loop & Non-Blocking I/O',
      'Asynchronous Streams',
      'npm Ecosystem',
      'WebSocket Server Integration',
      'Runtime Environment Management',
    ],
    verifiedProjects: [
      {
        projectId: 'real-time-chat',
        projectName: 'Real-Time Chat Application',
        roleTitle: 'Event-Driven Server Engine',
        concreteUses: [
          'Built event-driven backend handling concurrent user socket connections and message broadcasts.',
          'Managed connection lifecycles, disconnection handlers, and memory event queues.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Runtime & Build Tooling',
        concreteUses: [
          'Configured Node.js tooling, npm scripts, and automated development environments for real-estate web features.',
        ],
      },
    ],
  },

  'rest-apis': {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'backend',
    tagline: 'Resource-Oriented Architecture & Robust Contract Envelopes',
    description:
      'Structured API design adhering to HTTP standards, semantic status codes, input validation, deterministic error responses, and predictable JSON payloads.',
    highlight: true,
    relatedConcepts: [
      'HTTP Status Codes (200, 201, 400, 401, 404, 422)',
      'Resource Routing Conventions',
      'Input Validation & Sanitization',
      'Standardized API Response Envelopes',
      'Centralized Exception Handling',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'API Architecture & Route Specifications',
        concreteUses: [
          'Designed resource endpoints: /api/accounts, /api/transactions, /api/analytics, /api/risk.',
          'Standardized HTTP error envelopes with clear detail messages and status codes.',
          'Multi-part form data endpoint (/api/statements/upload) supporting both .xls and .csv files.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'RESTful Endpoints & Response Standardization',
        concreteUses: [
          'Implemented standardized API response envelopes and centralized global exception handling.',
          'Designed RESTful CRUD endpoints for expenses, categories, and user profile management.',
        ],
      },
    ],
  },

  jdbc: {
    id: 'jdbc',
    name: 'JDBC',
    category: 'backend',
    tagline: 'Java Database Connectivity & Relational Persistence',
    description:
      'Low-level Java API for database-independent connectivity, executing SQL queries, managing prepared statements, and handling result sets.',
    relatedConcepts: [
      'PreparedStatements',
      'Connection Pooling (HikariCP)',
      'ResultSet Mapping',
      'SQL Transactions',
      'SQL Injection Prevention',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Relational Persistence Layer',
        concreteUses: [
          'Configured database connectivity and connection pool parameters for MySQL.',
          'Executed parameterized SQL queries and managed transaction boundaries.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Academic Database Operations',
        concreteUses: [
          'Implemented JDBC PreparedStatements for SQL CRUD queries preventing injection vulnerabilities.',
          'Handled ResultSet mapping to domain objects with robust exception handling.',
        ],
      },
    ],
  },

  sqlalchemy: {
    id: 'sqlalchemy',
    name: 'SQLAlchemy',
    category: 'backend',
    tagline: 'Declarative Models, ORM & Transactional Session Management',
    description:
      'Comprehensive Python SQL toolkit and Object-Relational Mapper enabling clean, declarative database modeling and scoped session management.',
    highlight: true,
    relatedConcepts: [
      'Declarative Base',
      'mapped_column & relationship',
      'SessionLocal Scoped Contexts',
      'Transactional Commits & Rollbacks',
      'Multi-Tenant Query Filters',
    ],
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

  websockets: {
    id: 'websockets',
    name: 'WebSockets',
    category: 'backend',
    tagline: 'Full-Duplex Bidirectional Real-Time Communication',
    description:
      'TCP-based communication protocol enabling persistent, low-latency, bidirectional data exchange between client and server.',
    relatedConcepts: [
      'Full-Duplex Communication',
      'Connection Handshake & Upgrade',
      'Event Broadcast',
      'Heartbeat Pings & Reconnection',
      'Socket Lifecycle Management',
    ],
    verifiedProjects: [
      {
        projectId: 'real-time-chat',
        projectName: 'Real-Time Chat Application',
        roleTitle: 'Real-Time Communication Protocol',
        concreteUses: [
          'Implemented real-time bidirectional communication channel for instant user messaging.',
          'Managed WebSocket connection lifecycle, client handshakes, and event routing.',
          'Handled connection errors, reconnections, and multi-client broadcast events.',
        ],
      },
    ],
  },

  /* =========================================================================
   * 3. DATABASE & CLOUD
   * ========================================================================= */
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    tagline: 'ACID-Compliant Relational Database & Multi-Tenant Storage',
    description:
      'Enterprise-grade open-source relational database management system providing ACID guarantees, foreign key integrity, and indexed transactional queries.',
    highlight: true,
    relatedConcepts: [
      'Relational Schemas',
      'Foreign Key Constraints & Cascades',
      'Multi-Tenant Data Isolation',
      'B-Tree Indexes',
      'ACID Guarantees',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Primary Relational Data Store',
        concreteUses: [
          'Persists core entities: Users, Accounts, Transactions, Merchants, and MerchantRules.',
          'Maintains foreign key integrity between users, accounts, and individual transactions.',
          'Indexed lookups by account_id and user_id ensuring fast analytical queries and strict tenant isolation.',
        ],
      },
    ],
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    tagline: 'Schema Design, Indexing & Query Optimization',
    description:
      'Relational database management specializing in normalized schema design, primary/foreign key relationships, index optimization, and efficient query execution.',
    highlight: true,
    relatedConcepts: [
      '3NF Schema Design',
      'B-Tree Indexing',
      'Query Optimization',
      'Foreign Key Constraints',
      'DBMS Storage Engines (InnoDB)',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Relational Database Design',
        concreteUses: [
          'Designed relational schema for user expenses, categories, and audit timestamps.',
          'Implemented indexed database queries for fast expense retrieval and category aggregation.',
          'Maintained database-backed expense management with transactional consistency.',
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

  sql: {
    id: 'sql',
    name: 'SQL',
    category: 'database',
    tagline: 'Structured Query Language, Relational Modeling & Aggregations',
    description:
      'Standard declarative language for relational database definition, multi-table joins, analytical groupings, and integrity constraints.',
    relatedConcepts: [
      'DDL & DML Queries',
      'Multi-Table JOINs (INNER, LEFT)',
      'GROUP BY & Aggregate Functions',
      'Indexes & Query Plans',
      'Transactions (BEGIN, COMMIT, ROLLBACK)',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Relational Queries & Aggregations',
        concreteUses: [
          'Authored filtered queries, multi-table joins, and chronological groupings for cash flow metrics.',
          'Designed normalized schemas with foreign keys and unique constraints.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Expense Queries & Summaries',
        concreteUses: [
          'Wrote aggregated SQL queries for monthly expense totals and category summaries.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Relational CRUD Operations',
        concreteUses: [
          'Structured CRUD queries and schema definition scripts.',
        ],
      },
    ],
  },

  'aws-ec2': {
    id: 'aws-ec2',
    name: 'AWS EC2',
    category: 'database',
    tagline: 'Cloud Application Hosting & Virtual Instances',
    description:
      'Amazon Web Services scalable compute infrastructure for running cloud applications, server configurations, and web hosting.',
    highlight: true,
    relatedConcepts: [
      'Virtual Instances (Linux)',
      'Cloud Hosting & Networking',
      'Environment Variables Management',
      'Application Deployment',
      'Security Groups & Ports',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Deployed and hosted application components using AWS EC2 for Canadian real-estate platform.',
          'Configured server environments, environment variables, and instance connectivity.',
        ],
      },
    ],
  },

  'aws-s3': {
    id: 'aws-s3',
    name: 'AWS S3',
    category: 'database',
    tagline: 'Scalable Object Storage & Digital Asset Hosting',
    description:
      'Amazon Simple Storage Service for storing and delivering high-availability media assets, images, and static resources.',
    relatedConcepts: [
      'Object Storage Buckets',
      'Bucket Access Policies',
      'Asset Storage & Retrieval',
      'High-Availability Cloud Storage',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Configured AWS S3 buckets for storing and delivering property listing assets and media for kigo.ca.',
          'Implemented bucket access policies and asset delivery workflows.',
        ],
      },
    ],
  },

  supabase: {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    tagline: 'Managed PostgreSQL Cloud Infrastructure',
    description:
      'Cloud database platform providing managed PostgreSQL instances with SSL connectivity, automated backups, and connection pooling.',
    relatedConcepts: [
      'Managed PostgreSQL Infrastructure',
      'SSL Connection Strings',
      'Cloud Database Hosting',
      'Automated Backups',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Managed Database Infrastructure',
        concreteUses: [
          'Provisioned managed cloud PostgreSQL database hosting production ledger tables.',
          'Configured SSL database connection strings and environment variables for Render backend integration.',
          'Maintained relational integrity and automated remote persistence.',
        ],
      },
    ],
  },

  render: {
    id: 'render',
    name: 'Render',
    category: 'database',
    tagline: 'Unified Cloud Hosting & Web Service Production Deployment',
    description:
      'Cloud platform hosting static web applications and containerized backend web services with automated Git deployment hooks and SSL certificates.',
    relatedConcepts: [
      'Static Web Services',
      'Containerized Web Services',
      'Automated Git Deploy Webhooks',
      'Environment Secret Management',
      'Custom Domains & SSL Certificates',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Production Hosting Infrastructure',
        concreteUses: [
          'Deploys static web service hosting the production Vite React frontend.',
          'Hosts containerized Python/FastAPI backend API service with environment variable secrets management.',
          'Configured automatic deploy webhooks triggered upon Git push to main repository.',
        ],
      },
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Production Hosting',
        concreteUses: [
          'Configured production static site deployment pipeline with global CDN distribution.',
        ],
      },
    ],
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    category: 'database',
    tagline: 'Standardized Development Environments & Containerization',
    description:
      'Standardizing local and production runtime environments with Docker containers, eliminating configuration drift across engineering workflows.',
    highlight: true,
    relatedConcepts: [
      'Docker Containers',
      'Dockerfile Configuration',
      'Reproducible Builds',
      'Environment Parity',
      'Container Isolation',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Standardized local development environments across the engineering team with Docker.',
          'Eliminated environment configuration drift between development and testing setups.',
        ],
      },
    ],
  },

  'github-actions': {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'database',
    tagline: 'CI/CD Pipelines & Automated Testing/Deployment',
    description:
      'Workflow automation engine executing automated build checks, unit test validation, and deployment pipelines triggered on Git events.',
    highlight: true,
    relatedConcepts: [
      'CI/CD Pipelines',
      'Automated Testing Workflows',
      'Workflow YAML Triggers',
      'Build Validation',
      'Deployment Automation',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Built and maintained automated CI/CD pipelines with GitHub Actions across release cycles.',
          'Automated lint checks and test suite validation on pull request merges.',
        ],
      },
    ],
  },

  /* =========================================================================
   * 4. INGESTION & ANALYTICS
   * ========================================================================= */
  'hdfc-xls-parsing': {
    id: 'hdfc-xls-parsing',
    name: 'HDFC .xls Parsing',
    category: 'ingestion',
    tagline: 'BIFF8 Excel 97-2004 Parsing & Dynamic Header Detection',
    description:
      'Specialized in-memory binary parser extracting structured financial transaction ledgers from legacy Excel 97-2004 (.xls) exports generated by HDFC NetBanking.',
    highlight: true,
    relatedConcepts: [
      'BIFF8 Excel Format',
      'Dynamic Header Detection',
      'First 50 Rows Scanned',
      'Excel Serial Date Handling',
      'String Date Normalization',
      'Footer/Metadata Exclusion',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Bank Statement Ingestion Engine',
        concreteUses: [
          'BIFF8 Excel 97-2004 parsing without external binary execution dependencies.',
          'Dynamic header detection: scans the first 50 rows to identify column boundaries ("Date", "Narration", "Withdrawal Amt.", "Deposit Amt.").',
          'Excel serial date handling: converts numeric serial values via xlrd.xldate_as_tuple and standardizes string date variations into UTC datetimes.',
          'Statement footer/metadata exclusion: cleanly terminates parsing upon encountering footer markers ("statement summary", "closing bal", "dr count", "registered office address").',
          'Validates withdrawal vs. deposit column exclusivity, extracting signed Decimal transaction values.',
        ],
      },
    ],
  },

  xlrd: {
    id: 'xlrd',
    name: 'xlrd',
    category: 'ingestion',
    tagline: 'In-Memory BIFF8 Spreadsheet Extraction',
    description:
      'Pure-Python spreadsheet library utilized for in-memory extraction of legacy BIFF8 (.xls) workbooks, sheets, and type-safe cell values without external processes.',
    relatedConcepts: [
      'In-Memory Workbook Extraction',
      'Sheet Indexing',
      'Cell Type Decoding',
      'xldate_as_tuple',
      'Zero External Process Overhead',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Binary Extraction Pipeline',
        concreteUses: [
          'Extracts byte-stream statement payloads entirely in memory from uploaded files.',
          'Decodes cell types (XL_CELL_TEXT, XL_CELL_NUMBER, XL_CELL_DATE) safely.',
          'Converts raw Excel floating-point date serials to structured calendar tuples for UTC normalization.',
        ],
      },
    ],
  },

  'csv-ingestion': {
    id: 'csv-ingestion',
    name: 'CSV Ingestion',
    category: 'ingestion',
    tagline: 'Delimited Statement Parsing & Flexible Schema Mapping',
    description:
      'Configurable ingestion pipeline parsing generic delimited bank statement files, detecting column variations, and mapping records into canonical transaction schemas.',
    relatedConcepts: [
      'Delimiter Detection',
      'Column Mapping',
      'Date Sanitization',
      'Whitespace Cleaning',
      'Schema Validation',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Generic Delimited Ingestion',
        concreteUses: [
          'Parses standard CSV exports, strips trailing whitespace, and normalizes column headers.',
          'Supports flexible mapping across standard banking formats (Date, Description/Narration, Debit, Credit).',
          'Validates row format, sanitizes date strings, and feeds records into the normalization and categorization pipeline.',
        ],
      },
    ],
  },

  'transaction-normalization': {
    id: 'transaction-normalization',
    name: 'Transaction Normalization',
    category: 'ingestion',
    tagline: 'Debit/Credit Reconciliation & Signed Decimal Precision',
    description:
      'Data cleaning and standardization layer converting disparate raw statement rows into a unified canonical transaction schema with exact arithmetic.',
    relatedConcepts: [
      'Signed Decimal Arithmetic',
      'UTC ISO-8601 Timestamps',
      'Debit/Credit Exclusivity',
      'Currency Symbol Stripping',
      'Data Sanitization',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Ledger Normalization Pipeline',
        concreteUses: [
          'Enforces signed Decimal arithmetic: positive values for credits/income, negative values for debits/expenses.',
          'Sanitizes raw timestamps into timezone-aware UTC ISO-8601 datetimes.',
          'Validates debit/credit mutual exclusivity and strips non-numeric currency symbols.',
        ],
      },
    ],
  },

  'merchant-normalization': {
    id: 'merchant-normalization',
    name: 'Merchant Normalization',
    category: 'ingestion',
    tagline: 'UPI/IMPS Noise Removal & Canonical Name Extraction',
    description:
      'Rule-based narrative text processor extracting clean canonical merchant and counterparty identities from noisy banking transaction strings.',
    relatedConcepts: [
      'UPI Reference Stripping',
      'IMPS / NEFT Noise Removal',
      'POS Terminal Prefix Removal',
      'Regex Entity Extraction',
      'Canonical Merchant Index',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Narrative Processing & Cleaning',
        concreteUses: [
          'Strips banking transaction noise: UPI reference IDs, IMPS codes, POS terminal prefixes, and location metadata.',
          'Normalizes raw narration strings into clean, human-readable merchant names (e.g. "UPI-SWIGGY-12345" → "Swiggy").',
          'Prepares clean merchant strings for the categorization engine.',
        ],
      },
    ],
  },

  categorization: {
    id: 'categorization',
    name: 'Categorization',
    category: 'ingestion',
    tagline: 'Deterministic 10-Category Classification & Keyword Matching',
    description:
      'Algorithmic transaction classifier matching normalized merchant narratives against verified category keyword dictionaries with user custom rule overrides.',
    highlight: true,
    relatedConcepts: [
      '10 Standard Categories',
      'Keyword Matching',
      'Regex Rule Patterns',
      'Hierarchical Precedence',
      'Deterministic Classification',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Transaction Classification System',
        concreteUses: [
          'Maps normalized merchants across 10 standard categories: Income, Food & Dining, Transportation, Entertainment, Shopping, Bills & Utilities, Healthcare, Travel, Transfer, Other.',
          'Applies deterministic keyword and regex matching against transaction narratives.',
          'Ensures predictable, reproducible classification without opaque non-deterministic model hallucinations.',
          'Prioritizes user-defined custom merchant rules over default keyword classifiers.',
        ],
      },
    ],
  },

  'merchant-rules': {
    id: 'merchant-rules',
    name: 'Merchant Rules',
    category: 'ingestion',
    tagline: 'User-Defined Custom Rules & PostgreSQL Persistence',
    description:
      'User-configurable classification rules allowing custom overrides for specific merchants, persisted in PostgreSQL with tenant isolation.',
    relatedConcepts: [
      'Custom Rule Overrides',
      'Tenant Isolation',
      'PostgreSQL Persistence',
      'Rule Priority Hierarchy',
      'Dynamic Recalculation',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Custom Rule Engine',
        concreteUses: [
          'Allows users to create custom classification rules for specific merchants or narrative keywords.',
          'Persists merchant rules in PostgreSQL with strict tenant isolation per user.',
          'Applies custom rules at highest priority during statement ingestion and transaction recalculation.',
        ],
      },
    ],
  },

  'financial-analytics': {
    id: 'financial-analytics',
    name: 'Financial Analytics',
    category: 'ingestion',
    tagline: 'Income, Spending, Net Cash Flow & Category Trajectories',
    description:
      'High-precision financial analytics module calculating total inflows, outflows, net cash flow, category breakdowns, and monthly trajectories with exact Decimal precision.',
    highlight: true,
    relatedConcepts: [
      'Income & Spending Rollups',
      'Net Cash Flow',
      'Category Breakdown %',
      'Monthly Trends (YYYY-MM)',
      'Decimal Monetary Precision',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Financial Aggregation Engine',
        concreteUses: [
          'Calculates total income, total spending, and net cash flow with exact Decimal precision.',
          'Computes category-wise percentage allocations sorted in descending order.',
          'Aggregates monthly trend records grouped chronologically by YYYY-MM.',
        ],
      },
    ],
  },

  'statistical-analysis': {
    id: 'statistical-analysis',
    name: 'Statistical Analysis',
    category: 'ingestion',
    tagline: 'Median, Interquartile Range (IQR) & Baseline Comparisons',
    description:
      'Mathematical statistics module applying non-parametric outlier detection and baseline distribution analysis to transaction data.',
    relatedConcepts: [
      'Median & Quartiles (Q1, Q3)',
      'Interquartile Range (IQR)',
      'Non-Parametric Outlier Formula',
      'Baseline Spending Trajectories',
      'Mathematical Precision',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Statistical Risk Foundations',
        concreteUses: [
          'Calculates Median and Interquartile Range (IQR = Q3 - Q1) on account transaction amounts.',
          'Establishes non-parametric outlier thresholds: max(Q3 + 1.5 * IQR, 3.0 * Median) on accounts with >= 5 debits.',
          'Calculates baseline average monthly spend for multi-month trajectory comparisons.',
        ],
      },
    ],
  },

  'risk-engine': {
    id: 'risk-engine',
    name: 'Risk & Anomaly Engine',
    category: 'ingestion',
    tagline: 'Deterministic 7-Signal Heuristic Engine & Stability Index',
    description:
      'Mathematical risk engine evaluating 7 deterministic heuristics and calculating a 0–100 Stability Index without opaque or non-deterministic AI models.',
    highlight: true,
    relatedConcepts: [
      '7 Heuristic Signals',
      '0–100 Stability Index Formula',
      'Deterministic Rule Engine',
      'Severity Classification',
      'Python unittest Verification',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: '7-Signal Financial Intelligence Engine',
        concreteUses: [
          'Evaluates 7 actual deterministic signals: UNUSUAL_TRANSACTION, SPENDING_SPIKE, CASH_FLOW_RISK, CATEGORY_CONCENTRATION, DISCRETIONARY_SPENDING, RECURRING_PAYMENT_CREEP, and CASH_FLOW_TREND.',
          'UNUSUAL_TRANSACTION: statistical outlier detection using Median and IQR boundaries.',
          'SPENDING_SPIKE: detects month-over-month spending increases >= 25% and >= 500 currency units.',
          'CASH_FLOW_RISK: identifies persistent net-negative cash flow across billing cycles.',
          'CATEGORY_CONCENTRATION: flags single-category spending exceeding safety thresholds.',
          'DISCRETIONARY_SPENDING: analyzes ratio of non-essential to essential expenditures.',
          'RECURRING_PAYMENT_CREEP: detects recurring subscription payment increases > 15%.',
          'CASH_FLOW_TREND: evaluates consecutive downward cash flow trajectory.',
          'Computes 0–100 Stability Index: 100 - (25*High + 10*Moderate + 5*Low).',
          'Deterministic and rule-based architecture verified with 20 automated backend unit tests.',
        ],
      },
    ],
  },

  /* =========================================================================
   * 5. TOOLS & ENGINEERING
   * ========================================================================= */
  git: {
    id: 'git',
    name: 'Git',
    category: 'tools',
    tagline: 'Distributed Version Control & Branch Management',
    description:
      'Industry-standard distributed version control system for tracking source code changes, managing branching workflows, and staging atomic commits.',
    highlight: true,
    relatedConcepts: [
      'Branch Strategies',
      'Atomic Commits',
      'Merge & Rebase',
      'Staging & History',
      'Remote Synchronization',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Development Intern',
        concreteUses: [
          'Managed feature branches, code reviews, and clean merge strategies across the engineering team.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Version Control & Commit Hygiene',
        concreteUses: [
          'Maintained atomic commits, branch lifecycles, and synchronized remote repositories across frontend and backend services.',
        ],
      },
    ],
  },

  github: {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    tagline: 'Code Collaboration, Pull Requests & CI/CD Integrations',
    description:
      'Cloud-based Git repository hosting platform providing pull request reviews, issue management, and automated deployment integrations.',
    relatedConcepts: [
      'Pull Requests',
      'Code Reviews',
      'Repository Management',
      'GitHub Actions',
      'Release Tags',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Collaborative Workflows',
        concreteUses: [
          'Reviewed pull requests, collaborated on code reviews, and managed repository branches.',
          'Configured GitHub Actions for continuous integration testing and automated deployments.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Repository Management',
        concreteUses: [
          'Maintained full-stack repository with structured documentation, issue management, and release tags.',
        ],
      },
    ],
  },

  maven: {
    id: 'maven',
    name: 'Maven',
    category: 'tools',
    tagline: 'Java Build Lifecycle & Dependency Management',
    description:
      'Build automation tool for Java projects managing dependency resolution, compilation lifecycles, test execution, and deployment packaging.',
    relatedConcepts: [
      'pom.xml Configuration',
      'Build Lifecycles (compile, test, package)',
      'Dependency Resolution',
      'Plugins & Repositories',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Build Configuration',
        concreteUses: [
          'Configured pom.xml dependencies for Spring Boot starter modules, Hibernate ORM, and MySQL connector.',
          'Managed build lifecycle phases (compile, test, package) for backend deployment.',
        ],
      },
    ],
  },

  npm: {
    id: 'npm',
    name: 'npm',
    category: 'tools',
    tagline: 'Node Package Manager & Frontend Build Scripts',
    description:
      'Package manager for JavaScript and TypeScript ecosystems, handling dependency resolution, lockfile synchronization, and build script orchestration.',
    relatedConcepts: [
      'package.json Scripts',
      'Dependency Management',
      'Lockfile Hygiene',
      'Vite & ESLint Tooling',
    ],
    verifiedProjects: [
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Package & Script Management',
        concreteUses: [
          'Managed dependencies, lockfiles, and execution scripts for React, Vite, TypeScript, and ESLint.',
          'Integrated build commands (`npm run build`, `npm run lint`) ensuring clean, zero-warning compilations.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Frontend Dependencies',
        concreteUses: [
          'Configured and maintained npm package dependencies for customer-facing web modules.',
        ],
      },
    ],
  },

  postman: {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    tagline: 'API Development, Testing & Contract Validation',
    description:
      'API platform for designing, testing, and verifying REST endpoints, authorization headers, request payloads, and response status codes.',
    relatedConcepts: [
      'REST Endpoint Testing',
      'JWT Authorization Headers',
      'Request Payloads & Formats',
      'Status Code Validation',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'REST API Testing',
        concreteUses: [
          'Created request collections to test REST endpoints, JWT authorization headers, and error responses.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'API Contract Verification',
        concreteUses: [
          'Tested multi-part form statement uploads, analytics endpoints, and authentication cookie workflows.',
        ],
      },
    ],
  },

  vscode: {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    tagline: 'Code Editor, TypeScript/Python Tooling & Extensions',
    description:
      'Modern extensible source-code editor configured with language servers, debugging integrations, and linting tools.',
    relatedConcepts: [
      'TypeScript Language Server',
      'Python Environment Tooling',
      'ESLint / Prettier Extensions',
      'Integrated Terminal',
      'Git Extensions',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Primary Full-Stack IDE',
        concreteUses: [
          'Authored full-stack React, TypeScript, and Python codebases.',
          'Utilized ESLint, Prettier, and Python type-checking extensions for rigorous code hygiene.',
        ],
      },
      {
        projectId: 'portfolio',
        projectName: 'Interactive Developer Portfolio',
        roleTitle: 'Frontend Engineering Environment',
        concreteUses: [
          'Developed component architecture, CSS variables, and type definitions.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Feature Development',
        concreteUses: [
          'Engineered frontend and backend components within configured VS Code workspaces.',
        ],
      },
    ],
  },

  'intellij-idea': {
    id: 'intellij-idea',
    name: 'IntelliJ IDEA',
    category: 'tools',
    tagline: 'Java Enterprise IDE, Debugging & Refactoring',
    description:
      'Premier integrated development environment for Java enterprise development, offering deep static analysis, step-through debugging, and Spring toolchains.',
    relatedConcepts: [
      'Java Enterprise Tooling',
      'Spring Framework Inspection',
      'Step-Through Debugger',
      'Maven Integration',
      'Automated Refactoring',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Java & Spring Boot Development',
        concreteUses: [
          'Developed Controller-Service-Repository architecture with Maven integration and step-through debugging.',
        ],
      },
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Java Service Engineering',
        concreteUses: [
          'Built and debugged modular Java service classes and unit test suites.',
        ],
      },
    ],
  },

  cursor: {
    id: 'cursor',
    name: 'Cursor',
    category: 'tools',
    tagline: 'AI-Powered Code Editor & Fast Codebase Navigation',
    description:
      'Next-generation code editor with native AI integration for context-aware code generation, rapid refactoring, and multi-file editing.',
    highlight: true,
    relatedConcepts: [
      'AI Code Completion',
      'Multi-File Editing',
      'Context Indexing',
      'Codebase Navigation',
      'Rapid Prototyping',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'AI-Assisted Development',
        concreteUses: [
          'Utilized Cursor for rapid feature engineering, component scaffolding, and debugging.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Architecture & Refactoring',
        concreteUses: [
          'Accelerated architectural refactoring and component development.',
        ],
      },
    ],
  },

  claude: {
    id: 'claude',
    name: 'Claude',
    category: 'tools',
    tagline: 'AI Reasoning, Architecture Analysis & Test Scaffolding',
    description:
      'State-of-the-art AI model by Anthropic utilized for deep architectural analysis, edge-case analysis, test generation, and complex debugging.',
    highlight: true,
    relatedConcepts: [
      'Architectural Reasoning',
      'Edge Case Analysis',
      'Automated Test Scaffolding',
      'Complex Debugging',
      'Code Refactoring',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Architectural Exploration',
        concreteUses: [
          'Leveraged Claude for architectural brainstorming, optimization strategies, and debugging complex edge cases.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Test Suite Scaffolding',
        concreteUses: [
          'Accelerated generation of edge-case test fixtures and heuristic boundary validations for the risk engine.',
        ],
      },
    ],
  },

  gpt: {
    id: 'gpt',
    name: 'GPT',
    category: 'tools',
    tagline: 'AI Pair Programming, Code Validation & Pattern Exploration',
    description:
      'Large language model by OpenAI leveraged for interactive pair programming, regex pattern exploration, and code validation.',
    relatedConcepts: [
      'AI Pair Programming',
      'Regex Pattern Design',
      'Logic Validation',
      'Documentation Generation',
    ],
    verifiedProjects: [
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'AI Pair Programming',
        concreteUses: [
          'Used GPT for interactive problem solving, algorithm design, and code optimization.',
        ],
      },
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Pattern & Regex Validation',
        concreteUses: [
          'Assisted in validating keyword patterns and regex cleaning routines for statement normalization.',
        ],
      },
    ],
  },

  oop: {
    id: 'oop',
    name: 'OOP',
    category: 'tools',
    tagline: 'Encapsulation, Inheritance, Polymorphism & Abstraction',
    description:
      'Core programming paradigm structuring software around data classes, encapsulation, inheritance hierarchies, and polymorphism.',
    highlight: true,
    relatedConcepts: [
      'Encapsulation',
      'Polymorphism',
      'Inheritance',
      'Abstraction',
      'Interface Contracts',
      'Design Patterns',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Domain Class Design',
        concreteUses: [
          'Designed cohesive domain models with strict encapsulation and accessor methods.',
          'Applied polymorphism across expense categories and payment type handlers.',
        ],
      },
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Modular Java Services',
        concreteUses: [
          'Practiced OOP foundations and clean class relationships in Java service classes.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Academic Object Modeling',
        concreteUses: [
          'Modeled student, course, and enrollment entity hierarchies.',
        ],
      },
    ],
  },

  solid: {
    id: 'solid',
    name: 'SOLID',
    category: 'tools',
    tagline: 'Maintainable, Extensible & Decoupled Architecture',
    description:
      'Five core design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) for scalable code.',
    highlight: true,
    relatedConcepts: [
      'Single Responsibility (SRP)',
      'Open/Closed (OCP)',
      'Liskov Substitution (LSP)',
      'Interface Segregation (ISP)',
      'Dependency Inversion (DIP)',
    ],
    verifiedProjects: [
      {
        projectId: 'internz-valley',
        projectName: 'Internz Valley Internship',
        roleTitle: 'Enterprise Service Refactoring',
        concreteUses: [
          'Engineered modular, interface-driven Java service classes adhering to SOLID principles under senior engineer mentorship.',
        ],
      },
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Decoupled Layer Architecture',
        concreteUses: [
          'Applied Single Responsibility by isolating business logic in services and persistence in repositories.',
          'Used Dependency Inversion via Spring\'s dependency injection container.',
        ],
      },
    ],
  },

  dsa: {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'tools',
    tagline: '400+ Problems Solved · LeetCode Knight · CodeChef 3-Star',
    description:
      'Deep algorithmic problem-solving expertise spanning arrays, trees, graphs, dynamic programming, sorting, and statistical calculations.',
    highlight: true,
    relatedConcepts: [
      '400+ DSA Problems Solved',
      'LeetCode Knight',
      'CodeChef 3-Star',
      'Time/Space Complexity (Big-O)',
      'Percentiles & Median/IQR',
    ],
    verifiedProjects: [
      {
        projectId: 'finsight',
        projectName: 'FinSight',
        roleTitle: 'Algorithmic Anomaly Detection',
        concreteUses: [
          'Applied sorting, Median/IQR non-parametric outlier detection, and sliding window financial trend algorithms.',
        ],
      },
      {
        projectId: 'lexical-syntax-analyzer',
        projectName: 'Lexical and Syntax Analyzer',
        roleTitle: 'Compiler Algorithms',
        concreteUses: [
          'Implemented token stream parsing and syntax grammar validation algorithms.',
        ],
      },
    ],
  },

  dbms: {
    id: 'dbms',
    name: 'DBMS',
    category: 'tools',
    tagline: 'ACID Properties, Normalization, Indexing & Transactions',
    description:
      'Theoretical and practical foundations of relational database management systems, including normalization (1NF-3NF/BCNF), ACID guarantees, and B-Tree indexing.',
    relatedConcepts: [
      'ACID Properties',
      'Database Normalization (1NF–3NF)',
      'B-Tree Indexing',
      'Transaction Isolation Levels',
      'Relational Constraints',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Relational Schema Design',
        concreteUses: [
          'Designed normalized 3NF schemas with primary/foreign keys and unique constraints.',
          'Configured B-Tree indexes on lookup columns to optimize query execution times.',
        ],
      },
      {
        projectId: 'student-management-system',
        projectName: 'Student Management System',
        roleTitle: 'Academic Database Architecture',
        concreteUses: [
          'Modeled relational schema for student enrollments and academic records.',
        ],
      },
    ],
  },

  mvc: {
    id: 'mvc',
    name: 'MVC',
    category: 'tools',
    tagline: 'Separation of Presentation, Business Logic & Data Access',
    description:
      'Architectural pattern separating application concerns into Models (data & business logic), Views (user interface), and Controllers (request routing).',
    relatedConcepts: [
      'Model-View-Controller',
      'Separation of Concerns',
      'REST Controllers',
      'Service Layer Abstraction',
      'Repository Pattern',
    ],
    verifiedProjects: [
      {
        projectId: 'smart-expense-tracker',
        projectName: 'Smart Expense Tracker',
        roleTitle: 'Spring MVC Architecture',
        concreteUses: [
          'Separated REST controllers, business service interfaces, and Spring Data / Hibernate entity repositories.',
        ],
      },
      {
        projectId: 'sahir-web-solutions',
        projectName: 'Sahir Web Solutions (kigo.ca)',
        roleTitle: 'Web Application Architecture',
        concreteUses: [
          'Maintained clean separation between frontend presentation components and backend API endpoints.',
        ],
      },
    ],
  },
}

