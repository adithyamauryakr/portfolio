/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#272d2d',
        lilac: '#a39ba8',
        powder: '#b8c5d6',
        alice: '#edf5fc',
        emerald: '#23ce6b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '48rem',
      },
    },
  },
  plugins: [],
};
