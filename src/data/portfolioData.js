export const brandPalette = [
  { name: "FERRA", hex: "#734652", pantone: "PANTONE 4096 CP", role: "Deep Plum / Structural Anchor" },
  { name: "MULBERRY", hex: "#BF5670", pantone: "PANTONE 7432 CP", role: "Vibrant Berry / Primary Accent" },
  { name: "CAN CAN", hex: "#D9BBAF", pantone: "PANTONE 673 CP", role: "Warm Nude / Soft Contrast" },
  { name: "BLOOM", hex: "#D9B0C3", pantone: "PANTONE 685 CP", role: "Blush Lilac / Atmospheric Glow" },
  { name: "MAVERICK", hex: "#D9C5CE", pantone: "PANTONE 5175 CP", role: "Muted Mauve / Hairline & Metadata" }
];

export const personalInfo = {
  name: "Lauren Mae Espinar",
  handle: "superwowers",
  title: "Full-Stack Developer & Systems Architect",
  headline: "Engineering resilient enterprise LMS platforms, distributed web architectures, and computer vision systems.",
  bio: "Software engineer and systems builder specializing in enterprise full-stack web platforms, multi-tenant learning management systems, cryptographic role architectures, and real-time computer vision. Dedicated to building reliable, high-utility digital infrastructure.",
  status: "Available for engineering roles & technical collaborations",
  location: "Philippines",
  github: "https://github.com/superwowers",
  email: "lrnmspnr@gmail.com",
  avatar: "/profile.jpg",
  summaryStats: [
    { label: "Flagship Architecture", value: "ACES LMS", detail: "Multi-tenant academic platform" },
    { label: "Access Security", value: "4-Tier RBAC", detail: "Cryptographic JWT RS256" },
    { label: "Core Full-Stack", value: "React 19 + Node", detail: "Concurrent optimistic UI" },
    { label: "Verification", value: "Vitest Tested", detail: "Automated regression suites" }
  ]
};

