/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          1:'#3b82f6',
          2:'#1b4473',
          3:'#3c62ae',
        },
        gray:{
          1:'#f3f4f6',
          2:'#818196',
          3:'#f1f1f1',
          main:'#8a8b8e',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
