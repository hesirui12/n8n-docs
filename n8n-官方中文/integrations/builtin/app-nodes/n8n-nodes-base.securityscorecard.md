---
title: SecurityScorecard 节点文档
description: >-
  学习如何在 n8n 中使用 SecurityScorecard 节点。按照技术文档将
  SecurityScorecard 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: SecurityScorecard 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.securityscorecard.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.securityscorecard
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.securityscorecard
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：SecurityScorecard 是一家做「企业安全评分」的公司——给公司的网络安全状况打分（0 到 100 分），像信用评分一样。这个节点可以帮你：查看某家公司的安全评分、历史分数、改进建议，管理投资组合（Portfolio，可以理解为你关注的「公司收藏夹」），生成安全报告等。适合做供应商安全审查、风险管理自动化。
{% endhint %}

# SecurityScorecard 节点

使用 SecurityScorecard 节点来自动化你在 SecurityScorecard 中的工作，并把它与其它应用集成。n8n 内置支持 SecurityScorecard 的大量功能，包括创建、更新、删除、获取投资组合（Portfolio），以及获取公司数据。

在本页你可以看到 SecurityScorecard 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [SecurityScorecard 凭证](../credentials/securityscorecard.md)。
{% endhint %}

## 操作

* Company（公司）
    * Get company factor scores and issue counts（获取公司各项因素评分和问题数量）
    * Get company's historical factor scores（获取公司历史因素评分）
    * Get company's historical scores（获取公司历史总分）
    * Get company information and summary of their scorecard（获取公司信息和其评分卡摘要）
    * Get company's score improvement plan（获取公司分数改进计划）
* Industry（行业）
    * Get Factor Scores（获取因素评分）
    * Get Historical Factor Scores（获取历史因素评分）
    * Get Score（获取评分）
* Invite（邀请）
    * Create an invite for a company/user（为公司或用户创建邀请）
* Portfolio（投资组合）
    * Create a portfolio（创建投资组合）
    * Delete a portfolio（删除投资组合）
    * Get all portfolios（获取全部投资组合）
    * Update a portfolio（更新投资组合）
* Portfolio Company（投资组合中的公司）
    * Add a company to portfolio（把公司添加到投资组合）
    * Get all companies in a portfolio（获取投资组合中的全部公司）
    * Remove a company from portfolio（把公司从投资组合中移除）
* Report（报告）
    * Download a generated report（下载已生成的报告）
    * Generate a report（生成报告）
    * Get list of recently generated report（获取最近生成的报告列表）

## 模板与示例

[浏览 SecurityScorecard 节点的官方集成模板](https://n8n.io/integrations/securityscorecard)，或[搜索全部模板](https://n8n.io/workflows/)。
