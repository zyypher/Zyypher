import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the default font
      },
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          400: "#9CA3AF",
          800: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
export default config;
