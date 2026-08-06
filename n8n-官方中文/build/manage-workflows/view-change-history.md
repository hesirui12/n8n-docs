---
title: 工作流历史（Workflow history）
contentType: howto
nodeTitle: View change history
originalFilePath: workflows/history.md
originalUrl: https://docs.n8n.io/workflows/history
url: https://docs.n8n.io/build/manage-workflows/view-change-history
description: 查看和恢复工作流的旧版本。
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

# 查看变更历史 / View change history

{% hint style="info" %}
**功能可用性（Feature availability）**

* 完整的工作流历史：企业版 Cloud 和企业版自托管（Enterprise Cloud / Enterprise Self-hosted）可用。
* 最近 **5 天**的版本：Cloud Pro 用户可用。
* 最近 **24 小时**的版本：所有用户可用。
{% endhint %}

{% hint style="info" %}
**大白话**：工作流历史就是 n8n 给工作流做的「时光机」——每次保存都会留下一个版本，你可以翻看以前的样子、甚至一键恢复。但「能翻多远的过去」取决于你的套餐：免费用户只能看最近 24 小时的版本，Pro 能看 5 天，企业版才能看完整历史。所以重要工作流改坏了，越早发现越好救。
{% endhint %}

使用工作流历史（workflow history）来查看和恢复工作流的旧版本。

## 理解工作流历史 / Understand workflow history

在以下情况下，n8n 会创建一个新版本：

* 你**保存**工作流时。
* 你**恢复**一个旧版本时（n8n 会在恢复前先把当前最新版本保存下来）。
* 使用[源代码管理（Source control）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments)从 Git 仓库**拉取（pull）** 时。注意：n8n 是把版本保存到实例的数据库里，而不是保存到 Git 中。

**修改工作流设置**不会创建新版本。

{% hint style="info" %}
**大白话**：什么时候会「存档」？三种情况：① 手动保存；② 恢复旧版本时（先自动存一份当前版本，防止你反悔）；③ 从 Git 拉代码时（注意版本存在 n8n 的数据库里，Git 只负责代码同步）。另外：只改工作流设置（比如时区、超时时间）不产生新版本，只有改工作流本身的「内容」（节点、连线、参数）才会存档。
{% endhint %}

{% hint style="info" %}
**工作流历史和执行历史（Workflow history and execution history）**

不要把「工作流历史」和[工作流级别的执行记录列表（Workflow-level executions list）](../understand-workflows/understand-executions/view-executions-for-a-single-workflow.md)搞混。

**执行记录（Executions）** 是工作流的**运行记录**。通过执行记录列表，你可以看到当前版本工作流的历史运行情况。你还可以把之前的某次执行复制到编辑器中，用于在当前工作流中[调试并重新运行过去的执行（Debug and re-run past executions）](../understand-workflows/understand-executions/debug-executions.md)。

**工作流历史（Workflow history）** 是工作流的**旧版本**：例如一个包含不同节点、或设置了不同参数的版本。

{% hint style="info" %}
**大白话（两个「历史」的区别，非常容易混淆）**：执行记录 = 「每次跑的结果」；工作流历史 = 「工作流改过的样子」。打个比方：执行记录是「每场比赛的比分」，工作流历史是「球队不同时期的阵容名单」。想看「上次跑成功没、数据是什么」→ 看执行记录；想把工作流「还原成昨天那个版本」→ 用工作流历史。两者都在 n8n 里，但入口和用途完全不同。
{% endhint %}

## 查看工作流历史 / View workflow history

要查看工作流的历史：

1. 打开工作流。
2. 选择 **Workflow history（工作流历史）** <img src="../.gitbook/assets/workflow-history.png" alt="Workflow history icon" data-size="line">。n8n 会打开一个菜单，显示已保存的工作流版本，旁边还有一个画布，用来预览选中的版本。

{% hint style="info" %}
**大白话**：打开工作流 → 点「Workflow history」图标，右侧会列出所有版本，点任意版本，旁边的画布就会显示那个版本长什么样——相当于「版本预览」。先看预览，再决定要不要恢复。
{% endhint %}

## 恢复或复制旧版本 / Restore or copy previous versions

你可以恢复一个旧版本，或者复制它：

1. 在你要恢复或复制的版本上，选择 **Options（选项）** <img src="../.gitbook/assets/three-dot-options-menu (1).png" alt="Options icon" data-size="line">。
2. 选择你想做的事：
   * **Restore version（恢复版本）**：用选中的版本**替换**当前工作流。
   * **Clone to new workflow（克隆为新工作流）**：基于选中的版本创建一条**新**工作流。
   * **Open version in new tab（在新标签页打开版本）**：在新标签页打开选中版本，方便**对比**不同版本。
   * **Download（下载）**：把该版本下载为 JSON 文件。
   * **Name version（命名版本）**：给版本起个名字并加描述。被命名的版本会受到保护，**不会被自动清理**（automatic pruning）。更多详情请参阅[命名版本（Naming versions）](../understand-workflows/save-and-publish-workflows.md#naming-versions)。此功能在 Pro 和企业版套餐中可用。

{% hint style="info" %}
**大白话（五种操作怎么选）**：想「回到过去」→ 用 Restore version（会覆盖当前版本，但放心：恢复前 n8n 会先存一份当前版本，后悔了还能再恢复回来）；想「留着旧的、同时另起炉灶」→ 用 Clone to new workflow；想「并排对比两个版本哪里不一样」→ 用 Open version in new tab；想「把某个版本拿去做备份/分享」→ 用 Download；想让某个重要版本「永不被系统自动清理」→ 用 Name version（给版本起名=上保险）。另外注意：n8n 只保留有限数量的版本（超出会被自动清理，即 pruning），所以重要的里程碑版本记得命名保护。
{% endhint %}
