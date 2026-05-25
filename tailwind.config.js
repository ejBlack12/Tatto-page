/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sloth Tattoo color palette
        'deep-sea': '#1a4d5c',
        'java': '#1dd4bf',
        'casper': '#c5c5d8',
        'catskill': '#f5f5f5',
        'buccaner': '#6b2d3f',
        'dove-gray': '#717171',
        'ebony-clay': '#2a2a2a',
        'emperor': '#555555',
        'half-baked': '#82d4d4',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'rubik-mono': ['Rubik Mono One', 'monospace'],
        'stattiches': ['Stattiches', 'serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

