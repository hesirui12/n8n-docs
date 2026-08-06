---
title: 前置条件（Prerequisites）
description: >-
  面向 n8n OEM 部署的基础设施规模规划指南和部署最佳实践。
contentType: explanation
nodeTitle: 前置条件（Prerequisites）
originalFilePath: hosting/oem-deployment/prerequisites.md
originalUrl: 'https://docs.n8n.io/hosting/oem-deployment/prerequisites'
url: 'https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/prerequisites'
layout:
  description:
    visible: false
---

# 前置条件（Prerequisites）

这里提供的配置要求是基于 n8n Cloud 的示例，仅用于说明目的。你的实际需求可能因用户数量、工作流数量和执行次数的不同而变化。如需更多信息，请联系 n8n。

| 组件 | 规格 | 支持的环境 |
| :-------- | :----- | :-------- |
| CPU/vCPU  | 最低 10 个 CPU 周期，可按需扩展 | 任意公有云或私有云 |
| 数据库  | 512 MB - 4 GB SSD | SQLite 或 PostgreSQL |
| 内存    | 320 MB - 2 GB | |

## CPU 注意事项（CPU considerations）

n8n 对 CPU 的要求不高，因此即使是（AWS、GCP 等云服务商的）小型实例，对大多数使用场景来说也足够了。通常，内存需求比 CPU 需求更重要，所以在规划基础设施时，应把资源重点放在内存上。

## 数据库注意事项（Database considerations）

n8n 使用数据库来存储凭据[^1]、历史执行记录和工作流。

n8n 的一个核心特性是你可以灵活选择数据库。所有受支持的数据库都有各自的优缺点，你需要逐一权衡，选择最适合自己需求的方案。默认情况下，如果在指定位置不存在数据库，n8n 会创建一个 SQLite 数据库。

n8n 建议每个 n8n 实例都使用专用数据库。这有助于避免依赖关系和潜在的性能下降。如果无法为每个 n8n 实例提供专用数据库，n8n 建议利用 Postgres 的 schema（模式）功能。

对于 Postgres，数据库必须已经存在于数据库实例中。运行 n8n 进程的数据库用户需要对其使用或创建的所有表拥有完整权限。n8n 会负责创建和维护数据库 schema。

### 最佳实践（Best practices）

* 使用 SSD 存储。
* 在容器化的云环境中，确保卷（volume）在容器停止/启动时被持久化并正确挂载。否则，所有数据都会丢失。
* 如果使用 Postgres，不要使用 `tablePrefix` 配置选项。它很快会被弃用。
* 关注新版本的变更日志（changelog），在降级前考虑先回退迁移（migrations）。
* 至少配置基础的数据库安全和稳定性机制，例如 IP 白名单和备份。

## 内存注意事项（Memory considerations）

一个 n8n 实例通常不需要大量可用内存。例如，n8n Cloud 实例空闲时大约需要 100MB 内存。真正决定内存需求的是你工作流的性质以及所处理的数据量。

例如，大多数节点只是把数据传给工作流中的下一个节点，但 [Code 节点（Code node）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/using-the-code-node) 会创建数据的前处理和后处理副本。当处理较大的二进制文件时，这可能会耗尽所有可用资源。

## 部署建议（Deployment recommendations）

详细的部署选项请参见[托管文档（hosting documentation）](../install-options/use-a-cloud-provider/README.md)。

### 用户数据（User data）

n8n 建议你遵循 n8n Cloud 内部使用的相同或类似的做法：使用 [Rook](https://rook.io/) 保存用户数据，如果某台 n8n 服务器宕机，会在另一台机器上用相同的数据启动新实例。

因此，除了灾难性故障，或者用户希望在规定的保留期内（n8n Cloud 是两周）重新激活账号之外，你通常不需要使用备份。

### 备份（Backups）

n8n 建议通过挂载另一个容器来创建每日备份，把所有数据复制到这个第二个容器中。这样，RAM 的占用可以忽略不计，不会影响你可以在服务器上承载的用户数量。

### 重启（Restarting）

如果你的实例宕机或正在重启，此期间错过的执行（例如 Cron 或 Webhook 节点触发的执行）无法恢复。如果 100% 的正常运行时间对你很重要，你需要在它前面再搭一个能缓存数据的代理。

{% hint style="info" %}
**小白提示**：一句话总结这套规格——n8n 本身很"轻"，2GB 内存、几 GB 的 SSD 就能跑得很好；真正吃资源的是你的工作流在干的事（比如处理大文件、跑 Code 节点）。生产环境牢记三点：数据库要专用、存储要用 SSD 并做好持久化、每天做一次备份。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）存储用于连接特定应用和服务的认证信息。用你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）创建凭据后，就可以使用相应的应用节点与服务交互。
