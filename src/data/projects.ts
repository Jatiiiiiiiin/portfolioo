export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  status: string;
  description: string;
  overview: string;
  tech: string[];
  stackBreakdown?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    additional?: string[];
  };
  features?: {
    seeker?: string[];
    employer?: string[];
    ai?: string[];
  };
  highlights?: string[];
  challenges?: {
    title: string;
    description: string;
  }[];
  github?: string;
  demo?: string;
  commits?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "08",
    slug: "linkedin-automation",
    title: "LinkedIn CRM Automation",
    category: "Workflow Orchestration",
    year: "2025",
    status: "Production",
    description: "End-to-end LinkedIn lead generation and CRM sync automation using n8n and intelligent scoring.",
    overview: "Designed end-to-end automation workflows for LinkedIn lead generation, connection management, and message sequencing using n8n. Integrated multi-platform CRM sync (Salesforce, HubSpot) with intelligent lead scoring, reducing manual data entry by ~75%.",
    tech: ["n8n", "LinkedIn API", "PostgreSQL", "JavaScript", "Webhooks"],
    highlights: [
        "Automated lead generation pipeline",
        "Intelligent lead scoring system",
        "Multi-platform CRM integration"
    ],
    challenges: [
        { title: "API Rate Limiting", description: "Implemented intelligent queuing and delay logic to stay within LinkedIn API limits." }
    ]
  },
  {
    id: "07",
    slug: "asterix-find",
    title: "Asterix Find",
    category: "AI-Powered Job Discovery",
    year: "2024-2025",
    status: "Production",
    commits: "126+ commits",
    description: "Semantic resume-to-job matching engine achieving 85%+ relevance using Sentence Transformers.",
    overview: "Asterix Find is an intelligent job discovery platform that leverages semantic matching to connect job seekers with best-fit roles. Built with a React/FastAPI stack, it uses Sentence Transformers and Hugging Face models to analyze resumes and job listings with high accuracy.",
    tech: ["React", "TypeScript", "FastAPI", "Hugging Face", "Sentence Embeddings", "Firebase"],
    stackBreakdown: {
      frontend: ["React with TypeScript", "Vite", "Tailwind CSS"],
      backend: ["FastAPI (Python)", "Hugging Face Transformers", "Sentence Embeddings"],
      database: ["Firebase Firestore", "Firebase Auth"],
      additional: ["Vector Similarity Search", "Automated Job Scraping"]
    },
    highlights: [
        "Semantic matching with 85%+ accuracy",
        "Automated end-to-end discovery pipeline",
        "Real-time relevance scoring"
    ],
    github: "https://github.com/Jatiiiiiiiin/asterix-jobs",
    demo: "https://asterix-jobs.vercel.app",
    stats: [
        { label: "Accuracy", value: "85%+" },
        { label: "Efficiency", value: "70%+" }
    ]
  },
  {
    id: "01",
    slug: "ai-youtube-summarizer",
    title: "AI YouTube Summarizer",
    category: "Generative AI / RAG",
    year: "2025",
    status: "Production",
    description: "Conversational RAG pipeline over video transcripts, cutting review time by ~60%.",
    overview: "Built a RAG pipeline over YouTube transcripts enabling conversational Q&A and semantic retrieval supporting videos up to 2 hours.",
    tech: ["Python", "LangChain", "RAG", "Vector Database", "YouTube API"],
    highlights: [
        "Conversational Q&A over transcripts",
        "Semantic retrieval for long-form content",
        "Multi-query context maintenance"
    ],
    challenges: [
        { title: "Context Window", description: "Optimized retrieval for long videos to maintain accuracy across multi-turn conversations." }
    ]
  },
  {
    id: "02",
    slug: "ai-pdf-chat",
    title: "AI PDF Chat",
    category: "Document Intelligence",
    year: "2025",
    status: "Production",
    description: "Conversational document querying using retrieval-augmented generation for instant insights.",
    overview: "Intelligent document querying system that enables conversational interactions with PDF documents using advanced RAG techniques.",
    tech: ["LangChain", "Vector DB (Pinecone/Chroma)", "PDF Parsing", "Python"],
    highlights: [
        "Multi-document upload and processing",
        "Citation and source tracking",
        "Context-aware question answering"
    ]
  },
  {
    id: "03",
    slug: "waste-management-ai",
    title: "Waste Management AI",
    category: "Computer Vision",
    year: "2024",
    status: "Production",
    description: "AI-powered waste classification system with location-based recycling integration.",
    overview: "AI-powered waste classification system that identifies waste types and integrates location-based recycling facility recommendations.",
    tech: ["YOLOv8", "TensorFlow", "Computer Vision", "Google Maps API"],
    highlights: [
        "Real-time waste classification",
        "Location-based recycling center finder",
        "High-accuracy object detection model"
    ]
  },
  {
    id: "04",
    slug: "quikping",
    title: "QuikPing",
    category: "Real-Time Chat",
    year: "2024",
    status: "Production",
    description: "Secure real-time chat with QR requests, group chats, and self-destructing messages.",
    overview: "Secure real-time chat application with innovative features including QR-based connection requests, group chats, and self-destructing messages.",
    tech: ["React.js", "Firebase", "QR Code Generation", "WebSocket"],
    highlights: [
        "QR-based connection requests",
        "Self-destructing messages with timer",
        "End-to-end encrypted messaging"
    ]
  },
  {
    id: "05",
    slug: "loovo",
    title: "Loovo",
    category: "E-Commerce",
    year: "2024",
    status: "Production",
    description: "Fully responsive e-commerce platform with cart, wishlist, and payment integration.",
    overview: "Fully responsive e-commerce platform with complete shopping experience including cart management, wishlist, and integrated payment gateway.",
    tech: ["React.js", "MongoDB", "Razorpay", "Express.js"],
    github: "https://github.com/Jatiiiiiiiin/loovo",
    demo: "https://loovo.vercel.app",
    highlights: [
        "Secure payment processing via Razorpay",
        "Order tracking and history",
        "JWT-based authentication"
    ]
  },
  {
    id: "06",
    slug: "pokemon-explorer",
    title: "Pokémon Explorer",
    category: "Web App",
    year: "2023",
    status: "Production",
    description: "Data-driven application with dynamic search, stats, and filtering powered by PokeAPI.",
    overview: "Interactive Pokémon database application featuring dynamic search, detailed statistics, and advanced filtering capabilities using the PokéAPI.",
    tech: ["React.js", "JavaScript", "PokéAPI", "RESTful API"],
    github: "https://github.com/Jatiiiiiiiin/pokemon-explorer",
    demo: "https://pokemon-explorer-jatiiiiin.vercel.app",
    highlights: [
        "Dynamic search functionality",
        "Pokémon stats visualization",
        "Type-based filtering"
    ]
  }
];
