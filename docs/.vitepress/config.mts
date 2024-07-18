import { defineConfig } from "vitepress";
import { ai } from "../ai";
import { back_end_storage } from "../back_end_storage";
import { cache_pdp } from "../cache_pdp";
import { git_scm } from "../git_scm";
import { java } from "../java";
import { mysql } from "../mysql";
import mdItCustomAttrs from "markdown-it-custom-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "note",
  base: "/note",
  description: "note",
  lastUpdated: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "stylesheet", href: "/note/fancybox.css" }],
    ["script", { src: "/note/fancybox.umd.js" }],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "java", link: "/java/" },
      { text: "mysql", link: "/mysql/" },
      { text: "git", link: "/git_scm/" },
      { text: "存储实战", link: "/back_end_storage/" },
      { text: "亿级流量电商详情页系统实战", link: "/cache_pdp/" },
      { text: "AI", link: "/ai/" },
    ],

    sidebar: {
      "/ai/": ai(),
      "/mysql/": mysql(),
      "/git_scm/": git_scm(),
      "/cache_pdp/": cache_pdp(),
      "/back_end_storage/": back_end_storage(),
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/gongju/": [
        {
          items: [
            { text: "brew", link: "/gongju/brew.md" },
            { text: "multipass", link: "/gongju/multipass.md" },
            { text: "chiner", link: "/gongju/chiner.md" },
            { text: "choco", link: "/gongju/choco.md" },
            { text: "DBeaver", link: "/gongju/DBeaver.md" },
            { text: "LLM底层技术原理入门指南", link: "/pdf/LLM底层技术原理入门指南.pdf" },
          ],
        },
      ],
      "/java/": java(),
      "/redis/": [
        {
          text: "redis",
          items: [{ link: "/redis/index.md" }, { link: "/api-examples" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/byteweave/note" }],
  },
});
