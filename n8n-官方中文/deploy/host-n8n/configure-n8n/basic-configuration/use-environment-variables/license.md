---
title: 许可证（License）环境变量
contentType: reference
hide:
  - toc
  - tags
nodeTitle: 许可证（License）
originalFilePath: hosting/configuration/environment-variables/licenses.md
originalUrl: https://docs.n8n.io/hosting/configuration/environment-variables/licenses
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/license
description: >-
  在 n8n 中配置许可证设置的环境变量，包括隐藏用量页面、管理许可证激活和自动续期设置，
  以及指定许可证获取的服务器 URL。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
tags:
  - environment variables
---

# 许可证（License）环境变量

{% hint style="info" %}
**大白话**：许可证（license）是 n8n 商业版/企业版功能的「开门钥匙」。这一页的变量让你不用点界面，直接用环境变量激活许可证、控制自动续期、隐藏「用量」页面、指定许可证服务器地址等。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

要启用某些受许可证保护的功能，你必须先激活许可证。你可以通过界面（UI）激活，也可以通过设置环境变量激活。更多信息请参见[许可证密钥（license key）](../../manage-your-license.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_HIDE_USAGE_PAGE` | boolean | `false` | 隐藏应用中的用量和套餐（usage and plans）页面。 |
| `N8N_LICENSE_ACTIVATION_KEY` | String | `''` | 用于初始化许可证的激活密钥。如果 n8n 实例已经激活过，则不适用。 |
| `N8N_LICENSE_AUTO_RENEW_ENABLED` | Boolean | `true` | <p>启用（true）或禁用（false）许可证的自动续期。<br>如果禁用，你需要每 10 天手动续期一次许可证：进入<strong>设置（Settings）</strong> > <strong>用量和套餐（Usage and plan）</strong>，然后按 <code>F5</code> 刷新。未能续期许可证会禁用所有受许可证保护的功能。</p> |
| `N8N_LICENSE_DETACH_FLOATING_ON_SHUTDOWN` | Boolean | `true` | <p>控制实例在关闭时是否把[浮动授权（floating entitlements）](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/key-concept-glossary#entitlement-n8n)释放回授权池。设为 <code>true</code> 允许其他实例复用这些授权，<code>false</code> 则保留它们。<br>对于必须始终保持受许可证保护功能的生产实例，请把这个值设为 <code>false</code>。</p> |
| `N8N_LICENSE_SERVER_URL` | String | `https://license.n8n.io/v1` | 用于获取许可证的服务器 URL。 |
| `N8N_LICENSE_TENANT_ID` | Number | `1` | 与许可证关联的租户 ID。只有 n8n 明确指示时才设置这个变量。 |
| `https_proxy_license_server` | String | `https://user:pass@proxy:port` | 用于 HTTPS 请求获取许可证的代理服务器 URL。这个变量名必须是小写。 |
