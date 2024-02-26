import { defineConfig } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [icon()],
  devToolbar: { enabled: false },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
