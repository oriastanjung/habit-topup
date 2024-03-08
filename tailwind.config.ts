import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sf-ui' : ['SF UI Display Light', 'sans-serif'],
        'sf-ui-bold' : ['SF UI Display Bold', 'sans-serif'],
        'sf-ui-black' : ['SF UI Display Black', 'sans-serif'],
        'sf-ui-heavy' : ['SF UI Display Heavy', 'sans-serif'],
        'sf-ui-semibold' : ['SF UI Display Semibold', 'sans-serif'],
        'sf-ui-medium' : ['SF UI Display Medium', 'sans-serif'],
        'sf-ui-thin' : ['SF UI Display Thin', 'sans-serif'],
        'sf-ui-ultralight' : ['SF UI Display Ultralight', 'sans-serif'],

      },
      colors : {
        "black" : "#080A1E"
      }
    },
  },
  plugins: [],
};
export default config;
