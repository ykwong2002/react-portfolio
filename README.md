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
- The `components` folder contains the different segments used within the website.
    - `Navbar.jsx` contains code for the topmost bar (logo + linkedin + github + instagram).
    - `Hero.jsx` contains code for the portfolio card (name + course + description + image1).
    - `About.jsx` contains code for the about section (about me + image2)
    - `Technologies.jsx` contains code about the tech stack display (floating icons with hover).
    - `Experience.jsx` contains code for the timeline. It retrieves the information from the `constants` folder under `index.js`, and maps the information to the site. Any changes to the Experience section should be made within the `index.js` file.
    - `Projects.jsx` contains code for the project list. It retrieves the information from the `constants` folder under `index.js`, and maps the information to the site. Any changes to the Projects section should be made within the `index.js` file.
    - `Contact.jsx` contains code for the contact links at the bottom of the page. It retrieves the information from the `constants` folder under `index.js`, and maps the information to the site. Any changes to the Contact section should be made within the `index.js` file.

