import { defineConfig } from "vitepress";
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
      { text: "java", link: "/java" },
      { text: "redis", link: "/redis" },
      { text: "git", link: "/git/git-qiyuan.md" },
      { text: "gongju", link: "/gongju/brew.md" },
    ],

    sidebar: {
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
      "/git/": [
        {
          items: [
            { text: "Git教程", link: "/git/git-qiyuan.md" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/java/": [
        {
          // text: "java",
          items: [
            { text: "简介", link: "/java/index.md" },
            { text: "java虚拟机8-11双版本", link: "/java/1.md" },
            {
              text: "数组",
              collapsed: true,
              items: [
                { text: "一维数组", link: "/java/array/array.md" },
                { text: "二维数组", link: "/java/array/double-array.md" },
                { text: "打印数组", link: "/java/array/print" },
              ],
            },
            {
              text: "集合",
              collapsed: true,
              items: [
                { text: "ArrayDeque源码分析", link: "/java/collection/arraydeque.md" },
                { text: "ArrayList源码分析", link: "/java/collection/arraylist.md" },
                {
                  text: "Comparable和Comparator的区别",
                  link: "/java/collection/comparable-omparator.md",
                },
              ],
            },
          ],
        },
      ],
      "/redis/": [
        {
          text: "redis",
          items: [{ link: "/redis/index.md" }, { link: "/api-examples" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/PortfolioCare/coding" }],
  },
});
