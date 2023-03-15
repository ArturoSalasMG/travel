/** @type {import('tailwindcss').Config} */

const colors =
require('tailwindcss/colors')

  module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}", "./public/*.{html,js}", "./public/index.html"],
    theme: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: '#ffffff',
        black: '#0f172a',
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
        gray: "#E5E5E5",
        gray700: "#334155",
        gray800: '#1f2937',
        gray900: '#0f172a',
        otro: "#CCCCCC",
        test: "#0000FF",
      },
      extend: {
        backgroundImage: {
          'sanFrancisco': "url('../img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('../img/yosemite.jpg')",
          'LA': "url('../img/LA.jpg')",
          'seattle': "url('../img/seattle.jpg')",
          'new_york': "url('../img/new_york.jpg')",
          'norway': "url('../img/norway.jpg')",
          'sydney': "url('../img/sydney.jpg')",
          'miami': "url('../img/miami.jpg')",
          'switzerland': "url('../img/switzerland.jpg')",
          'bali': "url('../img/bali.jpg')",
          'norway': "url('../img/norway.jpg')",
          'chicago': "url('../img/chicago.jpg')",
          'europe': "url('../img/europe.jpg')",
          'iceland': "url('../img/iceland.jpg')",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };
