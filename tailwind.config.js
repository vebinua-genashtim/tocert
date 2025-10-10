/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 100%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 0%',
      },
      colors: {
        honey: {
          50: '#fffef5',
          100: '#fffbe6',
          200: '#fff5c2',
          300: '#ffed94',
          400: '#ffe066',
          500: '#ffc914',
          600: '#e6a800',
          700: '#b88400',
          800: '#8a6300',
          900: '#5c4200',
        },
        amber: {
          50: '#fff9ed',
          100: '#fff0d1',
          200: '#ffe0a3',
          300: '#ffc864',
          400: '#ffb033',
          500: '#ff9800',
          600: '#e07800',
          700: '#b85c00',
          800: '#8f4400',
          900: '#662f00',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#7a7a7a',
          500: '#525252',
          600: '#3d3d3d',
          700: '#292929',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
      },
    },
  },
  plugins: [],
};
