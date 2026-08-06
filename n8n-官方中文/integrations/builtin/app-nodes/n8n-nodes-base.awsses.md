---
title: AWS SES 节点文档
description: 学习如何在 n8n 中使用 AWS SES 节点。按照技术文档将 AWS SES 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS SES 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awsses.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsses'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsses'
layout:
  description:
    visible: false
---

# AWS SES 节点

> 💡 **大白话**：AWS SES 是亚马逊的「邮件发送服务」，专门用来批量发邮件。用这个节点，你可以在 n8n 里自动发邮件、发模板邮件，还能管理邮件模板和收件人身份，不用自己写代码。

使用 AWS SES 节点自动化 AWS SES 中的工作，并将 AWS SES 与其他应用集成。n8n 内置支持大量 AWS SES 功能，包括创建、获取、删除、发送、更新和添加模板与邮件。

本页列出了 AWS SES 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [AWS SES 凭据](../credentials/aws.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作（Operations）

* Custom Verification Email（自定义验证邮件）
    * Create a new custom verification email template（创建新的自定义验证邮件模板）
    * Delete an existing custom verification email template（删除已有的自定义验证邮件模板）
    * Get the custom email verification template（获取自定义验证邮件模板）
    * Get all the existing custom verification email templates for your account（获取你的账号下所有已有的自定义验证邮件模板）
    * Add an email address to the list of identities（把邮箱地址添加到身份列表中）
    * Update an existing custom verification email template（更新已有的自定义验证邮件模板）
* Email（邮件）
    * Send（发送邮件）
    * Send Template（发送模板邮件）
* Template（模板）
    * Create a template（创建模板）
    * Delete a template（删除模板）
    * Get a template（获取模板）
    * Get all templates（获取所有模板）
    * Update a template（更新模板）

## 模板和示例（Templates and examples）

[浏览 AWS SES 节点文档集成模板](https://n8n.io/integrations/aws-ses) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
