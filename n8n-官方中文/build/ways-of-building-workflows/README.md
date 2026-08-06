---
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 构建工作流的方式（Ways of building workflows）

欢迎来到「构建工作流的方式」章节！这是 n8n 官方文档中非常入门的一个部分。

如果你刚开始接触 n8n，可能会有点懵：工作流（Workflow）到底该怎么建？其实 n8n 给了你好几种构建方式，你可以根据自己的习惯和需求选择：

* **用模板**：直接用别人做好的现成模板，改一改就能用（最省事）。
* **用 AI 助手对话**：用大白话描述你想要的功能，AI 帮你生成、修改、调试工作流（适合不想拖节点的朋友）。
* **手动拖拽节点**：把各种节点（Node，n8n 的功能积木）拖到画布上连起来（最传统、最灵活的方式，本节的其它章节也会涉及）。

{% hint style="info" %}
简单来说：**模板 = 抄作业**，**AI 助手 = 请 AI 帮你写作业**，**手动拖拽 = 自己一步一步做**。下面的子页面会分别详细介绍这些构建方式，点击链接即可进入对应的中文教程。
{% endhint %}

{% content-ref url="ai-assistant.md" %}
[ai-assistant.md](ai-assistant.md)
{% endcontent-ref %}

> 使用 AI 助手：通过聊天对话来创建、编辑、测试和排错 n8n 工作流（目前仅 n8n Cloud 可用）。

{% content-ref url="connect-to-n8n-mcp-server.md" %}
[connect-to-n8n-mcp-server.md](connect-to-n8n-mcp-server.md)
{% endcontent-ref %}

> 使用 MCP 构建：让 Claude、ChatGPT 等 AI 工具直接连接你的 n8n，用自然语言帮你建工作流。

{% content-ref url="use-templates.md" %}
[use-templates.md](use-templates.md)
{% endcontent-ref %}

> 使用模板：从 n8n 官方或你所在组织的模板库里挑选现成工作流，快速起步。

{% content-ref url="use-the-ai-assistant.md" %}
[use-the-ai-assistant.md](use-the-ai-assistant.md)
{% endcontent-ref %}

> 向 n8n AI 提问：n8n 自带的问答助手，帮你答疑、排错、写表达式（已被 AI 助手取代，不再积极开发）。

{% content-ref url="chat-hub.md" %}
[chat-hub.md](chat-hub.md)
{% endcontent-ref %}

> Chat Hub 聊天中心：一个集中式的 AI 聊天界面，可以切换多个 AI 模型、调用 n8n 工作流 Agent，还能创建自己的个人 Agent。
