---
title: Local File Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Local File Trigger（本地文件触发器）节点。按照本文档将
  Local File Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Local File Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger
layout:
  description:
    visible: false
---

# Local File Trigger 节点

> **大白话**：这个节点像个「文件系统哨兵」。它盯着你指定的某个文件或文件夹，只要文件被新增、修改或删除，就立刻启动工作流。比如你有个日志文件，一有新内容写进去就自动触发后续处理。

Local File Trigger（本地文件触发器）节点在检测到文件系统发生变化时启动工作流。这些变化包括文件或文件夹被新增、修改或删除。

{% hint style="warning" %}
**安全注意事项**

在存在不可信用户的环境中，Local File Trigger 节点可能会带来显著的安全风险。因此，从 n8n 2.0 版本开始，该节点默认被[禁用](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/block-specific-nodes#exclude-nodes)。
{% endhint %}

{% hint style="info" %}
**仅限自托管 n8n**

此节点在 n8n Cloud 上不可用。
{% endhint %}

## 节点参数

你可以使用 **Trigger On（触发条件）** 参数来选择要监听哪种事件。

## 特定文件的变更

当指定的文件发生变化时，节点触发。

在 **File to Watch（要监听的文件）** 中输入要监听的文件路径。

## 特定文件夹的变更

当所选文件夹中发生变更时，节点触发。

需要配置以下参数：

- **Folder to Watch（要监听的文件夹）**：输入要监听的文件夹路径。
- **Watch for（监听类型）**：选择要监听的变更类型。

## 节点选项

使用节点的 **Options（选项）** 来包含或排除文件和文件夹。

- **Include Linked Files/Folders（包含链接的文件/文件夹）**：同时监听链接文件或文件夹的变更。
- **Ignore（忽略）**：要忽略的文件或路径。n8n 会测试整个路径，而不仅仅是文件名。支持 [Anymatch](https://github.com/micromatch/anymatch) 语法。
- **Max Folder Depth（最大文件夹深度）**：在文件夹结构中向下监听多深的变更。

### Ignore（忽略）的示例

忽略单个文件：

```sh
**/<fileName>.<suffix>
# For example, **/myfile.txt
```

忽略你所监听目录下的某个子目录：

```sh
**/<directoryName>/**
# For example, **/myDirectory/**
```

> **小白提示**：上面两个代码块是"忽略规则"的写法。`**/` 表示"任意层级的路径"，`*` 是通配符。第一段表示忽略任何名为 `myfile.txt` 的文件；第二段表示忽略任何名为 `myDirectory` 的目录及其里面的所有内容（`/**` 表示该目录下的一切）。

## 模板与示例

[浏览 Local File Trigger 节点的集成模板](https://n8n.io/integrations/local-file-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
