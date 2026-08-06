---
title: 许可证密钥（License key）
description: 如何激活你的许可证密钥。
contentType: howto
nodeTitle: 管理你的许可证（Manage your license）
originalFilePath: license-key.md
originalUrl: 'https://docs.n8n.io/license-key'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/manage-your-license'
layout:
  description:
    visible: false
---

# 许可证密钥（License Key）

要启用某些受许可证保护的功能，你必须先激活你的许可证。你可以通过界面激活，也可以通过设置环境变量激活。

{% hint style="info" %}
**小白提示**：n8n 是「免费 + 付费功能」的模式：不填许可证密钥时，n8n 以免费的社区版（Community edition）运行，核心功能都可以用；填入 Business（商业版）或 Enterprise（企业版）的许可证密钥后，才会解锁对应的付费功能（比如单点登录、更多成员权限、审计日志等）。许可证密钥是一串类似 `n8n_...` 的长字符串，向 n8n 官方购买后获得。
{% endhint %}

## 通过界面添加许可证密钥（Add a license key using the UI）

在你的 n8n 实例中：

1. 以 **管理员（Admin）** 或 **所有者（Owner）** 身份登录。
1. 选择 **设置（Settings）** > **用量与套餐（Usage and plan）**。
1. 选择 **输入激活密钥（Enter activation key）**。
1. 粘贴你的许可证密钥。
1. 选择 **激活（Activate）**。

## 通过环境变量添加许可证密钥（Add a license key using an environment variables）

在你的 n8n 配置中，把 `N8N_LICENSE_ACTIVATION_KEY` 设置为你的许可证密钥。如果实例已经激活了许可证，这个变量将不起作用。

{% hint style="info" %}
**小白提示**：用环境变量激活的好处是适合自动化部署——比如用 Docker Compose 或 Kubernetes 部署时，在配置里写死许可证密钥，每次启动新实例都自动带好许可证。注意：只有「还没有激活过许可证」的实例才会读这个变量；已经激活过的实例以已激活的许可证为准。
{% endhint %}

关于配置 n8n 的更多信息，请参见 [环境变量（Environment variables）](basic-configuration.md)。

## 将许可证服务器 IP 地址加入白名单（Allowlist the license server IP addresses）

n8n 使用 Cloudflare 托管许可证服务器。由于具体的 IP 地址可能会变化，你需要把 [Cloudflare 的完整 IP 地址范围](https://www.cloudflare.com/ips/) 加入白名单，以确保 n8n 始终能够访问许可证服务器。

{% hint style="info" %}
**小白提示**：如果你的 n8n 部署在严格限制出站访问的网络里（比如公司防火墙、安全组、代理白名单），就需要放行 Cloudflare 的所有 IP 范围，否则 n8n 无法连接许可证服务器，付费功能可能会被禁用或提示激活失败。如果你的网络完全开放，则不需要做这一步。
{% endhint %}
