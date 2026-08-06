---
title: 为 n8n 前端访问配置 Base URL
description: >-
  配置 Base URL 环境变量，用于定义 n8n 前端访问后端 REST API 的路径。
contentType: howto
nodeTitle: 配置 Base URL
originalFilePath: hosting/configuration/configuration-examples/base-url.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/base-url'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-the-base-url
layout:
  description:
    visible: false
---

# 为 n8n 前端访问配置 Base URL / Configure the Base URL for n8n's front end access

{% hint style="warning" %}
**需要手动构建前端界面（manual UI build）**

这个使用场景涉及配置 `VUE_APP_URL_BASE_API` 环境变量，而该变量要求对 `n8n-editor-ui` 包进行**手动构建**。你不能在默认的 n8n Docker 镜像中使用它——默认镜像中该变量的默认值是 `/`，也就是使用根域名（root-domain）。
{% endhint %}

{% hint style="info" %}
**大白话**：n8n 分「前端（front end）」和「后端（back end）」两部分。前端就是你浏览器里看到、操作的界面（编辑器 UI），后端是处理数据、提供接口（REST API）的服务。默认情况下，前端和后端在一起部署，前端直接访问同域名的 API。如果你想把前端和后端**分开部署**（放在不同的域名/服务器上），就需要告诉前端：「去这个地址找后端 API」——这个地址就是 Base URL。
{% endhint %}

你可以配置前端用于连接后端 REST API 的 Base URL。当你想要把 n8n 的前端和后端分开托管（host）时，这个配置就很有用。

{% hint style="info" %}
**大白话**：什么时候会用上？比如：你想把 n8n 的界面挂在 `n8n.example.com`（给员工访问），而把后端 API 放在另一台服务器或另一个路径下。这时前端界面不知道自己该去哪里调 API，就需要用 `VUE_APP_URL_BASE_API` 告诉它后端 API 的完整地址。
{% endhint %}

```bash
export VUE_APP_URL_BASE_API=https://n8n.example.com/
```

{% hint style="info" %}
**大白话**：这一行的意思是「设置环境变量」，把后端 API 的基础地址指定为 `https://n8n.example.com/`。**重点提醒**：看页面顶部的警告——这个变量必须在**构建 n8n 前端代码时**就设置好（它是构建期变量），不是运行时随便改个配置就能生效。默认 Docker 镜像没有为你预构建这个配置，所以直接用默认镜像的话，这个功能不生效。只有你自己从源码重新构建前端（build）时才有意义。一般用户请跳过此页，用默认部署即可。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/deployment.md)。
