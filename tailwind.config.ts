import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        fiap: {
          green: "#47A138",
          "green-hover": "#3d8531",
          gray: "#767676",
          "light-gray": "#CBCBCB",
          white: "#F5F5F5",
          "light-green": "#E4EDE3",
          "navy-blue": "#004D61",
          "navy-blue-hover": "#01657f",
          red: "#FF5031",
          "red-hover": "#f53b1a",
          "light-blue": "#DEE9EA",
        },
      },
    },
  },
  plugins: [daisyui],
};
export default config;
