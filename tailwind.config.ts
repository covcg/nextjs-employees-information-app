import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        p: "#E61975",
        "p-d": "#66002E",
        "p-d2": "#2E0517",
        "p-l": "#FAD1E3",
        "p-l2": "#FDF1F7",
        s: "#2419E6",
        "s-d": "#0E0A5C",
        "s-d2": "#07052E",
        "s-l": "#D3D1FA",
        "s-l2": "#F2F1FD",
        t: "#19E68A",
        "t-d": "#063721",
        "t-d2": "#042013",
        "t-l": "#D1FAE8",
        "t-l2": "#F1FDF8",
      },
    },
  },
  plugins: [],
};
export default config;
