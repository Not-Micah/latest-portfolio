import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'], 
        accentOne: ['Rock Salt'],
        accentTwo: ['Gloria Hallelujah']
      },
      maxWidth: {
        'max': '1600px',
      },
      spacing: {
        'default': '48px',
        'tight': '18px',
      },
    },
  },
  plugins: [],
} satisfies Config;
