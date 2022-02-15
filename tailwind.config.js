const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/pencil-lines-horizontal-transparent.png')",
        'light-jet-pattern': "url('/img/pencil-lines-horizontal-transparent-uneven.png')",
        'dark-jet-pattern': "url('/img/pencil-lines-horizontal-transparent-dark-uneven.png')",
        'darker-jet-pattern': "url('/img/pencil-lines-horizontal-transparent-darker-uneven.png')",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      },
      colors: {
        jet: {
          50:   "#eeeeee",
          100:  "#d8d8d8",
          200:  "#bfbbbe",
          300:  "#a9a9ab",
          400:  "#9f9f9f",
          500:  "#7d7d82",
          600:  "#545456",
          700:  "#3b373a",
          800:  "#272527",
          900:  "#141213"
        },
        mint: {
          100: "#eafcf7",
          200: "#d5faf0",
          300: "#bff7e8",
          400: "#aaf5e1",
          500: "#95f2d9",
          600: "#5bebc4",
          700: "#21e4af",
          800: "#15ae85",
          900: "#0e7459"
        },
        tart: {
          100: "#fbdbda",
          200: "#f8b7b4",
          300: "#f4928f",
          400: "#f16e69",
          500: "#ed4a44",
          600: "#df1d15",
          700: "#a71510",
          800: "#6f0e0b",
          900: "#380705"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
