import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#FF9000',
      buttonHover: '#c97200',
      white: '#F4EDE8',
      buttonText: '#312E38',
      input: '#232129',
      inputText: '#666360',
      background: '#312E38',
      red: '#FF0000',
      black: '#28262E',
      textHover: '#FFFFFF',
    },
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
  },
  plugins: [],
};
export default config;
