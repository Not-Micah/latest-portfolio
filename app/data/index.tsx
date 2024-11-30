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