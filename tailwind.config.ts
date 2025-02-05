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
        "card-background": "var(--card-background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        success: "var(--success)",
        "success-light": "var(--success-light)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
