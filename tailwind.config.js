/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', '"Noto Sans TC"', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: {
          page: '#c9c9c9',
          light: '#e4e4e4',
          card: '#f5f5f5',
        },
        glass: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2e2e2e',
          border: 'rgba(255,255,255,0.08)',
          highlight: 'rgba(255,255,255,0.12)',
        },
        accent: {
          jade: '#5eead4',
          ember: '#fb923c',
          gold: '#fbbf24',
          blue: '#60a5fa',
        },
      },
      borderRadius: {
        pill: '9999px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
        'white-card': '0 12px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
        neumorphic: '8px 8px 20px rgba(0,0,0,0.4), -4px -4px 16px rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #1f1f1f 100%)',
        'glass-wave': 'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,255,255,0.03) 0%, transparent 50%)',
        'hero-mesh': 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.04) 0%, transparent 35%)',
      },
    },
  },
  plugins: [],
};
