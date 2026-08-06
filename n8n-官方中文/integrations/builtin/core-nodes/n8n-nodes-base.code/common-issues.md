---
title: Code 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Code node common issues
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.code/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/common-issues
description: >-
  n8n（工作流自动化平台）中 Code 节点的常见问题文档。包含问题详情和建议的解决方案。
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

# 常见问题（Common issues）

{% hint style="info" %}
**大白话**：这一页收集了用 Code 节点时最常见的问题：代码返回的数据格式不对（n8n 要求固定结构：一个数组，里面每个对象都有一个 `json` 键，`json` 的值必须是对象）、不能用 `import`/`export`（要用 `require`）、引入第三方模块要额外配置、Code 节点里**不能直接用凭据**（要用 HTTP Request 节点或外部处理）等。
{% endhint %}

以下是 [Code 节点](./README.md) 的一些常见错误和问题，以及解决或排查它们的步骤。

## 代码没有正确返回数据项（Code doesn't return items properly）

当你的 Code 节点中的代码没有以预期格式返回数据时，会出现这个错误。

在 n8n 中，节点之间传递的所有数据都是对象的数组。其中每个对象都用 `json` 键包裹另一个对象：

```javascript
[
  {
    "json": {
	  // your data goes here
	}
  }
]
```

要排查这个错误，请检查以下内容：

* 阅读 [数据结构（data structure）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/understand-n8ns-data-structure)，了解你在 Code 节点中收到的数据，以及从节点输出数据的要求。
* 通过 [数据项关联（item linking）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items) 了解数据项是如何工作的，以及如何把之前节点的数据项关联起来。

## 'json' 属性不是对象（A 'json' property isn't an object）

当 Code 节点返回的数据中 `json` 键没有指向对象时，会出现这个错误。

这可能是因为你把 `json` 设置成了其他数据结构，比如数组：

```javascript
[
  {
    "json": [
	  // Setting `json` to an array like this will produce an error
	]
  }
]
```

要解决这个问题，请确保返回数据中的 `json` 键引用的是一个对象：

```javascript
[
  {
    "json": {
	  // Setting `json` to an object as expected
	}
  }
]
```

## 代码没有返回对象（Code doesn't return an object）

当你的 Code 节点没有返回任何内容，或者返回了意外的结果时，可能会出现这个错误。

要解决这个问题，请确保你的 Code 节点返回 [预期的数据结构（expected data structure）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/understand-n8ns-data-structure)：

```javascript
[
  {
    "json": {
	  // your data goes here
	}
  }
]
```

这个错误也可能在你提供的代码返回了 `'undefined'` 而不是预期结果时出现。在这种情况下，请确保你在 Code 节点中引用的数据在每次执行中都存在，并且具有你的代码所期望的结构。

## 'import' 和 'export' 只能出现在顶层（'import' and 'export' may only appear at the top level）

当你在 Code 节点中尝试使用 `import` 或 `export` 时，会出现这个错误。n8n 的 JavaScript 沙箱不支持它们。请改用 `require` 函数来加载模块。

要解决这个问题，请尝试把你的 `import` 语句改成使用 `require`：

```javascript
// Original code:
// import express from "express";
// New code:
const express = require("express");
```

## 找不到模块 '\<module>'（Cannot find module '\<module>'）

当你在 Code 节点中使用 `require`，而 n8n 找不到该模块时，会出现这个错误。

{% hint style="warning" %}
**仅限自托管**

n8n 不支持在 [Cloud（云版）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud) 中导入模块。
{% endhint %}

如果你是 [自托管（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，请按照以下步骤操作：

* 把模块安装到你的 n8n 环境中。
  * 如果你用 [npm](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/install-options/install-with-npm) 运行 n8n，请在与 n8n 相同的环境中安装该模块。
  * 如果你用 [Docker](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/install-options/install-with-docker) 运行 n8n，你需要用一个包含你的模块的 [自定义镜像（custom image）](https://docs.docker.com/build/building/base-images/) 来扩展官方 n8n 镜像。
* 设置 `NODE_FUNCTION_ALLOW_BUILTIN` 和 `NODE_FUNCTION_ALLOW_EXTERNAL` [环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/enable-modules-in-code-node)，以允许导入模块。

## 使用全局变量（Using global variables）

有时你可能希望在多次执行之间（以及执行过程中）设置和获取与工作流相关的简单全局数据。例如，在汇总包含项目更新列表的报告时，你可能希望在报告中包含上一次报告的日期。

要直接设置、更新和获取工作流的数据，请在代码中使用 [static data（静态数据）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata) 函数。你可以全局管理数据，也可以把数据绑定到特定的节点。

{% hint style="info" %}
**尽可能使用 Remove Duplicates**

如果你想用变量来避免重复处理相同的数据项，请考虑改用 [Remove Duplicates 节点（去重节点）](../n8n-nodes-base.removeduplicates/README.md)。Remove Duplicates 节点可以在多次执行之间保存信息，避免多次处理相同的项目。
{% endhint %}

## 无法在 Code 节点中访问凭据（Can't access credentials in a code node）

按照设计，Code 节点无法访问凭据。它们无法访问 n8n 内部的凭据管理系统。这是为了防止敏感认证数据泄露。

在 Code 节点中尝试用表达式或 `this.getCredentials()`、`$getCredentials()` 等方法引用凭据，会导致错误，比如 `this.getCredentials is not a function`（this.getCredentials 不是函数）和 `$getCredentials is not defined`（$getCredentials 未定义）。

如果你需要进行带认证的 API 调用，请使用提供凭据支持的 [HTTP Request 节点](../n8n-nodes-base.httprequest/README.md)。

要动态处理凭据，请在 Code 节点之外处理凭据选择逻辑：

* 使用 [Switch](../n8n-nodes-base.switch.md) 节点路由到使用不同凭据的不同节点。
* 直接在凭据字段中使用表达式，根据之前的节点数据动态选择凭据。
* 使用带 Custom Auth（自定义认证）的 HTTP Request 节点，用表达式动态设置请求头、查询参数或请求体值。
