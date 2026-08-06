---
contentType: reference
nodeTitle: 社区节点风险
layout:
  description:
    visible: false
---

# 社区节点风险 / Risks

> 💡 **大白话**：社区节点 = 陌生人写的代码，跑在你的服务器上。用之前一定想清楚下面三条风险，尤其是**安全**那两条——这也是官方一直强调的。

使用社区节点存在以下风险：

* **系统安全（System security）**：社区节点对 n8n 运行所在的机器有**完全访问权限**，可以做任何事情，包括恶意操作。
* **数据安全（Data security）**：你使用的任何社区节点都能访问你工作流中的数据。
* **破坏性变更（Breaking changes）**：节点开发者可能会在新版本里引入破坏性变更（即破坏原有功能的更新）。根据节点开发者选择的版本管理方式，升级到包含破坏性变更的版本可能导致所有使用该节点的工作流出问题。升级节点时务必谨慎。

{% hint style="info" %}
**n8n 会审查「已验证」的社区节点**

除了 npm 上公开的社区节点，n8n 还会审查部分节点，并以**已验证社区节点（verified community node）**的形式提供在节点面板中（见[安装已验证社区节点](installation-and-management/install-verified-community-nodes.html)）。这些节点必须满足一系列数据与系统安全要求才能通过审批。
{% endhint %}

## 举报不良社区节点 / Report bad community nodes

如果你发现不良社区节点，可以发送邮件到 [security@n8n.io](mailto:security@n8n.io) 举报。

## 禁用社区节点 / Disable community nodes

如果你自托管 n8n，可以通过把环境变量 `N8N_COMMUNITY_PACKAGES_ENABLED` 设为 `false` 来禁用社区节点。在 n8n Cloud 上，请到 [Cloud Admin Panel](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/use-the-admin-dashboard) 里禁用。更多信息见[故障排查](troubleshooting.html)。
