---
contentType: reference
nodeTitle: Deprecated nodes
originalFilePath: integrations/builtin/deprecated-and-versioned-nodes.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/deprecated-and-versioned-nodes'
url: 'https://docs.n8n.io/integrations/builtin/deprecated-nodes'
layout:
  description:
    visible: false
---

# 已弃用与多版本的节点（Deprecated and versioned nodes）

{% hint style="info" %}
**大白话**：n8n 会不断改进它的节点库。这一页是一张「节点状态清单」：哪些节点被彻底删掉了（Removed）、哪些节点「退休」了但还能用（Deprecated）、哪些节点有新版本但旧版本还能继续用（Versioned）。如果你在用的节点出现在「已弃用」或「已移除」列表里，就要考虑迁移到替代节点，否则未来可能报错。
{% endhint %}

n8n 会随着时间的推移改进它的节点库。本页列出了已移除的节点（彻底移除）、已弃用的节点（退役但仍可运行）以及多版本的节点（处于活跃状态且有多个版本可用）。

## 已弃用节点（Deprecated nodes）

n8n 不会再为已弃用的节点发布更新或修复错误。使用这些节点的工作流仍然可以继续运行，但你应该迁移到受支持的替代方案。

{% hint style="info" %}
**迁移已弃用节点**

请在 n8n 未来版本移除这些节点之前，把工作流中的已弃用节点替换掉。
{% endhint %}

| 节点（Node） | 最终节点版本（Final node version） |
|------|:-----------------:|
| Binary Input Loader | 1 |
| Chat Messages Retriever | 1 |
| Convert to/from binary data | 1.1 |
| Cron | 1 |
| Embedding Dimensions | 1 |
| Function | 1 |
| Function Item | 1 |
| GitHub Document Loader | 1.1 |
| HTML Extract | 1 |
| HTTP Request Tool | 1.1 |
| iCalendar | 1 |
| In Memory Vector Store Insert | 1 |
| In Memory Vector Store Load | 1 |
| Interval | 1 |
| JSON Input Loader | 1 |
| Manual Chat Trigger | 1.1 |
| MCP Registry Client (internal) | 1 |
| Message an Agent | 1 |
| Motorhead | 1.4 |
| OpenAI Assistant | 1.1 |
| OpenAI Model | 1 |
| Options | 1 |
| Orbit | 1 |
| Pinecone: Insert | 1 |
| Pinecone: Load | 1 |
| Read Binary File | 1 |
| Read Binary Files | 1 |
| Read PDF | 1 |
| SerpApi (Google Search) | 1 |
| Simulate | 1 |
| Simulate Trigger | 1 |
| Supabase: Insert | 1 |
| Supabase: Load | 1 |
| Tool Executor | 1 |
| Workflow Trigger | 1 |
| Write Binary File | 1 |
| Zep | 1.4 |
| Zep Vector Store: Insert | 1 |
| Zep Vector Store: Load | 1 |

## 已移除节点（Removed nodes）

当节点所连接的外部服务不再可用时，n8n 会移除这些节点。使用已移除节点的工作流会报错失败。

{% hint style="warning" %}
**更新或移除受影响的工作流**

如果你的工作流使用了以下任一节点，请改用替代方案，或将其移除，以免出错。
{% endhint %}

| 节点（Node） | n8n 版本（n8n version） |
|------|:-----------:|
| Automizy | 2.0 |
| crowd.dev | 2.0 |
| Kitemaker | 2.0 |
| Spontit | 2.0 |

## 多版本节点（Versioned nodes）

当 n8n 对一个节点做出重大改进时，n8n 会发布一个新的默认版本，同时保留旧版本。使用旧版本的工作流仍然可以按原样继续运行。

在新工作流中，请始终使用当前版本，以获得最新的功能和错误修复。

