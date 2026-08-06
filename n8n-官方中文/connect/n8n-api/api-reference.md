---
description: n8n 公开 REST API 的端点参考，由 OpenAPI 规范生成。
contentType: reference
nodeTitle: 端点参考
originalFilePath: api/api-reference.md
originalUrl: 'https://docs.n8n.io/api/api-reference'
url: 'https://docs.n8n.io/connect/n8n-api/api-reference'
layout:
  description:
    visible: false
---

# 端点参考（Endpoint reference）

本节是 n8n 公开 REST API 的完整端点参考，由 OpenAPI 规范生成。用它来探索每一个可用的操作，并查看参数、请求体和响应 schema。

{% hint style="info" %}
**功能可用性（Feature availability）**

免费试用期间不提供 n8n API。请升级后使用该功能。
{% endhint %}

{% hint style="info" %}
**小白提示**：OpenAPI 是描述「一个 API 长什么样」的行业标准格式。n8n 把每个接口（端点）的参数、返回格式都按这个标准写好了，文档站再把它渲染成可浏览的页面。你在左侧边栏点开任意资源（工作流、执行、凭据等），就能看到该资源下所有接口的说明。
{% endhint %}

## 开始之前（Before you start）

* **认证（Authenticate）**：每个请求都需要 API 密钥。参阅[认证（Authentication）](authentication.md)。
* **设置你的基础 URL（Set your base URL）**：
    * n8n Cloud：`https://<your-instance>.app.n8n.cloud/api/v1`
    * 自托管：`https://<your-domain>/api/v1`
* **对大型结果集分页（Paginate）**。参阅[分页（Pagination）](pagination.md)。

## 浏览端点（Browse the endpoints）

端点在左侧边栏中按资源分组，位于 **n8n API** 下：工作流（Workflow）、执行（Execution）、凭据（Credential）、用户（User）、审计（Audit）、标签（Tags）、源代码控制（Source Control）、变量（Variables）、数据表（Data Table）、项目（Projects）等。每个页面都记录了该资源的操作和 schema。

{% hint style="info" %}
**安全地尝试 API（Try the API safely）**

要试验实时调用，请使用[内置 API 试验场](use-an-api-playground.md)（仅限自托管 n8n），或者把请求指向测试工作流或测试实例。
{% endhint %}
