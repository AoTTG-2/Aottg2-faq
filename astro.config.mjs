import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AoTTG 2 FAQ",
      logo: {
        light: "./src/assets/images/aottg2dark.png",
        dark: "./src/assets/images/aottg2.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/AoTTG-2",
        discord: "https://discord.gg/aottg-2-681641241125060652",
        facebook: "https://www.facebook.com/AoTTG2",
        patreon: "https://www.patreon.com/aottg2",
        twitter: "https://x.com/AoTTG2",
        tiktok: "https://www.tiktok.com/@aottg2",
      },
      sidebar: [
        {
          label: "FAQ",
          autogenerate: { directory: "faq" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
