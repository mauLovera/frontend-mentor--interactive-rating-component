import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        orange: "hsl(25, 97%, 53%)",
      },
      neutral: {
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(215, 18%, 19%)",
        "very-dark-blue": "hsl(216, 20%, 16%)",
        "black": "hsl(228, 11%, 9%)",
      },
    },
  },
  plugins: [],
}
export default config
