import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custPrimary": "#420376",
        "custSecondary": "#E2C304",
        "custThird": "#DD5400",
        "custLight": "#D8D9D9",
        "custDark": "#212121",
      },
      }
    },
  };

export default withMT(config);
