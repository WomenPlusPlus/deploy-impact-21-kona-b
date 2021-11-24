module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kona: "#8F20B2",
        orangeLight: "#f8edeb",
        orangeMiddle: "#fec5bb",
        orangeDark: "#e8a598",
        lightBlue: "#C3D9EA",
        blueMiddle: "#5998C5",
        blueDark: "#20425B",
        cream: "#F8F8F8",
      },
      backgroundImage: {
        "tree-made-with-hands": "url('images/hands-tree-colours.jpg')",
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
