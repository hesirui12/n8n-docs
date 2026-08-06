---
contentType: howto
nodeTitle: Troubleshooting
originalFilePath: integrations/creating-nodes/test/troubleshooting-node-development.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/test/troubleshooting-node-development
url: 'https://docs.n8n.io/connect/create-nodes/test-your-node/troubleshooting'
layout:
  description:
    visible: false
---

# 故障排查（Troubleshooting）

{% hint style="info" %}
**小白提示：遇到问题先别慌**

下面这些是节点开发中最常见的「翻车现场」和对应的解决办法。使用方法是：**先对号入座找到你看到的报错信息，再看它下面的检查清单**，一条条核对。大多数问题都是「名字对不上」「路径不对」「忘了重启」这几类原因。
{% endhint %}

## 凭据（Credentials）

### 报错信息：'Credentials of type "*" aren't known'（"*" 类型的凭据未知）

检查凭据数组（credentials array）里的名称，是否与凭据类的属性名（property name）中使用的名称一致。

![Troubleshooting credentials](../../.gitbook/assets/troubleshooting-credentials-1.png)

{% hint style="info" %}
**小白提示**

这个报错的意思是：n8n 找不到你声明的那种凭据类型。最常见的原因就是**两处名字没对齐**：一处是在节点的 `description` 里声明「这个节点要用什么凭据」，另一处是你定义凭据类时写的名字。比如一边写 `friendGridApi`，另一边写成 `friendGrid`，n8n 就对不上了。对照上图，确认两边的字符串完全一致（包括大小写）。
{% endhint %}

## 编辑器 UI（Editor UI）

### 报错信息：'There was a problem loading init data: API-Server can not be reached. It's probably down'（加载初始化数据时出现问题：无法连接到 API-Server，它可能挂了）

- 检查节点文件、节点文件夹和类的名称，是否与添加到 `packages/nodes-base/package.json` 中的路径一致。
- 检查 `displayOptions` 属性中使用的名称，是否是节点中 UI 元素使用的名称。

### 节点图标没有出现在「添加节点」菜单和编辑器 UI 中

- 检查图标是否与节点在同一个文件夹中。
- 检查它是否是 PNG 或 SVG 格式。
- 当 `icon` 属性引用图标文件时，检查它是否包含文件扩展名（`.png` 或 `.svg`），并且是否以 `file:` 作为前缀。例如 `file:friendGrid.png` 或 `file:friendGrid.svg`。

{% hint style="info" %}
**小白提示**

图标加载失败 90% 是这 3 个原因之一：图标文件放错文件夹、格式不是 PNG/SVG、`icon` 属性写法不对。注意 `file:` 前缀和扩展名一个都不能少——写成 `icon: 'friendGrid.png'`（缺 `file:`）或 `icon: 'file:friendGrid'`（缺扩展名）都加载不出来。
{% endhint %}

### 节点图标不合适（不匹配）

- 如果你使用 SVG 文件，请确保画布尺寸是正方形。你可以用 GIMP 修改 SVG 文件的画布尺寸，操作说明在[这里](https://docs.gimp.org/2.10/en/gimp-image-resize.html)。
- 如果你使用 PNG 文件，请确保它是 60x60 像素。

### 节点没有出现在「添加节点」菜单中

检查你是否在项目的 `package.json` 文件中注册了该节点。

### 刷新时，对描述属性的修改没有显示在 UI 中

每次修改描述属性（description properties）后，你都必须停止当前运行的 n8n 进程（`ctrl` + `c`）并重新运行它。你可能还需要重新运行 `npm link`。

{% hint style="info" %}
**小白提示**

n8n 加载节点配置是在**启动时**做的，不是每次刷新都重新读。所以改了节点描述（比如字段名、选项、显示名）之后，光刷新浏览器没用——必须 `ctrl + c` 停掉 n8n 再重新启动。如果节点是通过 `npm link` 链接进来的，可能还要重新执行一遍 `npm link`。
{% endhint %}

### Linter 错误地提示文件名大小写问题

节点 linter 对文件名有规则，包括应该使用什么大小写。Windows 用户在重命名文件时可能会遇到一个问题：即使你已经重命名了文件，linter 仍然继续给出警告。这是因为 [Windows 的一个已知问题](https://answers.microsoft.com/en-us/windows/forum/all/file-renaming-when-changing-case-doesnt-work/aa15ff7c-dd2d-4ed3-bcce-799ca90d4e58)：重命名文件时更改大小写不生效（比如把 `myNode` 改成 `MyNode`，Windows 可能只是改了显示名，底层文件名没变）。

{% hint style="info" %}
**小白提示：Windows 用户专属坑**

在 Windows 上，把文件从 `friendgrid` 改成 `FriendGrid` 时，文件系统可能认为「只是大小写变了，等于没改」，导致底层名字还是旧的。解决办法：先把文件重命名成完全不同的名字（比如 `temp`），再重命名为目标大小写，或者用 `git mv` 之类的工具操作，让系统真正「看到」这次改名。
{% endhint %}
