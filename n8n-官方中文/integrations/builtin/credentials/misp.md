---
title: MISP 凭证
description: >-
  MISP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MISP 的身份。
contentType:
  - integration
  - reference
nodeTitle: MISP credentials
originalFilePath: integrations/builtin/credentials/misp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/misp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/misp'
layout:
  description:
    visible: false
---

# MISP 凭证

> **大白话**：MISP 是开源的威胁情报共享平台（安全圈用的）。在 n8n 里连它，去 MISP 的「Event Actions > Automation」里拿一个 automation key（自动化密钥），再填上你的 MISP 地址就行。

你可以使用这些凭证来验证以下节点的身份：

- [MISP](../app-nodes/n8n-nodes-base.misp.md)

## 前提条件

安装并运行一个 [MISP](https://misp.github.io/MISP/) 实例。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [MISP 的 Automation API 文档](https://www.circl.lu/doc/misp/automation)。

## 使用 API key

要配置这个凭证，你需要：

- 一个 **API Key**：在 MISP 里，这类密钥叫 automation key（自动化密钥）。从 **Event Actions > Automation** 里获取一个自动化密钥。如何生成更多密钥，请参考 [MISP 的自动化密钥文档](https://www.circl.lu/doc/misp/automation/#automation-key)。
- 一个 **Base URL（基础地址）**：你的 MISP 地址。
- 选择是否 **Allow Unauthorized Certificates**（允许未授权证书）：如果打开，即使 SSL 证书校验失败，凭证也会照常连接。
