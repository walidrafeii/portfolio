import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        'navy-lightest': '#233554',
        slate: '#8892b0',
        'slate-light': '#a8b2d1',
        'slate-lightest': '#ccd6f6',
        turquoise: '#00ffff',
        white: '#e6f1ff',
        gray: '#6B7280',
      },
    },
  },
  plugins: [],
};
export default config;
