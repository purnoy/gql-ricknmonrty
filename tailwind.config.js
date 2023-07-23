/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    screens: {
      xsm:'540',
      sm: '750px',
      md: '1000px',
      lg: '1260px',
      xl: '1400x',
    },
  },
  plugins: [],
}
