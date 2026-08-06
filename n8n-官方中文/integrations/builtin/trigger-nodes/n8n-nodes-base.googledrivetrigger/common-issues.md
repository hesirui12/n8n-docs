---
title: Google Drive Trigger 节点常见问题
description: >-
  n8n 中 Google Drive Trigger（谷歌云端硬盘触发器）节点的常见问题与解答文档。包含问题详情和
  建议的解决方案。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Google Drive Trigger 节点常见问题
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues
layout:
  description:
    visible: false
---

# Google Drive Trigger 节点常见问题

> **大白话**：这一页收集了用 Google Drive Trigger（谷歌云端硬盘触发器）节点时最容易踩的几个坑，以及对应的解决办法。简单说：报 401 是凭证/权限没配好；一次触发返回多条数据时，记得用 If / Switch 节点分流处理。

以下是 [Google Drive Trigger 节点](README.md) 的常见错误和问题，以及排查、解决步骤。


## 401 unauthorized 错误

错误完整内容如下：

```
401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}
```


这个错误说明你使用的凭证（credential）或其 scopes（权限范围）配置有问题。

解决方法：

1. 对于 [OAuth2](../../credentials/google/oauth-single-service.md) 凭证，请确认你已经在 **APIs & Services > Library** 里启用了 Google Drive API。更多信息请参考 [Google OAuth2 单一服务 - 启用 API](../../credentials/google/oauth-single-service.md#enable-apis)。
2. 对于 [Service Account](../../credentials/google/service-account.md)（服务账号）凭证：
    1. [启用域范围授权（domain-wide delegation）](../../credentials/google/service-account.md#enable-domain-wide-delegation)。
    2. 确保在域范围授权的配置中加入了 Google Drive API。

## 处理一次触发包含多个文件变更的情况

Google Drive Trigger 节点会按固定间隔轮询（poll）Google Drive 的变化（默认每分钟一次）。

如果在一次轮询间隔内发生了多次符合 **Watch For（监听）** 条件的变化，Google Drive Trigger 节点只会触发一次事件，但这次事件会包含多条变更数据（items）。因此你的工作流必须考虑到：节点输出的数据可能不止一条。

你可以用 [if 节点](../../core-nodes/n8n-nodes-base.if.md) 或 [switch 节点](../../core-nodes/n8n-nodes-base.switch.md)，根据 Google Drive Trigger 节点输出的数据是单条还是多条，来改变工作流的处理逻辑。
