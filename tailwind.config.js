const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite-react/tailwind"),
    flowbite.plugin(),
    require('tailwind-scrollbar'),

  ],
}