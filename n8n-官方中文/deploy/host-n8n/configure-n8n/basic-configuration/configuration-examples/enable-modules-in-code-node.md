---
title: 在 Code 节点中启用模块
description: 允许在 Code 节点中使用内置模块和外部模块。
contentType: howto
nodeTitle: 在 Code 节点中启用模块
originalFilePath: hosting/configuration/configuration-examples/modules-in-code-node.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/modules-in-code-node
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/enable-modules-in-code-node
layout:
  description:
    visible: false
---

# 在 Code 节点中启用模块 / Enable modules in Code node

出于安全原因，Code 节点（Code node）默认**限制**导入模块（importing modules）。通过设置以下环境变量，可以解除对内置模块（built-in modules）和外部模块（external modules）的限制：

- `NODE_FUNCTION_ALLOW_BUILTIN`：用于内置模块（Node.js 自带的模块）
- `NODE_FUNCTION_ALLOW_EXTERNAL`：用于来自 n8n/node_modules 目录的外部模块。**当环境变量未设置时，外部模块支持是关闭的。**

{% hint style="info" %}
**大白话**：Code 节点让你在 n8n 里写 JavaScript 代码。写代码时经常要用 `require('某个模块')` 引入现成的工具库。但 n8n 出于安全考虑，默认不让引入（因为让用户随便加载模块，等于给了任意代码执行权限，有风险）。通过这两个环境变量，你可以「点名放行」：内置模块（Node.js 自带的，比如 `crypto` 加密、`fs` 文件系统）用 `NODE_FUNCTION_ALLOW_BUILTIN` 放行；外部模块（npm 安装的第三方库，比如 `moment` 时间处理、`lodash` 工具库）用 `NODE_FUNCTION_ALLOW_EXTERNAL` 放行。什么都不设置 = 全部禁用；设置为 `*` = 全部放行（最简单，但也最不安全）。
{% endhint %}

```bash
# Allows usage of all builtin modules <a href="#allows-usage-of-all-builtin-modules" id="allows-usage-of-all-builtin-modules"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=*

# Allows usage of only crypto <a href="#allows-usage-of-only-crypto" id="allows-usage-of-only-crypto"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=crypto

# Allows usage of only crypto and fs <a href="#allows-usage-of-only-crypto-and-fs" id="allows-usage-of-only-crypto-and-fs"></a>
export NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs

# Allow usage of external npm modules. <a href="#allow-usage-of-external-npm-modules" id="allow-usage-of-external-npm-modules"></a>
export NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
```

{% hint style="info" %}
**大白话**：逐条解释上面的示例。`NODE_FUNCTION_ALLOW_BUILTIN=*`：允许所有内置模块（`*` 是通配符，表示全部）；`NODE_FUNCTION_ALLOW_BUILTIN=crypto`：只允许 `crypto` 一个模块；`NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs`：允许 `crypto` 和 `fs` 两个模块（多个模块用英文逗号 `,` 分隔，注意是英文逗号，不是中文逗号）；`NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash`：允许引入 `moment` 和 `lodash` 这两个外部 npm 库。**安全建议**：能用「点名放行」就不要用 `*`，只放行你确实会用到的模块，把风险降到最低。
{% endhint %}

{% hint style="info" %}
**如果使用了 Task Runners（任务运行器）**

如果你的 n8n 实例配置了 [Task Runners（任务运行器）](../../set-up-task-runners.md)，请把这些环境变量添加到 Task Runners 上，而不是添加到主 n8n 节点上。
{% endhint %}

{% hint style="info" %}
**大白话**：Task Runners 是 n8n 新版本中把代码执行放到独立进程/容器里的机制（隔离运行、更安全）。如果你用了它，Code 节点里的代码其实是在 Task Runner 环境里跑的，所以这两个放行变量要配置到 Task Runner 那边，配在主 n8n 进程上不生效。
{% endhint %}

关于这些变量的更多信息，请参阅[环境变量参考](../use-environment-variables/nodes.md)。
