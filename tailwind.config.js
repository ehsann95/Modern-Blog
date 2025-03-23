/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(17, 24, 39)', // gray-900
            a: {
              color: 'rgb(79, 70, 229)', // indigo-600
              '&:hover': {
                color: 'rgb(55, 48, 163)', // indigo-800
              },
            },
            h2: {
              fontWeight: '700', // bold
              scrollMarginTop: '5rem', // spacing.20
            },
            h3: {
              fontWeight: '600', // semibold
            },
          },
        },
        dark: {
          css: {
            color: 'rgb(243, 244, 246)', // gray-100
            a: {
              color: 'rgb(129, 140, 248)', // indigo-400
              '&:hover': {
                color: 'rgb(165, 180, 252)', // indigo-300
              },
            },
            h2: {
              color: 'rgb(243, 244, 246)', // gray-100
            },
            h3: {
              color: 'rgb(243, 244, 246)', // gray-100
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'blog-primary': 'rgb(var(--primary-color))',
        'blog-accent': 'rgb(var(--accent-color))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
