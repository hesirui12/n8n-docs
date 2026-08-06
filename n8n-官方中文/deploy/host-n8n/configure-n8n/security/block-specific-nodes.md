---
title: 屏蔽节点访问
description: 防止你的 n8n 用户访问特定的节点。
contentType: howto
nodeTitle: 屏蔽特定节点
originalFilePath: hosting/securing/blocking-nodes.md
originalUrl: 'https://docs.n8n.io/hosting/securing/blocking-nodes'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/block-specific-nodes
layout:
  description:
    visible: false
---

# 屏蔽节点访问 / Block access to nodes

出于安全考虑，你可能想要屏蔽你的用户访问或使用某些特定的 n8n 节点（nodes）。如果你的用户可能并不可信，这个功能就非常有用。

{% hint style="info" %}
**大白话**：节点（node）就是工作流画布上那些「小方块」，比如 HTTP 请求、发邮件、读写文件等等。有些节点能力很强，一旦用起来可以做很多危险的事（比如在服务器上执行命令、读写服务器上的任意文件）。如果你给别人开了 n8n 账号（比如团队协作），而这些人你又不能完全信任，就可以用本页的方法把「危险节点」藏起来，让他们在编辑器里**搜不到、用不了**这些节点。
{% endhint %}

使用 `NODES_EXCLUDE` 环境变量（environment variable）来阻止你的用户访问特定节点。

## 屏蔽节点 / Exclude nodes

修改你的 `NODES_EXCLUDE` 环境变量，填入一个字符串数组（array of strings），数组里就是你想屏蔽、不让用户使用的那些节点。

{% hint style="info" %}
**大白话**：环境变量可以理解为「告诉 n8n 怎么运行的配置项」。`NODES_EXCLUDE` 这个变量的含义就是「哪些节点要排除（exclude）在外」。它的值是 JSON 格式的字符串数组，数组里写的是节点的**内部名称**（比如 `n8n-nodes-base.executeCommand`），不是显示在界面上的中文名。多个节点之间用英文逗号分隔。
{% endhint %}

例如，像这样设置该变量：

```
NODES_EXCLUDE: "[\"n8n-nodes-base.executeCommand\", \"n8n-nodes-base.readWriteFile\"]"
```

就会屏蔽 [Execute Command（执行命令）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executecommand) 和 [Read/Write Files from Disk（读写磁盘文件）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.readwritefile) 这两个节点。

{% hint style="info" %}
**大白话**：上面代码块里的 `[\"...\", \"...\"]` 就是 JSON 数组的写法。注意这里用了转义符 `\"`，因为整个值要放进一对双引号里，所以数组内部的引号都要加反斜杠转义。如果你是在 `.env` 文件或 Docker 环境变量里配置，要注意不要写错引号的层数（外面一层是给环境变量的，里面两层是给 JSON 数组的）。配置完成后，你的用户就**搜不到**这些节点，也没办法把它们拖进工作流了。
{% endhint %}

你的 n8n 用户将无法搜索到或使用这些节点。

## 建议屏蔽的节点 / Suggested nodes to block

哪些节点有安全风险，取决于你的使用场景和用户画像。下面是一些你可能想先屏蔽的节点：

* [Execute Command（执行命令）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executecommand)：可以在服务器上执行任意系统命令，危险度极高。
* [Read/Write Files from Disk（读写磁盘文件）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.readwritefile)：可以读写服务器文件系统上的任意文件，可能泄露或篡改数据。

{% hint style="info" %}
**大白话**：这两个节点是「高危典型」：Execute Command 相当于给了用户在服务器上敲命令的权限（可以干任何事）；Read/Write Files from Disk 相当于给了用户翻服务器文件的权限。如果你的用户只是做日常业务流程（对接 API、处理数据），根本用不到这两个节点，直接屏蔽掉最省心。当然，具体屏蔽哪些还要结合你的实际情况判断，这两条只是「起步建议」。
{% endhint %}

## 启用默认被屏蔽的节点 / Enable nodes that are blocked by default

有些节点（比如 Execute Command）默认就是被屏蔽的。把它们从排除列表里移除，即可重新启用：

```
NODES_EXCLUDE: "[]"
```

{% hint style="info" %}
**大白话**：`[]` 表示「空数组」，也就是「什么都不排除」。注意：这个例子的意思是**清空排除列表**，让所有节点（包括默认屏蔽的危险节点）都恢复可用。在真正的生产环境里，除非你确定要放开，否则不要轻易设置成空数组——更常见的做法是只把你想屏蔽的节点写进列表。另外要留意：n8n 的安全默认策略是「危险节点默认不可用」，如果你把它们放开了，就要自己承担相应的安全风险。
{% endhint %}

## 相关资源 / Related resources

关于这个环境变量的更多信息，请参阅[节点环境变量](../basic-configuration/use-environment-variables/nodes.md)。

关于如何设置环境变量，请参阅[配置](../basic-configuration.md)。
