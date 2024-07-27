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
        {
          text: "外观模式",
          link: path + "/04_facade/facade.md",
        },
        {
          text: "适配器模式",
          link: path + "/05_adapter/adapter.md",
        },
        {
          text: "单例设计模式",
          link: path + "/06_singleton/singleton.md",
        },
        {
          text: "工厂方法模式",
          link: path + "/07_factory_method/factory_method.md",
        },
        {
          text: "抽象工厂模式",
          link: path + "/08_abstract_factory/abstract_factory.md",
        },
        {
          text: "生成器模式",
          link: path + "/09_builder/builder.md",
        },
        {
          text: "原型模式",
          link: path + "/10_prototype/prototype.md",
        },
        {
          text: "中介者模式",
          link: path + "/11_mediator/mediator.md",
        },
        {
          text: "代理模式",
          link: path + "/12_proxy/proxy.md",
        },
        {
          text: "观察者模式",
          link: path + "/13_observer/observer.md",
        },
      ],
    },
  ];
};
