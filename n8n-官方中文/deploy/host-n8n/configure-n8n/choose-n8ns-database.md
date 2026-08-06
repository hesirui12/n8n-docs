---
contentType: reference
nodeTitle: 选择 n8n 的数据库（Choose n8n's database）
originalFilePath: hosting/configuration/supported-databases-settings.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/supported-databases-settings'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database'
layout:
  description:
    visible: false
---

# 支持的数据库（Supported databases）

默认情况下，n8n 使用 SQLite 来保存凭据[^1]、历史执行记录和工作流。n8n 也支持 PostgreSQL。关于 n8n 的 PostgreSQL 版本支持策略，请参见 [支持的 PostgreSQL 版本](#supported-postgresql-versions)。

{% hint style="info" %}
**小白提示**：数据库（database）就是 n8n 用来「存东西」的地方——你的工作流、账号密码凭据、每次运行的历史记录都存在里面。SQLite 是一个「文件型」数据库，零配置、开箱即用，适合个人使用和小型部署；PostgreSQL 是一个功能更强的「服务器型」数据库，适合多人、大规模、生产环境使用。文章后面会详细说明怎么切换。
{% endhint %}

## 不同安装方式对应的数据库类型（Database type by n8n installation）

数据库类型会根据你的 n8n 安装方式而有所不同：

### 自托管 n8n（Self-hosted n8n）

默认情况下，自托管安装使用 **SQLite**。你也可以通过设置相应的环境变量来配置 PostgreSQL（见 [PostgresDB 配置](#postgresdb)）。

### n8n Cloud（云版）

n8n Cloud（n8n 官方托管的云服务）根据你的套餐等级使用不同的数据库：

- **SQLite**：试用版（Trial）、入门版（Starter）和专业版（Pro）套餐，以及旧版企业（Enterprise）套餐
- **PostgreSQL**：仅企业扩展（Enterprise Scaling）套餐

## 通用设置（Shared settings）

以下环境变量对所有数据库都生效：

 - `DB_TABLE_PREFIX`（默认值：-）—— 表名的前缀

## PostgresDB（PostgreSQL 数据库）

### 支持的 PostgreSQL 版本（Supported PostgreSQL versions）

n8n 支持：

- 最近两个仍在积极维护的 PostgreSQL 主版本（截至 2026 年 7 月为 **17** 和 **18**）。
- 额外再兼容一个旧主版本（**16**）。

请在你的主版本内使用最新的次版本（minor release）。

n8n 不官方支持 PostgreSQL 的兼容衍生品，例如 Amazon Aurora、AlloyDB、CockroachDB 或 YugabyteDB。

{% hint style="info" %}
**小白提示**：为什么版本支持范围会变？因为 PostgreSQL 项目每年 11 月会「退役」最老的那个受支持主版本，同时发布一个新主版本，所以 n8n 支持的版本范围每年都会变化。请以本页列出的版本为准，不要依赖你在别处看到的某个具体版本号。
{% endhint %}

要把 PostgresDB 作为 n8n 的数据库，可以设置以下环境变量：

 - `DB_TYPE=postgresdb`
 - `DB_POSTGRESDB_DATABASE`（默认值：'n8n'）
 - `DB_POSTGRESDB_HOST`（默认值：'localhost'）
 - `DB_POSTGRESDB_PORT`（默认值：5432）
 - `DB_POSTGRESDB_USER`（默认值：'postgres'）
 - `DB_POSTGRESDB_PASSWORD`（默认值：空）
 - `DB_POSTGRESDB_SCHEMA`（默认值：'public'）
 - `DB_POSTGRESDB_SSL_CA`（默认值：未定义）：服务器 CA 证书的路径，用于校验连接（不支持「机会式加密」）
 - `DB_POSTGRESDB_SSL_CERT`（默认值：未定义）：客户端 TLS 证书的路径
 - `DB_POSTGRESDB_SSL_KEY`（默认值：未定义）：与证书对应的客户端私钥路径
 - `DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED`（默认值：true）：是否拒绝校验失败的 TLS 连接

```bash
export DB_TYPE=postgresdb
export DB_POSTGRESDB_DATABASE=n8n
export DB_POSTGRESDB_HOST=postgresdb
export DB_POSTGRESDB_PORT=5432
export DB_POSTGRESDB_USER=n8n
export DB_POSTGRESDB_PASSWORD=n8n
export DB_POSTGRESDB_SCHEMA=n8n

# optional: <a href="#optional" id="optional"></a>
export DB_POSTGRESDB_SSL_CA_FILE=$(pwd)/ca.crt
export DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED=false

n8n start
```

{% hint style="info" %}
**小白提示**：上面这段代码是给 Linux/macOS 的 Bash 终端用的。`export 变量=值` 的意思是「设置一个环境变量」，`n8n start` 表示设置好之后启动 n8n。如果你用 Docker 或 Docker Compose，就把这些变量填到容器的 `environment` 配置里，而不是用 `export`。末尾的两行 SSL 变量是可选的，只在你想给数据库连接启用加密时才需要。
{% endhint %}

### 所需权限（Required permissions）

n8n 需要创建并修改它所用数据表的表结构（schema）。

推荐的权限设置：

```sql
CREATE DATABASE n8n-db;
CREATE USER n8n-user WITH PASSWORD 'random-password';
GRANT ALL PRIVILEGES ON DATABASE n8n-db TO n8n-user;
```

{% hint style="info" %}
**小白提示**：如果你用的是云数据库（比如阿里云 RDS、腾讯云 PostgreSQL 等），通常在控制台里创建数据库和账号并赋予全部权限即可，效果等同于上面的 SQL。上面的 SQL 适合自己管理 PostgreSQL 服务器时在命令行里执行：先建一个叫 `n8n-db` 的数据库，再建一个用户 `n8n-user` 并设置密码，最后把这个数据库的所有权限授予该用户。记得把 `random-password` 换成你自己的强密码。
{% endhint %}

### TLS（TLS 加密连接）

你可以选择以下配置方式：

- 不声明（默认）：以 `SSL=off` 连接
- 只声明 CA 证书和「拒绝未授权」开关：以 `SSL=on` 连接，并校验服务器的签名
- 声明 `_{CERT,KEY}`（客户端证书和私钥）以及上面的配置：使用证书和私钥进行客户端 TLS 认证

## SQLite

这是在没有做任何设置时默认使用的数据库。

数据库文件位于：
`~/.n8n/database.sqlite`

{% hint style="info" %}
**小白提示**：`~` 表示当前用户的主目录。在 Linux/macOS 上通常是 `/home/你的用户名`（macOS 是 `/Users/你的用户名`）。如果使用 Docker 安装，这个目录通常在容器内的 `/home/node/.n8n`，一般会通过数据卷（volume）映射到宿主机上保存。把 `database.sqlite` 文件备份好，就相当于备份了 n8n 的所有数据。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）用于保存连接到特定应用和服务的认证信息。创建好包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，就可以使用对应的应用节点（app node）与该服务交互。
