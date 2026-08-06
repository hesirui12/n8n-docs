---
title: Tools AI Agent 节点文档
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Tools AI Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的 Tools Agent。
  按照技术文档把 Tools Agent 集成到你的工作流中。
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

# Tools Agent（工具智能体）

{% hint style="info" %}
**大白话**：Tools Agent 就是现在（2025 年后）所有 AI Agent 节点默认使用的「工作模式」，也是官方最推荐的一种。它的核心能力是：AI 能看懂每个工具是干什么的、需要什么参数，然后根据你的任务自己挑工具来调用。你不需要写代码，只要把工具（比如 HTTP Request、Gmail、Code 节点等）接到 AI Agent 的 Tools 接口上就行。它还支持流式输出和人工审核工具调用。
{% endhint %}

Tools Agent（工具智能体）使用外部工具[^1]和 API 来执行操作、获取信息。它能理解不同工具的能力，并根据任务来决定该用哪个工具。这个智能体帮助把大语言模型（LLM）和各种外部服务、数据库集成在一起。

这个智能体与工具协作的能力更强，并且能保证标准的输出格式。

Tools Agent 实现了 [Langchain 的工具调用（tool calling）](https://js.langchain.com/docs/concepts/tool_calling/) 接口。这个接口会描述可用工具及其结构（schema）。这个智能体的输出解析能力也更强，因为它会把解析器作为「格式化工具」传给模型。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](./README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/cHtfs3gewkhPbGP31rjc/" %}

这个智能体支持以下聊天模型：

* [OpenAI Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatopenai/README.md)
* [Groq Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatgroq.md)
* [Mistral Cloud Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatmistralcloud.md)
* [Anthropic Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatanthropic.md)
* [Azure OpenAI Chat Model](../../sub-nodes/n8n-nodes-langchain.lmchatazureopenai.md)

<details>

<summary>Tools Agent 可以使用以下工具（The Tools Agent can use the following tools...）</summary>

* [Call n8n Workflow](../../sub-nodes/n8n-nodes-langchain.toolworkflow.md)
* [Code](../../sub-nodes/n8n-nodes-langchain.toolcode.md)
* [HTTP Request](../../../core-nodes/n8n-nodes-base.httprequest/README.md)
* [Action Network](../../../app-nodes/n8n-nodes-base.actionnetwork.md)
* [ActiveCampaign](../../../app-nodes/n8n-nodes-base.activecampaign.md)
* [Affinity](../../../app-nodes/n8n-nodes-base.affinity.md)
* [Agile CRM](../../../app-nodes/n8n-nodes-base.agilecrm.md)
* [Airtable](../../../app-nodes/n8n-nodes-base.airtable/README.md)
* [APITemplate.io](../../../app-nodes/n8n-nodes-base.apitemplateio.md)
* [Asana](../../../app-nodes/n8n-nodes-base.asana.md)
* [AWS Lambda](../../../app-nodes/n8n-nodes-base.awslambda.md)
* [AWS S3](../../../app-nodes/n8n-nodes-base.awss3.md)
* [AWS SES](../../../app-nodes/n8n-nodes-base.awsses.md)
* [AWS Textract](../../../app-nodes/n8n-nodes-base.awstextract.md)
* [AWS Transcribe](../../../app-nodes/n8n-nodes-base.awstranscribe.md)
* [Baserow](../../../app-nodes/n8n-nodes-base.baserow.md)
* [Bubble](../../../app-nodes/n8n-nodes-base.bubble.md)
* [Calculator](../../sub-nodes/n8n-nodes-langchain.toolcalculator.md)
* [ClickUp](../../../app-nodes/n8n-nodes-base.clickup.md)
* [CoinGecko](../../../app-nodes/n8n-nodes-base.coingecko.md)
* [Compression](../../../core-nodes/n8n-nodes-base.compression.md)
* [Crypto](../../../core-nodes/n8n-nodes-base.crypto.md)
* [DeepL](../../../app-nodes/n8n-nodes-base.deepl.md)
* [DHL](../../../app-nodes/n8n-nodes-base.dhl.md)
* [Discord](../../../app-nodes/n8n-nodes-base.discord/README.md)
* [Dropbox](../../../app-nodes/n8n-nodes-base.dropbox.md)
* [Elasticsearch](../../../app-nodes/n8n-nodes-base.elasticsearch.md)
* [ERPNext](../../../app-nodes/n8n-nodes-base.erpnext.md)
* [Facebook Graph API](../../../app-nodes/n8n-nodes-base.facebookgraphapi.md)
* [FileMaker](../../../app-nodes/n8n-nodes-base.filemaker.md)
* [Ghost](../../../app-nodes/n8n-nodes-base.ghost.md)
* [Git](../../../core-nodes/n8n-nodes-base.git.md)
* [GitHub](../../../app-nodes/n8n-nodes-base.github.md)
* [GitLab](../../../app-nodes/n8n-nodes-base.gitlab.md)
* [Gmail](../../../app-nodes/n8n-nodes-base.gmail/README.md)
* [Google Analytics](../../../app-nodes/n8n-nodes-base.googleanalytics.md)
* [Google BigQuery](../../../app-nodes/n8n-nodes-base.googlebigquery.md)
* [Google Calendar](../../../app-nodes/n8n-nodes-base.googlecalendar/README.md)
* [Google Chat](../../../app-nodes/n8n-nodes-base.googlechat.md)
* [Google Cloud Firestore](../../../app-nodes/n8n-nodes-base.googlecloudfirestore.md)
* [Google Cloud Realtime Database](../../../app-nodes/n8n-nodes-base.googlecloudrealtimedatabase.md)
* [Google Contacts](../../../app-nodes/n8n-nodes-base.googlecontacts.md)
* [Google Docs](../../../app-nodes/n8n-nodes-base.googledocs.md)
* [Google Drive](../../../app-nodes/n8n-nodes-base.googledrive/README.md)
* [Google Sheets](../../../app-nodes/n8n-nodes-base.googlesheets/README.md)
* [Google Slides](../../../app-nodes/n8n-nodes-base.googleslides.md)
* [Google Tasks](../../../app-nodes/n8n-nodes-base.googletasks.md)
* [Google Translate](../../../app-nodes/n8n-nodes-base.googletranslate.md)
* [Google Workspace Admin](../../../app-nodes/n8n-nodes-base.gsuiteadmin.md)
* [Gotify](../../../app-nodes/n8n-nodes-base.gotify.md)
* [Grafana](../../../app-nodes/n8n-nodes-base.grafana.md)
* [GraphQL](../../../core-nodes/n8n-nodes-base.graphql.md)
* [Hacker News](../../../app-nodes/n8n-nodes-base.hackernews.md)
* [Home Assistant](../../../app-nodes/n8n-nodes-base.homeassistant.md)
* [HubSpot](../../../app-nodes/n8n-nodes-base.hubspot.md)
* [Jenkins](../../../app-nodes/n8n-nodes-base.jenkins.md)
* [Jira Software](../../../app-nodes/n8n-nodes-base.jira.md)
* [JWT](../../../core-nodes/n8n-nodes-base.jwt.md)
* [Kafka](../../../app-nodes/n8n-nodes-base.kafka.md)
* [LDAP](../../../core-nodes/n8n-nodes-base.ldap.md)
* [Line](../../../app-nodes/n8n-nodes-base.line.md)
* [LinkedIn](../../../app-nodes/n8n-nodes-base.linkedin.md)
* [Mailcheck](../../../app-nodes/n8n-nodes-base.mailcheck.md)
* [Mailgun](../../../app-nodes/n8n-nodes-base.mailgun.md)
* [Mattermost](../../../app-nodes/n8n-nodes-base.mattermost.md)
* [Mautic](../../../app-nodes/n8n-nodes-base.mautic.md)
* [Medium](../../../app-nodes/n8n-nodes-base.medium.md)
* [Microsoft Excel (OneDrive)](../../../app-nodes/n8n-nodes-base.microsoftexcel.md)
* [Microsoft OneDrive](../../../app-nodes/n8n-nodes-base.microsoftonedrive.md)
* [Microsoft Outlook](../../../app-nodes/n8n-nodes-base.microsoftoutlook.md)
* [Microsoft SQL](../../../app-nodes/n8n-nodes-base.microsoftsql.md)
* [Microsoft Teams](../../../app-nodes/n8n-nodes-base.microsoftteams.md)
* [Microsoft To Do](../../../app-nodes/n8n-nodes-base.microsofttodo.md)
* [Monday.com](../../../app-nodes/n8n-nodes-base.mondaycom.md)
* [MongoDB](../../../app-nodes/n8n-nodes-base.mongodb.md)
* [MQTT](../../../app-nodes/n8n-nodes-base.mqtt.md)
* [MySQL](../../../app-nodes/n8n-nodes-base.mysql/README.md)
* [NASA](../../../app-nodes/n8n-nodes-base.nasa.md)
* [Nextcloud](../../../app-nodes/n8n-nodes-base.nextcloud.md)
* [NocoDB](../../../app-nodes/n8n-nodes-base.nocodb.md)
* [Notion](../../../app-nodes/n8n-nodes-base.notion/README.md)
* [Odoo](../../../app-nodes/n8n-nodes-base.odoo.md)
* [OpenWeatherMap](../../../app-nodes/n8n-nodes-base.openweathermap.md)
* [Pipedrive](../../../app-nodes/n8n-nodes-base.pipedrive.md)
* [Postgres](../../../app-nodes/n8n-nodes-base.postgres/README.md)
* [Pushover](../../../app-nodes/n8n-nodes-base.pushover.md)
* [QuickBooks Online](../../../app-nodes/n8n-nodes-base.quickbooks.md)
* [QuickChart](../../../app-nodes/n8n-nodes-base.quickchart.md)
* [RabbitMQ](../../../app-nodes/n8n-nodes-base.rabbitmq.md)
* [Reddit](../../../app-nodes/n8n-nodes-base.reddit.md)
* [Redis](../../../app-nodes/n8n-nodes-base.redis.md)
* [RocketChat](../../../app-nodes/n8n-nodes-base.rocketchat.md)
* [S3](../../../app-nodes/n8n-nodes-base.s3.md)
* [Salesforce](../../../app-nodes/n8n-nodes-base.salesforce.md)
* [Send Email](../../../core-nodes/n8n-nodes-base.sendemail.md)
* [SendGrid](../../../app-nodes/n8n-nodes-base.sendgrid.md)
* [SerpApi (Google Search)](../../sub-nodes/n8n-nodes-langchain.toolserpapi.md)
* [Shopify](../../../app-nodes/n8n-nodes-base.shopify.md)
* [Slack](../../../app-nodes/n8n-nodes-base.slack/README.md)
* [Spotify](../../../app-nodes/n8n-nodes-base.spotify.md)
* [Stripe](../../../app-nodes/n8n-nodes-base.stripe.md)
* [Supabase](../../../app-nodes/n8n-nodes-base.supabase/README.md)
* [Telegram](../../../app-nodes/n8n-nodes-base.telegram/README.md)
* [Todoist](../../../app-nodes/n8n-nodes-base.todoist.md)
* [TOTP](../../../core-nodes/n8n-nodes-base.totp.md)
* [Trello](../../../app-nodes/n8n-nodes-base.trello.md)
* [Twilio](../../../app-nodes/n8n-nodes-base.twilio.md)
* [urlscan.io](../../../app-nodes/n8n-nodes-base.urlscanio.md)
* [Vector Store](../../sub-nodes/n8n-nodes-langchain.toolvectorstore.md)
* [Webflow](../../../app-nodes/n8n-nodes-base.webflow.md)
* [Wikipedia](../../sub-nodes/n8n-nodes-langchain.toolwikipedia.md)
* [Wolfram|Alpha](../../sub-nodes/n8n-nodes-langchain.toolwolframalpha.md)
* [WooCommerce](../../../app-nodes/n8n-nodes-base.woocommerce.md)
* [Wordpress](../../../app-nodes/n8n-nodes-base.wordpress.md)
* [X (Formerly Twitter)](../../../app-nodes/n8n-nodes-base.twitter.md)
* [YouTube](../../../app-nodes/n8n-nodes-base.youtube.md)
* [Zendesk](../../../app-nodes/n8n-nodes-base.zendesk.md)
* [Zoho CRM](../../../app-nodes/n8n-nodes-base.zohocrm.md)
* [Zoom](../../../app-nodes/n8n-nodes-base.zoom.md)

</details>

## 节点参数（Node parameters）

使用以下参数配置 Tools Agent。

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

### Require Specific Output Format（要求特定输出格式）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/IsHMhvgDA3Ok5qdqnHnJ/" %}

## 节点选项（Node options）

使用以下选项来微调 Tools Agent 节点的行为：

### System Message（系统消息）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ci5NMdJiVoyT9dtdTE9w/" %}

### Max Iterations（最大迭代次数）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8UflrA3Nx8LD5bKQn8Xc/" %}

### Return Intermediate Steps（返回中间步骤）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/skA96E8hAnMMKG7c4Lta/" %}

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

### Automatically Passthrough Binary Images（自动透传二进制图片）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/2rKQZnqDH1pc3xlyYYdX/" %}

### Enable Streaming（启用流式输出）

启用后，AI Agent 会在生成答案的过程中实时把数据返回给用户。这对于长时间运行的内容生成很有用。默认是开启的。

{% hint style="info" %}
**流式输出的要求（Streaming requirements）**

要让流式输出生效，你的工作流必须使用支持流式响应的触发器，例如 [Chat Trigger（聊天触发器）](../../../core-nodes/n8n-nodes-langchain.chattrigger/README.md) 或把 **Response Mode（响应模式）** 设置为 **Streaming（流式）** 的 [Webhook](../../../core-nodes/n8n-nodes-base.webhook/README.md) 节点。
{% endhint %}

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](./README.md#templates-and-examples) 部分。

## 使用 `$fromAI()` 为工具设置动态参数（Dynamic parameters for tools with `$fromAI()`）

想了解如何为应用节点（app node）工具动态填充参数，请参考 [让 AI 用 `$fromAI()` 指定工具参数](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/use-ai-for-parameters)。

## 工具调用的人工审核（Human review for tool calls）

你可以要求在 AI Agent 执行特定工具之前先经过人工批准。这对于执行敏感操作的工具（比如发消息、修改记录、删除数据）很有用。

要添加人工审核步骤：

1. 点击 AI Agent 节点上的工具（tool）连接器。
2. 在「Tools Panel（工具面板）」中找到 **Human review（人工审核）** 部分。
3. 选择你喜欢的审批渠道（Chat、Slack、Telegram 等）并进行配置。
4. 把需要审批的工具连接到人工审核步骤上。

当 AI 想要使用一个受控（gated）工具时，工作流会暂停，并通过你选择的渠道发送一条审批请求。接收方可以「批准」（工具执行）或「拒绝」（操作取消）。

详细的设置步骤和最佳实践，请参考 [AI 工具调用的人工介入（Human-in-the-loop）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/human-in-the-loop-for-tools)。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。

[^1]: 在 AI 语境下，工具（tool）是一种附加资源，AI 在响应请求时可以借助它获取特定信息或实现特定功能。AI 模型可以使用工具来与外部系统交互，或完成特定、聚焦的任务。
