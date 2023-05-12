import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://link-in-bio.thuanowa.com/",
  integrations: [tailwind(), compress(), robotsTxt(), sitemap()],
});
