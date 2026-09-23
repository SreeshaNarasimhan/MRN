/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  '#FBF4F5',
          100: '#F3E2E5',
          300: '#C98C99',
          500: '#8E1E34',
          600: '#7A172B',
          700: '#661223',   // primary brand maroon
          800: '#4E0D1B',
          900: '#3A0912',   // deep sections
          950: '#240509',
        },
        gold: {
          100: '#F6ECD6',
          200: '#EBD9AE',
          300: '#DCC183',
          400: '#C9A24A',   // antique gold — primary accent
          500: '#B08A38',
          600: '#8F6E2B',
        },
        cream: {
          50:  '#FDFAF4',   // page background
          100: '#F9F2E6',
          200: '#F1E6D3',   // subtle section alt background
          300: '#E5D6BD',
        },
        ink: {
          700: '#4A3F39',   // muted body text
          800: '#332A25',   // body text
          900: '#1F1916',   // headings on light
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
