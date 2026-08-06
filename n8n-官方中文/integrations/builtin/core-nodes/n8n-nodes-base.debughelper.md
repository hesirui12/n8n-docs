---
title: 调试助手（Debug Helper）
description: >-
  n8n 工作流自动化平台中「调试助手」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: 调试助手
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.debughelper.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.debughelper'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.debughelper'
layout:
  description:
    visible: false
---

# 调试助手（Debug Helper）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：Debug Helper 节点是给工作流「做测试」用的工具，它能干三件事：① 故意制造错误（模拟各种报错、模拟内存耗尽），用来测试你的「错误处理」流程有没有生效；② 生成一批随机假数据（随机邮箱、地址、姓名、坐标等），用来测试下游节点逻辑；③ 什么都不做，充当「数据终点」。调试工作流时非常好用。
{% endhint %}

使用「调试助手」（Debug Helper）节点来触发不同类型的错误，或生成随机数据集，以帮助测试 n8n 工作流。

## 操作（Operations）

通过选择**类别（Category）**来定义操作：

* **Do Nothing（什么都不做）**：不做任何事情。
* [**Throw Error（抛出错误）**](#throw-error)：抛出指定类型和消息的错误。
* [**Out Of Memory（内存耗尽）**](#out-of-memory)：生成指定大小的内存占用，模拟内存不足的情况。
* [**Generate Random Data（生成随机数据）**](#generate-random-data)：以选定格式生成一些随机数据。

## 节点参数（Node parameters）

节点参数取决于所选的**类别（Category）**。**Do Nothing（什么都不做）** 类别没有其他参数。

### 抛出错误（Throw Error）

* **Error Type（错误类型）**：选择要抛出的错误类型。可选择：
	* **NodeApiError**：API 调用类错误（比如调用外部接口失败时 n8n 报的那种错）。
	* **NodeOperationError**：节点操作类错误（比如数据不符合预期时报的错）。
	* **Error**：通用错误。
* **Error Message（错误消息）**：输入要抛出的错误消息。

{% hint style="info" %}
**大白话（什么时候用）**：如果你给工作流配了「错误分支」（比如把错误转发给一个专门通知人的节点），可以用它故意触发一次错误，看看错误分支是否按预期工作。
{% endhint %}

### 内存耗尽（Out Of Memory）

「内存耗尽」（Out of Memory）类别会添加一个参数：**Memory Size to Generate（要生成的内存大小）**。输入要生成的大致内存量。

{% hint style="info" %}
**大白话（什么时候用）**：用来测试工作流在大数据量、内存吃紧的情况下会不会崩溃，或者验证你的重试、告警机制是否生效。小心使用，别把自己 n8n 实例撑爆了。
{% endhint %}

### 生成随机数据（Generate Random Data）

* **Data Type（数据类型）**：选择你想要生成的随机数据类型。选项包括：
	* **Address（地址）**
	* **Coordinates（坐标）**
	* **Credit Card（信用卡）**
	* **Email（邮箱）**
	* **IPv4**（IPv4 格式的 IP 地址，如 `192.168.1.1`）
	* **IPv6**（IPv6 格式的 IP 地址）
	* **MAC**（MAC 地址，网卡的物理地址）
	* **Nanoids**（Nano ID 是一种短小精悍的唯一 ID 格式）：如果你选择此数据类型，还需要输入：
		* **Nanoid Alphabet（Nano ID 字符表）**：生成器用来生成 Nano ID 的字符集合。
		* **Nanoid Length（Nano ID 长度）**：每个 Nano ID 的长度。
	* **URL**（网址）
	* **User Data（用户数据）**（一组随机的用户信息，如姓名、邮箱）
	* **UUID**（全球唯一标识符）
	* **Version（版本号）**（形如 `1.2.3` 的版本号）
* **Seed（随机种子）**：如果你想要用特定的种子生成数据，在这里输入。这样可以确保生成的数据是一致的（同样的种子 → 同样的数据）。如果你更想用完全随机的生成方式，就让它留空。
* **Number of Items to Generate（要生成的数据条数）**：输入你想要生成的随机数据条数。
* **Output as Single Array（输出为单个数组）**：选择是把数据生成为单个数组（打开）还是多个独立数据（关闭）。

{% hint style="info" %}
**大白话（随机数据怎么用）**：测下游逻辑时不想用真实数据（保护隐私、数据量不够），就用它批量造假数据。**Seed（随机种子）** 很实用：测试要「可复现」时，固定一个种子就能每次拿到同一批数据，方便复现 bug；生产环境（真要随机的场景）就留空。**Output as Single Array** 打开时，所有数据装进一个数组里返回，适合批量处理的节点。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Debug Helper 集成模板](https://n8n.io/integrations/debughelper) 或[搜索所有模板](https://n8n.io/workflows/)
