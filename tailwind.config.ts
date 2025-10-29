import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FDD835",
          dark: "#F9A825",
          light: "#FFEB3B",
        },
        secondary: {
          DEFAULT: "#212121",
          dark: "#000000",
          light: "#424242",
        },
      },
    },
  },
  plugins: [],
};
export default config;
