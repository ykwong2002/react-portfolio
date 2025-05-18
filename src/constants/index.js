import nomster from "../assets/projects/nomster.png";
import spotifind from "../assets/projects/spotifind.png";
import linklist from "../assets/projects/LINKLIST.jpg";
import comingsoon from "../assets/projects/comingsoon.jpg";

export const EXPERIENCES = [
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
    title: "GitGroove (Work in Progress)",
    image: comingsoon,
    description:
      "GitGroove is a web-based platform that brings Git-style version control to music production. Inspired by GitHub and DAWs like GarageBand, GitGroove empowers musicians to collaboratively compose, experiment, and evolve music — all while tracking every sonic decision.",
    technologies: ["Git", "Version Control", "Music Production"],
    repoUrl: "https://github.com/ykwong2002/GitGroove"
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
