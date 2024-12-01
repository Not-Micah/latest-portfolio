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
