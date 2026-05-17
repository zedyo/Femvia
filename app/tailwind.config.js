/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F5F1',
        surface: '#FFFFFF',
        ink: '#1B2422',
        muted: '#5C6B66',
        line: '#E4E0D8',
        primary: { DEFAULT: '#1F5C57', 700: '#16433F' },
        accent: '#C0714E',
        plum: '#5A4A63',
        sage: '#8FA89B',
        warn: '#B4502E',
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: { soft: '0 1px 2px rgba(27,36,34,.04), 0 8px 24px rgba(27,36,34,.06)' },
    },
  },
  plugins: [],
}
