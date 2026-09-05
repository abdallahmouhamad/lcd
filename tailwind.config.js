/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102048',
          deep: '#081838',
          light: '#1a3060',
        },
        'red-lcd': '#C80828',
        'red-hover': '#a8061f',
        gold: {
          DEFAULT: '#E0A238',
          light: '#f0c060',
        },
        offwhite: '#F2F4F7',
        'text-soft': '#1a2a3a',
        'border-light': '#E8EDF2',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(16,32,72,0.08)',
        'card-hover': '0 8px 24px rgba(16,32,72,0.12)',
      },
    },
  },
  plugins: [],
}
