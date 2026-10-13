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
  bio: "Specializing in intuitive web applications, computer vision pipelines, and resilient backend architectures. Passionate about bridging real-world utility with modern user interfaces.",
  status: "Available for new projects & opportunities",
  location: "Philippines",
  github: "https://github.com/superwowers",
  email: "lrnmspnr@gmail.com",
};

export const projects = [
  {
    id: "fitwise",
    title: "FitWise",
    category: "AI & Computer Vision",
    subtitle: "AI-Powered Virtual Fitting Room & Anthropometrics",
    description: "An intelligent virtual sizing engine that estimates body measurements from single-camera input using MediaPipe 33-point pose landmarking. Renders a parametric 3D mannequin in WebGL with real-time zone-by-zone ease comparisons.",
    tags: ["Python", "FastAPI", "MediaPipe", "WebGL", "React", "Tailwind CSS", "Docker"],
    featured: true,
    githubUrl: "https://github.com/superwowers/FITWISE",
    stats: "33-pt Pose Estimation • Sub-inch Accuracy",
    highlights: [
      "Custom landmark-to-anthropometric depth calculation algorithms",
      "Real-time 3D WebGL mannequin projection anchored by height & weight",
      "FastAPI microservice backend containerized with Docker"
    ]
  },
  {
    id: "aces",
    title: "ACES Portal",
    category: "Full-Stack",
    subtitle: "Comprehensive Academic & Enterprise Management Platform",
    description: "A secure web portal integrating administrative dashboards, student tracking, and automated service coordination with responsive role-based access control.",
    tags: ["React 19", "Node.js", "Express", "Tailwind CSS", "REST API", "Lucide React"],
    featured: true,
    githubUrl: "https://github.com/superwowers/aces-backend",
    stats: "Multi-Role RBAC • Real-time Data Sync",
    highlights: [
      "Modern React 19 architecture with optimistic UI state handling",
      "JWT-authenticated Express backend with structured relational models",
      "Comprehensive test suites with Vitest and Playwright"
    ]
  },
  {
    id: "sari-sari",
    title: "Sari-Sari Store POS & Ledger",
    category: "Web Apps",
    subtitle: "Tactile Retail Inventory & Point-of-Sale System",
    description: "A tailored digital ledger and inventory POS created for local neighborhood merchants, featuring instant cash calculations, low-stock alerts, and daily revenue reporting.",
    tags: ["React", "Tailwind CSS", "Local-First Sync", "UI/UX Design"],
    featured: true,
    githubUrl: "https://github.com/superwowers/SARISARISTORE",
    stats: "Offline-First • Zero Friction Checkout",
    highlights: [
      "Tactile keypad interaction inspired by familiar physical cash registers",
      "Instant offline-first persistence with zero latency",
      "Automated profit margin calculations and credit ledger tracking"
    ]
  },
  {
    id: "cafe-placedo",
    title: "Café de Placedo",
    category: "Web Apps",
    subtitle: "Artisanal Coffeehouse Ordering & Showcase Web Experience",
    description: "A warm, brand-focused web experience featuring interactive menu exploration, artisanal coffee origins, and seamless order dispatching.",
    tags: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Responsive Design"],
    featured: false,
    githubUrl: "https://github.com/superwowers/Cafe-de-Placedo",
    stats: "100% Mobile Responsive",
    highlights: [
      "Rich visual menu with allergy filters and custom brew preferences",
      "Smooth micro-interactions and tactile card elevations"
    ]
  }
];

export const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React 19 / Vite", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript (ESNext)", level: 90 },
      { name: "HTML5 / Semantic A11y", level: 95 },
      { name: "Framer Motion", level: 82 },
      { name: "Responsive / Mobile-First", level: 96 }
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "Python & FastAPI", level: 85 },
      { name: "RESTful API Architecture", level: 90 },
      { name: "SQL & Relational Databases", level: 82 },
      { name: "Authentication / JWT", level: 86 }
    ]
  },
  {
    name: "AI & Specialized Engineering",
    skills: [
      { name: "MediaPipe Computer Vision", level: 84 },
      { name: "3D WebGL / Mannequin Rendering", level: 78 },
      { name: "Docker Containerization", level: 80 },
      { name: "Git & GitHub CLI Workflows", level: 92 },
      { name: "Automated Testing (Vitest)", level: 80 }
    ]
  }
];
