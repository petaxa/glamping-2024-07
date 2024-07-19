import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glamping!",
  description: "ぐらんぴんぐに、いこう！",
  base: "/glamping-2024-07/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Link集", link: "/links" },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/discussions/": [
        {
          text: "Discussions",
          items: [
            { text: "Discussionsとは", link: "/discussions/" },
            { text: "料金", link: "/discussions/budged" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
