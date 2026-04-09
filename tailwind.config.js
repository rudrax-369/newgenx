/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          purple: '#b026ff',
          blue: '#144cfa',
          cyan: '#00f0ff',
          solar: '#ff4500',
          gold: '#ffcc00',
        },
        background: '#040406',
        surface: 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
