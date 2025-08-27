/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'legal-blue': '#667eea',
        'legal-purple': '#764ba2',
      },
      animation: {
        'typing': 'typing 1.4s infinite ease-in-out',
      },
      keyframes: {
        typing: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
