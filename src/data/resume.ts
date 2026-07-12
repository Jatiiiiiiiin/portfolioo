export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  details?: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResumeData {
  name: string;
  firstName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode?: string;
  resume: string;
  summary: string;
  tagline: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  certifications: Certification[];
  services: ServiceItem[];
  faq: FAQItem[];
}

export const RESUME_DATA: ResumeData = {
  name: "Jatin Thakur",
  firstName: "JATIN",
  title: "Full-Stack & AI/ML Developer",
  location: "Ghaziabad, India",
  email: "jatinjatinth@gmail.com",
  phone: "+91 9719543817",
  linkedin: "https://linkedin.com/in/jatin-thakurr",
  github: "https://github.com/Jatiiiiiiiin",
  leetcode: "https://leetcode.com/u/jatinjatinth/",
  resume: "/Jatin_resume.pdf",
  tagline: "I BUILD AI-POWERED DIGITAL EXPERIENCES THAT ARE SMART, SCALABLE AND IMPACTFUL.",
  summary: "Full-Stack & AI/ML Developer with 4+ production-grade projects and 2 internships in professional Agile environments, specializing in LangChain, RAG pipelines, IoT integration, workflow automation, and React — seeking impactful roles in AI-powered product development and intelligent systems.",
  education: [
    {
      school: "Dr. A.P.J. Abdul Kalam Technical University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Uttar Pradesh, India",
      period: "Aug. 2022 – Jun. 2026",
      details: ["CGPA: 7.7/10.0"]
    },
    {
      school: "Central Board of Secondary Education (CBSE)",
      degree: "Senior Secondary Education (Class XII)",
      location: "India",
      period: "2021 – 2022",
      details: ["Percentage: 86.7%"]
    }
  ],
  experience: [
    {
      company: "Codebyte Solutions",
      role: "AI Developer Intern",
      location: "India",
      period: "Apr. 2026 – Present",
      description: [
        "Developing AI-powered IoT solutions integrating smart hardware with cloud-based ML models for real-time data processing and analytics.",
        "Building workflow automation systems using n8n to streamline business processes, reducing manual intervention by ~80%."
      ],
      image: "/images/service-iot.png"
    },
    {
      company: "Primus Software Development India Pvt. Ltd.",
      role: "Software Engineer Trainee",
      location: "India",
      period: "Jul. 2025 – Aug. 2025",
      description: [
        "Contributed to frontend module development using React.js, implementing reusable UI components within a production-grade codebase.",
        "Gained hands-on experience with Agile/Scrum workflow, participating in sprint planning, daily standups, and code reviews.",
        "Practiced version control best practices using Git and GitHub, including branching strategies and pull request management."
      ],
      image: "/images/project-asterix-find.png"
    }
  ],
  skills: [
    {
      category: "AI / ML",
      items: ["Generative AI", "LangChain", "RAG", "TensorFlow", "Hugging Face", "Agentic AI", "Vector Databases"]
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "FastAPI", "Tailwind CSS", "Firebase", "REST APIs"]
    },
    {
      category: "Automation",
      items: ["n8n", "Workflow Orchestration", "Webhook APIs"]
    },
    {
      category: "Languages & Tools",
      items: ["Python", "JavaScript", "TypeScript", "Git", "GitHub", "Docker", "Agile/Scrum"]
    }
  ],
  certifications: [
    {
      title: "Qualcomm AI Upskilling Certificate",
      issuer: "Qualcomm",
      details: "Technical Foundations (AI/ML Specialization)",
      link: "/AI-Upskilling-certificate.pdf"
    },
    {
      title: "Python (Basics) Certificate",
      issuer: "HackerRank",
      details: "Achieved 5-Star rating in Python on HackerRank.",
      link: "https://www.hackerrank.com/certificates/886425bf72a9"
    },
    {
      title: "LeetCode Problem Solving",
      issuer: "LeetCode",
      details: "Solved 80+ problems in Python, strengthening DSA skills.",
      link: "https://leetcode.com/u/jatinjatinth/"
    }
  ],
  services: [
    {
      id: "001",
      title: "AI / ML\nDEVELOPMENT",
      description: "BUILDING INTELLIGENT SYSTEMS WITH RAG PIPELINES, LANGCHAIN, AND GENERATIVE AI FOR REAL-WORLD APPLICATIONS.",
    },
    {
      id: "002",
      title: "FULL-STACK\nWEB APPS",
      description: "CRAFTING RESPONSIVE, SCALABLE WEB APPLICATIONS WITH REACT, NODE.JS, AND MODERN FRAMEWORKS.",
    },
    {
      id: "003",
      title: "WORKFLOW\nAUTOMATION",
      description: "DESIGNING END-TO-END AUTOMATION WORKFLOWS WITH N8N, WEBHOOKS, AND INTELLIGENT ORCHESTRATION.",
    },
    {
      id: "004",
      title: "IoT\nSOLUTIONS",
      description: "INTEGRATING SMART HARDWARE WITH CLOUD-BASED ML MODELS FOR REAL-TIME DATA PROCESSING.",
    }
  ],
  faq: [
    {
      question: "WHAT TECHNOLOGIES DO YOU SPECIALIZE IN?",
      answer: "I specialize in React.js, Next.js, Python, FastAPI, LangChain, TensorFlow, and modern AI/ML frameworks. My stack includes both frontend and backend technologies, with a focus on AI-powered applications."
    },
    {
      question: "WHAT IS YOUR TYPICAL DEVELOPMENT PROCESS?",
      answer: "I follow an Agile methodology — starting with requirements gathering, then moving through design, development, testing, and deployment phases with regular check-ins and iterative improvements."
    },
    {
      question: "CAN YOU BUILD AI-POWERED FEATURES INTO EXISTING APPS?",
      answer: "Absolutely — integrating AI capabilities into existing applications is a core part of my work. Whether it's adding RAG-based search, chatbots, or intelligent automation, I can enhance your existing systems."
    },
    {
      question: "HOW DO YOU HANDLE VERSION CONTROL AND COLLABORATION?",
      answer: "I use Git and GitHub with proper branching strategies, pull request workflows, and code reviews. I'm experienced with Agile/Scrum practices including sprint planning and daily standups."
    },
    {
      question: "DO YOU OFFER ONGOING SUPPORT AFTER PROJECT DELIVERY?",
      answer: "Yes — I believe in building lasting relationships with collaborators. I provide post-delivery support, bug fixes, and feature enhancements to ensure the project continues to run smoothly."
    },
    {
      question: "CAN YOU WORK WITH EXISTING CODEBASES AND TEAMS?",
      answer: "Definitely — I have professional experience contributing to production-grade codebases in team environments, following established patterns and coding standards."
    }
  ]
};
