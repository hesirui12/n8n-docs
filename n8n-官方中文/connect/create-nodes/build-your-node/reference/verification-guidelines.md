---
contentType: reference
nodeTitle: 验证指南
originalFilePath: integrations/creating-nodes/build/reference/verification-guidelines.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/verification-guidelines
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/verification-guidelines
layout:
  description:
    visible: false
---

# 社区节点验证指南

{% hint style="info" %}
**想让 n8n 验证你的节点？**

如果你希望把节点提交给 n8n 验证，请在构建节点时遵循这些指南。任何开启了「已验证社区节点（verified community nodes）」的用户，都可以从 n8n 的节点面板中发现并安装已验证的节点——适用于所有部署类型（自托管和 n8n Cloud）。
{% endhint %}

{% hint style="info" %}
**即将到来的变更**

从 2026 年 5 月 1 日起，你必须使用 GitHub Action 发布**所有**社区节点，并附带[来源证明声明（provenance statement）](https://docs.npmjs.com/generating-provenance-statements)。
{% endhint %}

{% hint style="info" %}
**小白提示**：这篇是「社区节点过审清单」。你开发了一个 n8n 插件节点，想让它出现在 n8n 官方的节点面板里（带「已验证」徽章），就要满足这篇的所有要求——代码质量、安全、文档、打包方式等。相当于给应用商店上架的审核规则。
{% endhint %}

## 使用 n8n-node 工具

所有已验证社区节点的作者都应该使用 [`n8n-node` 工具](../using-the-n8n-node-tool.md)来创建和检查他们的包。这有助于 n8n 通过以下方式保证质量和一致性：

* 生成预期的包文件结构
* 向 `package.json` 文件添加必需的元数据和配置
* 轻松针对 n8n 的标准对你的代码进行 lint（静态检查）
* 允许你在本地 n8n 实例中加载你的节点进行测试

## 节点类型（Node Types）

* 节点**不得**是已有节点的重复。如果你的节点是对现有节点的迭代改进，请改为创建一个 pull request。
* n8n 目前不接受逻辑（Logic）或流程控制（Flow control）节点。
* 每个包应该只集成一个第三方服务。同一服务的触发器节点可以伴随主节点一起包含。包装多个不相关 API 的包，或充当多个服务的代理层的包，通常不符合验证资格。请把每个服务作为单独包提交。

## 包来源验证（Package source verification）

* 验证你的 npm 包仓库 URL 与预期的 GitHub 仓库匹配。
* 确认包作者/维护者在 npm 和仓库之间一致。
* 确认 npm 中的 git 链接可用，并且仓库是公开的。
* 确保你的包有合适的文档（README、使用示例等）。
* 确保你的包许可证是 MIT。
* 包应从 GitHub Action 发布，并包含[来源证明（provenance）](https://docs.npmjs.com/generating-provenance-statements)。

## 无外部依赖（No external dependencies）

* 确保你的包**不**包含任何外部依赖，以保持轻量、易于维护。

## 合适的文档（Proper documentation）

* 提供清晰的文档，无论是 GitHub 上的 **README** 还是相关 **API 文档**的链接。
* 包含使用说明、示例工作流以及任何必要的认证信息。

## 不访问环境变量或文件系统（No access to environment variables or file system）

* 代码**不得**与环境变量交互，也不得尝试读写文件。
* 通过节点参数传递所有必要的数据。

## 遵循 n8n 最佳实践（Follow n8n best practices）

* 保持清晰一致的编码风格。
* 使用 **TypeScript** 并遵循 n8n 的[**节点开发指南**](../../overview.md)。
* 确保正确的错误处理和校验。
* 确保 linter 通过（也就是说，确保运行 `npx @n8n/scan-community-package n8n-nodes-PACKAGE` 能通过）。

## 只使用英语（Use English language only）

* 节点界面和所有文档都必须只使用**英语**。
* 这包括参数名称、描述、帮助文本、错误信息和 **README** 内容。

{% hint style="info" %}
**小白提示**：最后这条「只使用英语」针对的是**节点本身**（它的界面文字、文档），不是针对这份中文翻译——那是 n8n 官方对提交验证的节点包的要求，因为 n8n 的界面目前是英文的，避免混合语言破坏体验。
{% endhint %}
