---
contentType: howto
nodeTitle: 管理执行数据（Manage execution data）
originalFilePath: hosting/scaling/execution-data.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/execution-data'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/manage-execution-data
layout:
  description:
    visible: false
---

# 执行数据（Execution data）

根据你的执行设置和数量，n8n 数据库可能会不断增大，最终耗尽存储空间。

为了避免这种情况，n8n 建议你不要保存不必要的数据，并启用对旧执行数据的清理（pruning）。

要做到这一点，请配置相应的[环境变量](../basic-configuration/use-environment-variables/executions.md)。

{% hint style="info" %}
**大白话**：每次工作流跑完，n8n 默认都会把「跑的过程记录」（执行数据）存进数据库。跑得多了，数据库就越长越胖，最后磁盘塞满、n8n 跑不动。这一页教你两招：①只保存你想保存的执行数据（比如只保存出错的）；②开启自动清理，让 n8n 定期删除过期/过多的记录。
{% endhint %}

## 减少保存的数据（Reduce saved data）

{% hint style="info" %}
**在工作流级别配置**

你也可以使用[工作流设置](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)在单个工作流的基础上配置这些设置。
{% endhint %}

你可以选择 n8n 保存哪些执行数据。例如，你可以只保存以 `Error`（错误）结束的执行。

```sh
# npm <a href="#npm" id="npm"></a>
# Save executions ending in errors <a href="#save-executions-ending-in-errors" id="save-executions-ending-in-errors"></a>
export EXECUTIONS_DATA_SAVE_ON_ERROR=all

# Don't save successful executions <a href="#dont-save-successful-executions" id="dont-save-successful-executions"></a>
export EXECUTIONS_DATA_SAVE_ON_SUCCESS=none

# Don't save node progress for each execution <a href="#dont-save-node-progress-for-each-execution" id="dont-save-node-progress-for-each-execution"></a>
export EXECUTIONS_DATA_SAVE_ON_PROGRESS=false

# Don't save manually launched executions <a href="#dont-save-manually-launched-executions" id="dont-save-manually-launched-executions"></a>
export EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=false

```

> 代码说明：这一段是给「用 npm 安装 n8n」的用户看的。意思是：出错的任务记录全都保存（`all`）；成功的任务不保存（`none`）；不保存每个节点的中间进度（`false`）；手动点「执行」跑的任务也不保存（`false`）。这样数据库就只留下你真正需要排查问题用的记录。

```sh
# Docker <a href="#docker" id="docker"></a>
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e EXECUTIONS_DATA_SAVE_ON_ERROR=all \
 -e EXECUTIONS_DATA_SAVE_ON_SUCCESS=none \
 -e EXECUTIONS_DATA_SAVE_ON_PROGRESS=true \
 -e EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=false \
 docker.n8n.io/n8nio/n8n
```

> 代码说明：上面是给「用 Docker 跑 n8n」的用户看的，效果与 npm 版本一样，只是把变量写成了 `-e` 参数。注意这里的 `EXECUTIONS_DATA_SAVE_ON_PROGRESS=true` 是官方文档示例，实际想省空间请设为 `false`。

```yaml
# Docker Compose <a href="#docker-compose" id="docker-compose"></a>
n8n:
    environment:
      - EXECUTIONS_DATA_SAVE_ON_ERROR=all
      - EXECUTIONS_DATA_SAVE_ON_SUCCESS=none
      - EXECUTIONS_DATA_SAVE_ON_PROGRESS=true
      - EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=false
```

> 代码说明：这一段是给「用 Docker Compose（docker-compose.yml 文件）部署」的用户看的，效果同上，只是把变量写进配置文件里。

## 启用执行数据清理（Enable executions pruning）

执行数据清理会按固定计划删除已完成的执行及其执行数据和二进制数据。n8n 默认启用清理。出于性能考虑，清理会先把要删除的目标标记出来（软删除），之后再彻底移除（硬删除）。

满足以下**任一**条件时，n8n 就会清理执行数据：

- **按时间（Age）**：执行完成的时间超过 `EXECUTIONS_DATA_MAX_AGE` 小时（默认：336 小时，即 14 天）。
- **按数量（Count）**：执行总数超过 `EXECUTIONS_DATA_PRUNE_MAX_COUNT`（默认：10,000）。发生这种情况时，n8n 会从最旧到最新依次删除执行记录。

请记住：

- 状态为 `new`（新建）、`running`（运行中）或 `waiting`（等待中）的执行不会被清理。
- 带注解的执行（例如带标签或评分的执行）永远不会被清理。
- 清理会保留一个安全缓冲期 `EXECUTIONS_DATA_HARD_DELETE_BUFFER` 小时（默认：1 小时），以确保用户在构建或调试工作流时近期数据仍然可用。

```sh
# Enable executions pruning <a href="#enable-executions-pruning" id="enable-executions-pruning"></a>
export EXECUTIONS_DATA_PRUNE=true

# How old (hours) a finished execution must be to qualify for soft-deletion <a href="#how-old-hours-a-finished-execution-must-be-to-qualify-for-soft-deletion" id="how-old-hours-a-finished-execution-must-be-to-qualify-for-soft-deletion"></a>
export EXECUTIONS_DATA_MAX_AGE=168

# Max number of finished executions to keep. May not strictly prune back down to the exact max count. Set to `0` for unlimited. <a href="#max-number-of-finished-executions-to-keep-may-not-strictly-prune-back-down-to-the-exact-max-count-set-to-0-for-unlimited" id="max-number-of-finished-executions-to-keep-may-not-strictly-prune-back-down-to-the-exact-max-count-set-to-0-for-unlimited"></a>
export EXECUTIONS_DATA_PRUNE_MAX_COUNT=50000
```

> 代码说明：这三行把清理功能打开（`EXECUTIONS_DATA_PRUNE=true`），并规定「执行完成超过 168 小时（7 天）就可以被软删除；最多保留 50,000 条已完成的执行记录」。`EXECUTIONS_DATA_PRUNE_MAX_COUNT` 设为 `0` 表示不限数量。

```sh
# Docker <a href="#docker" id="docker"></a>
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e EXECUTIONS_DATA_PRUNE=true \
 -e EXECUTIONS_DATA_MAX_AGE=168 \
 docker.n8n.io/n8nio/n8n
```

```yaml
# Docker Compose <a href="#docker-compose" id="docker-compose"></a>
n8n:
    environment:
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=168
      - EXECUTIONS_DATA_PRUNE_MAX_COUNT=50000
```

{% hint style="info" %}
**SQLite**

如果你使用默认的 SQLite 数据库运行 n8n，被清理数据的磁盘空间不会被自动释放，而是会被重新用于未来的执行数据。要释放这些空间，请配置 `DB_SQLITE_VACUUM_ON_STARTUP` [环境变量](../basic-configuration/use-environment-variables/database.md#sqlite)，或手动运行 [VACUUM](https://www.sqlite.org/lang_vacuum.html) 操作。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/kct3MUrE5xSbDyeytQIX/" %}
