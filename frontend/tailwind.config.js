module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        konaInspired: "#BF7FB7",
        konaInspiredDark: "#6052A3",
        orangeDark: "#e8a598",
        cream: "#F8F8F8",
        greenRelevantDark: "#315C2B",
      },
      backgroundImage: {
        "tree-made-with-hands": "url('images/hands-tree-colours.jpg')",
        "colourful-tree" : "url('images/colourful-tree.png')",
        "two-hands": "url('images/hands.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
