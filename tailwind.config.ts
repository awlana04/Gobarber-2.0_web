import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/presentation/screens/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#FF9000',
      buttonHover: '#c97200',
      white: '#F4EDE8',
      buttonText: '#3E3B47',
      input: '#232129',
      inputText: '#666360',
      background: '#312E38',
      red: '#FF0000',
      black: '#28262E',
      textHover: '#FFFFFF',
      infoText: '#ebf8ff',
      infoBackground: '#3172b7',
      successText: '#e6fffa',
      successBackground: '#2e656a',
      errorText: '#fddede',
      errorBackground: '#c53030',
      grey: '#999591',
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
