---
title: 指定自定义节点的位置
description: 添加文件夹并指定自定义节点的路径。
contentType: howto
nodeTitle: 指定自定义节点位置
originalFilePath: hosting/configuration/configuration-examples/custom-nodes-location.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/custom-nodes-location
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/specify-custom-nodes-location
layout:
  description:
    visible: false
---

# 指定自定义节点的位置 / Specify location for your custom nodes

每个用户都可以添加自定义节点（custom nodes），n8n 会在启动时加载它们。默认位置是启动 n8n 的用户主目录下的 `.n8n/custom` 子文件夹。

{% hint style="info" %}
**大白话**：自定义节点就是「你自己开发或下载的、官方没有的 n8n 节点」，相当于给 n8n 装插件。n8n 启动时会自动扫描默认目录 `~/.n8n/custom`（`~` 指启动 n8n 的那个系统用户的主目录，比如 `/home/jim`），把里面的节点加载进来。如果你把节点放到别的地方，就需要用环境变量告诉 n8n 去那里找。
{% endhint %}

你可以通过环境变量定义更多文件夹：

```bash
export N8N_CUSTOM_EXTENSIONS="/home/jim/n8n/custom-nodes;/data/n8n/nodes"
```

{% hint style="info" %}
**大白话**：`N8N_CUSTOM_EXTENSIONS` 用来指定**额外的**自定义节点目录。重点看格式：多个目录用英文分号 `;` 分隔（不是冒号，也不是逗号）。上面的例子指定了两个目录：`/home/jim/n8n/custom-nodes` 和 `/data/n8n/nodes`。设置后，n8n 启动时会同时扫描默认目录和你指定的这些目录。Docker 部署时注意：容器里看到的路径是容器内的路径，所以别忘记把宿主机上的对应目录挂载（-v）进容器，并且路径要写成容器内的路径。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/nodes.md)。
