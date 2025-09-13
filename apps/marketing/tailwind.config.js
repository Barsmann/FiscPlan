import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uiPreset = require("../../packages/ui/tailwind-preset.cjs");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [uiPreset],
  theme: { extend: {} },
  plugins: [],
};
export default config;
