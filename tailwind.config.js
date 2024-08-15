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
      buttonTextColor: '#0a0a0a',
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      backgroundImage: {
        'buttonBgColor': 'linear-gradient(to right, #7dd3fc, #bae6fd)',
      },
    },
  },
  plugins: [],
};
