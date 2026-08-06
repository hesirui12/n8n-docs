---
description: 在文档中应使用的官方 n8n 术语，以及应避免使用的非官方术语。
layout:
  description:
    visible: false
---

# 术语与命名（Terminology and naming）

在每个页面上，同一个概念都要使用同一个术语，并且优先使用官方产品术语，而不是似是而非的同义词。一致的术语有助于读者理解，也会直接提升 AI 工具（搜索、文档助手和编码代理）查找和使用文档的效果。

本页面是产品术语的权威依据（source of truth）。Vale 会自动检查其中的部分成对术语，其余的则依赖作者和审阅者的判断。

> 💡 **小白提示**：简单理解——"同一个东西，全文档永远叫同一个名字"。比如"工作流"永远叫 workflow，不要一会儿叫"流程"、一会儿叫"管道"，否则读者和 AI 都会晕。

## 大小写（Casing）

* **正文中使用句首大写（sentence case）：**"Add a trigger node"（添加一个触发器节点）、"create a sub-workflow"（创建一个子工作流）。
* **对于字面上的 UI 标签或节点名称，使用加粗并严格保持产品的原始大小写：**"Select **Add trigger**"（选择"Add trigger"）、"the **HTTP Request** node"（HTTP Request 节点）。要和界面上显示的完全一致。
* **产品名称永远写成 `n8n`，**始终小写，即使是在句首也一样。

## 核心概念（Core concepts）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| workflow（工作流） | flow、automation（作为名词指整个自动化）、scenario、pipeline、zap |
| node（节点） | step、block、action、module |
| execution（工作流的一次运行） | run（作为名词使用）、job、invocation |

## 工作流生命周期（Workflow lifecycle）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| publish、unpublish a workflow（发布、取消发布工作流）；published workflow（已发布的工作流） | activate、deactivate、enable、disable、turn on、go live、deploy |
| run、execute a workflow（运行工作流，作动词用） | kick off、fire |
| pin data（固定数据）；pinned data（已固定的数据） | mock data、freeze data、lock data、sample data |

## 节点（Nodes）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| app node（应用节点） | integration node、service node |
| core node（核心节点） | system node |
| cluster node（集群节点）；root node（根节点）；sub-node（子节点） | parent node、child node、super node |
| community node（社区节点，可安装、由社区发布） | custom node、third-party node、plugin、add-on |

## 画布与编辑器（Canvas and editor）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| canvas（画布） | editor board、diagram、workspace、graph |
| sticky note（便签） | comment、annotation、label、memo |
| sub-workflow（子工作流） | subworkflow、sub workflow、subflow、child workflow、nested workflow |

## 平台与部署（Platform and deployment）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| self-hosted（自托管） | self hosted、on-premise、on-premises、on-prem |
| n8n Cloud；Cloud（云版） | hosted version、SaaS、the cloud、managed n8n |
| instance（实例） | server、deployment、box |
| Enterprise（套餐名，企业版） | enterprise edition、premium、paid tier |

## 功能（Features）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| project（项目） | workspace、team space |
| folder（文件夹） | directory（指应用内的目录）、group |
| environment variable（环境变量） | env（作为名词使用）、config var |
| data table（数据表） | database table、datatable、the table feature |

## 产品与品牌名称（Product and brand names）

| 推荐使用（Do use） | 避免使用（Don't use） |
| --- | --- |
| n8n（始终小写） | N8n、N8N、n8N |
| GitHub、npm、JavaScript、OAuth2 | Github、NPM、Javascript、oAuth |

{% hint style="info" %}
**小白解释**：这些"避免使用"的词并不是错别字，而是容易造成混淆的不规范叫法。例如把"execution"（执行）叫成"run"或"job"，读者就分不清你指的是"运行了一次"还是"一个任务"。写文档时统一用官方术语，大家（以及 AI）才不至于产生歧义。
{% endhint %}