export const interactiveSystems = [
  {
    id: "aces",
    name: "ACES LMS Enterprise Gateway",
    domain: "Academic Platform & Cryptographic RBAC",
    project: "ACES LMS",
    metricLabel: "Auth Handshake",
    metricValue: "3.2ms",
    accuracy: "100% Policy Isolation",
    summary: "Multi-tenant institutional academic and learning management platform with cryptographically verified role-based access control, grade book ledgers, and concurrent state hydration.",
    nodes: [
      {
        step: "Handshake",
        name: "Cryptographic Bearer Token Handshake",
        tech: "JWT / RS256",
        description: "Validates incoming bearer token signatures against rotating public keys with sub-5ms cryptographic verification.",
        status: "Verified 3.2ms",
        payload: { alg: "RS256", issuer: "aces.lms.auth", ttl: "3600s", scope: ["academic:read", "grades:write", "portal:admin"] }
      },
      {
        step: "Policy",
        name: "Hierarchical RBAC Permission Evaluator",
        tech: "Express Middleware",
        description: "Evaluates multi-role access control distinguishing Administrator, Department Chair, Faculty, Registrar, and Student clearance tiers.",
        status: "Authorized",
        payload: { role: "Administrator", clearanceTier: "Level-4", multiTenant: true, institutionId: "inst_aces_0411", auditLogging: true }
      },
      {
        step: "Query",
        name: "Scoped Relational Query & Ledger",
        tech: "Node.js / Relational SQL",
        description: "Executes parameterized transactional operations with row-level tenant security, grade calculation auditing, and indexed joins.",
        status: "Queried 4.8ms",
        payload: { queryPlan: "Index Scan (tenant_id, course_id, student_id)", rowsAffected: 184, transactionSafe: true, cacheHit: true }
      },
      {
        step: "Sync",
        name: "Optimistic UI State Hydration",
        tech: "React 19 Concurrent",
        description: "Flushes state mutations through React 19 concurrent optimistic transitions, eliminating layout freeze during high-concurrency grading periods.",
        status: "Hydrated",
        payload: { renderPhase: "Optimistic", rollbackSafeguard: "Active", layoutShiftScore: 0.00, frameRate: "60fps" }
      }
    ]
  },
  {
    id: "fitwise",
    name: "FitWise Vision Engine",
    domain: "Computer Vision & 3D WebGL",
    project: "FitWise",
    metricLabel: "Frame Latency",
    metricValue: "16.4ms",
    accuracy: "±0.4 cm error margin",
    summary: "Real-time anthropometric dimension regression and 3D mesh projection from a single RGB camera stream.",
    nodes: [
      {
        step: "Ingest",
        name: "RGB Video Ingestion",
        tech: "Browser MediaStream",
        description: "Captures 60fps webcam frames, downsamples to 256x256 tensor format with histogram normalization.",
        status: "Active 60fps",
        payload: { stream: "WebRTC/Canvas", resolution: "1280x720", fps: 60, colorspace: "RGB-Norm" }
      },
      {
        step: "Inference",
        name: "33-Point Pose Detection",
        tech: "MediaPipe Pose",
        description: "Extracts 33 spatial keypoints (nose to ankles) with sub-pixel precision and estimated camera Z-depth coordinates.",
        status: "Inference 11ms",
        payload: { keypoints: 33, zDepth: "Estimated (m)", confidence: 0.984, topology: "BlazePose" }
      },
      {
        step: "Geometry",
        name: "Anthropometric Trigonometry",
        tech: "Python / NumPy",
        description: "Applies biomechanical regression equations anchored to verified user height to extract chest, waist, and inseam girths.",
        status: "Computed",
        payload: { chestCm: 94.2, waistCm: 76.8, hipCm: 98.4, inseamCm: 79.1, tolerance: "±0.4cm" }
      },
      {
        step: "Render",
        name: "WebGL 3D Mannequin Rig",
        tech: "WebGL / Three.js",
        description: "Morphs parametric 3D mannequin vertex buffers to mirror extracted dimensions with real-time zone-by-zone ease heatmaps.",
        status: "Rendered 60fps",
        payload: { vertexCount: 14820, meshBones: 24, easeMap: "Heatmap-Graduated", blendTime: "4ms" }
      }
    ]
  },
  {
    id: "sarisari",
    name: "Sari-Sari Local-First POS Ledger",
    domain: "Distributed Client Architecture",
    project: "Sari-Sari Store POS",
    metricLabel: "Input Latency",
    metricValue: "< 2ms",
    accuracy: "Zero Data Loss",
    summary: "Tactile offline-first retail inventory and daily profit ledger designed specifically for high-throughput neighborhood stores.",
    nodes: [
      {
        step: "Keypad",
        name: "Physical-Emulated Input",
        tech: "Event Stream",
        description: "Instantaneous tactile numpad keystroke capture with debounced currency rounding and quantity modifiers.",
        status: "Captured <2ms",
        payload: { key: "ITEM_SCAN_OR_ENTRY", barcode: "4800016644012", pricePhp: 18.50, qty: 3 }
      },
      {
        step: "LocalDB",
        name: "Local IndexedDB Transaction",
        tech: "Client Persistence",
        description: "Commits immutable transaction records to local client storage before network requests, ensuring zero checkout pauses.",
        status: "Committed",
        payload: { store: "sales_ledger", localId: "tx_99812_local", syncState: "queued", offlineAvailable: true }
      },
      {
        step: "Margin",
        name: "Real-Time Profit Engine",
        tech: "In-Memory Calculations",
        description: "Computes unit cost markup, rolling daily revenue, and stock depletion alerts on the fly without server roundtrips.",
        status: "Calculated",
        payload: { grossRevenuePhp: 4820.00, netMarginPct: 22.4, lowStockAlerts: 2, creditOwedPhp: 340.00 }
      },
      {
        step: "Worker",
        name: "Background Sync Worker",
        tech: "ServiceWorker / Sync",
        description: "Detects online network restoration and streams queued mutations to cloud database with deterministic conflict merging.",
        status: "Standby / Ready",
        payload: { queueLength: 0, lastSync: "Just now", conflictResolution: "Timestamp-Authority" }
      }
    ]
  }
];

