---
title: HTTP Request 节点常见问题
description: >-
  n8n（工作流自动化平台）中 HTTP Request 节点的常见问题文档。包含问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: HTTP Request node common issues
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues
layout:
  description:
    visible: false
---

# HTTP Request 节点常见问题

{% hint style="info" %}
**大白话**：这一页收集了用 HTTP Request 节点时最常见的报错和问题，比如「400 参数不对」「连接被拒绝」「JSON 格式错了」「403 认证失败」「429 请求太频繁」等。每一条都告诉你：这个错是什么意思、通常是什么原因、怎么一步步解决。遇到报错先来这页对号入座。
{% endhint %}

以下是一些使用 [HTTP Request 节点](README.md) 时常见的错误和问题，以及解决或排查它们的步骤。

## Bad request - please check your parameters（错误请求——请检查你的参数）

当节点收到表示「错误请求」的 400 错误时，会显示这个错误。这个错误最常见的原因是：

* 你在 **Query Parameter（查询参数）** 中使用了无效的名称或值。
* 你在 **Query Parameter（查询参数）** 中传入了数组值，但数组的格式不正确。试着使用 [**Array Format in Query Parameters（查询参数中的数组格式）**](README.md#array-format-in-query-parameters) 选项。

查阅你所使用服务的 API 文档，了解如何正确格式化查询参数。


## The resource you are requesting could not be found（你请求的资源找不到）

当你输入的端点 **URL** 无效时，会显示这个错误。

这可能是因为 URL 中有拼写错误，或者 API 已经弃用。请查阅你所使用服务的 API 文档，确认你的端点是否有效。


## Connection refused (ECONNREFUSED)（连接被拒绝）

当节点到达了网络上的某个主机，但目标端口没有监听程序时，会显示这个错误。TCP 连接被主动拒绝。这不是 DNS 失败、超时，也不是防火墙拦截。

在自托管（self-hosted）的 n8n 上，最常见的原因是 Docker 网络问题。在 n8n 容器内部，`localhost` 和 `127.0.0.1` 指向的是容器本身，而不是宿主机。节点发往 `http://localhost:5000` 的请求会落到 n8n 容器的 5000 端口上，而那里没有任何东西在监听。

要解决这个问题，请用一个容器可以路由到的名称来访问目标：

* **目标在宿主机上，使用 Docker Desktop（Mac 或 Windows）**：在 **URL** 字段中使用 `http://host.docker.internal:<port>`。Docker Desktop 会自动添加这个主机名。
* **目标在宿主机上，使用 Linux**：给容器传 `--add-host=host.docker.internal:host-gateway` 参数，或者在 `docker-compose.yml` 中设置 `extra_hosts`：
    ```yaml
    services:
      n8n:
        image: docker.n8n.io/n8nio/n8n
        extra_hosts:
          - "host.docker.internal:host-gateway"
    ```
    [MySQL 节点](../../app-nodes/n8n-nodes-base.mysql/common-issues.md#cant-connect-to-a-local-mysql-server-when-using-docker) 的文档中也记载了同样的修复方法。
* **目标在同一个 Compose 栈中的另一个容器里**：使用服务名作为主机名，例如 `http://my-api:5000`。请引用容器的内部端口，而不是对外发布的 `ports:` 映射。

在 Node.js 17 及以上版本还有一个独立的原因，即使在 Docker 之外也会出现：`localhost` 会先解析到 IPv6 地址 `::1`，然后才是 `127.0.0.1`。如果目标只绑定到 `127.0.0.1`，IPv6 的尝试会被拒绝，而回退到 IPv4 的尝试在 HTTP Request 节点内并不总是能成功。

请在 **URL** 字段中使用 `http://127.0.0.1:<port>`，而不是 `localhost`。

在重新运行工作流之前，要验证修复是否有效，可以进入 n8n 容器，用 `wget` 试试这个 URL：

```sh
docker exec -it n8n wget -qO- http://host.docker.internal:5000/health
```

如果容器内的 `wget` 成功了，HTTP Request 节点也会成功。如果 `wget` 也返回「connection refused」（连接被拒绝），那问题出在网络或目标服务上，而不是 n8n。

在 n8n Cloud 上，工作流运行在 n8n 的基础设施上。那里没有 `localhost`，也没有通向你机器上某个服务的路径。请通过隧道暴露仅本机可访问的目标，并在 HTTP Request 节点中使用公开的 URL。

## JSON parameter need to be an valid JSON（JSON 参数必须是有效的 JSON）

当你以 JSON 形式传入参数，但它不是有效的 JSON 格式时，会显示这个错误。

要解决这个问题，请检查你输入的 JSON 是否存在以下问题：

* 在 JSON 检查器或语法解析器中测试你的 JSON，找出错误，比如缺少引号、多余或缺少逗号、数组格式不正确、方括号或花括号多余或缺失等。
* 如果你在节点中使用了**表达式（Expression）**，请确保你把整个 JSON 用双花括号包起来，例如：
    ```
    {{
        {
        "myjson":
        {
            "name1": "value1",
            "name2": "value2",
            "array1":
                ["value1","value2"]
        }
        }
    }}
    ```

## Forbidden - perhaps check your credentials（禁止访问——也许该检查你的凭据）

当节点收到表示「认证失败」的 403 错误时，会显示这个错误。

要解决这个问题，请检查你选择的凭据，确保你可以用它们完成认证。你可能需要：

* 更新权限或作用域，让你的 API 密钥或账号能够执行你选择的操作。
* 用不同的方式格式化你的通用凭据。
* 生成一个具有适当权限或作用域的新 API 密钥或令牌。

## 429 - The service is receiving too many requests from you（429——服务正在接收太多来自你的请求）

当节点收到所调用服务返回的 [429 错误](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) 时，会显示这个错误。这通常意味着你已经达到了该服务的速率限制。你可以在 [处理 API 速率限制（Handling API rate limits）](../../handle-rate-limits.md) 页面上了解更多。

要解决这个错误，你可以使用 HTTP Request 节点的内置选项之一：

### Batching（批处理）

使用这个选项分批发送请求，并在批次之间引入延迟。

1. 在 HTTP Request 节点中，选择 **Add Option > Batching（添加选项 > 批处理）**。
1. 把 **Items per Batch（每批项目数）** 设置为每个请求中要包含的输入项目数量。
1. 把 **Batch Interval (ms)（批处理间隔毫秒数）** 设置为请求之间的延迟毫秒数。例如，要每秒向某个 API 发送一个请求，就把 **Batch Interval (ms)** 设置为 `1000`。

### Retry on Fail（失败重试）

使用这个选项在失败后重试节点。

1. 在 HTTP Request 节点中，进入 **Settings（设置）** 并打开 **Retry on Fail（失败重试）**。
1. 把 **Max Tries（最大尝试次数）** 设置为 n8n 应该重试节点的最大次数。
1. 把 **Wait Between Tries (ms)（重试间隔毫秒数）** 设置为重试之间想要的延迟毫秒数。例如，要在重试前等待 1 秒，就把 **Wait Between Tries (ms)** 设置为 `1000`。
