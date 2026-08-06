---
title: Home Assistant 凭证
description: >-
  Home Assistant 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Home Assistant 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Home Assistant credentials
originalFilePath: integrations/builtin/credentials/homeassistant.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/homeassistant'
url: 'https://docs.n8n.io/integrations/builtin/credentials/homeassistant'
layout:
  description:
    visible: false
---

# Home Assistant 凭证

{% hint style="info" %}
**大白话**：Home Assistant 是一款开源的智能家居控制中心。n8n 想控制它，只需要三样东西：**Host（主机地址，不带 http:// 前缀）**、**Port（端口）** 和一把 **Long-Lived Access Token（长期访问令牌，在 Home Assistant 个人资料页生成）**。如果开了 SSL/HTTPS，记得把 n8n 里的 **SSL** 开关打开。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Home Assistant](../app-nodes/n8n-nodes-base.homeassistant.md)

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Home Assistant 的 API 文档](https://developers.home-assistant.io/docs/api/rest)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要先[安装](https://www.home-assistant.io/installation/) Home Assistant，创建一个 [Home Assistant](https://www.home-assistant.io/getting-started/onboarding) 账号，并且有：

- 你的 **Host（主机地址）**
- **Port（端口）**
- 一个 Long-Lived **Access Token（长期访问令牌）**

生成访问令牌并配置凭证的步骤：

1. 要生成 **Access Token（访问令牌）**，先登录 Home Assistant，打开你的 [用户资料页](https://my.home-assistant.io/redirect/profile)。
2. 在 **Long-Lived Access Tokens（长期访问令牌）** 区域，生成一个新的令牌。
3. 复制这个令牌，在 n8n 里填为 **Access Token**。
4. 填写你的 Home Assistant **Host** 的网址或 IP 地址，**不要**带 `http://` 或 `https://` 前缀，例如 `your.awesome.home`。
5. **Port（端口）** 按情况填写：
	- 如果你没改过端口，并且是用 `http://` 访问 Home Assistant，保持默认值 `8123`。
	- 如果你没改过端口，并且是用 `https://` 访问 Home Assistant，填 `443`。
	- 如果你给 Home Assistant 配置了特定端口，就填那个端口。
6. 如果你在 Home Assistant 的 [config.yml 配置项](https://developers.home-assistant.io/docs/add-ons/configuration/?_highlight=ssl#add-on-configuration) 里启用了 SSL，就在 n8n 里打开 **SSL** 开关。如果不确定：如果你是用 `https://` 而不是 `http://` 访问 Home Assistant 界面的，最好把这个开关打开。
