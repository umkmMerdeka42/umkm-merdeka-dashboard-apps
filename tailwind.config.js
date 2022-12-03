/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c71b4',
        secondary: '#0d9488',
        tertiary: '#F43F5E',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
