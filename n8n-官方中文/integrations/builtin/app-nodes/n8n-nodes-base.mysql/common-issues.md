---
title: MySQL 节点常见问题
description: >-
  n8n 中 MySQL 节点常见问题和疑问的文档（n8n 是一个工作流自动化平台）。
  包括问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: MySQL 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mysql/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mysql/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mysql/common-issues
layout:
  description:
    visible: false
---

# MySQL 节点常见问题

> 💡 **大白话**：这一页专门收集用 MySQL 节点时最容易踩的坑，比如「组合键的表怎么更新」「Docker 里连不上数据库」「小数变成字符串了怎么办」，每个问题都给了解决办法，遇到问题先来这里翻一翻。

以下是 [MySQL 节点](README.md) 的一些常见错误和问题，以及解决或排查步骤。

## 用组合键（Composite Key）更新行

MySQL 节点的 **Update（更新）** 操作让你通过提供 **Column to Match On（匹配列）** 和一个值来更新表中的行。这种方法适用于「单列值就能唯一标识每一行」的表。

但对于使用[组合键](https://en.wikipedia.org/wiki/Composite_key)的表就不行了——组合键需要多列才能唯一标识一行。一个例子是 MySQL 数据库中的 [`user` 表](https://mariadb.com/kb/en/mysql-user-table/)，它需要 `user` 和 `host` 两列才能唯一标识行。

要更新带组合键的表，请改用 **Execute SQL（执行 SQL）** 操作手动编写查询。在那里你可以同时匹配多个值，比如下面这个例子同时匹配 `customer_id` 和 `product_id`：

```sql
UPDATE orders SET quantity = 3 WHERE customer_id = 538 AND product_id = 800;
```

（上面这条 SQL：把 orders 表中 customer_id 为 538 且 product_id 为 800 的那一行的 quantity（数量）改为 3。）

## 使用 Docker 时无法连接本地的 MySQL 服务器

当你在 Docker 中运行 n8n 或 MySQL 时，需要配置网络，让 n8n 能连接到 MySQL。

解决方案取决于这两个组件是如何部署的。

### 只有 MySQL 在 Docker 里

如果只有 MySQL 在 Docker 中运行，需要把 MySQL 配置为监听所有接口，即在容器内绑定到 `0.0.0.0`（官方镜像已经默认这样配置了）。

运行容器时，用 `-p` 参数[发布端口](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/)。默认情况下 MySQL 运行在 3306 端口，所以你的 Docker 命令应该像这样：

```shell
docker run -p 3306:3306 --name my-mysql -d mysql:latest
```

（上面这条命令：以后台模式启动一个名为 my-mysql 的 MySQL 容器，并把本机的 3306 端口映射到容器的 3306 端口。）

配置 [MySQL 凭证](../../credentials/mysql.md) 时，`localhost` 地址应该可以直接使用（把 **Host（主机）** 设置为 `localhost`）。

### 只有 n8n 在 Docker 里

如果只有 n8n 在 Docker 中运行，需要把 MySQL 配置为监听所有接口，即在宿主机上绑定到 `0.0.0.0`。

如果你在 **Linux** 上用 Docker 运行 n8n，启动容器时要用 `--add-host` 参数把 `host.docker.internal` 映射到 `host-gateway`。例如：

```shell
docker run -it --rm --add-host host.docker.internal:host-gateway --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

（上面这条命令：启动一个 n8n 容器，并添加 host.docker.internal 指向宿主机网关的映射，这样容器里就能用这个地址访问宿主机上的 MySQL。）

如果你使用的是 Docker Desktop，这个映射已经自动配置好了。

配置 [MySQL 凭证](../../credentials/mysql.md) 时，请把 **Host（主机）** 地址设为 `host.docker.internal`，而不是 `localhost`。

### MySQL 和 n8n 分别在两个独立的 Docker 容器中

如果 n8n 和 MySQL 都在 Docker 中运行（各自独立容器），你可以用 Docker 网络把它们连起来。

把 MySQL 配置为监听所有接口，即在容器内绑定到 `0.0.0.0`（官方镜像已经默认这样配置了）。把 MySQL 和 n8n 两个容器加到同一个[用户自定义桥接网络（user-defined bridge network）](https://docs.docker.com/engine/network/drivers/bridge/)。

配置 [MySQL 凭证](../../credentials/mysql.md) 时，用 MySQL 容器的名字作为主机地址，而不是 `localhost`。例如，如果你把 MySQL 容器命名为 `my-mysql`，就把 **Host（主机）** 设为 `my-mysql`。

### MySQL 和 n8n 在同一个 Docker 容器中

如果 MySQL 和 n8n 在同一个 Docker 容器中运行，`localhost` 地址不需要任何特殊配置。你可以把 MySQL 配置为监听 `localhost`，并把 n8n 中的 [MySQL 凭证](../../credentials/ollama.md) 里的 **Host（主机）** 设置为 `localhost`。

## 小数被返回成字符串

默认情况下，MySQL 节点会把 [`DECIMAL` 值](https://dev.mysql.com/doc/refman/8.4/en/fixed-point-types.html)（小数）作为字符串返回。这是有意为之，是为了避免精度丢失——JavaScript 表示数字的方式有局限，直接当数字处理可能丢失精度。你可以在这个 n8n 所用的 [MySQL 库的文档](https://sidorares.github.io/node-mysql2/docs/api-and-configurations) 中了解更多关于这个决策的信息。

如果你希望小数以数字形式而不是字符串输出，并且能接受精度丢失的风险，可以开启 **Output Decimals as Numbers（将小数输出为数字）** 选项。开启后这些值就会以数字形式输出。

另一种做法：你可以用 `toFloat()` 函数配合 [`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)，或使用 MySQL 节点后面的 [Edit Fields (Set) 节点](../../core-nodes/n8n-nodes-base.set.md)，手动把字符串转成小数。请注意，你仍然需要考虑潜在的精度丢失问题。
