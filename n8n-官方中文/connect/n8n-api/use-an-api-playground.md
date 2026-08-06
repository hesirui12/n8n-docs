---
description: 如何使用 API 试验场来试用 n8n 的公开 REST API。
contentType: howto
nodeTitle: 使用 API 试验场
originalFilePath: api/using-api-playground.md
originalUrl: 'https://docs.n8n.io/api/using-api-playground'
url: 'https://docs.n8n.io/connect/n8n-api/use-an-api-playground'
layout:
  description:
    visible: false
---

# 使用 API 试验场（playground）

这个文档网站提供了一个试验场，用来测试 API 调用。自托管用户还可以访问内置于其实例中的试验场。

{% hint style="info" %}
**小白提示**：试验场 = 「不用写代码的 API 试玩界面」。你在网页上填参数、点按钮，它帮你生成并发出真实的 API 请求，让你直观地看到每个端点（endpoint）返回什么。适合学习 API 和排查问题。
{% endhint %}

## 文档试验场（Documentation playground）

你可以从本站的[端点参考（endpoint reference）](api-reference.md)测试 API 调用。你需要设置你的服务器基础 URL 和实例名称，并添加一个 API 密钥。

n8n 使用 [Scalar](https://github.com/scalar/scalar) 的开源 API 平台来驱动这个功能。

{% hint style="warning" %}
**暴露的 API 密钥和数据**

使用试验场时，请使用权限范围受限的测试 API 密钥和测试数据。试验场中的所有调用都会通过 Scalar 的代理服务器路由。
{% endhint %}

{% hint style="warning" %}
**真实数据**

你可以访问自己的真实数据。这对于尝试请求很有用。但请注意：你可能会更改或删除真实数据。
{% endhint %}

{% hint style="info" %}
**小白提示**：两条警告的重点——① 在网页版试验场里填的 API 密钥会经过第三方（Scalar）的服务器中转，所以**只用测试密钥**；② 试验场直连你的真实实例，随便点几下「删除」就可能真的删掉数据，测试前先想清楚。
{% endhint %}

## 内置试验场（Built-in playground）

{% hint style="info" %}
**功能可用性（Feature availability）**

API 试验场在 Cloud 上不可用。所有自托管定价层级都可用。
{% endhint %}

自托管版本的 n8n API 自带一个内置的 Swagger UI 试验场。它提供交互式文档，你可以在这里尝试请求。访问试验场的路径取决于你的托管方式。

n8n 根据你在环境变量中设置的值来构造路径：

```shell
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/docs
```

API 版本号是 `1`。将来可能会有多个可用版本。

{% hint style="warning" %}
**真实数据**

如果你在 API 试验场中选择 **Authorize（授权）** 并输入你的 API 密钥，你就可以访问自己的真实数据。这对于尝试请求很有用。但请注意：你可能会更改或删除真实数据。
{% endhint %}

API 包含关于凭据格式的内置文档。你可以使用 `credentials` 端点访问它：

```shell
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/credentials/schema/{credentialTypeName}
```

{% hint style="info" %}
**如何找到 `credentialTypeName`**

要找到类型名，请把你的工作流下载为 JSON 并检查它。例如，对于 Google Drive 节点，`{credentialTypeName}` 是 `googleDriveOAuth2Api`：
```json
{
    ...,
    "credentials": {
        "googleDriveOAuth2Api": {
        "id": "9",
        "name": "Google Drive"
        }
    }
}
```
{% endhint %}

{% hint style="info" %}
**小白提示**：`credentialTypeName` 就是凭据的「类型代码」，藏在工作流 JSON 的 `credentials` 对象里。把工作流导出成 JSON、搜一下节点名，就能看到它对应的凭据类型代码。用这个代码替换掉 URL 里的 `{credentialTypeName}`，就能查看该类型凭据的字段结构。
{% endhint %}
