---
title: 指定用户文件夹路径
description: 指定存放用户特定数据（user-specific data）的文件夹位置。
contentType: howto
nodeTitle: 指定用户文件夹路径
originalFilePath: hosting/configuration/configuration-examples/user-folder.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/user-folder'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/specify-user-folder-path
layout:
  description:
    visible: false
---

# 指定用户文件夹路径 / Specify user folder path

n8n 会把用户特定数据（user-specific data）保存在启动 n8n 的用户主目录下的 `.n8n` 子文件夹中，这些数据包括：加密密钥（encryption key）、SQLite 数据库文件，以及隧道 ID（tunnel 的 ID，如果使用了隧道的话）。你可以通过环境变量覆盖（overwrite）这个用户文件夹的位置。

{% hint style="info" %}
**大白话**：`~/.n8n` 是 n8n 的「数据大本营」，重要东西都在里面：①加密密钥（用来加密账号密码凭据）；②数据库文件（n8n 默认用 SQLite，你的工作流、凭据、执行记录都存在这个文件里）；③隧道信息（如果你用 n8n 的隧道功能把本地 n8n 暴露到公网）。**备份 n8n 就备份这个文件夹，迁移 n8n 就迁移这个文件夹**。如果你不想用默认位置（比如想放到专门的磁盘、或者数据卷），就用 `N8N_USER_FOLDER` 换个地方。
{% endhint %}

```bash
export N8N_USER_FOLDER=/home/jim/n8n
```

{% hint style="info" %}
**大白话**：把 n8n 的数据大本营从默认的 `~/.n8n` 改到 `/home/jim/n8n`。设置之后，n8n 会在新目录下继续使用/创建数据。几点提醒：①**要提前建好这个目录**并确认运行 n8n 的用户对它有读写权限；②**首次启动前**就设置好最省事——如果 n8n 已经在默认目录存了数据，换目录后新目录里是空的，看起来就像「数据丢了」（其实旧数据还在默认目录里）；③Docker 部署时，通常是把宿主机的一个数据目录挂载到容器里的 `/home/node/.n8n`，此时环境变量一般不需要改，保持默认即可。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/deployment.md)。
