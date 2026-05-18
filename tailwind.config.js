/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "rgba(15, 23, 42, 0.6)",
        primary: {
          DEFAULT: "#8b5cf6", // Violet 500
          hover: "#7c3aed",   // Violet 600
        },
        secondary: {
          DEFAULT: "#38bdf8", // Sky 400
          hover: "#0ea5e9",   // Sky 500
        },
        accent: "#c084fc",    // Purple 400
      },
      backdropBlur: {
        xs: '2px',
        glass: '12px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
