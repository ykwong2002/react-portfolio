/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-18" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(220px)" },
        },
      },
      animation: {
        dash: "dash 1.1s linear infinite",
        scan: "scan 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
