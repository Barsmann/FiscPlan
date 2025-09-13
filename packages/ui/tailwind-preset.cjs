/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          gold:  "#D4AF37",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        "brand-glow": "0 0 20px rgba(212,175,55,0.35)"
      }
    }
  }
}
