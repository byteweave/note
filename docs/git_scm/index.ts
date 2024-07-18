const path = "/git_scm";
export const git_scm = () => {
  return [
    { text: "Git 系统学习笔记", link: path + "/" },
    { text: "起步", link: path + "/01/" },
    {
      text: "Git 基础",
      collapsed: true,
      items: [
        { text: "概述", link: path + "/02/" },
        { text: "获取 Git 仓库", link: path + "/02/01.md" },
      ],
    },
  ];
};
