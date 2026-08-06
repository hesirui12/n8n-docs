---
title: Switch（开关）
description: >-
  n8n（工作流自动化平台）中 Switch 节点的文档。包含使用指导以及示例链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Switch
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.switch.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch'
layout:
  description:
    visible: false
---

# Switch（开关）

{% hint style="info" %}
**大白话**：Switch 节点就像车站的「多道岔」，可以一次分出很多条路线。它和 If 节点类似（都是按条件分流），但 If 只有「是/否」两条路，Switch 可以设很多条路由规则，把数据送到不同的输出。它有两种模式：**Rules（规则）** 模式——为每个输出写一条匹配规则；**Expression（表达式）** 模式——写一个表达式直接算出该走第几个输出。
{% endhint %}

使用 Switch 节点，根据比较操作来条件性地路由工作流。它类似于 [IF](n8n-nodes-base.if.md) 节点，但支持多个输出路由。

## 节点参数（Node parameters）

选择节点应该使用的 **Mode（模式）**：

* **Rules（规则）**：选择这个模式，为每个输出构建一条匹配规则。
* **Expression（表达式）**：选择这个模式，编写一个表达式，以编程方式返回输出索引。

节点的配置取决于你选择的 **Mode（模式）**。

### Rules（规则）

要使用这个操作配置节点，请使用以下参数：

* 创建 **Routing Rules（路由规则）** 来定义比较条件。
    * 使用数据类型下拉框来选择条件的数据类型和比较运算类型。例如，要创建「某个日期之后」的规则，选择 **Date & Time（日期与时间）> is after（晚于）**。
    * 需要输入到条件中的字段和值会根据你选择的数据类型和比较方式而变化。完整的各数据类型比较方式列表，请参考 [可用的数据类型比较（Available data type comparisons）](#available-data-type-comparisons)。
* **Rename Output（重命名输出）**：打开这个开关，可以重命名要放入匹配数据的输出字段。输入你想要的 **Output Name（输出名称）**。

选择 **Add Routing Rule（添加路由规则）** 可以添加更多规则。

#### 规则选项（Rule options）

使用这些 **Options（选项）**，你可以进一步配置节点：

- **Fallback Output（回退输出）**：当一个项目不匹配任何规则或条件时，选择如何路由工作流。
    - **None（无）**：忽略该项目。这是默认行为。
    - **Extra Output（额外输出）**：把项目发送到一个额外的、独立的输出。
    - **Output 0（输出 0）**：把项目发送到与匹配第一条规则的项目相同的输出。
- **Ignore Case（忽略大小写）**：设置是否在评估条件时忽略字母大小写（开启 = 忽略）还是区分大小写（关闭 = 区分）。
- **Less Strict Type Validation（宽松的类型校验）**：设置是否让 n8n 尝试根据你选择的运算符来转换值的数据类型（开启 = 尝试转换，关闭 = 不转换）。
- **Send data to all matching outputs（把数据发送到所有匹配的输出）**：设置是把数据发送到所有满足条件的输出（开启），还是把数据发送到第一个匹配条件的输出（关闭）。

### Expression（表达式）

要使用这个操作配置节点，请使用以下参数：

- **Number of Outputs（输出数量）**：设置节点应该有多少个输出。
- **Output Index（输出索引）**：创建一个表达式，计算哪个输入项目应该被路由到哪个输出。表达式必须返回一个数字。

## 模板和示例（Templates and examples）

[浏览 Switch 集成模板](https://n8n.io/integrations/switch) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

关于使用条件在 n8n 中创建复杂逻辑的更多信息，请参阅 [使用条件拆分（Splitting with conditionals）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/split-with-conditionals)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/bMMOCQFbQ4YpKDnWQQOg/" %}
