// 侧边栏目录构建配置
const path = "/design_pattern";
export const design_pattern = () => {
  return [
    {
      text: "设计模式",
      collapsed: true,
      items: [
        {
          text: "设计模式",
          link: path + "/",
        },
        {
          text: "如何学习设计模式",
          link: path + "/02_how_to_learn/how_to_learn.md",
        },
        {
          text: "简单工厂",
          link: path + "/03_simple_factory/simple_factory.md",
        },
      ],
    },
  ];
};
