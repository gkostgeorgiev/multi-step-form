import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "marine-blue": "#02295a",
        "purplish-blue": "#473dff",
        "pastel-blue": "#adbeff",
        "light-blue": "#bfe2fd",
        "strawberry-red": "#ed3548",
        "cool-gray": "#9699ab",
        "light-gray": "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
      },
      fontFamily: {
        "ubuntu-bold": ["ubuntu-bold"],
        "ubuntu-medium": [
          "ubuntu-medium",
          // "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
        ],
        "ubuntu-regular": ["ubuntu-regular"],
      },
    },
  },
  plugins: [],
} satisfies Config;
