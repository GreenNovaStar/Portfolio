/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Theme is driven by [data-theme] on <html>, set before paint in index.html.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      // Colors reference CSS custom properties so they follow the active theme.
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        surface: 'var(--surface)',
        'surface-solid': 'var(--surface-solid)',
        'surface-hi': 'var(--surface-hi)',
        border: 'var(--border)',
        'border-hi': 'var(--border-hi)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-faint': 'var(--text-faint)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
      },
      maxWidth: {
        wrap: 'var(--maxw)',
      },
      boxShadow: {
        soft: 'var(--shadow)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
};
