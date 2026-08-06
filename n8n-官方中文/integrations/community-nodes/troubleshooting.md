---
contentType: reference
nodeTitle: 社区节点故障排查
layout:
  description:
    visible: false
---

# 社区节点故障排查 / Troubleshooting

> 💡 **大白话**：社区节点是直接装到硬盘上的文件，n8n 启动时要能读到它们。用 Docker 的话，重建容器或升级 n8n 后节点可能「消失」——用下面两个办法解决。

n8n 把社区节点直接安装到硬盘上。这些文件必须在 n8n 启动时就可用，否则会报「缺少包」的错误。

如果使用 Docker 运行 n8n：取决于你的 Docker 配置，重建容器或升级 n8n 版本时，节点包可能会丢失。你必须二选一：

* **持久化 `~/.n8n/nodes` 目录的内容**（最佳方案）。如果按[Docker 安装指南](../../deploy/host-n8n/install-options/install-with-docker.html)操作，设置步骤里就包含持久化该目录。
* 将环境变量 `N8N_REINSTALL_MISSING_PACKAGES` 设为 `true`。

第二种方案可能会增加启动时间，并可能导致健康检查（health check）失败。

## 在 n8n Cloud 上阻止加载社区节点 / Prevent loading community nodes on n8n cloud

如果你的 n8n Cloud 实例崩溃且无法启动，可以在实例启动时阻止已安装的社区节点加载：进入 [Cloud Admin Panel](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/use-the-admin-dashboard) > **Manage**，把 **Disable all community nodes** 开关拨到 `true`。该开关只有在允许安装社区节点时才可见。
