module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kona: "#8F20B2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
