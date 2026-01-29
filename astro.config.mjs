// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import content from '@astrojs/content';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mkotkov.github.io",
  base: "/",
});
