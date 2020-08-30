const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: '#F2F5FF',
        },
        indigo: {
          ...defaultTheme.colors.indigo,
          100: '#E5EDFF',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
