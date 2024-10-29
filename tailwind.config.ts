import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        fiap: {
          green: "#47A138",
          gray: "#767676",
          "light-gray": "#CBCBCB",
          white: "#F8F8F8",
          "light-green": "#E4EDE3",
          "navy-blue": "#004D61",
          red: "FF5031",
          "light-blue": "#DEE9EA"
        }
      },
    },
  },
  plugins: [daisyui],
};
export default config;
