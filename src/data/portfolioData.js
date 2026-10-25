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
  title: "Full-Stack Developer & AI Systems Builder",
  headline: "Engineering resilient web platforms, computer vision pipelines, and localized tools.",
  bio: "Software engineer specializing in intuitive client-side applications, real-time computer vision pipelines, and resilient backend architectures. Experienced in bridging research-grade algorithms with practical, production-ready interfaces.",
  status: "Available for engineering roles & technical collaborations",
  location: "Philippines",
  github: "https://github.com/superwowers",
  email: "lrnmspnr@gmail.com",
  avatar: "/profile.jpg",
  summaryStats: [
    { label: "Landmark Points", value: "33-pt", detail: "Real-time 3D pose estimation" },
    { label: "Core Stack", value: "React 19 + FastAPI", detail: "End-to-end full stack" },
    { label: "Deployment", value: "Docker & Local-First", detail: "Zero-latency reliability" },
    { label: "Code Quality", value: "Vitest Tested", detail: "Automated regression suites" }
  ]
};

export const interactiveSystems = [
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
    id: "aces",
    name: "ACES Enterprise RBAC Gateway",
    domain: "Full-Stack Security & API Architecture",
    project: "ACES Portal",
    metricLabel: "Auth Handshake",
    metricValue: "3.2ms",
    accuracy: "100% Policy Isolation",
    summary: "Multi-tenant academic and institutional management system with cryptographically verified role-based access control.",
    nodes: [
      {
        step: "Handshake",
        name: "Bearer Token Handshake",
        tech: "JWT / RS256",
        description: "Validates incoming cryptographic token signatures against rotating public keys with millisecond latency.",
        status: "Verified",
        payload: { alg: "RS256", issuer: "aces.auth", ttl: "3600s", scope: ["read:portal", "write:records"] }
      },
      {
        step: "Policy",
        name: "Role Permission Evaluator",
        tech: "Express Middleware",
        description: "Executes hierarchical access policies distinguishing Administrator, Faculty, Student, and Registrar privileges.",
        status: "Authorized",
        payload: { role: "Administrator", clearance: "Level-3", auditLogging: true, tenantId: "inst_0411" }
      },
      {
        step: "Query",
        name: "Scoped Relational Query",
        tech: "Node.js / SQL",
        description: "Runs parameterized relational transactions with row-level tenant security and indexed joins.",
        status: "Queried 4.8ms",
        payload: { queryPlan: "Index Scan (tenant_id, record_id)", rowsAffected: 124, cacheHit: true }
      },
      {
        step: "Sync",
        name: "Optimistic UI Transition",
        tech: "React 19 Concurrent",
        description: "Flushes state updates through React 19 optimistic actions, preventing interface layout jank during network transit.",
        status: "Hydrated",
        payload: { renderPhase: "Optimistic", rollbackSafeguard: "Active", layoutShiftScore: 0.00 }
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
    category: "Frontend Architecture & Modern Web",
    description: "Component hierarchies, reactive state patterns, fluid typography, and sub-second user interfaces.",
    skills: [
      {
        name: "React 19 & Component Architecture",
        level: "Primary Stack",
        scope: "Client Systems",
        provenance: "FitWise, ACES, Sari-Sari",
        detail: "Concurrent rendering, optimistic UI state mutations, custom hooks, and reliable component lifecycles."
      },
      {
        name: "Tailwind CSS & Design Systems",
        level: "Primary Stack",
        scope: "Visual Engineering",
        provenance: "All Systems",
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
        provenance: "ACES Portal",
        detail: "Accessible landmarks, ARIA live regions, focus management, and keyboard navigation."
      }
    ]
  },
  {
    category: "Backend Systems, Security & Databases",
    description: "Resilient server architectures, cryptographic session integrity, and relational data modeling.",
    skills: [
      {
        name: "Node.js & Express Architecture",
        level: "Primary Stack",
        scope: "Backend Services",
        provenance: "ACES Portal",
        detail: "Modular controllers, middleware pipelines, error-boundary handlers, and scalable routing architectures."
      },
      {
        name: "JWT & Role-Based Access (RBAC)",
        level: "Production Core",
        scope: "Security",
        provenance: "ACES Portal",
        detail: "Hierarchical permissions matrices, cryptographic signing, route guard interceptors, and session expiration."
      },
      {
        name: "SQL & Relational Schema Design",
        level: "Production Core",
        scope: "Data Persistence",
        provenance: "ACES Portal",
        detail: "Normalized table relationships, indexed foreign constraints, transaction safety, and query optimization."
      },
      {
        name: "RESTful API Specification",
        level: "Primary Stack",
        scope: "System Integration",
        provenance: "ACES & FitWise",
        detail: "Strict HTTP semantics, standardized payload schemas, status codes, and backward-compatible versioning."
      }
    ]
  },
  {
    category: "Reliability, Tooling & DevOps",
    description: "Automated regression guarantees, containerization, and local-first data persistence.",
    skills: [
      {
        name: "Local-First / Offline Architecture",
        level: "Specialized Core",
        scope: "Distributed Client",
        provenance: "Sari-Sari Store POS",
        detail: "IndexedDB client transactions, optimistic write-ahead logs, and asynchronous cloud sync mechanisms."
      },
      {
        name: "Docker Containerization",
        level: "Production Core",
        scope: "Infrastructure",
        provenance: "FitWise & ACES",
        detail: "Multi-stage builds, isolated runtime environments, microservice orchestration, and reproducible images."
      },
      {
        name: "Automated Testing (Vitest & Playwright)",
        level: "Production Core",
        scope: "Quality Assurance",
        provenance: "ACES Portal",
        detail: "Unit test coverage, integration suites, API response mocking, and end-to-end user journey validation."
      },
      {
        name: "Git & Collaborative Workflows",
        level: "Primary Stack",
        scope: "Version Control",
        provenance: "GitHub @superwowers",
        detail: "Atomic commits, pull request reviews, semantic release tagging, and branch lifecycle management."
      }
    ]
  }
];

export const engineeringPrinciples = [
  {
    id: "sub-50ms",
    title: "Sub-50ms Interaction Budgets",
    statement: "No user should wait for layout calculations or network serialization.",
    description: "Every interface is built with optimistic state mutations, immediate feedback states, and minimal client bundle overhead."
  },
  {
    id: "defensive-boundaries",
    title: "Defensive Type & Schema Boundaries",
    statement: "Never trust raw incoming payloads without strict structural validation.",
    description: "Whether processing camera coordinate streams or enterprise authorization tokens, every input passes through schema barriers."
  },
  {
    id: "offline-resilience",
    title: "Local-First Resilience",
    statement: "Software must remain functional even when connectivity fluctuates or fails.",
    description: "Transactions commit to local persistence first, decoupling user actions from cloud availability constraints."
  }
];

export const projects = [
  {
    id: "fitwise",
    title: "FitWise",
    category: "AI & Computer Vision",
    subtitle: "AI-Powered Virtual Fitting Room & Anthropometrics",
    year: "2026",
    role: "Lead Full-Stack & Computer Vision Engineer",
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
    id: "aces",
    title: "ACES Portal",
    category: "Enterprise Full-Stack",
    subtitle: "Comprehensive Academic & Enterprise Management Platform",
    year: "2026",
    role: "Full-Stack Backend & Architecture Engineer",
    description: "A secure web portal integrating administrative dashboards, student tracking, and automated service coordination with responsive cryptographic role-based access control.",
    tags: ["React 19", "Node.js", "Express", "Tailwind CSS", "REST API", "Lucide React", "Vitest"],
    featured: true,
    githubUrl: "https://github.com/superwowers/aces-backend",
    stats: "Multi-Role RBAC · Cryptographic JWT · Zero-Drift Sync",
    metrics: [
      { label: "Auth Validation", val: "3.2ms Latency" },
      { label: "Access Roles", val: "4-Tier RBAC" },
      { label: "Test Coverage", val: "Vitest + Playwright" },
      { label: "Architecture", val: "Decoupled REST" }
    ],
    highlights: [
      "Modern React 19 architecture featuring concurrent optimistic UI state handling to prevent layout freezes.",
      "JWT-authenticated Express backend with structured relational models, row-level tenant security, and input sanitation.",
      "Automated regression testing suites utilizing Vitest and Playwright ensuring high reliability across role workflows."
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
