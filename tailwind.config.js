/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors:{
        'custom-dark': '#12021c',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
