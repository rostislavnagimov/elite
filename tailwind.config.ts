import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'elite-pink': '#e61a66',
        'elite-black': '#1e1e1e',
        'elite-black-2': '#26262b',
        'elite-grey': '#828282',
        'elite-light-grey': '#fafafa',
      },
      fontFamily: {
        sans: ['var(--font-gilroy)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
