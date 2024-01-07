const defaultFonts = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'smd': '1109px'
      },
      colors: {
        baseColor: "#000DD0",
        tertiary: "#BFBFBF",
        surfaceTertiry: "#F6F6F6",
        secondaryGray: "#808080",
        surfaceSecondaryGray: "#E0E0E0",
        surfaceSecondary: "#F1F7FD",
        borderErrorRed: "#DB052B",
        lightBorderErrorRed: "#FFE6E3",
        grayTextcolor: "#6B7A99",
        lightPurple: "#D9D6F7",
        lightWarning: "#FACF85",
        pastalWarning:"#FEF5E7",
        surfacePrimary: "#F6F6F6",
        surfaceInput:"#F6FBFF",
        PicSurfaceImg:"#E7EAEE"
      }
    },
    fontFamily: {
      sans: ["Manrope", ...defaultFonts.fontFamily.sans]
    }
  },
  plugins: []
}
