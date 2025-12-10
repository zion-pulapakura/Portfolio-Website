/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#462dd5",
        "green-accent": "#cdf382",
        "text-primary": "#E5E2F9",
        "dotted-line": "#87CEEB",
      },
    },
  },
  plugins: [],
};
