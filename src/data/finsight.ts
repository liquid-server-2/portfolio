export interface ArchitectureNode {
  id: string
  label: string
  subtitle: string
  category: 'ingestion' | 'processing' | 'storage' | 'intelligence' | 'presentation'
  technologies: string[]
  roleDescription: string
  inputs: string
  outputs: string
}

export interface RiskSignal {
  code: string
  title: string
  severity: 'low' | 'moderate' | 'high'
  minHistory: string
  description: string
  formula: string
  triggerCondition: string
  severityRule: string
}

export interface TechRole {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Infrastructure' | 'Ingestion'
  role: string
}

export const FINSIGHT_DATA = {
  title: 'FinSight',
  tagline: 'Personal Finance Intelligence & Transaction Risk Engine',
  heroDescription:
    'A full-stack financial engineering platform that automates multi-format bank statement ingestion, normalizes raw transactions, and evaluates spending risk through a deterministic 7-signal heuristic engine.',
  liveUrl: 'https://finsight-frontend-ymn9.onrender.com',
  githubUrl: 'https://github.com/liquid-server-2/Finsight',
  status: 'Live Project',

  problem: {
    title: 'The Challenge of Unstructured Financial Data',
    summary:
      'Bank statement formats vary substantially across banking institutions. Legacy statement exports like HDFC .xls files (Excel 97-2004 BIFF8) contain dynamic top metadata rows, nested account summaries, unstandardized narrative strings, and mixed withdrawal/deposit columns. Without automated normalization, individuals and financial applications struggle to track cash flows, detect abnormal spending spikes, or isolate recurring payment inflation.',
  },

  productFlow: [
    {
      step: '01',
      title: 'Bank Statement Upload',
      description: 'Upload native HDFC Bank .xls statements or standard delimited CSV exports.',
    },
    {
      step: '02',
      title: 'Dynamic Header & Boundary Detection',
      description: 'Dynamically locates table start within the first 50 rows, strips disclaimer/footer lines, and isolates transaction rows.',
    },
    {
      step: '03',
      title: 'Transaction Normalization',
      description: 'Cleans merchant names, parses multi-format dates to UTC datetimes, and validates signed decimal amounts.',
    },
    {
      step: '04',
      title: 'Deterministic Categorization',
      description: 'Hierarchical keyword matching across 10 standard categories with user-specific custom merchant rule persistence.',
    },
    {
      step: '05',
      title: 'Decimal Cash Flow Analytics',
      description: 'Calculates exact monetary income, spending, net cash flow, category breakdowns, and monthly trends.',
    },
    {
      step: '06',
      title: '7-Signal Risk & Stability Index',
      description: 'Evaluates 7 deterministic heuristics and computes a 0-100 Stability Index based on signal severities.',
    },
  ],

  architectureNodes: [
    {
      id: 'statement',
      label: 'Bank Statement',
      subtitle: 'Raw Upload Source',
      category: 'ingestion',
      technologies: ['.xls (BIFF8 / Excel 97-2004)', '.csv (Delimited)'],
      roleDescription:
        'Accepts user-uploaded bank statement files. Supports binary BIFF8 Excel exports and UTF-8 delimited CSV files.',
      inputs: 'Raw file binary byte stream (UploadFile)',
      outputs: 'In-memory byte buffer passed to format-specific parser',
    },
    {
      id: 'hdfc-parser',
      label: 'HDFC & CSV Parser',
      subtitle: 'Dynamic Ingestion Engine',
      category: 'ingestion',
      technologies: ['Python', 'xlrd', 'csv parser'],
      roleDescription:
        'Scans rows dynamically to locate headers ("Date", "Narration", "Withdrawal Amt", "Deposit Amt"), parses date serials/strings, stops at summary footers, and enforces withdrawal/deposit exclusivity.',
      inputs: 'Raw byte stream',
      outputs: 'List of validated row dictionaries (amount, currency, description, merchant_name, transaction_date, transaction_type)',
    },
    {
      id: 'pipeline',
      label: 'Transaction Pipeline',
      subtitle: 'Normalization & Schema Validation',
      category: 'processing',
      technologies: ['FastAPI', 'Pydantic V2', 'Decimal'],
      roleDescription:
        'Validates schemas with Pydantic, standardizes UTC timestamps, cleans merchant names, and separates amounts into exact signed Decimal monetary values.',
      inputs: 'Parsed row dictionaries',
      outputs: 'Validated Transaction models ready for categorization and persistence',
    },
    {
      id: 'categorization',
      label: 'Categorization Engine',
      subtitle: 'Deterministic Rule Classifier',
      category: 'processing',
      technologies: ['Python Logic', 'Regex', 'SQLAlchemy Models'],
      roleDescription:
        'Normalizes narrative text and executes hierarchical keyword matching across 10 standard categories, supporting user-defined custom merchant rule overrides.',
      inputs: 'Validated transactions + user custom merchant rules',
      outputs: 'Categorized transaction records with persistent category labels',
    },
    {
      id: 'postgresql',
      label: 'PostgreSQL DB',
      subtitle: 'Persistent Relational Storage',
      category: 'storage',
      technologies: ['PostgreSQL', 'SQLAlchemy 2.0', 'Supabase'],
      roleDescription:
        'Stores users, accounts, transactions, and merchant rules with foreign key integrity and user ownership constraints.',
      inputs: 'SQLAlchemy entity models',
      outputs: 'Indexed transactional ledgers and historical account datasets',
    },
    {
      id: 'analytics',
      label: 'Analytics Engine',
      subtitle: 'Decimal Cash Flow Aggregation',
      category: 'intelligence',
      technologies: ['Python Collections', 'Decimal Precision', 'FastAPI'],
      roleDescription:
        'Aggregates total income, total spending, net cash flow, category breakdowns with percentage allocations, and chronological monthly trends using Decimal monetary precision.',
      inputs: 'Account transaction sequence',
      outputs: 'AccountAnalyticsResponse schema containing financial breakdown and monthly trend items',
    },
    {
      id: 'risk-engine',
      label: '7-Signal Risk Engine',
      subtitle: 'Deterministic Heuristic Anomaly Engine',
      category: 'intelligence',
      technologies: ['Python Math / Percentiles', 'FastAPI'],
      roleDescription:
        'Executes 7 deterministic risk pattern heuristics (Unusual Transaction, Spending Spike, Cash Flow Risk, Category Concentration, Discretionary Ratio, Recurring Creep, Cash Flow Trend) and calculates the 0-100 Stability Index.',
      inputs: 'Account model, Transaction sequence, AccountAnalyticsResponse',
      outputs: 'RiskReportResponse with overall_level, score, metrics, signals, and unavailable_signals guards',
    },
    {
      id: 'dashboard',
      label: 'React Client UI',
      subtitle: 'Interactive Visual Presentation',
      category: 'presentation',
      technologies: ['React 19', 'TypeScript', 'Vite', 'CSS Modules'],
      roleDescription:
        'Renders interactive analytics dashboards, category breakdown charts, monthly trend trajectories, risk report feeds with severity badges, and statement upload interfaces.',
      inputs: 'RESTful API JSON payloads from FastAPI backend',
      outputs: 'Accessible, responsive web UI with client-side state management',
    },
  ] as ArchitectureNode[],

  hdfcParserDetails: {
    title: 'HDFC .xls Binary Parser Engineering',
    features: [
      {
        title: 'Native .xls (BIFF8) Binary Support',
        description: 'Direct in-memory parsing of legacy Excel 97-2004 workbooks via xlrd without requiring client-side or third-party format conversion.',
      },
      {
        title: 'Dynamic Header Location',
        description: 'Scans the first 50 rows dynamically to identify columns matching "date", "narration", "withdrawal", and "deposit", accommodating variable account summary headers.',
      },
      {
        title: 'Multi-Format Date Parsing',
        description: 'Parses both xlrd numeric date serials (via xldate_as_tuple) and string dates (%d/%m/%y, %d/%m/%Y, %Y-%m-%d, %d-%m-%Y, %d-%Mon-%Y), outputting UTC timezone-aware datetimes.',
      },
      {
        title: 'Summary & Footer Termination Guards',
        description: 'Stops parsing immediately upon encountering markers such as "statement summary", "opening balance", "closing bal", "dr count", "cr count", "generated on", "end of statement", or "registered office address".',
      },
      {
        title: 'Polarity & Exclusivity Validation',
        description: 'Enforces that exactly one of withdrawal or deposit is populated with a positive decimal, assigning negative values for debits and positive values for credits.',
      },
      {
        title: 'Merchant Text Normalization',
        description: 'Normalizes raw narration strings by stripping non-alphanumeric characters, converting to uppercase, and collapsing multiple spaces.',
      },
    ],
  },

  categorizationDetails: {
    title: 'Deterministic Categorization System',
    supportedCategories: [
      'Income',
      'Food & Dining',
      'Transportation',
      'Entertainment',
      'Shopping',
      'Bills & Utilities',
      'Healthcare',
      'Travel',
      'Transfer',
      'Other',
    ],
    features: [
      {
        title: 'Hierarchical Keyword Matching',
        description: 'Step 1 checks Income keywords; Step 2 checks dictionaries across 8 specific spending categories; Step 3 matches credit transactions with income context (CREDIT, DEPOSIT, SAL, PAY); Step 4 defaults to "Other".',
      },
      {
        title: 'Merchant Text Normalization',
        description: 'Normalizes narrative strings (e.g. stripping special characters and punctuation) before applying pattern rules.',
      },
      {
        title: 'User-Specific Custom Rules',
        description: 'Supports user-defined merchant rules in the database, allowing custom overrides for personal transfers, specialized vendors, or local merchants.',
      },
      {
        title: 'Category Persistence',
        description: 'Saves category assignments in PostgreSQL to support historical analytics, category breakdowns, and month-over-month trend comparisons.',
      },
    ],
  },

  analyticsDetails: {
    title: 'Financial Cash Flow Analytics',
    metrics: [
      { name: 'Total Inflow (Income)', description: 'Exact Decimal sum of all credit transactions (amount > 0).' },
      { name: 'Total Outflow (Spending)', description: 'Exact Decimal sum of absolute values of all debit transactions (amount < 0).' },
      { name: 'Net Cash Flow', description: 'Calculated as Total Inflow - Total Outflow using exact monetary Decimal arithmetic.' },
      { name: 'Category Breakdown', description: 'Spending and income breakdown by category with percentage distribution (sorted descending).' },
      { name: 'Chronological Monthly Trend', description: 'Monthly rolling aggregation of income, spending, and net cash flow grouped by YYYY-MM.' },
    ],
  },

  stabilityIndexModel: {
    title: 'Stability Index & Overall Risk Level',
    formula: 'Score = max(0, min(100, 100 - (25 * High_Count + 10 * Moderate_Count + 5 * Low_Count)))',
    levels: [
      { level: 'HIGH', condition: 'At least 1 HIGH severity signal detected.' },
      { level: 'MODERATE', condition: 'At least 1 MODERATE severity signal detected and 0 HIGH signals.' },
      { level: 'LOW', condition: 'Only LOW severity signals detected or 0 signals.' },
      { level: 'INSUFFICIENT_DATA', condition: 'Account has 0 recorded transactions (Score is null, guards active).' },
    ],
  },

  riskSignals: [
    {
      code: 'UNUSUAL_TRANSACTION',
      title: 'Unusually Large Transaction',
      severity: 'high',
      minHistory: 'At least 5 debit transactions',
      description: 'Identifies individual debit transactions that are statistical outliers compared to historical spending baseline.',
      formula: 'Threshold = max(Q3 + 1.5 * IQR, 3.0 * Median), where IQR = Q3 - Q1. Evaluates if amount >= Threshold and amount >= 2.5 * Median.',
      triggerCondition: 'Debit amount >= max(Q3 + 1.5 * IQR, 3.0 * Median) and >= 2.5 * Median (flags top 3 largest outliers).',
      severityRule: 'HIGH if ratio (amount / Median) >= 5.0x; otherwise MODERATE.',
    },
    {
      code: 'SPENDING_SPIKE',
      title: 'Monthly Spending Spike',
      severity: 'high',
      minHistory: 'At least 2 completed monthly periods',
      description: 'Identifies sudden escalations in latest month spending compared to the baseline average of all prior months.',
      formula: 'Baseline = Sum(Prior Months Spending) / Count(Prior Months). Increase% = ((Latest - Baseline) / Baseline) * 100.',
      triggerCondition: 'Increase% >= 25.0% AND Nominal Increase (Latest - Baseline) >= 500.00 currency units.',
      severityRule: 'HIGH if Increase% >= 50.0%; otherwise MODERATE.',
    },
    {
      code: 'CASH_FLOW_RISK',
      title: 'Cash Flow Deficit (Persistent or Monthly)',
      severity: 'high',
      minHistory: 'At least 1 monthly period',
      description: 'Identifies instances where monthly spending exceeds monthly income, distinguishing single-month deficits from multi-month persistent deficits.',
      formula: 'Tracks consecutive months where Net Cash Flow < 0 leading up to the latest month.',
      triggerCondition: 'Persistent deficit: >= 2 consecutive negative months. Monthly deficit: 1 negative month with cumulative net cash flow < 0.',
      severityRule: 'HIGH if cumulative Net Cash Flow < 0 and consecutive deficit months >= 3; MODERATE for 2 consecutive deficit months; LOW for single deficit month.',
    },
    {
      code: 'CATEGORY_CONCENTRATION',
      title: 'High Category Concentration',
      severity: 'moderate',
      minHistory: 'Total spending > 0 and >= 3 debit transactions',
      description: 'Detects disproportionate spending concentration where a single category dominates total expenditure.',
      formula: 'Top Category % = (Top Category Spending / Total Spending) * 100 (excluding "Transfer" category).',
      triggerCondition: 'Top non-transfer category represents >= 50.0% of total spending.',
      severityRule: 'MODERATE if Top Category % >= 70.0%; otherwise LOW.',
    },
    {
      code: 'DISCRETIONARY_SPENDING',
      title: 'Discretionary Spending Exposure',
      severity: 'moderate',
      minHistory: 'Total spending > 0 and >= 3 debit transactions',
      description: 'Evaluates the proportion of spending allocated to discretionary categories ("Shopping", "Entertainment", "Food & Dining", "Travel").',
      formula: 'Discretionary Ratio% = (Sum(Shopping + Entertainment + Food & Dining + Travel) / Total Spending) * 100.',
      triggerCondition: 'Discretionary Ratio% >= 50.0% of total spending.',
      severityRule: 'MODERATE if Discretionary Ratio% >= 70.0%; otherwise LOW.',
    },
    {
      code: 'RECURRING_PAYMENT_CREEP',
      title: 'Recurring Payment Increase',
      severity: 'moderate',
      minHistory: 'At least 2 recurring debit transactions (is_recurring=True)',
      description: 'Detects price escalations across consecutive billing cycles for the same recurring merchant subscription.',
      formula: 'Compares latest recurring debit with immediately preceding chronological debit for the same merchant.',
      triggerCondition: 'Latest recurring amount > 1.15 * Previous recurring amount (increase > 15.0%).',
      severityRule: 'MODERATE whenever recurring increase > 15.0% is detected.',
    },
    {
      code: 'CASH_FLOW_TREND',
      title: 'Deteriorating Cash Flow Trajectory',
      severity: 'low',
      minHistory: 'At least 3 completed monthly periods',
      description: 'Identifies continuous downward deterioration in monthly net cash flows across all analyzed sequential months.',
      formula: 'Evaluates if monthly net flows are strictly decreasing: all(Net[i] < Net[i-1] for i in range(1, len(Net))).',
      triggerCondition: 'Net monthly cash flow decreases monotonically across all 3+ consecutive monthly periods.',
      severityRule: 'MODERATE if latest month net cash flow < 0; otherwise LOW.',
    },
  ] as RiskSignal[],

  securityModel: {
    title: 'Security Architecture & Data Isolation',
    features: [
      {
        title: 'PBKDF2 Password Hashing',
        description: 'Passwords hashed with PBKDF2-HMAC-SHA256 using 600,000 iterations and 16-byte random salts.',
      },
      {
        title: 'Stateless HMAC-SHA256 Sessions',
        description: 'Signed JWT-structure session tokens verified via HMAC-SHA256 with 7-day expiration (604,800s).',
      },
      {
        title: 'HTTP-Only Secure Cookies',
        description: 'Tokens delivered via HTTP-only, SameSite=none, Secure cookies (with Authorization: Bearer fallback) to prevent XSS credential theft.',
      },
      {
        title: 'Explicit Tenant Isolation',
        description: 'FastAPI get_current_user dependency validates sessions; all account/transaction queries enforce account.user_id == current_user.id, returning HTTP 403 Forbidden on cross-tenant access.',
      },
    ],
  },

  deploymentModel: {
    title: 'Production Infrastructure',
    services: [
      {
        tier: 'Frontend Application',
        platform: 'Render',
        description: 'Static web service hosting the production Vite React build with HTTPS encryption and automatic Git deployments.',
      },
      {
        tier: 'Backend API Service',
        platform: 'Render',
        description: 'Containerized Python/FastAPI web service handling statement parsing, risk computations, and REST endpoints.',
      },
      {
        tier: 'Relational Database',
        platform: 'Supabase (PostgreSQL)',
        description: 'Managed PostgreSQL database instance accessed via SQLAlchemy 2.0 ORM with connection pooling and schema migrations.',
      },
    ],
  },

  testingModel: {
    title: 'Testing & Reliability',
    facts: [
      { label: 'Backend Test Suite', value: '20 Automated Tests', detail: '11 risk engine tests, 4 authorization/isolation API tests, and 5 regression tests in Python unittest.' },
      { label: 'Frontend Code Quality', value: 'ESLint Clean', detail: 'Strict TypeScript and React Hooks linting with zero errors or warnings.' },
      { label: 'Production Build', value: 'TypeScript Clean', detail: 'Typecheck and bundle optimization via Vite compiler.' },
    ],
  },

  techStackRoles: [
    { name: 'React 19 / 18', category: 'Frontend', role: 'Component-based UI architecture, client-side dashboard state, and reactive UI workflows.' },
    { name: 'TypeScript', category: 'Frontend', role: 'Strict typing for transaction models, API contracts, and component props.' },
    { name: 'Vite', category: 'Frontend', role: 'Fast development build server and optimized production asset bundler.' },
    { name: 'FastAPI', category: 'Backend', role: 'Asynchronous REST API framework serving analytics and risk endpoints.' },
    { name: 'Python 3', category: 'Backend', role: 'Core language powering statement parsing algorithms and mathematical risk heuristics.' },
    { name: 'SQLAlchemy', category: 'Backend', role: 'Object-Relational Mapping (ORM 2.0) handling PostgreSQL models, migrations, and queries.' },
    { name: 'PostgreSQL', category: 'Database', role: 'ACID-compliant relational database storing users, accounts, transactions, and merchant rules.' },
    { name: 'Supabase', category: 'Database', role: 'Cloud-managed PostgreSQL infrastructure with high-availability connections.' },
    { name: 'Render', category: 'Infrastructure', role: 'Unified cloud hosting platform for automated frontend and backend web services.' },
    { name: 'CSV Parser', category: 'Ingestion', role: 'Delimited file parsing and schema normalization across generic bank export files.' },
    { name: 'HDFC .xls Parser', category: 'Ingestion', role: 'Custom BIFF8 binary parser dynamically locating transaction tables, parsing dates, and stripping bank metadata.' },
  ] as TechRole[],
}
