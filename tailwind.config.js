/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // primaryTextColor: '#9C1621',
      primaryTextColor: '#e11d48',
      secondaryTextColor: '#171914',
      primaryBgColor: '#EADDBD',
      secondBgColor: '#EBE0C0',
      rgbaBgColor: 'rgba(255, 255, 255, 0.7)',
      buttonTextColor: '#0a0a0a',
      white: '#FFFFFF',
      black: '#242424',
      grey: '#F3F3F3',
      'dark-grey': '#6B6B6B',
      transparent: 'transparent',
      yellow: '#fcde6e',
      'PrimaryBgTien': '#fff9e4',
    },
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
      },
      backgroundImage: {
        'buttonBgColor': 'linear-gradient(to right, #7dd3fc, #bae6fd)',
      },
      screens: {
        '3xl': '1700px',
      },
    },
    extend: {
      fontSize: {
        'xxs': '28px', // Custom text size (10px)
      }
    },
  },
  plugins: [],
};
