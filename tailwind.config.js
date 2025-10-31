// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.mdx', // Include your Docusaurus markdown files
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Sync with Docusaurus dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};