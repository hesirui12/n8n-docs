---
title: KoboToolbox 凭证
description: >-
  KoboToolbox 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  KoboToolbox 的身份。
contentType:
  - integration
  - reference
nodeTitle: KoboToolbox credentials
originalFilePath: integrations/builtin/credentials/kobotoolbox.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/kobotoolbox'
url: 'https://docs.n8n.io/integrations/builtin/credentials/kobotoolbox'
layout:
  description:
    visible: false
---

# KoboToolbox 凭证

{% hint style="info" %}
**大白话**：KoboToolbox 是非营利领域常用的「田野调查数据收集」工具（公益组织、研究人员用手机/平板做问卷调查、收集现场数据）。n8n 连它要填两样：**API Root URL（服务器地址，全球版和欧盟版不一样）** 和 **API Token（在账号设置里能看到）**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [KoboToolbox trigger（触发器）](../trigger-nodes/n8n-nodes-base.kobotoolboxtrigger.md)
* [KoboToolbox](../app-nodes/n8n-nodes-base.kobotoolbox.md)

## 准备工作

创建一个 [KoboToolbox](https://www.kobotoolbox.org/) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [KoboToolbox 的 API 文档](https://support.kobotoolbox.org/api.html)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- **API Root URL（API 根地址）**：输入你注册账号的那个 KoboToolbox 服务器的地址。全球版 KoboToolbox 服务器用 `https://kf.kobotoolbox.org`，欧盟版 KoboToolbox 服务器用 `https://eu.kobotoolbox.org`。
- **API Token（API 令牌）**：在 **Account Settings（账号设置）** 里显示。更多信息请参考 [获取你的 API token](https://support.kobotoolbox.org/api.html#getting-your-api-token)。
