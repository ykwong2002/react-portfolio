# Portfolio Website
A personal portfolio website showcasing my experience, technical skills, and web development projects.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)

## Introduction
Welcome to my portfolio website! This project showcases my skills, experiences, and projects as a software developer. Built using ***React.js, Framer Motion, and Tailwind CSS*** as the tech stack, this website emphasises both functionality and user experience. This project is inspired by github user kushald.

## Features
The main code used can be found in the `src` folder.
- `App.jsx` contains the main frame of the website. Any additional sections in the `components` folder has to be included in the `App.jsx` file, else errors will occur.
- The `assets` folder contains the images and files used within the website (namely pictures displayed and resume).
- The `constants` folder holds all of the site's copy in `index.js`: profile, stats, about, education, skills, experience, projects and the Second Brain vault nodes. Any change to the text on the site should be made there.
- The `components` folder contains the different segments used within the website.
    - `Navbar.jsx` contains code for the sticky top bar (logo + section links + resume button + mobile menu).
    - `Hero.jsx` contains code for the opening section (current role + name + tagline + photo) and the row of headline numbers.
    - `About.jsx` contains code for the about section (about me + image + education + certifications).
    - `Skills.jsx` contains code for the tech stack, grouped into cards.
    - `Experience.jsx` contains code for the experience list.
    - `Projects.jsx` contains code for the project cards. A project shows its `image`, or a drawn `visual` if one is set.
    - `VaultGraph.jsx` is the rotating, hoverable graph on the Second Brain card.
    - `DocExtractArt.jsx` is the illustration on the capstone card.
    - `Contact.jsx` contains code for the contact links and footer at the bottom of the page.
    - `ui.jsx` contains the shared `Section`, `Card`, `Tag` and `Label` building blocks.
