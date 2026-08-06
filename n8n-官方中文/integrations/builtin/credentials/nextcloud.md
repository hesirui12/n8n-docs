---
title: Nextcloud 凭证
description: >-
  Nextcloud 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Nextcloud 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Nextcloud credentials
originalFilePath: integrations/builtin/credentials/nextcloud.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/nextcloud'
url: 'https://docs.n8n.io/integrations/builtin/credentials/nextcloud'
layout:
  description:
    visible: false
---

# Nextcloud 凭证

{% hint style="info" %}
**大白话**：Nextcloud 是开源的「自建网盘/云盘」软件（相当于自己搭一个 Dropbox 或百度网盘），也可以自己部署。n8n 想读写你的 Nextcloud 文件，有两种方式：**Basic auth（账号密码）**——填你的 WebDAV 地址（一般是你的网盘网址加 `/remote.php/webdav`）、用户名、密码。**强烈建议**用「应用密码（app password）」而不是你的登录密码，更安全；**OAuth2**——需要在 Nextcloud 管理后台注册一个 OAuth 客户端应用，拿到 Client ID 和 Client Secret，再填授权地址和令牌地址。小白推荐先试 Basic auth。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Nextcloud](../app-nodes/n8n-nodes-base.nextcloud.md)

## 支持的验证方式

- Basic auth（基本认证）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Nextcloud 官方 API 文档](https://nextcloud-server.netlify.app/)。

关于安装和配置 Nextcloud 的更多信息，请参考 [Nextcloud 用户手册](https://docs.nextcloud.com/server/stable/user_manual/en/contents.html)。

## 使用 basic auth（基本认证）

要配置这个凭证，你需要一个 [Nextcloud](https://nextcloud.com/) 账号，以及：

- 你的 **WebDAV URL（WebDAV 地址）**
- 你的 **User（用户名）**
- 你的 **Password（密码）** 或一个应用密码（app password）

设置步骤：

1. 创建你的 **WebDAV URL**：如果 Nextcloud 装在你的域名根目录：输入你访问 Nextcloud 用的网址，并在后面加上 `/remote.php/webdav/`。例如，你用 `https://cloud.n8n.com` 访问 Nextcloud，那你的 WebDAV URL 就是 `https://cloud.n8n.com/remote.php/webdav`。
    - 如果你的 Nextcloud 装在子目录里，输入你访问 Nextcloud 用的网址，并在后面加上 `/<子目录>/remote.php/webdav/`。把 `<子目录>` 替换成 Nextcloud 实际安装的子目录名。
    - 关于如何拼接 WebDAV URL 的更多信息，请参考 Nextcloud 的 [Third-party WebDAV clients（第三方 WebDAV 客户端）](https://docs.nextcloud.com/server/stable/user_manual/en/files/access_webdav.html#third-party-webdav-clients) 文档。
2. 输入你的 **User（用户名）**。
3. 关于 **Password（密码）**，Nextcloud 建议使用应用密码（app password）而不是你的用户密码。创建应用密码：
    1. 在 Nextcloud 网页界面里，点击右上角的头像，选择 **Personal settings（个人设置）**。
    2. 在左侧菜单里选择 **Security（安全）**。
    3. 滚动到底部的 **App Password（应用密码）** 区域，创建一个新的应用密码。
    4. 复制这个应用密码，作为你的 **Password（密码）** 填到 n8n 里。

## 使用 OAuth2

要配置这个凭证，你需要一个 [Nextcloud](https://nextcloud.com/) 账号，以及：

- 一个 **Authorization URL（授权地址）** 和 **Access Token URL（访问令牌地址）**：这两个取决于你访问 Nextcloud 用的网址。
- 一个 **Client ID（客户端 ID）**：在 **Administrator Security Settings（管理员安全设置）** 里添加 OAuth2 客户端应用后生成。
- 一个 **Client Secret（客户端密钥）**：在 **Administrator Security Settings（管理员安全设置）** 里添加 OAuth2 客户端应用后生成。
- 一个 **WebDAV URL（WebDAV 地址）**：取决于你访问 Nextcloud 用的网址。

设置步骤：

1. 在 Nextcloud 里，打开你的 **Administrator Security Settings（管理员安全设置）**。
2. 找到 **OAuth 2.0 clients（OAuth 2.0 客户端）** 下的 **Add client（添加客户端）** 区域。
3. 给你的客户端输入一个 **Name（名称）**，比如 `n8n integration`。
4. 从 n8n 复制 **OAuth Callback URL（OAuth 回调地址）**，作为 **Redirection URI（重定向地址）** 填进去。
5. 然后在 Nextcloud 里选择 **Add（添加）**。
6. 在 n8n 里，把 **Authorization URL（授权地址）** 中的 `https://nextcloud.example.com` 替换成你访问 Nextcloud 用的网址。例如，你用 `https://cloud.n8n.com` 访问 Nextcloud，授权地址就是 `https://cloud.n8n.com/apps/oauth2/authorize`。
7. 在 n8n 里，把 **Access Token URL（访问令牌地址）** 中的 `https://nextcloud.example.com` 替换成你访问 Nextcloud 用的网址。例如，你用 `https://cloud.n8n.com` 访问 Nextcloud，访问令牌地址就是 `https://cloud.n8n.com/apps/oauth2/api/v1/token`。

    {% hint style="info" %}
    **Pretty URL（美化地址）配置**

    **Authorization URL（授权地址）** 和 **Access Token URL（访问令牌地址）** 都假设你已经把 Nextcloud 配置成了使用 [Pretty URLs（美化地址）](https://docs.nextcloud.com/server/latest/admin_manual/installation/source_installation.html#pretty-urls)。如果没有，你必须在 Nextcloud 网址和 `/apps/oauth2` 部分之间加上 `/index.php/`，例如：`https://cloud.n8n.com/index.php/apps/oauth2/api/v1/token`。
    {% endhint %}

8. 复制 Nextcloud 里你的 OAuth2 客户端的 **Client Identifier（客户端标识符）**，作为 **Client ID（客户端 ID）** 填到 n8n 里。
9. 复制 Nextcloud 里的 **Secret（密钥）**，作为 **Client Secret（客户端密钥）** 填到 n8n 里。
10. 在 n8n 里创建你的 **WebDAV URL（WebDAV 地址）**：如果 Nextcloud 装在你的域名根目录，输入你访问 Nextcloud 用的网址，并在后面加上 `/remote.php/webdav/`。例如，你用 `https://cloud.n8n.com` 访问 Nextcloud，你的 WebDAV URL 就是 `https://cloud.n8n.com/remote.php/webdav`。
    - 如果你的 Nextcloud 装在子目录里，输入你访问 Nextcloud 用的网址，并在后面加上 `/<子目录>/remote.php/webdav/`。把 `<子目录>` 替换成 Nextcloud 实际安装的子目录名。
    - 关于如何拼接 WebDAV URL 的更多信息，请参考 Nextcloud 的 [Third-party WebDAV clients（第三方 WebDAV 客户端）](https://docs.nextcloud.com/server/stable/user_manual/en/files/access_webdav.html#third-party-webdav-clients) 文档。

更详细的步骤请参考 Nextcloud 的 [OAuth2 Configuration 文档](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/oauth2.html)。
