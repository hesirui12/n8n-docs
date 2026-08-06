---
contentType: howto
nodeTitle: Set up your development environment
originalFilePath: integrations/creating-nodes/build/node-development-environment.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/set-up-your-development-environment
layout:
  description:
    visible: false
---

# 搭建你的开发环境（Set up your development environment）

本文档列出开发一个节点（node）所需的必备依赖，以及配置编辑器的相关指导。

## 环境要求（Requirements）

要构建和测试一个节点，你需要：

* **Node.js 和 npm**。最低版本要求为 Node 22.22.0。你可以通过 nvm（Node Version Manager，Node 版本管理器）来安装这两者——nvm 支持 Linux、Mac 和 WSL（适用于 Linux 的 Windows 子系统），具体安装说明见[这里](https://github.com/nvm-sh/nvm)。Windows 用户请参考微软官方的 [在 Windows 上安装 NodeJS](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) 指南。
* **一个本地运行的 n8n 实例**。你可以用 `npm install n8n -g` 安装 n8n，然后按照[本地运行你的节点](../test-your-node/run-your-node-locally.md)中的步骤来测试你的节点。
* **当你构建[经过验证的社区节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/building-community-nodes)时**，必须使用 [`n8n-node` 工具](using-the-n8n-node-tool.md)来创建和测试你的节点。

你还应该安装 [git](https://git-scm.com/)。这样你才能克隆并使用 [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter)（n8n 官方的节点开发起步模板）。

{% hint style="info" %}
**小白提示**：这一节说白了就是「装好三样东西」：①Node.js（运行代码的环境，npm 是它的包管理器，用来装别人写好的代码库）；②n8n 本体（你要在它里面测试自己写的节点）；③git（版本管理工具，用来下载官方模板和记录你的代码改动）。装好这三样，开发环境就齐活了。
{% endhint %}

## 编辑器设置（Editor setup）

n8n 推荐使用 [VS Code](https://code.visualstudio.com/) 作为你的编辑器。

请安装以下扩展（Extensions）：

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)（代码规范检查）
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)（统一代码格式）
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)（代码自动格式化）

使用 VS Code 并安装这些扩展后，你在写代码时就能实时看到 n8n 节点代码检查器（linter）给出的警告提示。
