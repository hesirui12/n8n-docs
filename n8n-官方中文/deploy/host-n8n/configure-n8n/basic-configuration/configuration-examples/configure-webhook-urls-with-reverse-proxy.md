---
title: 配合反向代理配置 Webhook 网址
description: 自定义 n8n 的 Webhook 网址，以兼容反向代理（reverse proxy）部署。
contentType: howto
nodeTitle: 配合反向代理配置 Webhook 网址
originalFilePath: hosting/configuration/configuration-examples/webhook-url.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy
layout:
  description:
    visible: false
---

# 配合反向代理配置 n8n 的 Webhook / Configure n8n webhooks with reverse proxy

n8n 通过组合 `N8N_PROTOCOL`、`N8N_HOST` 和 `N8N_PORT` 这三个环境变量来生成 Webhook 网址。如果 n8n 运行在反向代理（reverse proxy）后面，这样生成就不行了。原因在于：n8n 在内部运行于 5678 端口，而反向代理是用 443 端口把 n8n 暴露到公网的。

{% hint style="info" %}
**大白话**：Webhook 是「别人主动来访问 n8n 的一个网址」。比如你在 n8n 里配置了 Webhook 节点，当微信/支付宝/GitHub 等外部服务往这个网址发请求时，你的工作流就会被触发。问题来了：n8n 以为自己的地址是「内部地址（http://内网IP:5678）」，但外部服务需要访问的是「公网地址（https://你的域名:443）」。如果不修正，n8n 生成的 Webhook 网址就是错的，外部根本访问不到。这一页就是教你怎么修正。反向代理（reverse proxy）就是那个「帮你挡在前面、转发请求」的服务，常见的有 Nginx、Caddy、Traefik 等。
{% endhint %}

当 n8n 运行在反向代理后面时，务必要做以下几件事：

* 用 `N8N_WEBHOOK_URL` 环境变量**手动设置** Webhook 网址，这样 n8n 才能在编辑器界面中正确显示它，并且向外部服务注册正确的 Webhook 网址。（`N8N_WEBHOOK_URL` 取代了已废弃的 `WEBHOOK_URL`；如果你仍然使用 `WEBHOOK_URL`，n8n 会输出一条废弃警告（deprecation warning）。）
* 将 `N8N_PROXY_HOPS` 环境变量设置为 `1`。
* 在请求路径上的**最后一个代理**（即最靠近 n8n 的那个代理）上，设置以下请求头（headers），用来传递关于原始请求的信息：
    * [`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For)
    * [`X-Forwarded-Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-Host)
    * [`X-Forwarded-Proto`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-Proto)

```bash
export N8N_WEBHOOK_URL=https://n8n.example.com/
export N8N_PROXY_HOPS=1
```

{% hint style="info" %}
**大白话**：拆开解释上面两条设置。第一条 `N8N_WEBHOOK_URL=https://n8n.example.com/`：直接告诉 n8n「对外公布的 Webhook 网址长这样」，它就再也不猜了，生成的 Webhook 链接都会用这个域名。第二条 `N8N_PROXY_HOPS=1`：告诉 n8n「你前面有 1 层代理」，这样 n8n 才会去读取代理转发过来的 `X-Forwarded-*` 请求头（这些请求头记录了原始请求的真实信息：来自谁的 IP、用户访问时用的什么域名、是 http 还是 https）。Nginx 等反向代理默认就会带上这些请求头，但要注意：如果有多层代理（比如 Nginx 后面还有一层 LB），`N8N_PROXY_HOPS` 要改成实际的层数，并且在**最后一层代理**上确保这些请求头存在。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：如果你用宝塔面板、Nginx、Caddy 或云服务器自建的反向代理把 n8n 挂到域名下，并设置了 HTTPS，那么几乎一定会遇到「Webhook 网址是 http://IP:5678 而不是 https://域名」的问题。解决方案就是本页的两行环境变量。另外请确认：你在 Nginx 的 location 配置里已经设置了 `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;` 和 `proxy_set_header Host $host;` 等语句，否则即使设置了环境变量，n8n 也可能拿不到正确的信息。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/endpoints.md)。
