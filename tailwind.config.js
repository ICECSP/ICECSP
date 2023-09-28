/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryRegular: "#309c86",
        primaryLight: "#48bdad",
        primaryDark: "#073d27",
        primary90: "#1f7d64",
        primary80: "#58d0c5",
        primary50: "#83ded8",
        primary20: "#b7edea",
        primary10: "#d3f5f3",
        primary05: "#f5fcfc",
      },
    },
  },
  plugins: [],
}
