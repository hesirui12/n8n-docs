---
contentType: howto
nodeTitle: Run your node locally
originalFilePath: integrations/creating-nodes/test/run-node-locally.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally'
url: 'https://docs.n8n.io/connect/create-nodes/test-your-node/run-your-node-locally'
layout:
  description:
    visible: false
---

# 在本地运行你的节点（Run your node locally）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/WlCAEDxY4EZLDV85eB8C/" %}

{% hint style="info" %}
**说明**：原文的这部分内容来自 GitBook 的「可复用内容块」（reusable block）。为了便于阅读，下面把该内容块渲染出的完整内容翻译成了中文，与你在线看到的 n8n 文档一致。
{% endhint %}

## 在本地运行你的节点（Run your node locally）

你可以一边构建节点，一边在本地 n8n 实例中运行它来测试。

1. 使用 npm 安装 n8n：

```
npm install n8n -g
```

2. 当你准备好测试节点时，先在本地发布它：

```
# In your node directory
npm run build
npm link
```

{% hint style="info" %}
**代码讲解（小白版）**

- `npm run build`：把你写的 TypeScript 源码编译成 n8n 能加载的 JavaScript（输出到 `dist` 文件夹）。
- `npm link`：在你的全局 node_modules 里创建一个「符号链接」，让这台电脑上的其他项目（包括 n8n 本身）都能直接引用你的节点包——相当于在你的全局环境里「登记」了它，发布到 npm 之前的本地预览版。
{% endhint %}

3. 把节点安装到你本地 n8n 实例中：

```
# In the nodes directory within your n8n installation
# node-package-name is the name from the package.json
npm link <node-package-name>
```

{% hint style="info" %}
**注意你的目录**

请务必在 n8n 安装目录中的节点目录（nodes directory）里运行 `npm link <node-name>`。

默认位置取决于你的操作系统：
- Windows：`C:\Users\<username>\.n8n\custom`
- Linux：`/home/<username>/.n8n/custom`
- MacOS：`/Users/<username>/.n8n/custom`

如果你的 n8n 安装通过 `N8N_CUSTOM_EXTENSIONS` 设置了其他名称，请使用那个自定义目录。

注意：`.n8n` 文件夹是隐藏文件夹，所以它可能不会出现在你的文件浏览器里。
{% endhint %}

4. 启动 n8n：

5. 在浏览器中打开 n8n。在节点面板中搜索时，你应该能看到你的节点。

{% hint style="info" %}
**节点名称**

请务必使用**节点名**（node name）搜索，而不是**包名**（package name）。例如，如果你的 npm 包名是 `n8n-nodes-weather-nodes`，而包里包含名为 `rain`、`sun`、`snow` 的节点，你应该搜索 `rain`，而不是 `weather-nodes`。
{% endhint %}

### 故障排查（Troubleshooting）

如果你的本地 n8n 安装中没有 `custom` 目录，你需要手动创建 `custom` 目录并运行 `npm init`。

`.n8n` 目录的位置取决于你的操作系统：

* Windows：`C:\Users\<username>\.n8n\custom`
* Linux：`/home/<username>/.n8n/custom`
* MacOS：`/Users/<username>/.n8n/custom`

注意：`.n8n` 文件夹是隐藏文件夹，所以它可能不会出现在你的文件浏览器里。

```
# Navigate to your .n8n directory and run:
mkdir custom
cd custom
npm init
```

{% hint style="info" %}
**小白提示：完整流程一句话总结**

安装 n8n → 编译并 `npm link` 你的节点 → 在 n8n 的 `custom` 目录里 `npm link` 你的包名 → 启动 n8n → 用**节点名**搜索测试。如果搜不到，先检查 `custom` 目录是否存在、`npm link` 的两个命令是不是都在对的位置执行的，再对照上面的「故障排查」处理。
{% endhint %}
