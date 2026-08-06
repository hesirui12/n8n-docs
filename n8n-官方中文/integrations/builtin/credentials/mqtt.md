---
title: MQTT 凭证
description: >-
  MQTT 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MQTT 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MQTT credentials
originalFilePath: integrations/builtin/credentials/mqtt.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mqtt'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mqtt'
layout:
  description:
    visible: false
---

# MQTT 凭证

{% hint style="info" %}
**大白话**：MQTT 是一种轻量级消息协议，常用于物联网（IoT），设备通过「Broker（消息代理/中转站）」互发消息。n8n 要连接你的 MQTT Broker，主要填：**Protocol（协议）**（mqtt 明文 / mqtts 加密 / ws 网页套接字）、**Host（服务器地址）**、**Port（端口）**、**Username/Password（用户名/密码）**。如果 Broker 开了 SSL 加密，还要上传证书文件。额外提示：**Client ID（客户端 ID）** 可以自己填一个带 `n8n` 字样的名字，方便日后排查是谁在连。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [MQTT](../app-nodes/n8n-nodes-base.mqtt.md)
- [MQTT Trigger](../trigger-nodes/n8n-nodes-base.mqtttrigger.md)

## 准备工作

安装一个 [MQTT broker（消息代理）](https://mqtt.org/)。

MQTT 官方在 [MQTT Software（MQTT 软件）](https://mqtt.org/software/) 页面提供了一份服务器/Broker 的清单。

## 支持的验证方式

- Broker connection（Broker 连接）

## 相关资源

关于 MQTT 协议的更多信息，请参考 [MQTT 官方文档](https://mqtt.org/)。

更详细的配置和细节请参考你的 Broker 服务提供商的文档。

## 使用 broker connection（Broker 连接）

要配置这个凭证，你需要准备：

- 你的 MQTT broker 的 **Protocol（协议）**
- **Host（服务器地址）**
- **Port（端口）**
- 用于验证身份的 **Username（用户名）** 和 **Password（密码）**
- 如果你用 **SSL**，还需要对应的证书和密钥

设置步骤：

1. 选择 Broker 的 **Protocol（协议）**，它决定了 n8n 使用的 URL。选项包括：
    - **Mqtt**：URL 以标准的 `mqtt:` 协议开头。
    - **Mqtts**：URL 以加密的 `mqtts:` 协议开头。
    - **Ws**：URL 以 WebSocket 的 `ws:` 协议开头。
2. 输入你的 Broker **Host（服务器地址）**。
3. 输入 n8n 连接 Broker 主机要用的 **Port（端口）** 号。
4. 输入登录 Broker 的 **Username（用户名）**。
5. 输入该用户的 **Password（密码）**。
6. 如果你想在离线时也接收 QoS 1 和 2 的消息，请关闭 **Clean Session（干净会话）** 开关。
7. 输入你希望该凭证使用的 **Client ID（客户端 ID）**。如果留空，n8n 会自动生成一个。你可以用固定值或基于表达式（expression）的 Client ID。
    - Client ID 有助于识别和追踪连接来源。n8n 建议使用包含 `n8n` 字样的 ID，方便审计排查。
8. 如果你的 MQTT broker 使用了 SSL，请打开 **SSL** 开关。打开后：
    1. 选择是否使用基于证书的 **Passwordless（免密码）** 连接，这类似于 SASL 机制的 EXTERNAL。如果打开：
        1. 选择是否 **Reject Unauthorized Certificate（拒绝未授权的证书）**：如果关闭，即使证书验证失败，n8n 也会照常连接。
        2. 添加 SSL **Client Certificate（客户端证书）**。
        3. 为客户端证书添加 SSL **Client Key（客户端密钥）**。
    2. 一个或多个 SSL **CA Certificates（CA 证书）**。

更详细的配置说明请参考你的 MQTT Broker 服务提供商的文档。
