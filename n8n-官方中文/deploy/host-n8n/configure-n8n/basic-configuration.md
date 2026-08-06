---
title: 配置方式（Configuration methods）
description: 如何为 n8n 设置环境变量。
contentType: howto
nodeTitle: 基础配置（Basic configuration）
originalFilePath: hosting/configuration/configuration-methods.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-methods'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration'
layout:
  description:
    visible: false
---

# 配置（Configuration）

你可以通过环境变量（environment variables）来修改 n8n 的设置。完整的可配置项列表请参见 [环境变量（Environment Variables）](basic-configuration/use-environment-variables/README.md)。

{% hint style="info" %}
**小白提示**：环境变量就是「在启动程序前，先告诉它一些参数」的开关。比如「要不要显示模板」「数据库连到哪里」。下面教你三种改法：npm 命令行、Docker 命令行、Docker Compose 配置文件，选一种你正在用的方式即可。
{% endhint %}

## 通过命令行设置环境变量（Set environment variables by command line）

### npm

使用 npm 时，在终端里设置你想要的环境变量。具体命令取决于你用的命令行工具。

Bash 类命令行（macOS/Linux 默认终端）：

```bash
export <variable>=<value>
```

在 cmd.exe（Windows 老式命令行）里：

```bash
set <variable>=<value>
```

在 PowerShell（Windows 新式命令行）里：

```powershell
$env:<variable>=<value>
```

### Docker

在 Docker 中，你可以在命令行里使用 `-e` 参数：

```bash
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e N8N_TEMPLATES_ENABLED="false" \
 docker.n8n.io/n8nio/n8n
```

## Docker Compose 文件（Docker Compose file）

在 Docker 中，你可以在 `docker-compose.yaml` 文件的 `n8n: environment:` 元素里设置环境变量。

例如：

```yaml
n8n:
    environment:
      - N8N_TEMPLATES_ENABLED=false
```

## 把敏感数据放在单独的文件里（Keeping sensitive data in separate files）

你可以给单个环境变量追加 `_FILE` 后缀，把它的配置放到一个单独的文件里，从而避免用环境变量传递敏感信息。n8n 会从指定名称的文件中读取数据，因此可以配合 [Docker-Secrets](https://docs.docker.com/engine/swarm/secrets/) 和 [Kubernetes-Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) 使用。

关于每个变量的详细说明，请参考 [环境变量（Environment variables）](basic-configuration/use-environment-variables/README.md)。

虽然大多数环境变量都可以使用 `_FILE` 后缀，但它对凭据[^1]和数据库配置这类敏感数据更有价值。下面是一些示例：

```yaml
CREDENTIALS_OVERWRITE_DATA_FILE=/path/to/credentials_data
DB_TYPE_FILE=/path/to/db_type
DB_POSTGRESDB_DATABASE_FILE=/path/to/database_name
DB_POSTGRESDB_HOST_FILE=/path/to/database_host
DB_POSTGRESDB_PORT_FILE=/path/to/database_port
DB_POSTGRESDB_USER_FILE=/path/to/database_user
DB_POSTGRESDB_PASSWORD_FILE=/path/to/database_password
DB_POSTGRESDB_SCHEMA_FILE=/path/to/database_schema
DB_POSTGRESDB_SSL_CA_FILE=/path/to/ssl_ca
DB_POSTGRESDB_SSL_CERT_FILE=/path/to/ssl_cert
DB_POSTGRESDB_SSL_KEY_FILE=/path/to/ssl_key
DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED_FILE=/path/to/ssl_reject_unauth
```

{% hint style="info" %}
**小白提示**：上面这些 `_FILE` 写法一般只在正式生产环境里用（比如密码不想直接出现在进程列表或配置文件里）。平时自己玩，直接在命令行或 docker-compose.yaml 里写变量值就够了，不用搞这么复杂。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）用于保存连接到特定应用和服务的认证信息。创建好包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，就可以使用对应的应用节点（app node）与该服务交互。
