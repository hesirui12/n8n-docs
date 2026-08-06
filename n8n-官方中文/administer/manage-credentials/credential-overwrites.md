---
title: 凭证覆盖（Credential overwrites）
description: >-
  在自托管的 n8n 实例上全局设置凭证数据，让用户无需看到或输入客户端密钥（client secrets）
  也能完成身份验证。
contentType: howto
nodeTitle: 凭证覆盖（Credential overwrites）
originalFilePath: hosting/configuration/credential-overwrites.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/credential-overwrites'
url: 'https://docs.n8n.io/administer/manage-credentials/credential-overwrites'
layout:
  description:
    visible: false
---

# 凭证覆盖（Credential overwrites）

凭证覆盖（credential overwrites）功能允许你**全局地设置凭证数据**。这些数据对用户**不可见**，但 n8n 会在后台**自动使用**它们——例如，用它来启用「Connect（连接）」按钮的 OAuth 登录，而无需把客户端密钥（client secrets）暴露给用户。

在编辑器界面（Editor UI）中，n8n 默认会**隐藏所有被覆盖的字段**，所以用户可以直接点击凭证上的「Connect（连接）」按钮，用 OAuth 完成身份验证。

{% hint style="info" %}
**大白话**：可以把这个功能理解为「后台管理员统一保管的钥匙串」。管理员把各个服务的客户端 ID 和密钥统一放在后台（通过环境变量或 REST API 方式传入），普通用户在前台看不到、也填不了这些信息，只需要点一下「Connect」按钮就能完成授权。这样既省事，又不用把敏感信息发给每个用户。
{% endhint %}

关于配置凭证覆盖所使用的环境变量，请参考 [Credentials environment variables（凭证环境变量）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/credentials)（GitBook 外部链接）。

## 使用环境变量 / Using environment variables

将 `CREDENTIALS_OVERWRITE_DATA` 设置为 `{ CREDENTIAL_NAME: { PARAMETER: VALUE }}`（即「凭证名称: { 参数: 值 }」的格式）。

{% hint style="warning" %}
**不推荐这种做法。** 环境变量在 n8n 中并没有受到保护，数据可能会泄露给用户。
{% endhint %}

{% hint style="info" %}
**大白话（为什么环境变量不安全）**：环境变量通常由服务器进程持有，任何能读取服务器环境的人（或在某些情况下能读取进程信息的用户）都可能看到里面的明文内容。而且这些值一旦写进环境变量，n8n 无法区分「谁该看、谁不该看」，所以存在泄露风险。安全起见，官方更推荐用下面的 REST API 方式。
{% endhint %}

## 使用 REST API / Using the REST API

**推荐的做法**是通过自定义 REST 端点（endpoint）来加载数据。

1. 将 `CREDENTIALS_OVERWRITE_ENDPOINT` 设置为该端点要使用的路径：<br>

    ```sh
    export CREDENTIALS_OVERWRITE_ENDPOINT=send-credentials
    ```

    可选：设置 `CREDENTIALS_OVERWRITE_ENDPOINT_AUTH_TOKEN`，要求访问该端点时必须携带一个 bearer token（持有者令牌）。

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>如果没有设置 auth token（认证令牌），出于安全原因，该端点**只能被调用一次**。</p></div>

2. 准备一个包含要覆盖的凭证的 JSON 文件。例如，为 Asana 和 GitHub 准备 `oauth-credentials.json`：

    ```json
    {
        "asanaOAuth2Api": {
            "clientId": "<id>",
            "clientSecret": "<secret>"
        },
        "githubOAuth2Api": {
            "clientId": "<id>",
            "clientSecret": "<secret>"
        }
    }
    ```

3. 把这个文件发送给你的 n8n 实例：

    ```sh
    curl -H "Content-Type: application/json" --data @oauth-credentials.json http://localhost:5678/send-credentials
    ```

    如果 `CREDENTIALS_OVERWRITE_ENDPOINT_AUTH_TOKEN` 被设置为 `secure-token`：

    ```sh
    curl -H "Content-Type: application/json" -H "Authorization: Bearer secure-token" --data @oauth-credentials.json http://localhost:5678/send-credentials
    ```

{% hint style="info" %}
**大白话（上面的命令在做什么）**：第 1 步先「开了一个后台入口」（端点），路径叫 `send-credentials`；第 2 步把要注入的凭证写成 JSON 文件（文件里每个服务一项，包含 clientId 和 clientSecret）；第 3 步用 `curl` 命令把文件内容「POST 送进」n8n 的后台入口（`--data @文件` 表示从文件读取数据）。如果设置了令牌，就要在请求头 `Authorization` 里带上它，相当于进门要出示「门禁卡」。
{% endhint %}

{% hint style="info" %}
凭证可以**继承/扩展**其他凭证。例如，`googleSheetsOAuth2Api`（谷歌表格 OAuth2）就继承了 `googleOAuth2Api`（谷歌 OAuth2）。你可以在父凭证（如 `googleOAuth2Api`）上设置参数，所有子凭证都会自动使用这些参数。
{% endhint %}

{% hint style="info" %}
**大白话（继承是什么意思）**：很多谷歌系的服务（表格、日历、Gmail 等）底层用的都是同一套谷歌 OAuth 应用。与其每个服务都填一遍相同的 clientId/clientSecret，不如只在父凭证（`googleOAuth2Api`）里填一次，子凭证自动「继承」过去，省事也减少填错的机会。
{% endhint %}

## 持久化（Persistence）

要把凭证覆盖数据**存储到数据库中**，并在多实例（multi-instance）或队列（queue）模式下传播给所有 worker（工作进程），请启用：

```sh
export CREDENTIALS_OVERWRITE_PERSISTENCE=true
```

启用后，n8n 会把加密后的覆盖数据存储在数据库的 `settings` 表中，并广播一个 `reload-overwrite-credentials`（重新加载覆盖凭证）事件，让所有 worker 重新加载最新的值。如果未启用，覆盖数据只会**留在加载它的那个进程的内存里**，n8n 不会把它传播给其他 worker，重启后数据也会丢失。

{% hint style="info" %}
**大白话（什么时候需要开启持久化）**：如果你只是单机单进程跑 n8n，不开启也能用。但如果你用了「多实例」或「队列」模式（多个 n8n 进程/机器协同工作），某个进程加载的覆盖数据其他进程并不知道，就会出现「有的请求用了新密钥、有的还在用旧密钥」的混乱。开启持久化后，数据统一存数据库，所有 worker 都会同步，重启也不丢。
{% endhint %}
