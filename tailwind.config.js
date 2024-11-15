/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // light mode
        "color-background-light": "#FAF7F5",
        "color-primary-text-light": "#2D2D2D",
        "color-secondary-text-light": "#595959",
        "color-accent-light": "#FF6F61",
        "color-button-bg-light": "#FF6F61",
        "color-button-text-light": "#FFFFFF",

        // dark mode
        "color-background-dark": "#1C1C1C",
        "color-primary-text-dark": "#EAEAEA",
        "color-secondary-text-dark": "#B8B8B8",
        "color-accent-dark": "#FF6F61",
        "color-button-bg-dark": "#A67C87",
        "color-button-text-dark": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
