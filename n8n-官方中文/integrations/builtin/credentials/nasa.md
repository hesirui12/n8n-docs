---
title: NASA 凭证
description: >-
  NASA 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  NASA 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: NASA credentials
originalFilePath: integrations/builtin/credentials/nasa.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/nasa'
url: 'https://docs.n8n.io/integrations/builtin/credentials/nasa'
layout:
  description:
    visible: false
---

# NASA 凭证

{% hint style="info" %}
**大白话**：没错，就是美国宇航局 NASA！它开放了一批免费 API（比如每日天文图片 APOD、小行星数据等）。n8n 想调用这些 NASA 接口，只需要去 NASA 开放 API 页面填个简单的表单（邮箱等），就能免费生成一个 **API Key（API 密钥）** 填进来。个人测试用完全免费。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [NASA](../app-nodes/n8n-nodes-base.nasa.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [NASA Open APIs（NASA 开放 API）](https://api.nasa.gov/) 页面里的 **Browse APIs（浏览 API）** 部分。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**

生成 API key 的步骤：

1. 打开 [NASA Open APIs](https://api.nasa.gov/) 页面。
2. 填写 **Generate API Key（生成 API 密钥）** 区域里的字段。
3. 复制 **API Key（API 密钥）**，填到你的 n8n 凭证里。
