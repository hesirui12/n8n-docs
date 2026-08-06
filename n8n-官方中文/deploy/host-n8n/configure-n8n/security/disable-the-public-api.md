---
title: 禁用公共 REST API
description: 禁用 n8n 的公共 REST API，以防止他人使用它。
contentType: howto
nodeTitle: 禁用公共 API
originalFilePath: hosting/securing/disable-public-api.md
originalUrl: 'https://docs.n8n.io/hosting/securing/disable-public-api'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/disable-the-public-api
layout:
  description:
    visible: false
---

# 禁用公共 REST API / Disable the public REST API

[n8n 公共 REST API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api) 允许你以编程方式（programmatically）执行许多与在 n8n 图形界面（GUI）中相同的操作。

如果你不打算使用这个 API，n8n 建议将其禁用，以提高你 n8n 安装的安全性。

{% hint style="info" %}
**大白话**：n8n 除了有网页界面可以点点鼠标操作外，还开放了一个「程序员专用」的接口（API）。有了它，外部程序可以通过 HTTP 请求来创建工作流、启停工作流、查看执行记录等——相当于把 n8n 的所有功能变成了可以远程调用的接口。这个接口很方便，但也意味着**多了一个被攻击的面**：任何人（或机器人）只要拿到有效的 API 密钥，或者接口本身有漏洞，就可能操作你的 n8n。如果你用不到这个功能，关掉它是最安全的做法——用不到的东西就不要开着。
{% endhint %}

要禁用[公共 REST API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)，请将 `N8N_PUBLIC_API_DISABLED` 环境变量设置为 `true`，例如：

```bash
export N8N_PUBLIC_API_DISABLED=true
```

{% hint style="info" %}
**大白话**：`export` 是 Linux/macOS 终端里设置环境变量的命令（在 Windows 上用 `set`，或者直接写进 Docker / `.env` 配置文件）。设成 `true` 后重启 n8n，公共 API 就关了，外部再访问 API 地址会得到 404 之类的错误。注意：这个开关只关「公共 API」，不影响 n8n 网页界面本身的正常使用。
{% endhint %}

## 禁用 API 沙盒 / Disable the API playground

要禁用 [API 沙盒（API playground）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/use-an-api-playground)，请将 `N8N_PUBLIC_API_SWAGGERUI_DISABLED` 环境变量设置为 `true`，例如：

```bash
export N8N_PUBLIC_API_SWAGGERUI_DISABLED=true
```

{% hint style="info" %}
**大白话**：API 沙盒（也叫 Swagger UI）是一个**网页版的 API 测试页面**——打开它就能直接在浏览器里试 API、发请求，不需要写代码。它本身没有鉴权门槛，暴露出来等于把 API 文档和测试工具白白送给陌生人，方便他们研究怎么攻击你的实例。所以即使你保留了公共 API，也建议把这个调试页面关掉（或者两个都关）。`SWAGGERUI` 就是 Swagger UI（一个流行的 API 文档工具）的名字。
{% endhint %}

## 相关资源 / Related resources

关于这些环境变量的更多信息，请参阅[部署环境变量](../basic-configuration/use-environment-variables/deployment.md)。

关于如何设置环境变量，请参阅[配置](../basic-configuration.md)。
