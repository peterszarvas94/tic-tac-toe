/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#212529',
        background: '#f8f9fa',
        primary: '#343a40',
        secondary: '#e9ecef',
        accent: '#adb5bd',
      },
      fontFamily: {
        indie: 'var(--indie)',
      },
    },
  },
  plugins: [],
}

