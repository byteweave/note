const path = "/java";
export const java = () => {
  return [
    { text: "jdk 性能、有用工具记录", link: path + "/" },
    { text: "基础", link: path + "/basic/basic.md" },
    { text: "并发", link: path + "/concurrent/concurrent.md" },
    {
      text: "框架",
      collapsed: true,
      items: [
        { text: "mybatis", link: path + "/fm/Mybatis.md" },
        { text: "Spring", link: path + "/fm/Spring.md" },
        { text: "SpringBoot", link: path + "/fm/SpringBoot.md" },
        { text: "SpringCloud", link: path + "/fm/SpringCloud.md" },
        { text: "SpringDataJpa", link: path + "/fm/SpringDataJpa.md" },
        { text: "SpringMVC", link: path + "/fm/SpringMVC.md" },
        { text: "SpringSecurity", link: path + "/fm/SpringSecurity.md" },
      ],
    },
    {
      text: "八股文",
      collapsed: true,
      items: [
        { text: "并发", link: path + "/eightpart/concurrency.md" },
        { text: "数据结构", link: path + "/eightpart/datastruct.md" },
        { text: "distribution", link: path + "/eightpart/distribution.md" },
        { text: "foundation", link: path + "/eightpart/foundation.md" },
        { text: "gaint2023", link: path + "/eightpart/gaint2023.md" },
        { text: "mysql", link: path + "/eightpart/mysql.md" },
        { text: "redis", link: path + "/eightpart/redis.md" },
        { text: "spring", link: path + "/eightpart/spring.md" },
        { text: "think", link: path + "/eightpart/think.md" },
        { text: "system", link: path + "/eightpart/system.md" },
        { text: "network", link: path + "/eightpart/network.md" },
      ],
    },
    { text: "leetcode", link: path + "/leetcode/leetcode.md" },
  ];
};
