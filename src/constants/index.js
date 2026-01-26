import nomster from "../assets/projects/nomster.png";
import spotifind from "../assets/projects/spotifind.png";
import linklist from "../assets/projects/LINKLIST.jpg";
import comingsoon from "../assets/projects/comingsoon.jpg";

export const EXPERIENCES = [
  {
    year: "Aug'25 - Present",
    role: "Partner Solution Consultant Intern (AI Apps)",
    company: "Workato",
    description: [
      "Automated Certification Reporting: Deployed a workflow automation app that allows Workato partners to instantly view company-wide certification progress, cutting report generation time from 3 days to just 5 seconds.",
      "AI Demo Solutions: Built AI integrations connecting Workato’s Model Context Protocol (MCP) servers with LLM clients like ChatGPT and local runtimes such as LMStudio, enabling partners to turn Workato workflows into interactive AI tools.",
      "Scalable RAG Pipelines: Developed LangChain pipelines with Workato MCP servers and vector databases (e.g., ChromaDB) to implement retrieval-augmented generation, showcasing enterprise-ready context injection for AI applications.",
    ],
    technologies: [
      "Model Context Protocol (MCP)",
      "LangChain",
      "ChromaDB",
      "Large Language Models",
      "Workflow Automation",
      "Retrieval-Augmented Generation",
    ],
  },
  {
    year: "Jan'25 - Apr'25",
    role: "Data Analytics Intern (Consumer & SME)",
    company: "MariBank",
    description: [
      "Assisted in high-impact projects end-to-end to build the digital financial services business (e.g. product development, business development, partnerships).",
      "Automated manual processes using Google Apps Script to improve operational efficiency.",
      "Produced Business Requirement Documents (BRDs) to support upcoming feature launches.",
      "Applied analytical tools and conceptual problem-solving to design data-driven initiatives.",
    ],
    technologies: [
      "MySQL",
      "Python",
      "Pandas",
      "Google Apps Script",
      "Project Management",
      "BRD Writing",
    ],
  },
  {
    year: "Jan'25 - Apr'25",
    role: "Undergraduate Teaching Assistant - IS2218 Digital Platforms for Businesses",
    company: "NUS Computing",
    description: [
      `Evaluating the assignments for students to better their understanding of digital businesses (e.g network effects, metrics to a successful platform).`,
    ],
    technologies: [
      "Financial Statement Analysis",
      "Consumer Metrics",
      "Monetization Strategies",
    ],
  },
  {
    year: "Aug'24 - Dec'24",
    role: "Undergraduate Teaching Assistant - CS1010A Programming Methodology",
    company: "NUS Computing",
    description: [
      `Taught programming concepts in Python (e.g Data Structures, OOP, Searching and Sorting).`,
      `Facilitated weekly tutorial sessions and evaluation of the students' assignments.`,
    ],
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "Algorithms",
      "Teaching",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Trading Project (Work in Progress)",
    image: comingsoon,
    description:
      "Working on a keyword-focused reinforcement learning system for news-driven market prediction, converting rolling financial news into structured sentiment features and generating adaptive next-day trading signals. The modular architecture supports multiple assets with shared representations (e.g Gold, NVIDIA) and independently trained decision policies, enabling scalable, automated market insights.",
    technologies: ["Reinforcement Learning with Verified Rewards", "FinBERT", "Financial Market Prediction"],
    repoUrl: "https://github.com/ykwong2002/trading-project"
  },
  {
    title: "LinkList",
    image: linklist,
    description:
      "A Telegram bot that simplifies networking in group chats by compiling LinkedIn and Instagram links into a single, organized chain message. Perfect for networking events, orientation camps, and professional group chats.",
    technologies: ["Python", "Automation", "Telegram Bot", "Problem-Solving"],
    repoUrl: "https://github.com/ykwong2002/LinkListBot"
  },
  {
    title: "Spotifynd",
    image: spotifind,
    description:
      "A playlist continuation recommendation system that uses Machine Learning to recommend the next best song based on user's listening behaviour.",
    technologies: ["Scikit-Learn", "Machine Learning", "Collaborative Filtering", "Deep Neural Network"],
    repoUrl: "https://github.com/ouch528/Spotifynd"
  },
  {
    title: "Nomster",
    image: nomster,
    description:
      "A social food discovery platform where users share restaurant experiences, maintain wishlists, and connect with friends over dining adventures.",
    technologies: ["Vue.js", "Framer Motion", "Firebase", "PrimeVue"],
    repoUrl: "https://github.com/BT3103AppDev1/l1-finaltermproject-2425s2l1_group_21"
  },
];
