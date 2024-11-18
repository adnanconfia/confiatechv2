/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "tw-",
  important: true,
  corePlugins: {
      preflight: false,
  },
  theme: {
 
      colors: {
        'confia-dark-green': '#08777c' ,
    'confia-aqua':'#18b6c6' ,
        'confia-light':'#95eaef ',
        'dark':'#444444 ',
        'light':'#f6f6f6 ',
        'white':'#fff'
        
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        body:['"Inter"',"sans-serif"],
        rozha:['"Rozha One"',"serif"],
        'sans': ['"Inter"',"sans-serif"]
      },
    extend: {

    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
  ],
}