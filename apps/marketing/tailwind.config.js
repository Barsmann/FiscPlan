/** @type {import('tailwindcss').Config} */
const uiPreset = require("../../packages/ui/tailwind-preset.cjs");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [uiPreset],
  theme: { extend: {} },
  plugins: [],
};
