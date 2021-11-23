module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kona: "#8F20B2",
      },
      backgroundImage: {
        "tree-made-with-hands": "url('images/hands-tree-colours.jpg')",
        "two-hands": "url('images/hands.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
