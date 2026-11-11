import type { Config } from 'tailwindcss';

// Design tokens. Boldness lives in one place: the pickup-ticket motif
// (mono type, perforated edges, kraft paper). Everything else stays quiet.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FDFBF7',
        sand: '#F4EFE4',
        line: '#E7E1D2',
        ink: '#1B241A',
        muted: '#566352',
        leaf: '#2D5A27',
        forest: '#173019',
        mint: '#EAF1E4',
        kraft: '#D9B98A',
        amber: '#E39B1F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,48,25,0.06), 0 12px 32px -12px rgba(23,48,25,0.18)',
        lift: '0 2px 4px rgba(23,48,25,0.06), 0 28px 60px -20px rgba(23,48,25,0.35)',
      },
      keyframes: {
        rise: { '0%': { transform: 'translateY(22px)' }, '100%': { transform: 'translateY(0)' } },
        ping2: { '0%': { transform: 'scale(1)', opacity: '0.55' }, '100%': { transform: 'scale(2.4)', opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both',
        ping2: 'ping2 2.2s ease-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
