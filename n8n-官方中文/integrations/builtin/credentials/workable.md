---
title: Workable 凭证
description: >-
  Workable 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Workable 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Workable credentials
originalFilePath: integrations/builtin/credentials/workable.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/workable'
url: 'https://docs.n8n.io/integrations/builtin/credentials/workable'
layout:
  description:
    visible: false
---

# Workable 凭证

> **大白话**：Workable 是招聘管理系统（HR 招人用的）。连它要两样东西：**Subdomain（子域名）**——就是你 Workable 域名里 `https://` 和 `.workable.com` 之间的那截（比如 `https://n8n.workable.com` 的子域名就是 `n8n`）；**Access Token（访问令牌）**——在个人资料里的 **Integrations > Apps** 页面点「Generate API token」生成。注意：如果配给 Workable Trigger（触发器）节点用，生成令牌时要勾选 `r_candidates` 和 `r_jobs` 这两个权限范围。

你可以使用这些凭证对以下节点进行身份验证：

- [Workable Trigger](../trigger-nodes/n8n-nodes-base.workabletrigger.md)

## 前提条件

创建一个 [Workable](https://www.workable.com/) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Workable 的 API 文档](https://workable.readme.io/reference/generate-an-access-token)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **Subdomain**（子域名）：你的 Workable 子域名是 Workable 域名中 `https://` 和 `.workable.com` 之间的部分。例如完整域名是 `https://n8n.workable.com`，子域名就是 `n8n`。子域名也会显示在你的 Workable **Company Profile**（公司资料）页面上。
- 一个 **Access Token**（访问令牌）：进入你的 **个人资料 >** [**Integrations**](https://workable.com/backend/settings/integrations) **> Apps**，点击 **Generate API token**（生成 API 令牌）。更多信息请参考 [Generate a new token](https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#Generateanewtoken)。<br>

    
    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>令牌权限范围（Token scopes）</strong></p><p>如果你是把这个凭证配给 <a href="../trigger-nodes/n8n-nodes-base.workabletrigger.md">Workable Trigger</a> 节点用的，生成令牌时请勾选 <code>r_candidates</code> 和 <code>r_jobs</code> 这两个权限范围。如果用于其他用途，请按你的实际需求选择相应的权限范围。</p><p>更多关于权限范围的信息，请参考 <a href="https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#SupportedAPIscopes">Supported API scopes</a>。</p></div>
    
