/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple': '#B1B2FF',
        'blue': '#AAC4FF',
        'lavender': '#D2DAFF',
        'white-grey': '#EEF1FF'
      },
      textColor: {
        'white-grey': '#EEF1FF',
        'purple': '#B1B2FF',
        'blue': '#AAC4FF',
        'lavender': '#D2DAFF',
      },
      screens: {
        'mobile': '375px',
      }
    },
  },
  plugins: [],
}
