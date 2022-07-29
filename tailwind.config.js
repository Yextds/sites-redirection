module.exports = {
  mode: "jit",  
  purge: [
      './partials/**/*.hbs', 
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  