| 节点（Node） | 当前节点版本（Current node version） | 之前的节点版本（Previous node versions） |
|------|:--------------------:|:-----------------------|
| AI Agent | 3.1 | 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 3 |
| AI Agent Tool | 3 | 2.2 |
| Airtable | 2.2 | 1, 2, 2.1 |
| Airtop | 1.1 | 1 |
| Anthropic Chat Model | 1.5 | 1, 1.1, 1.2, 1.3, 1.4 |
| AWS Bedrock Chat Model | 1.1 | 1 |
| AwsS3 | 2 | 1 |
| Baserow | 1.1 | 1 |
| Basic LLM Chain | 1.9 | 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8 |
| Bitbucket Trigger | 1.1 | 1 |
| Cal.com Trigger | 2 | 1 |
| Call n8n Sub-Workflow Tool | 2.2 | 1, 1.1, 1.2, 1.3, 2, 2.1 |
| Chat | 1.3 | 1, 1.1, 1.2 |
| Chat Memory Manager | 1.1 | 1 |
| Chat Trigger | 1.4 | 1, 1.1, 1.2, 1.3 |
| Coda | 1.1 | 1 |
| Code | 2 | 1 |
| Code Tool | 1.3 | 1, 1.1, 1.2 |
| Compare Datasets | 2.3 | 1, 2, 2.1, 2.2 |
| Compression | 1.1 | 1 |
| Convert to File | 1.1 | 1 |
| Crypto | 2 | 1 |
| Data table | 1.1 | 1 |
| Date & Time | 2 | 1 |
| Default Data Loader | 1.1 | 1 |
| Discord | 2 | 1 |
| Email Trigger (IMAP) | 2.1 | 1, 2 |
| Embeddings OpenAI | 1.2 | 1, 1.1 |
| Execute Sub-workflow | 1.3 | 1, 1.1, 1.2 |
| Execute Workflow Trigger | 1.1 | 1 |
| Execution Data | 1.1 | 1 |
| Extract from File | 1.1 | 1 |
| Filter | 2.3 | 1, 2, 2.1, 2.2 |
| Git | 1.1 | 1 |
| GitHub | 1.1 | 1 |
| Gmail | 2.2 | 1, 2, 2.1 |
| Gmail Trigger | 1.4 | 1, 1.1, 1.2, 1.3 |
| Google Analytics | 2 | 1 |
| Google BigQuery | 2.1 | 1, 2 |
| Google Books | 2 | 1 |
| Google Calendar | 1.3 | 1, 1.1, 1.2 |
| Google Cloud Firestore | 1.1 | 1 |
| Google Docs | 2 | 1 |
| Google Drive | 3 | 1, 2 |
| Google Gemini Chat Model | 1.1 | 1 |
| Google Sheets | 4.7 | 1, 2, 3, 4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6 |
| Google Slides | 2 | 1 |
| Google Translate | 2 | 1 |
| GraphQL | 1.1 | 1 |
| Guardrails | 2 | 1 |
| HighLevel | 2 | 1 |
| HTML | 1.2 | 1, 1.1 |
| HTTP Request | 4.4 | 1, 2, 3, 4, 4.1, 4.2, 4.3 |
| HubSpot | 2.2 | 1, 2, 2.1 |
| If | 2.3 | 1, 2, 2.1, 2.2 |
| Information Extractor | 1.2 | 1, 1.1 |
| Invoice Ninja | 2 | 1 |
| Invoice Ninja Trigger | 2 | 1 |
| Item Lists | 3.1 | 1, 2, 2.1, 2.2, 3 |
| Jira Trigger | 1.1 | 1 |
| Kafka Trigger | 1.3 | 1, 1.1, 1.2 |
| Lemlist | 2 | 1 |
| Linear | 1.1 | 1 |
| MailerLite | 2 | 1 |
| MailerLite Trigger | 2 | 1 |
| MCP Client Tool | 1.2 | 1, 1.1 |
| MCP Server Trigger | 2 | 1, 1.1 |
| Merge | 3.2 | 1, 2, 2.1, 3, 3.1 |
| Microsoft Agent 365 Trigger | 1.1 | 1 |
| Microsoft Excel (OneDrive) | 2.2 | 1, 2, 2.1 |
| Microsoft OneDrive | 1.1 | 1 |
| Microsoft Outlook | 2 | 1 |
| Microsoft SQL | 1.1 | 1 |
| Microsoft Teams | 2 | 1, 1.1 |
| Mindee | 3 | 1, 2 |
| MongoDB | 1.3 | 1, 1.1, 1.2 |
| MongoDB Chat Memory | 1.1 | 1 |
| Moonshot Kimi Chat Model | 1.1 | 1 |
| MySQL | 2.5 | 1, 2, 2.1, 2.2, 2.3, 2.4 |
| n8n Form | 2.5 | 1, 2.3, 2.4 |
| n8n Form Trigger | 2.5 | 1, 2, 2.1, 2.2, 2.3, 2.4 |
| NocoDB | 4 | 1, 2, 3 |
| Notion | 2.2 | 1, 2, 2.1 |
| OpenAI | 2.3 | 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2 |
| OpenAI Chat Model | 1.3 | 1, 1.1, 1.2 |
| Perplexity | 2 | 1 |
| Pipedrive | 2 | 1 |
| Pipedrive Trigger | 1.1 | 1 |
| Postgres | 2.6 | 1, 2, 2.1, 2.2, 2.3, 2.4, 2.5 |
| Postgres Chat Memory | 1.4 | 1, 1.1, 1.2, 1.3 |
| Question and Answer Chain | 1.7 | 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 |
| RabbitMQ | 1.1 | 1 |
| Read/Write Files from Disk | 1.1 | 1 |
| Redis Chat Memory | 1.6 | 1, 1.1, 1.2, 1.3, 1.4, 1.5 |
| Remove Duplicates | 2 | 1, 1.1 |
| Respond to Webhook | 1.5 | 1, 1.1, 1.2, 1.3, 1.4 |
| RSS Read | 1.2 | 1, 1.1 |
| Schedule Trigger | 1.3 | 1, 1.1, 1.2 |
| SeaTable | 2 | 1 |
| SeaTable Trigger | 2 | 1 |
| Send Email | 2.1 | 1, 2 |
| Sentiment Analysis | 1.1 | 1 |
| Set | 3.4 | 1, 2, 3, 3.1, 3.2, 3.3 |
| Simple Memory | 1.4 | 1, 1.1, 1.2, 1.3 |
| Slack | 2.4 | 1, 2, 2.1, 2.2, 2.3 |
| Split In Batches | 3 | 2 |
| Splunk | 2 | 1 |
| Spreadsheet File | 2 | 1 |
| Strava | 1.1 | 1 |
| Structured Output Parser | 1.3 | 1, 1.1, 1.2 |
| Summarization Chain | 2.1 | 1, 2 |
| Summarize | 1.1 | 1 |
| Switch | 3.4 | 1, 2, 3, 3.1, 3.2, 3.3 |
| Telegram | 1.2 | 1, 1.1 |
| Telegram Trigger | 1.3 | 1, 1.1, 1.2 |
| Text Classifier | 1.1 | 1 |
| TheHive Trigger | 2 | 1 |
| Think Tool | 1.1 | 1 |
| Todoist | 2.2 | 1, 2, 2.1 |
| Typeform Trigger | 1.1 | 1 |
| Vector Store Question Answer Tool | 1.1 | 1 |
| Wait | 1.1 | 1 |
| Webflow | 2 | 1 |
| Webflow Trigger | 2 | 1 |
| Webhook | 2.1 | 1, 1.1, 2 |
| WhatsApp Business Cloud | 1.1 | 1 |
| Workflow Retriever | 1.1 | 1 |
| X (Formerly Twitter) | 2 | 1 |
| Xata | 1.5 | 1, 1.1, 1.2, 1.3, 1.4 |
