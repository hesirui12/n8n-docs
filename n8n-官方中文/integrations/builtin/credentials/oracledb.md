---
title: Oracle Database 凭证
description: >-
  Oracle Database 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Oracle Database 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Oracle Database credentials
originalFilePath: integrations/builtin/credentials/oracledb.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/oracledb
url: https://docs.n8n.io/integrations/builtin/credentials/oracledb
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# Oracle Database 凭证

{% hint style="info" %}
**大白话**：Oracle Database 是老牌的商业数据库。n8n 连它不靠密钥，而是用「数据库账号密码 + 连接串（Connection String）」直连。大部分普通用户填 **用户名、密码、连接串** 三样就够了；SSL、连接池、钱包（Wallet）这些高级选项，用不到就别动。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [OracleDB](../app-nodes/n8n-nodes-base.oracledb.md)
* [Agent（智能体）](../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md)
* [Oracle Database Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreoracledb.md)
* [Embeddings Oracle Database（向量化）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsoracledb.md)

{% hint style="info" %}
这些节点不支持 SSH 隧道。它们要求 Oracle Database **19c 或更高版本**。如果想用 Oracle Database 的高级特性（如 Transparent Application Continuity（TAC，透明应用连续性）和 Sharding（分片）），还要求 Oracle Client Libraries（Oracle 客户端库）**19c 或更高版本**。
{% endhint %}

## 准备工作

在 [Oracle Database](https://www.oracle.com/pls/topic/lookup?ctx=dblatest\&id=GUID-F0246961-558F-480B-AC0F-14B50134621C) 服务器上创建一个用户账号。

## 支持的验证方式

* 数据库连接（Database connection）

## 相关资源

关于该服务的更多信息，请参考 [Oracle Database 官方文档](https://docs.oracle.com/en/database/oracle/oracle-database)。

## 使用数据库连接

要配置这个凭证，你需要：

* 一个 **User（用户名）**。
* 该用户的 **Password（密码）**。
* **Connection String（连接字符串）**：要连接的 Oracle Database 实例。可以是 Easy Connect 连接串、tnsnames.ora 文件里的 TNS Alias（TNS 别名），或 Oracle Database 实例本身。
* **Use Optional Oracle Client Libraries（使用可选的 Oracle 客户端库）**：如果想使用 Oracle Database 的高级功能，打开这个开关。这个选项内部使用 node-oracledb 的 Thick 模式，还需要额外配置才能启用 Thick 模式，请参考[启用 Thick 模式文档](https://node-oracledb.readthedocs.io/en/latest/user_guide/initialization.html#enabling-node-oracledb-thick-mode)。注意：官方 n8n docker 镜像里不提供这个选项。
* **Use SSL（使用 SSL）**：如果你的 Connection String 用了 SSL，打开这个开关，并配置额外的 SSL 身份验证信息。
* **Wallet Password（钱包密码）**：用于解密 PEM 编码的私密证书的密码（如果该证书已加密）。
* **Wallet Content（钱包内容）**：与 Oracle Database 建立双向 TLS（mTLS）连接所需的安全凭证。
* **Distinguished Name（专有名称，DN）**：应与证书 DN 匹配的专有名称。
* **Match Distinguished Name（匹配专有名称）**：是否在常规证书校验之外，额外校验服务器证书的 DN。
* **Allow Weak Distinguished Name Match（允许弱 DN 匹配）**：是否执行同时检查监听器和服务器证书的安全 DN 匹配行为。
* **Pool Min（连接池最小值）**：创建连接池时建立的连接数。
* **Pool Max（连接池最大值）**：连接池最多可以增长到的连接数。
* **Pool Increment（连接池增量）**：当连接请求超过当前已打开的连接数时，每次新打开的连接数。
* **Pool Maximum Session Life Time（连接池会话最大存活时间）**：当连接请求超过当前已打开的连接数时，每次新打开的连接数。
* **Pool Connection Idle Timeout（连接池连接空闲超时）**：当连接请求超过当前已打开的连接数时，每次新打开的连接数。
* **Connection Class Name（连接类名）**：DRCP/PRCP 连接类。更多信息请参考[启用 DRCP 文档](https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/managing-processes.html#GUID-BB76E57C-3F16-4C85-AEF6-BA14FC1B4777)。
* **Connection Timeout（连接超时）**：应用程序建立 Oracle Net 连接的超时时间（秒）。
* **Transport Connection Timeout（传输连接超时）**：等待与数据库主机建立连接的最大秒数。
* **Keepalive Probe Interval（心跳探测间隔）**：发送 keepalive（保活）探测的间隔分钟数。

配置数据库连接凭证的步骤：

1. 在 n8n 凭证的 **User** 字段里填入数据库的用户名。
2. 填入该用户的 **Password**。
3. 在 n8n 凭证的 **Connection String** 字段里填入数据库的连接字符串。
4. 如果你的数据库用了 SSL，并且想为连接配置 **SSL**，就在凭证里打开这个开关。打开后，需要在这些字段里填你的 Oracle Database SSL 证书信息：
   1. 如果有钱包密码，在 **Wallet Password** 字段里填入。
   2. 在 **Wallet Content** 字段的「Expanded（展开）」视图里，填入 PEM 编码的钱包文件 **ewallet.pem** 的内容。这样能确保 PEM 文件里的所有空格都原样保留。直接复制粘贴到 **Wallet Content** 字段会丢失空格，导致连接报错。

关于使用 TLS 连接的更多说明，请参考 [node-oracledb 文档](https://node-oracledb.readthedocs.io/en/latest/user_guide/connection_handling.html#mutual-tls-connections-to-oracle-cloud-autonomous-database)。
