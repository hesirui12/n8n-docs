---
title: 设置 SSL
description: 为自托管的 n8n 实例设置 SSL。
contentType: howto
nodeTitle: 设置 SSL
originalFilePath: hosting/securing/set-up-ssl.md
originalUrl: 'https://docs.n8n.io/hosting/securing/set-up-ssl'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/set-up-ssl'
layout:
  description:
    visible: false
---

# 设置 SSL

n8n 支持两种启用 TLS/SSL 的方式。

{% hint style="info" %}
**小白提示**：SSL/TLS = 网页访问时的「加密传输」，让浏览器和服务器之间传的数据不会被中途偷看或篡改。网址以 `https://` 开头就说明启用了。自托管的 n8n 强烈建议开启 SSL——否则你登录的密码、工作流里的凭据都可能以明文传输，等于在网络上「裸奔」。如果你的 n8n 部署在反向代理后面（比如 Nginx、Caddy、Traefik），通常代理那层已经处理了 SSL，n8n 这边就不用再配置了。
{% endhint %}

## 使用反向代理（推荐）（Use a reverse proxy (recommended)）

在 n8n 实例前面放一个反向代理（reverse proxy），比如 [Traefik](https://doc.traefik.io/traefik/) 或网络负载均衡器（Network Load Balancer，NLB）。这样证书的自动续期也由它负责。

{% hint style="info" %}
**小白提示**：反向代理 = 一个站在 n8n 前面的「守门员」：用户的请求先到它，再由它转发给 n8n。证书（certificate）= 用来证明「这个网站是真实的 n8n」并支持加密传输的凭证文件。用代理方案的最大好处是：证书自动申请、自动续期，n8n 本身完全不用管 SSL，最省心。用 Docker 部署时最常见的组合就是 Traefik + n8n。
{% endhint %}

更多信息请参考 [Security | Data encryption（安全 | 数据加密）](https://n8n.io/legal/#security)。

## 直接把证书传给 n8n（Pass certificates into n8n directly）

你也可以选择把证书直接传给 n8n。做法是：设置 `N8N_SSL_CERT` 和 `N8N_SSL_KEY` 环境变量，让它们指向你生成的证书文件和密钥文件。

你需要确保证书保持续期并保持最新。

{% hint style="info" %}
**小白提示**：这种方式由 n8n 自己处理 HTTPS，好处是不用再引入反向代理；代价是证书过期后要自己记得去续期（证书一般有效期 90 天到 1 年，过期后用户访问会报「连接不安全」的错误，甚至完全打不开）。`N8N_SSL_CERT` = 证书文件的路径，`N8N_SSL_KEY` = 私钥文件的路径，两个都要设置。
{% endhint %}

关于这些变量的更多信息，请参考[部署环境变量](../basic-configuration/use-environment-variables/deployment.md)；关于如何设置环境变量，请参考[配置（Configuration）](../basic-configuration.md)。
