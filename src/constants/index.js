import { FaLinkedin, FaGithub, FaInstagram, FaJava } from "react-icons/fa";
import {
  SiPython,
  SiR,
  SiJavascript,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiHuggingface,
  SiApachespark,
  SiLangchain,
  SiFastapi,
  SiVuedotjs,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

import nomster from "../assets/projects/nomster.png";
import spotifind from "../assets/projects/spotifind.png";
import linklist from "../assets/projects/LINKLIST.jpg";
import hdbreeze from "../assets/projects/hdbreeze.png";

export const PROFILE = {
  name: "Wong Yeow Kang",
  role: "ML Engineer Intern @ TikTok Shop",
  tagline: ["I build and ship ", "ML and LLM systems", " end to end."],
  intro:
    "Year 4 Business Analytics student at NUS, specialising in Machine Learning. Right now I'm building uplift models at TikTok Shop and a vision-language document pipeline for my capstone.",
  location: "Singapore",
  email: "wongyeowkang@gmail.com",
};

export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wongyeowkang", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/ykwong2002", icon: FaGithub },
  { label: "Instagram", href: "https://www.instagram.com/kang.eroo", icon: FaInstagram },
];

export const STATS = [
  {
    value: "0.70 → 0.80",
    label: "purchase AUC after fixing a label bug",
    source: "TikTok Shop",
  },
  {
    value: "27+",
    label: "partners submitted in the first month",
    source: "Workato AI Marketplace",
  },
  {
    value: "83.6%",
    label: "recall on a bank's document parsing",
    source: "Workato",
  },
  {
    value: "73%",
    label: "cut in campaign operating cost",
    source: "MariBank",
  },
];

export const ABOUT = {
  paragraphs: [
    "I'm Yeow Kang, a Year 4 Business Analytics student at NUS School of Computing, specialising in Machine Learning. I like the applied end of AI: taking a model that looks good in a notebook and making it hold up in production.",
    "That usually means the unglamorous parts. Checking whether the labels are right, building evaluation that tells you which model deserves a live test, and putting validation around LLM output so the rest of the system stays predictable.",
    "Lately I've been deep in LLMs: RAG, agents, tool calling, fine-tuning, and how to evaluate any of it properly. Day to day that's uplift models at TikTok Shop, a vision-language document pipeline for my capstone, and a Second Brain run by Claude Code agents on the side.",
    "Before this I spent a year in Silicon Valley with NUS Overseas Colleges, interning at Workato in Palo Alto and studying at Stanford. Away from the keyboard I travel, boulder and play ultimate frisbee.",
  ],
  interests: ["LLM evaluation", "RAG", "Agents", "Fine-tuning", "Causal ML"],
};

export const EDUCATION = [
  {
    school: "National University of Singapore",
    detail: "BSc Business Analytics (Honours), School of Computing",
    note: "Machine Learning specialisation · GPA 4.47 / 5.0",
    period: "Aug 2023 – May 2027",
  },
  {
    school: "Stanford University",
    detail: "NUS Overseas Colleges, Silicon Valley",
    note: "Grade: A",
    period: "Aug 2025 – Dec 2025",
  },
];

export const CERTIFICATIONS = [
  "CS50AI: Introduction to AI with Python",
  "Google Advanced Data Analytics",
  "Quantitative Risk Management in Python",
];

export const SKILLS = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "R", icon: SiR },
      { name: "SQL" },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++ (learning)", icon: SiCplusplus },
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
      { name: "Hugging Face Transformers", icon: SiHuggingface },
      { name: "Spark", icon: SiApachespark },
      { name: "Causal inference & uplift modelling" },
      { name: "Recommendation systems" },
      { name: "Vision-language models" },
    ],
  },
  {
    title: "LLMs",
    note: "currently going deep on",
    items: [
      { name: "RAG" },
      { name: "ReAct agents" },
      { name: "Tool calling" },
      { name: "LLM evaluation" },
      { name: "SFT & LoRA fine-tuning" },
      { name: "Tokenization & embeddings" },
      { name: "Transformers" },
      { name: "RLHF / PPO / DPO / GRPO" },
      { name: "LangChain", icon: SiLangchain },
      { name: "MCP" },
    ],
  },
  {
    title: "Web & Tooling",
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Vue", icon: SiVuedotjs },
      { name: "React", icon: SiReact },
      { name: "Flask", icon: SiFlask },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Git", icon: SiGit },
      { name: "Postgres", icon: SiPostgresql },
      { name: "CI/CD" },
    ],
  },
];

