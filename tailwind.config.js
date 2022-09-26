/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        minscreen: { min: '1440px' },
        maxscreen: { max: '1400px' },
        xlmax: { max: '1279px' },
        lgscreen: { max: '1024px' },
        mdscreen: { max: '767px' },
        smscreen: { max: '640px' },
        smallscreen: { min: '460px' },
      },

      fontFamily: {
        body: ['"Poppins"'],
        heading: ['"Forum"'],
        Raleway: ['"Raleway"'],
      },

      fontSize: {
        15: '15px',
        18: '18px',
        26: '26px',
        36: '36px',
        53: '53px',
      },

      spacing: {
        '18per': '18%',
        '27per': '27%',

      },

      lineHeight: {
        18: '18px',
        22: '22px',
        27: '27px',
        38: '38px',
        45: '45px',
        59: '59px',
      },

      width: {
        '10.8': '10.8%',
        '22.7': '22.7%',
        '23per': '23%',
      },

      colors: {
        black: {
          100: '#000000',
          200: '#2F3434',
        },
        green: {
          100: '#3C3B0F',
          200: '#809B10',
        },
        gray: {
          100: '#F1EDED',
          200: '#CAC7C7',
        },

      },

      gap: {
        37: '37px',
        60: '60px',
      },

      padding: {
        18: '18px',
        21: '21px',
        23: '23px',
        25: '25px',
        30: '30px',
        31: '31px',
        35: '35px',
        36: '36px',
        39: '39px',
        41: '41px',
        42: '42px',
        46: '46px',
        49: '49px',
        50: '50px',
        65.5: '65.5px',
        66: '66px',
        73: '73px',
        75: '75px',
        79: '79px',
        83: '83px',
        84: '84px',
        85: '85px',
        100: '100px',
        113: '113px',
        144: '144px',
      },
      margin: {
        31: '31px',
        41: '41px',
        52: '52px',
        100: '100px',
      },

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container-xl': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1340px',
            margin: 'auto',
          },
        },


        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1240px',
          },
        }
      })
    }

  ],
}