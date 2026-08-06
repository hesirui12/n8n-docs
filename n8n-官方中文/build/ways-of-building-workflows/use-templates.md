---
description: Use workflow templates
contentType: howto
nodeTitle: Use templates
originalFilePath: workflows/templates.md
originalUrl: 'https://docs.n8n.io/workflows/templates'
url: 'https://docs.n8n.io/build/ways-of-building-workflows/use-templates'
layout:
  description:
    visible: false
---

# 工作流模板（Workflow templates）

创建新工作流时，你可以选择**从空白工作流开始**，或者**使用一个现成的模板**[^1]。

模板能给你带来这些好处：

* **帮助你快速上手：** n8n 可能已经有现成的模板，正好能满足你的需求，省得从零搭。
* **给你灵感：** 看看别人能构建出什么样的东西，开阔思路。
* **学习最佳实践：** 参考官方和社区的最佳做法，学着创建自己的工作流。

{% hint style="info" %}
**小白解释——什么时候该用模板？**
如果你是新手，或者想快速验证一个想法，直接用模板最省事：选一个接近需求的模板导入，把凭据（账号/密钥等认证信息）填上、按需调整配置，马上就能跑起来。等熟悉了再自己从零搭。
{% endhint %}

## 访问模板（Access templates）

点击 <img src="../.gitbook/assets/templates.png" alt="View templates icon" data-size="line"> **Templates**（模板）按钮，即可打开模板库。

如果你用的是 n8n 官方的模板库，点击后会跳转到 [n8n 网站上的 Workflows（工作流）页面](https://n8n.io/workflows/) 进行浏览。如果你用的是**组织自建的自定义模板库**，则可以直接在 n8n 应用内搜索和浏览这些模板。

## 把你的工作流添加到 n8n 模板库（Add your workflow to the n8n library）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mr8LBJxxxIAFYHNPNKU2/" %}

{% hint style="info" %}
**说明：** 上面这块内容来自 n8n 官方文档的「可复用模块」（Reusable），是教大家如何**把自己的工作流贡献到 n8n 官方模板库**的完整步骤。如果内嵌内容在你的查看器中无法显示，请直接访问原文档对应章节。
{% endhint %}

## 自托管 n8n：使用你自己的模板库（Self-hosted n8n: Use your own library）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8iCj3lLPJNp281ko0uOE/" %}

{% hint style="info" %}
**说明：** 上面这块内容也是来自官方的「可复用模块」，介绍的是**自托管（self-hosted，即你自己部署的 n8n）环境下如何配置并使用自己的模板库**。如果你用的是 n8n Cloud（云端版），可以跳过这一节。
{% endhint %}

[^1]: n8n 模板是由 n8n 官方和社区成员设计好的**预制工作流**，你可以直接导入到自己的 n8n 实例中使用。使用模板时，你可能需要填写凭据（Credentials，即连接外部服务所需的账号/密钥等认证信息），并根据自己的实际需求调整配置。
