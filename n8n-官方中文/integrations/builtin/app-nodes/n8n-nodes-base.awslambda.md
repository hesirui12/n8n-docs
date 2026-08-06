---
title: AWS Lambda 节点文档
description: >-
  学习如何在 n8n 中使用 AWS Lambda 节点。按照技术文档将 AWS Lambda
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Lambda 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awslambda.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awslambda'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awslambda'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS Lambda 是 AWS 的「无服务器函数」服务：你上传一小段代码（函数），它负责运行，用多少算多少。这个节点的用途只有一个：调用（invoke）一个 Lambda 函数。典型场景：n8n 处理完数据后，把数据传给 Lambda 函数做进一步加工，或者反过来让 Lambda 的结果回到工作流里继续用。
{% endhint %}

# AWS Lambda 节点

使用 AWS Lambda 节点来自动化你在 AWS Lambda 中的工作，并把它与其它应用集成。n8n 内置支持 AWS Lambda 的调用函数功能。

在本页你可以看到 AWS Lambda 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AWS Lambda 凭证](../credentials/aws.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Invoke a function（调用一个函数）

## 模板与示例

[浏览 AWS Lambda 节点的官方集成模板](https://n8n.io/integrations/aws-lambda)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
