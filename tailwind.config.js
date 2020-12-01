module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '5/6': '83.3333333%',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
