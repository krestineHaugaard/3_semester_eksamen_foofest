/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-col": { "bg-dark": "#202020", "bg-light": "#333333" },
      "title-col": "#E6E6E6",
      "font-col": "#CCCCCC",
      "brand-one": { 50: "#FFC164", 100: "#AB7E33", 150: "#3E2E15" },
      "brand-two": "#CB6E00",
      "brand-tree": "#68402A",
      "brand-four": "#4B8372",
      "brand-five": {
        50: "#4FFF96",
        100: "#2A8D52",
        150: "#223D34",
      },
      "alert-col": "#F00000",
      "grey-scale": {
        "grey-one": "#FFFFFF",
        "grey-two": "#E6E6E6",
        "grey-tree": "#CCCCCC",
        "grey-four": "#B3B3B3",
        "grey-five": "#999999",
        "grey-six": "#808080",
        "grey-seven": "#666666",
        "grey-eight": "#4D4D4D",
        "grey-nine": "#333333",
        "grey-ten": "#222222",
        "grey-eleven": "#000000",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
