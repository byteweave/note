const path = "/back_end_storage";
export const back_end_storage = () => {
  return [
    {
      text: "后端存储实战",
      link: path + "/",
    },
    {
      text: "电商系统是如何设计的？",
      link: path + "/00/",
    },
    {
      text: "创业篇",
      collapsed: true,
      items: [
        {
          text: "概述",
          link: path + "/01/",
        },
        {
          text: "创建和更新订单时，如何保证数据准确无误",
          link: path + "/01/01.md",
        },
        {
          text: "流量大、数据多的商品详情页系统该如何设计",
          link: path + "/01/02.md",
        },
        {
          text: "复杂而又重要的购物车系统，应该如何设计？",
          link: path + "/01/03.md",
        },
        {
          text: "事务：账户余额总是对不上账，怎么办？",
          link: path + "/01/04.md",
        },
        {
          text: "分布式事务：如何保证多个系统间的数据是一致的？",
          link: path + "/01/05.md",
        },
        {
          text: "如何用 Elasticsearch 构建商品搜索系统？",
          link: path + "/01/06.md",
        },
        {
          text: "MySQL HA：如何将「删库跑路」的损失降到最低？",
          link: path + "/01/07.md",
        },
      ],
    },
    {
      text: "高速增长篇",
      collapsed: true,
      items: [
        {
          text: "概述",
          link: path + "/02/",
        },
        {
          text: "一个几乎每个系统必踩的坑儿：访问数据库超时",
          link: path + "/02/01.md",
        },
        {
          text: "怎么能避免写出慢 SQL？",
          link: path + "/02/02.md",
        },
        {
          text: "走进黑盒：SQL 是如何在数据库中执行的？",
          link: path + "/02/03.md",
        },
        {
          text: "MySQL 如何应对高并发（一）：使用缓存保护 MySQL",
          link: path + "/02/04.md",
        },
        {
          text: "MySQL 如何应对高并发（二）：读写分离",
          link: path + "/02/05.md",
        },
        {
          text: "MySQL 主从数据库同步是如何实现的？",
          link: path + "/02/06.md",
        },
        {
          text: "订单数据越来越多，数据库越来越慢该怎么办？",
          link: path + "/02/07.md",
        },
      ],
    },
    {
      text: "海量数据篇",
      collapsed: true,
      items: [
        {
          text: "概述",
          link: path + "/03/",
        },
        {
          text: "MySQL 存储海量数据的最后一招：分库分表",
          link: path + "/03/01.md",
        },
        {
          text: "用 Redis 构建缓存集群的最佳实践有哪些？",
          link: path + "/03/02.md",
        },
        {
          text: "大厂都是怎么做 MySQLtoRedis 同步的?",
          link: path + "/03/03.md",
        },
        {
          text: "分布式存储：你知道对象存储是如何保存图片文件的吗？",
          link: path + "/03/04.md",
        },
        {
          text: "跨系统实时同步数据，分布式事务是唯一的解决方案吗？",
          link: path + "/03/05.md",
        },
        {
          text: "如何在不停机的情况下，安全地更换数据库？",
          link: path + "/03/06.md",
        },
        {
          text: "类似「点击流」这样的海量数据应该如何存储？",
          link: path + "/03/07.md",
        },
        {
          text: "面对海量数据，如何才能查得更快",
          link: path + "/03/08.md",
        },
        {
          text: "MySQL 经常遇到的高可用、分片问题，NewSQL 是如何解决的？",
          link: path + "/03/09.md",
        },
        {
          text: "RocksDB：不丢数据的高性能 KV 存储",
          link: path + "/03/10.md",
        },
      ],
    },
  ];
};
