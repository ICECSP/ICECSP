/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        mont : "'Montserrat', sans-serif"
      },
      colors: {
        // primaryRegular: "#309c86",
        // primaryLight: "#48bdad",
        // primaryDark: "#073d27",
        // primary90: "#1f7d64",
        // primary80: "#58d0c5",
        // primary50: "#83ded8",
        // primary20: "#b7edea",
        // primary10: "#d3f5f3",
        // primary05: "#f5fcfc",

        primaryRegular: "#0ea5e9",
        primaryLight: "#fafdff",
        primaryDark: "#082f49",
        primary90: "#0c4a6e",
        primary80: "#075985",
        primary50: "#0ea5e9",
        primary20: "#bae6fd",
        primary10: "#e0f2fe",
        primary05: "#f0f9ff",
      },
    },
  },
  plugins: [],
}
