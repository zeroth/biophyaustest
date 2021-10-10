module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
       backgroundImage: {
        'banner': "url('/assets/images/banner.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
