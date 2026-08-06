---
description: 如何获得 n8n 的帮助和支持。
contentType: howto
nodeTitle: 在哪里获得帮助
originalFilePath: help-community/help.md
originalUrl: 'https://docs.n8n.io/help-community/help'
url: 'https://docs.n8n.io/contribute/where-to-get-help'
layout:
  description:
    visible: false
---

# 获得 n8n 帮助（Get help with n8n）

## 在哪里获得帮助（Where to get help）

n8n 根据你的套餐（plan）以及问题的性质，提供不同的支持选项。

> 💡 **小白提示**：遇到问题先别慌——绝大多数问题在社区论坛里都已经有人问过并解决了，学会"搜索已有答案"能帮你省下大量时间。

### n8n 社区论坛（n8n community forum）

n8n 通过[论坛](https://community.n8n.io/)为所有 n8n 用户提供免费的社区支持。

这是获取各种答案的最佳途径，因为 n8n 支持团队和社区成员都可以帮你解答。

{% hint style="info" %}
**小白解释**：社区论坛是免费开放的，不管你是免费用户还是付费用户都能用。提问时把问题描述清楚（发生了什么、你期望什么、附上截图或工作流），别人才能更高效地帮你。
{% endhint %}

### 邮件支持（Email support）

n8n 通过 [help@n8n.io](mailto:help@n8n.io) 为以下套餐提供邮件支持：

* [企业版套餐（Enterprise plans）](https://n8n.io/enterprise/)可以使用带 SLA（服务等级协议）的邮件支持，处理技术、账号、账单及其他咨询。
* 其他[云版套餐（Cloud plans）](https://n8n.io/pricing/)可以使用邮件支持处理管理员和账单问题。技术问题请到论坛提问。

## 你的留言里应该包含什么（What to include in your message）

无论是在论坛发帖还是给客服发邮件，只要你在第一条消息里就提供关于你的 n8n 实例（instance）以及所遇问题的详细信息，就能更快得到帮助。

### 你的 n8n 实例信息（Your n8n instance details）

要收集关于你的 n8n 实例的基本信息：

1. 打开左侧面板。
2. 选择 **Help**（帮助）。
3. 选择 **About n8n**（关于 n8n）。
4. **About n8n** 弹窗会打开并显示你的当前信息。
5. 选择 **Copy debug information**（复制调试信息）来复制你的信息。
6. 把这份信息包含在你的论坛帖子或支持邮件中。

{% hint style="info" %}
**小白解释**：这份"调试信息"里包含你的 n8n 版本号、系统环境等关键数据。版本不同，很多问题的答案可能完全不同，所以支持人员第一件事往往就是确认你的版本。
{% endhint %}

### 关于你问题的详细信息（Details about your problem）

为了更高效地帮你解决问题，这里有一些可以补充的信息，能提供更多上下文：

* 🎥 **截图或视频录制（Screenshots or video recordings）**：一段快速的 Loom 或屏幕录制，展示正在发生的事情。
* 📚 **相关文档（Relevant documentation）**：如果你参考过某些指南或文档，请在留言中附上它们的链接。
* ☁️ **n8n Cloud 工作区（如果可能）**：如果是联系客服，请提供你的 n8n Cloud 实例的工作区 URL。它看起来像 `https://xxxxx.n8n.app.cloud`。
* 📝 **复现问题的步骤（Steps to reproduce the issue）**：用简单的分步方式描述你在遇到问题之前做了什么。
* 📂 **工作流或配置文件（Workflow or Configuration files）**：分享相关的工作流或配置文件会有很大帮助。

在你的留言中附上一份 [HAR（HTTP 存档）文件](https://en.wikipedia.org/wiki/HAR_(file_format)) 也可能有帮助。你可以了解如何在浏览器中生成 HAR 文件，以及如何在发布前使用 [Har Analizer](https://toolbox.googleapps.com/apps/har_analyzer/) 隐去敏感细节。

> 💡 **小白解释**：HAR 文件相当于浏览器和服务器之间通信的"黑匣子记录"，能详细记录每一次网络请求和响应，对排查 API 连接类问题特别有用。不过它可能包含敏感信息（如令牌、Cookie），发布前一定要检查并隐去。