export const EXPERIENCES = [
  {
    period: "Aug 2026 – Present",
    role: "Machine Learning Engineer Intern",
    company: "TikTok Shop",
    location: "Singapore",
    current: true,
    summary: "Working out who should get which promo.",
    points: [
      "Building uplift models that decide how promo budget gets split across users in four Southeast Asian markets.",
      "Caught a labelling bug that was hiding over half of real purchases. Fixing it took purchase AUC from 0.70 to 0.80.",
      "Tracked down why a model went haywire in a live A/B test, and had a fix redeployed within 10 hours.",
      "Built the offline eval framework that decides which models get a live test.",
    ],
    tags: ["Uplift modelling", "Causal ML", "Data pipelines", "Offline evaluation", "A/B testing"],
  },
  {
    period: "Aug 2025 – Jul 2026",
    role: "Partner Solutions Consultant Intern",
    company: "Workato",
    location: "Palo Alto, California",
    summary: "A year in Silicon Valley building AI things with partners.",
    points: [
      "Built the Workato AI Marketplace submission pipeline from zero to launch. 27+ partners submitted in the first month.",
      "Wrapped a bank's document parsing pipeline as an MCP server you can call from Claude. 83.6% recall on the test set.",
      "Built a LangChain RAG assistant for a legal tech startup, with cross-encoder reranking and a proper eval set.",
      "Automated the partner KPI reporting, so nobody tracks it by hand anymore.",
    ],
    tags: ["MCP", "LangChain", "RAG", "LLM evaluation", "Data pipelines"],
  },
  {
    period: "Jan 2025 – Apr 2025",
    role: "Data Analyst Intern (Consumer & SME)",
    company: "MariBank",
    location: "Singapore",
    summary: "Making SMS campaigns cheaper and less annoying.",
    points: [
      "Dug through SMS engagement data and found a way to cut campaign operating cost by 73%.",
      "Automated the monthly analysis in Google Apps Script. No more manual updates, and over 40% fewer irrelevant sends.",
    ],
    tags: ["MySQL", "Excel", "Google Apps Script"],
  },
  {
    period: "Aug 2024 – Dec 2024",
    role: "Teaching Assistant, CS1010A Programming Methodology",
    company: "NUS Computing",
    location: "Singapore",
    summary: "Teaching first-years to think in Python.",
    points: [
      "Taught data structures, algorithms and OOP in Python to first-year Computing students.",
      "80% of my class walked away with a distinction.",
    ],
    tags: ["Python", "Data structures", "Teaching"],
  },
];

