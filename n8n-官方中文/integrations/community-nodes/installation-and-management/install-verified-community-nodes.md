---
contentType: howto
nodeTitle: 安装已验证社区节点
layout:
  description:
    visible: false
---

# 安装已验证社区节点 / Install verified community nodes

> 💡 **大白话**：「已验证」= n8n 官方审查过、安全性有保障的社区节点，可以直接从节点面板装。只有实例 Owner/Admin 能装，装好后所有人能用。

{% hint style="info" %}
**仅限实例所有者和管理员**

n8n 实例的所有者（Owner）和管理员（Admin）账号可以安装和管理已验证社区节点。实例所有者是负责设置和管理用户管理的人。实例的所有成员都可以在工作流中使用已安装的社区节点。
{% endhint %}

## 安装社区节点 / Install a community node

安装一个[已验证社区节点](../create-nodes/deploy-your-node/submit-community-nodes.html#submit-your-node-for-verification-by-n8n)：

1. 进入**画布（Canvas）**，打开**节点面板**（点击 '+' 或按 `n` 键）。
2. **搜索**你要找的节点。如果有匹配的已验证社区节点，你会在节点面板底部看到 **More from the community（更多来自社区）** 区域。
3. 选择要安装的节点，进入节点详情视图，查看所有支持的操作。
4. 选择 **install（安装）**。这会将节点安装到你的实例，并让所有成员都能在工作流中使用它。
5. 现在你可以把它添加到工作流里了。

{% hint style="info" %}
**启用已验证社区节点的安装**

有些用户可能不想在实例的节点面板里显示已验证社区节点。在 n8n Cloud 上，实例所有者可以在 [Cloud Admin Panel](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/use-the-admin-dashboard) 中切换。自托管用户可以使用[环境变量](../../deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes.html)控制此功能的可用性。
{% endhint %}

## 卸载社区节点 / Uninstall a community node

卸载社区节点：

1. 进入 **Settings** > **Community nodes**。
2. 在要卸载的节点上，选择 **Options** <img src="../../../.gitbook/assets/three-dot-options-menu (2).png" alt="Three dots options menu" data-size="line">。
3. 选择 **Uninstall package**。
4. 在确认弹窗中再次选择 **Uninstall Package**。
