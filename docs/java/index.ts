const path = "/java";
export const java = () => {
  return [
    { text: "jdk 性能、有用工具记录", link: path + "/" },
    { text: "基础", link: path + "/basic/basic.md" },
    { text: "并发", link: path + "/concurrent/concurrent.md" },
    {
      text: "八股文",
      collapsed: true,
      items: [
        { text: "并发", link: path + "/eightpart/concurrency.md" },
        { text: "数据结构", link: path + "/eightpart/datastruct.md" },
        { text: "mysql", link: path + "/eightpart/mysql.md" },
        { text: "redis", link: path + "/eightpart/redis.md" },
        { text: "spring", link: path + "/eightpart/spring.md" },
        { text: "think", link: path + "/eightpart/think.md" },
        { text: "system", link: path + "/eightpart/system.md" },
        { text: "network", link: path + "/eightpart/network.md" },
      ],
    },
  ];
};
