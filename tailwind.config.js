/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
    fontSize: {
      'sm': 'clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)',
      'base': 'clamp(1.125rem, 0.34vi + 0.91rem, 1.19rem)',
      'md': 'clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)',
      'lg': 'clamp(1.56rem, 1vi + 1.31rem, 2.11rem)',
      'xl': 'clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)',
      '2xl': 'clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)',
      '3xl': 'clamp(3.05rem, 3.54vi + 2.17rem, 5rem)',
    }
  },
  plugins: [],
}

