/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    colors: {
      blue: {
        500: "#0A66C2",
      },
      orange: "#F58025",
      black: "#181717",
    },
    extend: {},
  },

  plugins: [],
};
  // darkMode: "class"
