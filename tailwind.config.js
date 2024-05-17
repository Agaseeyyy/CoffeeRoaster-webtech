/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '2xl': {'max' : '1536px'},
      'xl': {'max' : '1280px'},
      'lg': {'max' : '1024px'},
      'md': {'max': '768px'},
      'sm': {'max' : '640px'},
      'xs': {'max' : '475px'},
    },
    extend: {
      colors: {
        bl: "#282A3A",
        customred: "#6D1600",
        ld: "#282A3A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        playfairsc: ["Playfair Display SC", "serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        plusjakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins, sans-serif"],
      },
      maxWidth: {
        xxl: "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "475px",
      },
      borderRadius: {
        r80: "80px",
        r32: "32px",
      },
      width: {
        xtra2: "1536px",
        xtra: "1024px",
        f244: "244px",
        p640: "640px",
      },
      height: {
        f348: "348px",
      },
    },
  },
  plugins: [],
}

