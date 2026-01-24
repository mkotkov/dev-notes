/** @type {import('tailwindcss').Config} */
export default {
content: [
  './src/**/*.{astro,html,js,ts,jsx,tsx}'
],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
      },
    },
  },
  plugins: [],
}
