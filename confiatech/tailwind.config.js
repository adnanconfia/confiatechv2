/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: true,
  },
  theme: {

    colors: {
      'confia-dark-green': '#08777c',
      'confia-aqua': '#18b6c6',
      'confia-light': '#95eaef ',
      'dark': '#444444 ',
      'light': '#f6f6f6 ',
      'white': '#fff',
      'gold': '#FFD700'

    },

    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      body: ['"Inter"', "sans-serif"],
      rozha: ['"Rozha One"', "serif"],
      'sans': ['"Inter"', "sans-serif"]
    },
    extend: {
      animation: {
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        updown: 'updown 2s ease-in-out infinite',
        downUp: 'downUp 2s ease-in-out infinite',
        imageScroll: 'imageScroll 15s ease-in-out infinite',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-5%)' },
        },
        downUp: {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(5%)' },
        },
        imageScroll: {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-55%)' },
        }
      },
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