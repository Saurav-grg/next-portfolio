/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // accent: '#f9f871',
        accent: '#fefe68',
      },
      backgroundImage: {
        'gold-light':
          'linear-gradient(to right, #f9f295, #e0aa3e, #faf398, #b88a44)',
        'gold-sharp': 'linear-gradient(to right, #b27f1f, #fefe68, #f3a80a)',
        'silver-light':
          'linear-gradient(to right, #707072,#cdced2,#fcfcfe,#d0d1d6,#818286, #a1a1a3)',
      },
    },
  },
  plugins: [],
};
