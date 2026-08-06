---
title: Gmail 触发器节点常见问题
description: >-
  Documentation for common issues and questions in the Gmail Trigger node in
  n8n, a workflow automation platform. Includes details of the issue and
  suggested solutions.
contentType:
  - integration
  - reference
priority: _priority-from-main-node_
nodeTitle: Gmail 触发器节点常见问题
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/common-issues
layout:
  description:
    visible: false
---

# Gmail 触发器节点常见问题

> **大白话**：这篇是"急救手册"，专门解决 Gmail 触发器最常见的报错——尤其是那个 401 unauthorized（未授权）错误。遇到它，先检查凭据配置和 API 权限开关。

以下是 [Gmail 触发器节点](README.md) 的一些常见错误和问题，以及解决或排查步骤。

## 401 unauthorized（未授权）错误

错误信息的完整内容如下：

```
401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}
```

出现这个错误，说明你使用的凭据及其权限范围（scopes）或权限设置有问题。

解决方法：

1. 对于 [OAuth2](../../credentials/google/oauth-single-service.md) 凭据，请确保你已经在 **APIs & Services（API 和服务）> Library（库）** 中启用了 Gmail API。更多信息请参阅 [Google OAuth2 单服务 - 启用 API](../../credentials/google/oauth-single-service.md#enable-apis)。
2. 对于 [Service Account（服务账号）](../../credentials/google/service-account.md) 凭据：
    1. [启用全域委派（domain-wide delegation）](../../credentials/google/service-account.md#enable-domain-wide-delegation)。
    2. 确保你在全域委派的配置中添加了 Gmail API。
