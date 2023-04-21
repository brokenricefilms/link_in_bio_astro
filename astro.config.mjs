import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "http://thuanowa.com",
  integrations: [tailwind(), compress(), robotsTxt(), sitemap()],
  output: "server",
  adapter: netlify()
});