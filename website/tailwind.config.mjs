/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--accent)',
        accent: 'var(--accent)',
        background: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--ink)',
        muted: 'var(--muted)',
        success: '#7fd962',
        warning: '#ffa500',
        error: '#ff5555',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
