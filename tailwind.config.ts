import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs320':'320px',
        'xs': '426px',
        'xs480': '500px',
        'sm720': '540px',
        'sm640':'580px',
        'md820': '757px'
      }
    },
  },
  plugins: [],
}
export default config