export const skillsMatrix = [
  {
    category: "Enterprise Full-Stack & LMS Architecture",
    description: "Multi-tenant academic portals, cryptographic access control, concurrent state synchronization, and scalable REST services.",
    skills: [
      {
        name: "React 19 & Concurrent State Architecture",
        level: "Primary Stack",
        scope: "Client Architecture",
        provenance: "ACES LMS (Primary Flagship)",
        detail: "Engineered multi-role institutional dashboards utilizing React 19 concurrent features and optimistic updates for instant grade inputs."
      },
      {
        name: "Node.js & Express Architecture",
        level: "Primary Stack",
        scope: "Backend Services",
        provenance: "ACES LMS Backend",
        detail: "Modular REST API controllers, policy middleware chains, transaction wrappers, and centralized error boundaries."
      },
      {
        name: "Cryptographic JWT & Multi-Tier RBAC",
        level: "Production Core",
        scope: "Security Architecture",
        provenance: "ACES LMS Security",
        detail: "Hierarchical permissions matrix securing Administrator, Faculty, Registrar, and Student clearance tiers with RS256 tokens."
      },
      {
        name: "Relational Schema & Transaction Modeling",
        level: "Production Core",
        scope: "Data Persistence",
        provenance: "ACES LMS Database",
        detail: "Normalized schemas for course enrollments, grade audit ledgers, attendance records, and composite indexed queries."
      }
    ]
  },
  {
    category: "AI, Vision & 3D Graphics",
    description: "Real-time computer vision models, geometric coordinate transformations, and parametric 3D rendering.",
    skills: [
      {
        name: "MediaPipe Pose Estimation",
        level: "Specialized Core",
        scope: "Production Architecture",
        provenance: "FitWise",
        detail: "33 3D body landmark extraction, coordinate filtering, and real-time pose tracking from single webcams."
      },
      {
        name: "Parametric 3D WebGL",
        level: "High Proficiency",
        scope: "Interactive 3D",
        provenance: "FitWise",
        detail: "Dynamic vertex deformation, skeletal rigging, and custom shader ease heatmaps using Three.js and WebGL."
      },
      {
        name: "Python & FastAPI Microservices",
        level: "Production Core",
        scope: "High-Throughput Backend",
        provenance: "FitWise Backend",
        detail: "Asynchronous REST endpoints, scientific NumPy calculation routines, and containerized inference pipelines."
      },
      {
        name: "Computer Vision Trigonometry",
        level: "Specialized",
        scope: "Algorithms",
        provenance: "FitWise",
        detail: "Mathematical projection algorithms mapping pixel distances to physical anthropometric measurements."
      }
    ]
  },
  {
    category: "Frontend Design Systems & Client Engineering",
    description: "Component hierarchies, reactive state patterns, fluid typography, and sub-second user interfaces.",
    skills: [
      {
        name: "Tailwind CSS & Design Systems",
        level: "Primary Stack",
        scope: "Visual Engineering",
        provenance: "ACES LMS & All Systems",
        detail: "Tokenized design scales, custom fluid typography, responsive layout engines, and dark/light token persistence."
      },
      {
        name: "Modern JavaScript (ESNext)",
        level: "Primary Stack",
        scope: "Language Core",
        provenance: "All Systems",
        detail: "Deep knowledge of asynchronous event loops, Web APIs, Canvas 2D, Service Workers, and typed structures."
      },
      {
        name: "Semantic HTML5 & Accessibility (A11y)",
        level: "Production Core",
        scope: "Web Standards",
        provenance: "ACES LMS Dashboards",
        detail: "Accessible table ledgers, ARIA live regions, focus management, and keyboard-driven navigation."
      },
      {
        name: "Local-First / Offline Architecture",
        level: "Specialized Core",
        scope: "Distributed Client",
        provenance: "Sari-Sari Store POS",
        detail: "IndexedDB client transactions, optimistic write-ahead logs, and asynchronous cloud sync mechanisms."
      }
    ]
  },
  {
    category: "Reliability, Testing & DevOps",
    description: "Automated regression guarantees, containerization, and reproducible environments.",
    skills: [
      {
        name: "Automated Testing (Vitest & Playwright)",
        level: "Production Core",
        scope: "Quality Assurance",
        provenance: "ACES LMS Test Suites",
        detail: "Comprehensive test coverage across role authorization guards, API endpoint contracts, and end-to-end user workflows."
      },
      {
        name: "Docker Containerization",
        level: "Production Core",
        scope: "Infrastructure",
        provenance: "ACES & FitWise",
        detail: "Multi-stage builds, isolated runtime environments, microservice orchestration, and reproducible images."
      },
      {
        name: "Git & Collaborative Workflows",
        level: "Primary Stack",
        scope: "Version Control",
        provenance: "GitHub @superwowers",
        detail: "Atomic commits, pull request reviews, semantic release tagging, and branch lifecycle management."
      },
      {
        name: "RESTful API Specification",
        level: "Primary Stack",
        scope: "System Integration",
        provenance: "ACES & FitWise",
        detail: "Strict HTTP semantics, standardized payload schemas, status codes, and backward-compatible versioning."
      }
    ]
  }
];

