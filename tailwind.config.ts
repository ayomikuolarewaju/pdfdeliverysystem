import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDEAE0',
        'paper-raised': '#F6F4EC',
        ink: '#1C1B18',
        'ink-soft': '#55524A',
        green: { DEFAULT: '#1E4B3F', deep: '#163A31' },
        gold: '#B8923C',
        line: '#D3CDBB',
        'line-strong': '#B7AF97',
      },
      fontFamily: {
        serif: ['Spectral', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
