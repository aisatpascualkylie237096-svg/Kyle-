import { PortfolioData } from '../types/portfolio';

export const portfolio: PortfolioData = {
  name: "Kyle",
  tagline: "Computer Science Student | Aspiring Software Developer",
  role: "Computer Science Student",
  email: "kyleepascual28@gmail.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  resume: "/resume.pdf",
  heroIntro:
    "I build practical web applications, backend systems, and database-driven solutions with a focus on clean architecture, usability, and reliable software.",
  aboutText:
    "I am Kyle, a Computer Science student currently developing my skills in software and web development. I enjoy building practical applications that combine frontend interfaces, backend services, databases, and real-world workflows. I am particularly interested in backend development, database systems, APIs, and full-stack web applications.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Asian Institute of Science and Technology",
    expectedGraduation: "2027",
    focus: "Software Development",
    focusAreas: [
      "Software Development",
      "Web Development",
      "Database Systems",
      "Backend Development",
      "Computer Science Fundamentals",
      "REST APIs",
      "Cloud-Based Applications",
    ],
  },
  developmentFocus: [
    {
      id: "web-apps",
      title: "Web Applications",
      description: "Responsive and user-focused web applications.",
      icon: "Layout",
    },
    {
      id: "backend-systems",
      title: "Backend Systems",
      description: "REST APIs, server-side logic, authentication, and application architecture.",
      icon: "Server",
    },
    {
      id: "database-systems",
      title: "Database Systems",
      description: "Structured data management using relational databases and cloud database platforms.",
      icon: "Database",
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Applications",
      description: "Connecting frontend interfaces, backend services, APIs, and databases into complete applications.",
      icon: "Layers",
    },
  ],
  approachSteps: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the problem and requirements.",
    },
    {
      step: "02",
      title: "Design",
      description: "Design the database, architecture, and user workflow.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop the frontend, backend, APIs, and database integration.",
    },
    {
      step: "04",
      title: "Test & Improve",
      description: "Test functionality, identify bugs, optimize the system, and improve usability.",
    },
  ],
  skillsCategories: [
    {
      title: "Languages",
      description: "Programming and scripting languages for systems and web",
      skills: [
        { name: "C++", category: "Languages", description: "Systems programming, memory management & algorithmic problem solving", iconName: "Cpu" },
        { name: "Python", category: "Languages", description: "Backend scripting, automation & data handling", iconName: "FileCode" },
        { name: "JavaScript", category: "Languages", description: "Core asynchronous ES6+, frontend & full-stack logic", iconName: "Code2" },
        { name: "Java", category: "Languages", description: "Object-oriented design, robust class structures & OOP principles", iconName: "Coffee" },
        { name: "SQL", category: "Languages", description: "Relational queries, schema modeling, joins & indexing", iconName: "Database" },
        { name: "HTML", category: "Languages", description: "Semantic markup, accessibility & structural layout", iconName: "FileText" },
        { name: "CSS", category: "Languages", description: "Responsive styling, modern layouts & visual presentation", iconName: "Palette" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      description: "Component-driven client and scalable server frameworks",
      skills: [
        { name: "React", category: "Frameworks & Libraries", description: "State-driven components, custom hooks & reactive UI", iconName: "Atom" },
        { name: "Node.js", category: "Frameworks & Libraries", description: "Event-driven runtime environment for high-throughput APIs", iconName: "Server" },
        { name: "Express.js", category: "Frameworks & Libraries", description: "RESTful route routing, middleware pipelines & controller architecture", iconName: "Workflow" },
        { name: "Tailwind CSS", category: "Frameworks & Libraries", description: "Utility-first modern styling & responsive design systems", iconName: "Wind" },
      ],
    },
    {
      title: "Databases",
      description: "Relational databases & cloud data persistence",
      skills: [
        { name: "PostgreSQL", category: "Databases", description: "Relational database modeling, complex constraints & ACID transactions", iconName: "Database" },
        { name: "Supabase", category: "Databases", description: "Cloud database platform, auth workflows & real-time subscriptions", iconName: "Zap" },
        { name: "MySQL", category: "Databases", description: "Structured relational database design, indexing & relational queries", iconName: "HardDrive" },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Developer tooling, containerization & networking protocols",
      skills: [
        { name: "Git", category: "Tools & Platforms", description: "Distributed version control, branch management & collaboration", iconName: "GitBranch" },
        { name: "GitHub", category: "Tools & Platforms", description: "Repository hosting, code reviews & project workflows", iconName: "Github" },
        { name: "Docker", category: "Tools & Platforms", description: "Containerized environments & reproducible setups", iconName: "Box" },
        { name: "VS Code", category: "Tools & Platforms", description: "Primary IDE environment with configured debugging & linting", iconName: "Terminal" },
        { name: "REST APIs", category: "Tools & Platforms", description: "Standardized HTTP contracts, status codes & payload structuring", iconName: "Network" },
        { name: "Socket.IO", category: "Tools & Platforms", description: "Bi-directional real-time event communication", iconName: "Radio" },
      ],
    },
    {
      title: "Core Fundamentals",
      description: "Foundational software engineering principles & practices",
      skills: [
        { name: "Data Structures & Algorithms", category: "Core Fundamentals", description: "Efficient algorithmic complexity, arrays, trees, maps & sorting", iconName: "Binary" },
        { name: "Object-Oriented Programming", category: "Core Fundamentals", description: "Encapsulation, inheritance, polymorphism & abstraction patterns", iconName: "Boxes" },
        { name: "Database Design", category: "Core Fundamentals", description: "Normalization, primary/foreign key relations & ER modeling", iconName: "Table" },
        { name: "REST API Development", category: "Core Fundamentals", description: "Resource routing, validation & structured response envelopes", iconName: "Route" },
        { name: "Authentication & Authorization", category: "Core Fundamentals", description: "Role-based access control (RBAC), tokens & protected endpoints", iconName: "ShieldCheck" },
        { name: "CRUD Systems", category: "Core Fundamentals", description: "Reliable Create-Read-Update-Delete transactional operations", iconName: "Layers" },
        { name: "System Design", category: "Core Fundamentals", description: "Modular service architecture, clean data flow & component decoupling", iconName: "Share2" },
        { name: "Software Development Lifecycle", category: "Core Fundamentals", description: "Requirement gathering, development, testing & continuous iteration", iconName: "Repeat" },
      ],
    },
  ],
  projects: [
    {
      id: "inventory-monitoring-system",
      title: "Real-Time Web-Based Inventory Monitoring System",
      category: "Full-Stack Web Application",
      featured: true,
      description:
        "A web-based inventory platform designed to help organizations monitor stock levels, manage products and branches, record receiving and consumption transactions, and maintain centralized inventory information.",
      problem:
        "The system addresses the difficulty of manually monitoring inventory across multiple branches by centralizing product, stock, transaction, and branch information in one web-based platform.",
      solution:
        "Engineered a centralized multi-branch inventory hub connecting live product catalogs, automated stock receiving/consumption logs, real-time inventory level alerts, and barcode generation/scanning.",
      techStack: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "Supabase",
        "PostgreSQL",
        "Socket.IO",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      architectureNodes: [
        { step: 1, label: "User", sublabel: "Authenticated Operator / Admin" },
        { step: 2, label: "Web Interface", sublabel: "Tailwind UI + Barcode Scanner" },
        { step: 3, label: "Express.js API", sublabel: "REST Endpoints & Socket.IO" },
        { step: 4, label: "Supabase", sublabel: "Real-Time Auth & Data Layer" },
        { step: 5, label: "PostgreSQL Database", sublabel: "Relational Schema & Triggers" },
      ],
      features: [
        "Product management",
        "Inventory monitoring",
        "Stock receiving",
        "Stock consumption",
        "Branch management",
        "Delivery/transfer workflows",
        "Transaction history",
        "Barcode scanning",
        "Barcode generation",
        "Inventory reports",
        "Role-based access",
        "Real-time updates",
        "Database-backed product management",
      ],
      challenges: [
        "Connecting frontend modules with a centralized Supabase database",
        "Designing database relationships between products, branches, inventory, and transactions",
        "Implementing REST API endpoints",
        "Managing frontend/backend data synchronization",
        "Implementing authentication and user roles",
        "Handling inventory receiving and consumption workflows",
        "Integrating barcode scanning",
        "Maintaining consistent product IDs across different system modules",
        "Debugging database schema and API inconsistencies",
        "Supporting multiple branches",
      ],
      results: [
        "Developed a centralized inventory workflow that connects product, branch, stock, and transaction information in one system.",
      ],
      metricsPlaceholder: "[Add verified performance metric here]",
      liveDemoUrl: "https://YOUR-LIVE-DEMO.com",
      githubUrl: "https://github.com/YOUR_USERNAME/inventory-system",
    },
    {
      id: "project-2",
      title: "[PROJECT NAME]",
      category: "Web Application",
      featured: false,
      description:
        "[One-sentence description of what the project does and the problem it solves.]",
      problem:
        "[The system addresses a specific operational or user need by structuring workflows and data in an accessible interface.]",
      solution:
        "[Implemented modular architecture and reactive state management to deliver reliable software.]",
      techStack: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
      architectureNodes: [
        { step: 1, label: "Client Interface", sublabel: "Modern Responsive UI" },
        { step: 2, label: "REST / State Layer", sublabel: "API & Data Controllers" },
        { step: 3, label: "Backend Service", sublabel: "Business Logic Engine" },
        { step: 4, label: "Database Layer", sublabel: "Persistent Storage" },
      ],
      features: [
        "[Core functional feature 1]",
        "[Core functional feature 2]",
        "[Core functional feature 3]",
        "[Core functional feature 4]",
      ],
      challenges: [
        "[Technical challenge 1]",
        "[Technical challenge 2]",
        "[Technical challenge 3]",
      ],
      results: [
        "[Verified result 1]",
        "[Verified result 2]",
      ],
      liveDemoUrl: "https://YOUR-LIVE-DEMO.com",
      githubUrl: "https://github.com/YOUR_USERNAME/project-2",
    },
    {
      id: "project-3",
      title: "[PROJECT NAME]",
      category: "Backend / Database System",
      featured: false,
      description:
        "[Project description: A database-driven solution engineered with scalable APIs and structured relational models.]",
      problem:
        "[Addresses data consistency and transactional complexity for multi-entity workflows.]",
      solution:
        "[Built robust REST endpoints and structured database schemas to handle data synchronization.]",
      techStack: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
      architectureNodes: [
        { step: 1, label: "Client Client", sublabel: "API Consumer / Dashboard" },
        { step: 2, label: "API Gateway", sublabel: "Authentication & Validation" },
        { step: 3, label: "Core Service", sublabel: "CRUD & Business Rules" },
        { step: 4, label: "Relational DB", sublabel: "PostgreSQL / Schema" },
      ],
      features: [
        "[Core feature 1]",
        "[Core feature 2]",
        "[Core feature 3]",
      ],
      challenges: [
        "[Technical challenge 1]",
        "[Technical challenge 2]",
      ],
      results: [
        "[Verified result 1]",
      ],
      liveDemoUrl: "https://YOUR-LIVE-DEMO.com",
      githubUrl: "https://github.com/YOUR_USERNAME/project-3",
    },
  ],
};
