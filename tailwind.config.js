/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        'abyssal': '#0c0330',      // Roxo Abissal (Base)
        'electric': '#c521f4',     // Magenta Elétrico (Destaque)
        'metallic': '#c0c0c0',     // Prata Metálico (Apoio)
        'mist': '#dbdfe4',         // Névoa Clara (Texto/Fundo Sec.)
        
        // Mantendo compatibilidade
        primary: '#0c0330',
        secondary: '#c521f4',
        tertiary: '#dbdfe4',
        accent: '#c0c0c0',
        purple: {
          400: '#c521f4',
          500: '#a01dd3',
          700: '#8a1fb4',
          900: '#1a0a5c',
          950: '#0c0330',
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradient 3s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 30% 20%, var(--tw-gradient-from) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}