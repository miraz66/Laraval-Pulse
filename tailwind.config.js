function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

import typographyPlugin from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacity('--background-primary-color'),
        secondary: withOpacity('--background-secondary-color'),
        muted: withOpacity('--background-muted-color'),
      },
      textColor: {
        primary: withOpacity('--text-primary-color'),
        secondary: withOpacity('--text-secondary-color'),
        muted: withOpacity('--text-muted-color'),
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
    plugins: [typographyPlugin],
  },
}
