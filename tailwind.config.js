/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // primaryTextColor: '#9C1621',
      primaryTextColor: '#e11d48',
      secondaryTextColor: '#171914',
      primaryBgColor: '#EADDBD',
      secondBgColor: '#EBE0C0',
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
