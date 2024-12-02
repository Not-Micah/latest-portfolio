export interface SkillSetData {
    header: string;
    startX: number;
    startY: number;
    content: [string, { key: string; list: string }[]]; 
  }
  
export const skillSetData: SkillSetData[] = [
{
    header: "Mobile Development",
    startX: 0,
    startY: 50,
    content: [
    "I've published four apps on the Play Store called 'The Simple Productivity Series'",
    [
        { key: "Languages: ", list: "Python, Kotlin" },
        { key: "Libraries: ", list: "Kivy, KivyMD" },
        { key: "Tools: ", list: "Buildozer, Android Studio" },
    ],
    ],
},
{
    header: "Game Development",
    startX: 250,
    startY: 260,
    content: [
    "My very first project was 'The Impossible Platformer' on Itch.io",
    [
        { key: "Languages: ", list: "Python" },
        { key: "Libraries: ", list: "Pygame, Openpyxl" },
    ],
    ],
},
{
    header: "Web Development",
    startX: 75,
    startY: 400,
    content: [
    "Here's what I use for all of my web apps :)",
    [
        { key: "Languages: ", list: "TypeScript, HTML, CSS" },
        { key: "Frameworks: ", list: "React, Next.js, TailwindCSS" },
        { key: "Tools: ", list: "MongoDB, Firebase" },
    ],
    ],
},
];

export const projectCards = [
  {
    url: "./verbum.png",
    title: "Verbum",
    description: "My first web app, Verbum, lets users filter 300+ Bible verses stored in MongoDB. It also features book summaries and an AI chatbot powered by the Gemini API.",
    id: 1,
  },
  {
    url: "./versle.png",
    title: "Versle",
    description: "A Bible verse guessing game inspired by Wordle, Versle has attracted over 175,000 players globally.",
    id: 2,
  },
  {
    url: "./me2.png",
    title: "Me2",
    description: "Me2 connects students through shared interests using Firebase for chats and a custom sorting algorithm.",
    id: 3,
  },
  {
    url: "./restoring_rainbows.png",
    title: "Restoring Rainbows",
    description: "I built a website with a back-end admin panel for dynamic content management, including branches and executive board data.",
    id: 4,
  },
];

export const resumeItems = [
  {
    title: "The Impossible Platformer",
    description: "Created a platformer game inspired by Mario using Pygame. Levels are generated from data in Excel sheets using Openpyxl. Published on Itch.io.",
    date: "August 2022 - November 2022",
    link: ""
  },
  {
    title: "The Simple Work Series",
    description: "Published four mobile apps on the Play Store: a to-do list, pomodoro timer, habit tracker, and daily quote generator (discontinued). The apps were built using Python, Kivy/KivyMD, and packaged with Buildozer, achieving over 750 downloads.",
    date: "January 2023 - August 2023",
    link: ""
  },
  {
    title: "Python Face Recognition Software",
    description: "Built a face recognition tool with a Kivy interface. Improved the performance of an existing face recognition library.",
    date: "February 2023",
    link: ""
  },
  {
    title: "Verbum",
    description: "Created a Bible verse filtering tool with over 300 verses stored in MongoDB. Users can filter by author or book, view book summaries, and use an AI chatbot powered by the Gemini API.",
    date: "September 2023 - October 2023",
    link: ""
  },
  {
    title: "Versle",
    description: "Developed a Wordle-inspired web app for guessing Bible verses. Used MongoDB for storing daily verses and implemented local storage for tracking user stats.",
    date: "October 2023",
    link: ""
  },
  {
    title: "Micahfy",
    description: "Built a Spotify-inspired music app with features like adding songs, creating playlists, and playback controls. Included user account management using Supabase.",
    date: "December 2023",
    link: ""
  },
  {
    title: "Me2",
    description: "Created a student chat app that matches users based on shared interests. Features include private chats, global chatrooms, and study groups. Managed data with Firebase.",
    date: "June 2024 - Current",
    link: ""
  },
  {
    title: "Micah Bird",
    description: "Built a Flappy Bird clone using Java and the Graphics library as a final project for the 2024 Raikes Summer Program.",
    date: "August 2024",
    link: ""
  },
  {
    title: "Restoring Rainbows",
    description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like executive members, blogs, and branches.",
    date: "August 2024 - October 2024",
    link: ""
  },
  {
    title: "Hearts for Hope",
    description: "Developed a website for the Hearts for Hope non-profit. Added an admin panel to update Firebase backend data and front-end sections like statistics and posts.",
    date: "August 2024 - October 2024",
    link: ""
  },
  {
    title: "Mars Rover Script",
    description: "Developed a C++ script to remotely control a Mars Rover, including its movement, six-DOF robotic arm, and two-DOF robotic claw.",
    date: "October 2024",
    link: ""
  },
  {
    title: "Micah Build",
    description: "The fourth iteration of my portfolio, built with React, TailwindCSS, and Next.js. A minimalist design showcasing my work and skills.",
    date: "December 2024",
    link: ""
  },
];


