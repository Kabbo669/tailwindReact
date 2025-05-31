/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        'open': ["Open Sans", 'sans-serif'],
        "paprika": "Paprika"
      },
      colors: {
      "primary": "#1BBF00",
      "secondary": "#160c6d99"
      },
      maxWidth : {
       "container": "1170px"
      },
      backgroundImage : {
      "bannerBackground": "url('./assets/banner.png')"
      },
    },
  },
  plugins: [],
}