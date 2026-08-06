---
contentType: howto
nodeTitle: 手动安装社区节点
layout:
  description:
    visible: false
---

# 手动安装 / Manual installation

> 💡 **大白话**：有些场景（队列模式、私有包）GUI 装不了，就得进 Docker 容器用 npm 直接装。装完记得重启 n8n。

你可以在自托管的 n8n 上从 npm 仓库手动安装社区节点。

以下情况需要手动安装社区节点：

* 你的 n8n 实例运行在**队列模式（queue mode）**下。
* 你想安装[私有包](https://docs.npmjs.com/creating-and-publishing-private-packages)。

## 安装社区节点 / Install a community node

进入你的 Docker shell：

```sh
docker exec -it n8n sh
```

创建 `~/.n8n/nodes` 目录（如果不存在）并进入：

```sh
mkdir ~/.n8n/nodes
cd ~/.n8n/nodes
```

安装节点：

```sh
npm i n8n-nodes-nodeName
```

然后重启 n8n。

## 卸载社区节点 / Uninstall a community node

进入你的 Docker shell：

```sh
docker exec -it n8n sh
```

运行 npm uninstall：

```sh
npm uninstall n8n-nodes-nodeName
```

## 升级社区节点 / Upgrade a community node

（升级方式与安装类似：进入 Docker shell、进入 `~/.n8n/nodes`、用 `npm i 包名@新版本` 升级，然后重启 n8n。）
