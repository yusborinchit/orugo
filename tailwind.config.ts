import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "900": "#0C1307",
          "800": "#18250E",
          "700": "#2F4B1B",
          "600": "#477029",
          "500": "#5F9636",
          "400": "#76BB44",
          "300": "#92C969",
          "200": "#ADD68F",
          "100": "#C8E4B4",
          "50": "#E4F1DA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
