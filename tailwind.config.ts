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
        'xs': '425px',
        'xs480': '500px',
        'xs600':'600px',
        'xs580':'630px',
        'sm670':'715px',
        'md830': '830px',
        'md860': '920px',
        'lg1100': '1120px'
      }
    },
  },
  plugins: [],
}
export default config
