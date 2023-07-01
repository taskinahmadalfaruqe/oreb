/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    fontFamily: {
      'DMSAN': ['DM Sans', 'sans-serif'],
      'OSWALD': ['Oswald', 'sans-serif'],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
  
    extend: {

      backgroundImage: {
        'background-image': "url('../Image/slider-1 1.png')",
        'bg-image-dark': "url('../Image/bgtwo.jpg')",
        'common-bg': "linear-gradient(to right, #fa5252, #dd2476)",
        'common-bg-hover': "linear-gradient(to left, #fa5252, #dd2476)",
      },

      colors: {
        black: '#000',
        white: '#fff',
        text: '#262626',
        lightdarkbg: '#767676',
        lightext: '#6D6D6D',
        darkbg: '#979797',
      }
    },

  },
  plugins: [],

  
}