// `visual` picks a drawn component in Projects.jsx; otherwise `image` is used.
// Leave `repoUrl` out while a repo is private and the card shows no link.
// `liveUrl` adds a "play" button for projects with a public demo.
export const PROJECTS = [
  {
    title: "Financial Document Processing",
    subtitle: "NUS BT4103 Capstone",
    period: "Aug 2026 – Present",
    size: "half",
    visual: "doc-extract",
    status: ["In progress", "Private repo · client work"],
    description:
      "A document extraction and claims system for a local precision-engineering SME. It reads invoices, receipts and claim forms straight from scans and PDFs into structured records.",
    points: [
      "Multi-step vision-language model pipeline, with Anthropic endpoints benchmarked against Hugging Face models on accuracy and cost.",
      "Schema validation and rule-based approval routing around the model, so downstream behaviour stays deterministic.",
      "FastAPI and Postgres backend, deployed on Vercel with CI.",
    ],
    technologies: ["VLMs", "FastAPI", "Postgres", "Schema validation", "CI/CD"],
    // Private for now. Add back once it is public:
    // repoUrl: "https://github.com/leeyenkai/BT4103",
  },
  {
    title: "Second Brain",
    subtitle: "Personal AI Agent System",
    period: "Jul 2026 – Present",
    size: "half",
    visual: "vault-graph",
    status: ["In progress", "Private repo"],
    description:
      "A personal knowledge base in Obsidian, run by Claude Code agents. The graph above is the vault: poke a node to see what lives there.",
    points: [
      "Agents built on custom skills and MCP connectors find events, track my portfolio and triage my email.",
      "The vault is their shared memory. Each agent runs on a schedule, reads the same notes and writes its results back.",
      "Fine-tuning an open-weight model on the notes, so I can ask it about anything I've written down.",
    ],
    technologies: ["Claude Code", "MCP", "Obsidian", "Agents", "Fine-tuning"],
  },
  {
    title: "HDBreeze",
    subtitle: "Wind Simulation Game",
    period: "Oct 2026",
    size: "half",
    image: hdbreeze,
    description:
      "A fan-made web game about how HDB block layouts shape the breeze at street level. Place blocks on real plots in Punggol, Tengah and Ang Mo Kio, watch a live wind and heat field, and keep the residents comfortable.",
    points: [
      "The wind is a toy 2D lattice-Boltzmann simulation running on the phone's GPU through WebGL2, with a simple heat model on top.",
      "Residents complain in Singlish through a 0.8M-parameter nanoGPT-style model I trained for it, running entirely in the browser.",
      "Real buildings baked from data.gov.sg HDB data, the URA Master Plan and OpenStreetMap, drawn with MapLibre GL JS.",
    ],
    technologies: ["TypeScript", "WebGL2", "MapLibre GL", "PyTorch", "Cloudflare Workers"],
    liveUrl: "https://hdbreeze.ykbuilds.workers.dev/",
    repoUrl: "https://github.com/ykwong2002/hdbreeze",
  },
  {
    title: "SpotiFind",
    subtitle: "Music Recommendation System",
    period: "Jan 2025 – May 2025",
    size: "half",
    image: spotifind,
    description:
      "A music recommender that mixes audio features, lyric sentiment and hybrid filtering to pick the next track.",
    points: [
      "Features engineered from 250,000+ songs, with K-means to recover genre structure.",
      "BERT-based sentiment on lyrics, plus collaborative and content-based filtering.",
    ],
    technologies: ["scikit-learn", "BERT", "K-means", "Collaborative filtering"],
    repoUrl: "https://github.com/ouch528/Spotifynd",
  },
  {
    title: "LinkList",
    subtitle: "Telegram Bot",
    size: "compact",
    image: linklist,
    imageOnLight: true,
    description:
      "A Telegram bot that gathers everyone's LinkedIn and Instagram links in a group chat into one tidy chain message. Handy for networking events and orientation camps.",
    technologies: ["Python", "Telegram Bot", "Automation"],
    repoUrl: "https://github.com/ykwong2002/LinkListBot",
  },
  {
    title: "Nomster",
    subtitle: "Social Food Discovery",
    size: "compact",
    image: nomster,
    description:
      "A social food discovery platform where friends share restaurant finds, keep wishlists and plan where to eat next.",
    technologies: ["Vue.js", "Firebase", "PrimeVue"],
    repoUrl: "https://github.com/BT3103AppDev1/l1-finaltermproject-2425s2l1_group_21",
  },
];

// Folders in the Second Brain vault, shown as hubs in VaultGraph.jsx.
// The first entry sits at the centre of the graph.
export const VAULT_NODES = [
  {
    id: "me",
    description: "Who I am, my goals and preferences. Every agent reads this first.",
  },
  {
    id: "daily",
    description: "Daily notes. Agents write what they did back here.",
  },
  {
    id: "events",
    description: "An agent scouts events worth going to.",
  },
  {
    id: "finance",
    description: "Tracks my stock portfolio and writes up recommendations.",
  },
  {
    id: "inbox",
    description: "Email triage lands here, sorted by what needs a reply.",
  },
  {
    id: "career",
    description: "Roles, applications and interview prep notes.",
  },
];
