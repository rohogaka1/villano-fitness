import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#e0bd69',
          'gold-light': '#ebd4a0',
          'gold-dark': '#c4a14c',
          black: '#000000',
          'black-light': '#1A1A1A',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config; 