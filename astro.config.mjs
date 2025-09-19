import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    tailwind({
      // This is the key part that was missing.
      // It tells Tailwind where to find your class names.
      // We are pointing to all .astro and .js/.ts files in the src directory.
      configFile: "./tailwind.config.mjs",
    }),
  ],
});
