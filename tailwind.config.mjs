/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This is a crucial line. It tells Tailwind to scan all
    // Astro, HTML, and Markdown files inside your `src` directory
    // for Tailwind class names.
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
