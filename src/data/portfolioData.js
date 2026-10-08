export const portfolioData = {
  personal: {
    name: "Mehtab Alam",
    role: "Senior Frontend Engineer & UI/UX Architect",
    tagline: "React.js • Next.js • React Native • TypeScript",
    valueProposition:
      "Crafting resilient, high-performance web applications, enterprise dashboards, and cross-platform mobile experiences with clean code architecture.",
    bio: "Senior Frontend Engineer with 2.5+ years of production experience building scalable user interfaces across logistics, e-commerce, Web3, and health-tech domains. Passionate about component-driven design systems, WCAG 2.1 AA accessibility, state management architectures, and sub-second Core Web Vitals performance.",
    location: "New Delhi, India",
    address: "H-107, Jamia Nagar, Okhla, New Delhi - 110025",
    phone: "+91-7210986211",
    email: "mehtab.du786@gmail.com",
    avatar: "/mehtab-alam.jpg",
    resumeUrl: "/Mehtab_Alam_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/mehtab-alam-947a54215/",
    github: "https://github.com/",
    portfolioLive: "https://mehtab-portfolio-main.vercel.app/",
    status: "Available for Senior & Lead Opportunities",
    availability: "Immediate / Full-time & High-impact Contracts"
  },

  stats: [
    { label: "Experience", value: "2.5+", unit: "Years", description: "Production Frontend Engineering" },
    { label: "Delivered", value: "8+", unit: "Projects", description: "Enterprise & Scaled Web Apps" },
    { label: "Core Web Vitals", value: "98+", unit: "Score", description: "Performance & SEO Benchmark" },
    { label: "Accessibility", value: "WCAG", unit: "AA Compliant", description: "Universal UX & Contrast Standards" }
  ],

  skillCategories: [
    {
      id: "core",
      name: "Core Frontend & Mobile",
      description: "Modern JavaScript ecosystems, component lifecycles, and cross-platform mobile development.",
      icon: "Code2",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "React.js", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "Next.js", level: "Advanced", years: "2+ yrs", popular: true },
        { name: "TypeScript", level: "Advanced", years: "2+ yrs", popular: true },
        { name: "React Native", level: "Proficient", years: "1.5+ yrs", popular: true },
        { name: "JavaScript (ES6+)", level: "Expert", years: "3+ yrs", popular: false },
        { name: "JSX / TSX", level: "Expert", years: "2.5+ yrs", popular: false },
        { name: "HTML5 & Semantic Web", level: "Expert", years: "3+ yrs", popular: false },
        { name: "React Router", level: "Expert", years: "2.5+ yrs", popular: false }
      ]
    },
    {
      id: "state",
      name: "State Management & Data Fetching",
      description: "Predictable unidirectional data flows, caching layers, and asynchronous REST integration.",
      icon: "Database",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Redux Toolkit (RTK)", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "Context API", level: "Expert", years: "2.5+ yrs", popular: false },
        { name: "RESTful APIs", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "Axios Interceptors", level: "Expert", years: "2.5+ yrs", popular: false },
        { name: "React Hooks & Custom Hooks", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "State Normalization", level: "Advanced", years: "2+ yrs", popular: false }
      ]
    },
    {
      id: "styling",
      name: "Styling & UI Architecture",
      description: "Pixel-perfect Figma translations, robust design systems, and responsive layouts.",
      icon: "Layout",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Tailwind CSS", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "Material-UI (MUI)", level: "Advanced", years: "2+ yrs", popular: true },
        { name: "SCSS / SASS", level: "Advanced", years: "2+ yrs", popular: false },
        { name: "CSS3 / Flexbox / Grid", level: "Expert", years: "3+ yrs", popular: false },
        { name: "Responsive Mobile-First UI", level: "Expert", years: "3+ yrs", popular: true },
        { name: "Figma-to-Code Translation", level: "Expert", years: "2.5+ yrs", popular: true },
        { name: "Glassmorphism & Micro-animations", level: "Advanced", years: "2+ yrs", popular: false }
      ]
    },
    {
      id: "tooling",
      name: "Tooling & Backend Basics",
      description: "Modern build tooling, version control, API testing, and full-stack fundamentals.",
      icon: "Wrench",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Git & GitHub", level: "Advanced", years: "3+ yrs", popular: true },
        { name: "Vite", level: "Advanced", years: "2+ yrs", popular: true },
        { name: "Webpack", level: "Proficient", years: "1.5+ yrs", popular: false },
        { name: "Postman API Testing", level: "Advanced", years: "2+ yrs", popular: false },
        { name: "Node.js (Fundamentals)", level: "Intermediate", years: "1+ yr", popular: false },
        { name: "Express.js", level: "Intermediate", years: "1+ yr", popular: false },
        { name: "MongoDB", level: "Intermediate", years: "1+ yr", popular: false },
        { name: "MySQL / SQL", level: "Intermediate", years: "1+ yr", popular: false },
        { name: "NPM / Yarn", level: "Advanced", years: "3+ yrs", popular: false }
      ]
    }
  ],

  experiences: [
    {
      company: "Indicold Pvt Ltd",
      location: "Gurugram, Haryana",
      role: "Frontend Developer (React.js, Next.js)",
      period: "Nov 2024 – July 2025",
      type: "Full-Time",
      tagline: "Enterprise Logistics & Temperature-Controlled Cold-Chain Platform",
      achievements: [
        "Architected and maintained responsive logistics platforms and enterprise dashboards, notably the mission-critical Indilink Admin Portal.",
        "Streamlined complex REST API integrations and state workflows using Redux Toolkit and React Hooks, slashing data-sync latency by 35%.",
        "Engineered modular, reusable UI components adhering strictly to cross-browser compatibility and stringent performance budgets (<2s TTI).",
        "Implemented telemetry filters for ambient, chilled, and frozen cold-chain facilities with dynamic data-table filtering and status alerts."
      ],
      techStack: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Axios", "Postman", "Git"],
      metrics: "35% faster state synchronization • 100% responsive across warehouse devices"
    },
    {
      company: "ProX PC Pvt Ltd",
      location: "New Delhi",
      role: "Frontend Developer (React.js, Next.js, React Native)",
      period: "May 2024 – Oct 2024",
      type: "Full-Time",
      tagline: "High-Performance Computing Configurator & Cross-Platform Client Interfaces",
      achievements: [
        "Built cross-platform client web applications and mobile interfaces utilizing React Native and Next.js.",
        "Implemented scalable component architectures with TypeScript and integrated critical third-party e-commerce APIs.",
        "Collaborated in Agile sprints to drive user-centric features and custom PC configurator flows, elevating checkout conversion by 28%.",
        "Engineered real-time hardware compatibility validation logic preventing component mismatch errors during configuration."
      ],
      techStack: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Context API", "Agile / Scrum"],
      metrics: "28% higher configurator conversion • Real-time hardware rule validator"
    },
    {
      company: "Himotech Global Pvt Ltd",
      location: "Noida, UP",
      role: "User Interface (UI) Developer",
      period: "Dec 2021 – Jan 2023",
      type: "Full-Time",
      tagline: "Design Systems, Design-to-Code Conversion & Web Applications",
      achievements: [
        "Converted complex Figma and Adobe XD design systems into accessible, responsive web interfaces using HTML5/SCSS and React.js.",
        "Spearheaded UI refactoring with Tailwind CSS and Material-UI (MUI) for improved mobile-first responsiveness and consistency.",
        "Ensured rigorous cross-browser compatibility and accessibility testing across desktop, tablet, and mobile breakpoints.",
        "Conducted usability testing and rapid iteration based on user behavioral feedback to refine UI ergonomics."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Material-UI", "SCSS", "HTML5", "Figma", "Git/GitHub"],
      metrics: "Delivered 5+ multi-client web applications • Sub-second mobile rendering"
    }
  ],

  projects: [
    {
      id: "indilink",
      title: "Indilink Admin Portal",
      category: "Enterprise / Dashboards",
      organization: "Indicold Pvt Ltd",
      liveUrl: "https://admin.indilink.in",
      githubUrl: null,
      description:
        "Enterprise temperature-controlled warehousing and cold-chain supply chain management portal handling frozen, chilled, and ambient cargo tracking with real-time analytics.",
      caseStudy: {
        problem:
          "Warehouse operators and logistics coordinators required a unified interface to monitor thousands of temperature-sensitive SKU batches across multiple Indian depots without data sync delay.",
        solution:
          "Engineered a high-performance admin portal with Redux Toolkit, featuring virtualized telemetry data tables, granular RBAC permissions, and real-time shipment manifest workflows.",
        architecture:
          "Modular React architecture featuring isolated state slices, automated Axios request deduplication, and low-overhead Tailwind CSS styling.",
        impact:
          "Processed thousands of daily consignment updates with 35% reduced latency and 99.8% operational uptime."
      },
      tags: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Axios"],
      accentColor: "from-blue-600 to-cyan-500",
      featured: true,
      badge: "Enterprise Production"
    },
    {
      id: "proxpc",
      title: "ProX PC E-Commerce & Configurator",
      category: "Web Apps",
      organization: "ProX PC Pvt Ltd",
      liveUrl: "https://www.proxpc.com/",
      githubUrl: null,
      description:
        "High-performance custom PC builder platform providing bespoke workstation configurations for AI engineers, 3D artists, and professional gamers.",
      caseStudy: {
        problem:
          "High cart abandonment caused by complicated component compatibility rules (socket mismatches, PSU wattages, clearance dimensions) and slow recalculations.",
        solution:
          "Built an interactive step-by-step configurator engine in TypeScript and React that instantly validates hardware interoperability and updates live estimates.",
        architecture:
          "Strict TypeScript contracts, Context API state management for the configuration tree, and snappy responsive Tailwind UI.",
        impact:
          "Drove a 28% increase in completed custom PC builds and cut customer support spec-verification requests by half."
      },
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "Context API"],
      accentColor: "from-purple-600 to-indigo-600",
      featured: true,
      badge: "E-Commerce & 3D Config"
    },
    {
      id: "capnolearning",
      title: "CapnoLearning Platform",
      category: "Web Apps",
      organization: "Himotech Global Pvt Ltd",
      liveUrl: "https://www.capnolearning.com/",
      githubUrl: null,
      description:
        "US-based health-tech application tracking capnography biometric telemetry, breathing habits, and real-time O2/CO2 respiratory dynamics.",
      caseStudy: {
        problem:
          "Clinical practitioners needed an intuitive browser-based application to visualize complex capnography waveforms and guide patients through therapeutic breathing regimes.",
        solution:
          "Developed high-resolution live waveform charts, patient progress histories, and interactive clinical assessments with responsive web design.",
        architecture:
          "React.js component library with optimized canvas and SVG rendering routines to maintain steady 60fps graph updates.",
        impact:
          "Successfully deployed across clinical practices in the US with exceptional practitioner feedback and WCAG compliant contrast."
      },
      tags: ["React.js", "HealthTech", "Biometrics Data", "SCSS", "REST APIs", "Chart.js"],
      accentColor: "from-teal-600 to-emerald-500",
      featured: true,
      badge: "US Health-Tech"
    },
    {
      id: "kidzania",
      title: "KidZania India Portal",
      category: "Web Apps",
      organization: "Himotech Global Pvt Ltd",
      liveUrl: "https://india.kidzania.com/en-in",
      githubUrl: null,
      description:
        "Interactive family entertainment, roleplay experiential learning destination, and ticketing web platform handling massive consumer traffic.",
      caseStudy: {
        problem:
          "High mobile bounce rate during peak festival booking rushes and the need to showcase 60+ real-world roleplay activities engagingly.",
        solution:
          "Transformed the UI into an immersive mobile-first portal with interactive venue itineraries, lightning-fast ticketing flows, and rich multimedia showcases.",
        architecture:
          "SSR-optimized Next.js architecture with progressive image loading, CSS micro-animations, and modular component reusability.",
        impact:
          "Reduced page load time to under 1.2s and provided a seamless booking journey for over 50,000 monthly visiting families."
      },
      tags: ["React.js", "Next.js", "SCSS", "Mobile-First", "High Traffic", "Figma-to-Code"],
      accentColor: "from-amber-500 to-orange-600",
      featured: true,
      badge: "High-Traffic Consumer"
    },
    {
      id: "wizard-financial",
      title: "Wizard Financial Web3",
      category: "Web Apps",
      organization: "Himotech Global Pvt Ltd",
      liveUrl: "https://www.wizard.financial/",
      githubUrl: null,
      description:
        "Decentralized Web3 token ecosystem, staking reward calculators, and interactive digital NFT marketplace built with dark-mode aesthetic.",
      caseStudy: {
        problem:
          "Web3 users demanded transparent yield tracking, non-custodial wallet connectivity, and low-friction NFT transaction states.",
        solution:
          "Implemented wallet connection state handlers, dynamic APR staking estimators, and card grids with glassmorphic depth.",
        architecture:
          "React component architecture with Redux state for multi-chain assets, Web3 wallet event listeners, and Tailwind styling.",
        impact:
          "Achieved zero UI freezing during high-gas trading sessions and generated stellar community engagement."
      },
      tags: ["React.js", "Web3 / DeFi", "NFT Marketplace", "Tailwind CSS", "Redux", "Crypto"],
      accentColor: "from-indigo-600 to-fuchsia-600",
      featured: false,
      badge: "Web3 & NFT"
    },
    {
      id: "asy-fit",
      title: "ASY.FIT (MASY.FIT)",
      category: "Mobile / Utility",
      organization: "ProX PC Pvt Ltd",
      liveUrl: "https://yoga-app-olive.vercel.app/",
      githubUrl: null,
      description:
        "Modern yoga and fitness web application offering personalized guided wellness programs, class scheduling, and progress metrics.",
      caseStudy: {
        problem:
          "Users wanted an agile, installable-feeling workout guide with zero clutter, quick routine timers, and video playback.",
        solution:
          "Designed a mobile-first wellness companion with smooth gesture transitions, dark aesthetic, and persistent workout routine state.",
        architecture:
          "Component-driven React layout with mobile ergonomic touch targets, local storage persistence, and Vercel edge deployment.",
        impact:
          "Achieved a 99 Lighthouse performance rating and sub-500ms initial page paint."
      },
      tags: ["React.js", "Mobile-First", "Tailwind CSS", "Vercel", "Fitness UI"],
      accentColor: "from-rose-500 to-pink-600",
      featured: false,
      badge: "Wellness App"
    },
    {
      id: "mountiver",
      title: "Mountiver Hotel & Travel Booking",
      category: "Web Apps",
      organization: "ProX PC Pvt Ltd",
      liveUrl: "http://mountiver.uttamserve.com/",
      githubUrl: null,
      description:
        "Comprehensive hotel reservation, adventure travel blog, and vacation package booking portal with interactive destination discovery.",
      caseStudy: {
        problem:
          "Travelers needed effortless room comparison, transparent seasonal tariff calculators, and curated local itinerary guides.",
        solution:
          "Engineered an intuitive 3-step checkout flow, date range availability pickers, and responsive photo galleries.",
        architecture:
          "React.js frontend with REST API integrations, dynamic query string filters, and Tailwind utility styling.",
        impact:
          "Cut reservation completion steps from 6 to 3, boosting mobile conversions."
      },
      tags: ["React.js", "Tailwind CSS", "Booking Engine", "REST APIs", "Travel Tech"],
      accentColor: "from-sky-500 to-indigo-600",
      featured: false,
      badge: "Travel Tech"
    },
    {
      id: "memory-game",
      title: "Pediatric Memory Training Game",
      category: "Mobile / Utility",
      organization: "Himotech Global Pvt Ltd",
      liveUrl: "https://dp736e2r8qgrw.cloudfront.net/",
      githubUrl: null,
      description:
        "Interactive cognitive enhancement and sequence memory training game designed for pediatric therapy and brain development.",
      caseStudy: {
        problem:
          "Children undergoing memory therapy needed an engaging, lightweight browser game that was distraction-free and accessible on low-end tablets.",
        solution:
          "Created an ultra-fast gamified memory test with smooth card animations, adaptive difficulty tiers, and reward sound effects.",
        architecture:
          "Pure React state-machine for game rounds, zero heavy dependencies, deployed via AWS CloudFront CDN.",
        impact:
          "Entire bundle under 95KB with instant loading even on slow cellular networks."
      },
      tags: ["React.js", "Cognitive Game", "CSS Animations", "CloudFront", "Lightweight"],
      accentColor: "from-emerald-500 to-teal-500",
      featured: false,
      badge: "Cognitive EdTech"
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      period: "2022 – 2024",
      score: "CGPA: 8.20 / 10",
      details: "Advanced software engineering, distributed systems, algorithms, and web application architecture."
    },
    {
      degree: "Bachelor of Computer Science (B.Sc)",
      institution: "Delhi University",
      period: "2017 – 2020",
      score: "CGPA: 5.95 / 10",
      details: "Foundational computer science, object-oriented programming, data structures, and database management."
    }
  ],

  strengths: [
    { title: "Self-Motivated & Proactive", desc: "Takes autonomous ownership from architectural planning to production rollouts." },
    { title: "Clean Code & Refactoring", desc: "Strong advocate for clean code, DRY principles, and DRY component modularity." },
    { title: "Continuous Learning", desc: "Constantly evaluating cutting-edge frontend tooling, React Server Components, and AI tooling." },
    { title: "Cross-Functional Leadership", desc: "Bridges the gap between Figma design systems and backend API contracts seamlessly." }
  ],

  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Hindi", proficiency: "Native / Bilingual" },
    { language: "Urdu", proficiency: "Native / Bilingual" }
  ]
};
