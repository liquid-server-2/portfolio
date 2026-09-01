import type { ProjectItem } from '../types/project'

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    id: 'finsight',
    title: 'FinSight',
    tagline: 'Personal Finance Intelligence & Transaction Risk Engine',
    description:
      'A full-stack personal finance analytics and data ingestion platform designed to parse multi-format bank statements, normalize raw transactions, and detect spending anomalies through a deterministic 7-signal heuristic engine.',
    highlights: [
      'Account Creation & Authentication: Secure HTTP-only session cookies and strict user-specific tenant isolation.',
      'Multi-Format Bank Statement Ingestion: Automated in-memory parsing for native HDFC Bank .xls (BIFF8) statements and standard CSV formats.',
      'Deterministic Transaction Categorization: Hierarchical keyword matching with merchant text normalization and user custom rules.',
      '7-Signal Risk & Stability Scoring: Algorithmic identification of spending spikes, unusual transactions, cash flow deficits, recurring payment creep, and category concentration.',
      'Cash Flow Analytics & Reporting: Real-time monetary aggregations for income, spending, net cash flow, category breakdowns, and monthly trajectories.',
      'Production Deployment: Containerized Render and Supabase cloud deployment with 20 automated backend unit tests.',
    ],
    tags: ['Full-Stack', 'Financial Analytics', 'Risk Detection', 'FastAPI', 'React'],
    techStack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Supabase',
      'Render',
    ],
    demoUrl: 'https://finsight-frontend-ymn9.onrender.com',
    githubUrl: 'https://github.com/liquid-server-2/Finsight',
    featured: true,
    status: 'Live Demo',
  },
  {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    tagline: 'Enterprise Expense Tracking & Access Control',
    description:
      'A full-stack enterprise expense tracking web application engineered with Spring Boot, Hibernate, MySQL, and React.js, featuring secure JWT authentication and role-based access control.',
    highlights: [
      'RESTful Spring Boot Backend: Controller-Service-Repository architecture ensuring clean separation of concerns and modular service boundaries.',
      'JWT Authentication & RBAC: Secure stateless authentication with role-based access control enforcing authorization policies across endpoints.',
      'Data Persistence & Optimization: Hibernate ORM integration with indexed MySQL queries for efficient expense tracking and category summaries.',
      'Robust API Architecture: Centralized exception handling, input validation, and standardized API response formats.',
    ],
    tags: ['Spring Boot', 'Java', 'Hibernate', 'MySQL', 'JWT', 'React.js'],
    techStack: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'MySQL',
      'React.js',
      'REST APIs',
    ],
    featured: false,
    status: 'June 2025 – August 2025',
  },
  {
    id: 'real-time-chat',
    title: 'Real-Time Chat Application',
    tagline: 'WebSocket-Based Instant Messaging',
    description:
      'A WebSocket-based real-time communication project built for low-latency bidirectional messaging.',
    highlights: [
      'WebSocket-based real-time communication.',
      'Bidirectional client-server event dispatch and connection lifecycle management.',
    ],
    tags: ['WebSockets', 'Real-Time', 'JavaScript'],
    techStack: ['WebSockets', 'JavaScript', 'Node.js'],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Academic Information & Records Management',
    description:
      'A structured database-backed software application for organizing student records, enrollments, and academic data.',
    highlights: [
      'Centralized student records management and entity data modeling.',
      'CRUD operations with relational database integration.',
    ],
    tags: ['Java', 'SQL', 'DBMS'],
    techStack: ['Java', 'SQL', 'DBMS', 'OOP'],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'lexical-syntax-analyzer',
    title: 'Lexical and Syntax Analyzer',
    tagline: 'Compiler Design & Language Grammar Parsing',
    description:
      'A compiler-design project exploring lexical analysis, tokenization, and syntax analysis according to formal grammar rules.',
    highlights: [
      'Lexical analysis token stream generation from source code.',
      'Syntax analysis and grammar parsing validation pipeline.',
    ],
    tags: ['Compiler Design', 'Parsing', 'Algorithms'],
    techStack: ['Compiler Design', 'Lexical Analysis', 'Syntax Analysis'],
    featured: false,
    status: 'Completed',
  },
]
