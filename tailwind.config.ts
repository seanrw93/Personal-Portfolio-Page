import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'circle': 'var(--circle-size)',
        'circle-wider': 'var(--circle-size-wider)',
        'circle-sm': 'var(--circle-size-sm)',
        'header-height': 'var(--header-height)',
        'header-height-sm': 'var(--header-height-sm)',
        'header-width-sm': 'var(--header-width-sm)',
        'header-top-sm': 'var(--header-top-sm)',
      },
      inset: {
        'circle-offset-top': 'var(--circle-offset-top)',
        'circle-offset-left': 'var(--circle-offset-left)',
        'circle-offset-right': 'var(--circle-offset-right)',
        'circle-offset-left-md': 'var(--circle-offset-left-md)',
        'circle-offset-left-lg': 'var(--circle-offset-left-lg)',
        'circle-offset-left-xl': 'var(--circle-offset-left-xl)',
        'circle-offset-left-2xl': 'var(--circle-offset-left-2xl)',
      },
      blur: {
        'circle': 'var(--circle-blur)',
        'backdrop': 'var(--backdrop-blur)'
      },
      colors: {
        'circle-pink': 'var(--circle-pink)',
        'circle-purple': 'var(--circle-purple)',
        'primary-blue': 'var(--primary-blue)',
        'darkest-blue': 'var(--darkest-blue)',
        'dark-blue': 'var(--dark-blue)',
        'dark-gray': 'var(--dark-gray)',
        'base-gray': 'var(--base-gray)',
        'lightest-blue': 'var(--lightest-blue)',
        'base-white': 'var(--base-white)',
      },
      opacity: {
        'subtle': 'var(--opacity-40)',
        'medium': 'var(--opacity-80)',
      },
      borderWidth: {
        'thin': 'var(--border-thin)',
      },
      boxShadow: {
        'subtle': 'var(--shadow-black-subtle)',
      },
      backdropBlur: {
        'backdrop': 'var(--backdrop-blur)',
      },
      zIndex: {
        'max': 'var(--z-max)',
      }

    },
  },
  safelist: [
    'font-semibold',
    'underline',
    'font-bold',
    'italic'
  ],
  plugins: [],
} satisfies Config;
