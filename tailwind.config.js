/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // The 5 Exact Brand Colors
        ferra: '#734652',       // PANTONE 4096 CP - Deep Wine / Plum
        mulberry: '#BF5670',    // PANTONE 7432 CP - Vibrant Berry Rose
        cancan: '#D9BBAF',      // PANTONE 673 CP  - Warm Nude Terracotta
        bloom: '#D9B0C3',       // PANTONE 685 CP  - Soft Orchid Blush
        maverick: '#D9C5CE',    // PANTONE 5175 CP - Muted Lavender Mauve

        // Theme Background & Surface Helpers derived strictly from the palette
        themeDark: {
          bg: '#2F171F',        // Deepest Ferra base
          surface: '#43222C',   // Rich Ferra surface card
          subtle: '#261219',    // Recessed Ferra panel
          border: '#734652',    // Exact Ferra border
          text: '#FDF7F5',      // High contrast crisp text
          muted: '#D9C5CE',     // Maverick muted text
        },
        themeLight: {
          bg: '#F5E9E5',        // Warm Can Can parchment
          surface: '#FAF3F1',   // Clean warm rose-white card
          subtle: '#EDE0DC',    // Recessed Can Can panel
          border: '#D9BBAF',    // Exact Can Can border
          text: '#3A1E26',      // Deep Ferra ink text
          muted: '#734652',     // Ferra body text
        }
      }
    },
  },
  plugins: [],
}