export const engineeringPrinciples = [
  {
    id: "defensive-boundaries",
    title: "Cryptographic & Defensive Boundaries",
    statement: "Never trust raw incoming payloads without strict structural and role validation.",
    description: "Every institutional endpoint in ACES LMS validates authorization tokens, evaluates role clearance hierarchies, and sanitizes input data before execution."
  },
  {
    id: "sub-50ms",
    title: "Sub-50ms Interaction Budgets",
    statement: "No educator or student should wait for layout freezes or slow serialization.",
    description: "Built with optimistic concurrent state mutations, instant UI feedback, and streamlined payload sizes to maintain smooth 60fps responsiveness."
  },
  {
    id: "offline-resilience",
    title: "Fault-Tolerant Reliability",
    statement: "Critical operations must remain resilient and auditable under high load.",
    description: "All transactions maintain audit-logged histories, data integrity safeguards, and graceful recovery routines."
  }
];

export const projects = [
  {
    id: "aces",
    title: "ACES LMS",
    category: "Enterprise Full-Stack & LMS",
    subtitle: "Enterprise Learning Management & Academic Operations System",
    year: "2026",
    role: "Lead Full-Stack Architect & Backend Engineer",
    description: "The primary academic enterprise management and learning platform powering institutional course coordination, automated grading ledgers, student tracking, and multi-tier cryptographic role-based access control.",
    tags: ["React 19", "Node.js", "Express", "Tailwind CSS", "REST API", "Lucide React", "Vitest", "Playwright"],
    featured: true,
    githubUrl: "https://github.com/superwowers/aces-backend",
    stats: "4-Tier RBAC · 3.2ms Handshake · Concurrent Optimistic Sync",
    metrics: [
      { label: "Auth Validation", val: "3.2ms Handshake" },
      { label: "Clearance Tiers", val: "4-Tier RBAC" },
      { label: "Test Coverage", val: "Vitest + Playwright" },
      { label: "Architecture", val: "Decoupled REST API" }
    ],
    highlights: [
      "Modern React 19 architecture featuring concurrent optimistic UI state handling to prevent layout freezes during high-volume grading and attendance entries.",
      "JWT-authenticated Express backend with structured relational models, row-level tenant security, and comprehensive input sanitation.",
      "Cryptographic role-based authorization matrix strictly segregating permissions across Administrator, Faculty, Registrar, and Student personas.",
      "Automated regression testing suites utilizing Vitest and Playwright ensuring rock-solid stability across all institutional workflows."
    ]
  },
  {
    id: "fitwise",
    title: "FitWise",
    category: "AI & Computer Vision",
    subtitle: "AI-Powered Virtual Fitting Room & Anthropometrics",
    year: "2026",
    role: "Full-Stack & Computer Vision Engineer",
    description: "An intelligent virtual sizing engine that estimates human body measurements from single-camera input using MediaPipe 33-point pose landmarking. Renders a parametric 3D mannequin in WebGL with real-time zone-by-zone ease comparisons.",
    tags: ["Python", "FastAPI", "MediaPipe", "WebGL", "React 19", "Tailwind CSS", "Docker"],
    featured: true,
    githubUrl: "https://github.com/superwowers/FITWISE",
    stats: "33-Point Keypoints · 16.4ms Frame Loop · Sub-inch Precision",
    metrics: [
      { label: "Keypoint Topology", val: "33-pt 3D Pose" },
      { label: "Inference Time", val: "11ms / frame" },
      { label: "Mannequin Mesh", val: "14,820 Vertices" },
      { label: "Measurement Variance", val: "< ±0.4 cm" }
    ],
    highlights: [
      "Custom landmark-to-anthropometric depth calculation algorithms mapping single-camera perspectives to realistic anatomical circumference.",
      "Real-time 3D WebGL mannequin projection anchored to calibrated user height, weight, and joint landmarks.",
      "FastAPI microservice backend containerized with Docker, serving real-time geometric calculation requests with high throughput."
    ]
  },
  {
    id: "sari-sari",
    title: "Sari-Sari Store POS & Ledger",
    category: "Distributed Web Apps",
    subtitle: "Tactile Retail Inventory & Local-First Point-of-Sale System",
    year: "2026",
    role: "UI/UX & Systems Engineer",
    description: "A tailored digital ledger and inventory POS created for local neighborhood merchants, featuring instant cash calculations, low-stock alerts, and daily revenue reporting.",
    tags: ["React", "Tailwind CSS", "Local-First Sync", "IndexedDB", "UI/UX Design"],
    featured: true,
    githubUrl: "https://github.com/superwowers/SARISARISTORE",
    stats: "Offline-First Persistence · Zero Input Latency",
    metrics: [
      { label: "Input Response", val: "< 2ms Tactile" },
      { label: "Offline Storage", val: "IndexedDB Local" },
      { label: "Calculation", val: "Instant Margin Delta" },
      { label: "Sync Engine", val: "Background Worker" }
    ],
    highlights: [
      "Tactile keypad interaction inspired by familiar physical cash registers, designed for high-speed operation on touchscreens and keyboards.",
      "Instant offline-first persistence with zero network latency, ensuring transactions complete even during power or internet interruptions.",
      "Automated profit margin calculations and credit ledger tracking tailored specifically to neighborhood retail economics."
    ]
  },
  {
    id: "cafe-placedo",
    title: "Café de Placedo",
    category: "Brand & Web Systems",
    subtitle: "Artisanal Coffeehouse Ordering & Showcase Web Experience",
    year: "2026",
    role: "Frontend Engineer & Designer",
    description: "A warm, brand-focused web experience featuring interactive menu exploration, artisanal coffee origins, and direct order dispatching.",
    tags: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Responsive Architecture"],
    featured: false,
    githubUrl: "https://github.com/superwowers/Cafe-de-Placedo",
    stats: "100% Mobile Responsive · Sub-Second Load",
    metrics: [
      { label: "Mobile Score", val: "100% Responsive" },
      { label: "Filter Latency", val: "Instant Client-Side" },
      { label: "Design System", val: "Brand-Aligned Palette" }
    ],
    highlights: [
      "Rich visual menu with real-time dietary filters, roast level selectors, and custom brew preferences.",
      "Tactile card elevations and smooth micro-interactions that enrich brand storytelling and customer engagement."
    ]
  }
];
