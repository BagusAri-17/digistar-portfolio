/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#DDD0C8',
        'secondary': '#323232'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '64px',
          lg: '128px',
        }
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}