module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          gold: '#b49b67',
          goldHover: '#9a8352',
        },
      },
    },
  },
  plugins: [],
};
