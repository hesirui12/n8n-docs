---
contentType: howto
nodeTitle: GUI 安装社区节点
layout:
  description:
    visible: false
---

# GUI 安装 / GUI installation

> 💡 **大白话**：在自托管实例的「设置 → 社区节点」里，直接搜 npm 包名安装。包名格式：`包名`（最新版）或 `包名@版本号`（指定版本）。

{% hint style="info" %}
**仅限 Owner 和 Admin 用户**

在自托管的 n8n 实例上，只有 Owner 或 Admin 角色的用户才能从 npm 安装和管理社区节点。实例所有者是负责设置和管理用户管理的人。
{% endhint %}

## 安装社区节点 / Install a community node

从 npm 安装社区节点：

1. 进入 **Settings** > **Community Nodes**。
2. 选择 **Install**。
3. 找到要安装的节点：
   1. 选择 **Browse**。n8n 会打开一个 npm 搜索结果页，显示所有带 `n8n-community-node-package` 关键字标签的 npm 包。
   2. 浏览结果列表，可以过滤结果或添加更多关键字。
   3. 找到想要的包后，记下**包名**。如果想安装特定版本，也记下**版本号**。
   4. 返回 n8n。
4. 输入 npm 包名，可选填版本号或 dist-tag。例如，假设有一个访问天气 API 的社区节点叫 "Storms"，包名是 `n8n-node-storms`，有三个大版本：

   * 安装名为 `n8n-node-weather` 的包的最新版本：在 **Enter npm package name** 里输入 `n8n-nodes-storms`。
   * 安装 2.3 版本：在 **Enter npm package name** 里输入 `n8n-node-storms@2.3`。

   （继续按界面提示完成安装即可。）
