/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070708',
        surface: '#0d0d10',
        surface2: '#121215',
        border: '#1c1c22',
        borderlight: '#282830',
        accent: '#5b8dee',
        accent2: '#9b7fe8',
        accentgreen: '#4ecca3',
        textprimary: '#dddde8',
        textsecondary: '#8888a0',
        textmuted: '#44445a',
        textdim: '#3a3a4a',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scrolldown: 'scrolldown 1.8s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scrolldown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        pulse2: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(78,204,163,0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(78,204,163,0)' },
        },
      },
    },
  },
  plugins: [],
}