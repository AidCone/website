/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        corporate: {
          ...require('daisyui/src/theming/themes')['[data-theme=corporate]'],
          primary: '#10529f',
          secondary: '#0e4688'
        }
      }
    ]
  }
};

module.exports = config;
