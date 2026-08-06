---
title: 设置自定义加密密钥
description: 为 n8n 设置自定义加密密钥，用于安全加密凭据。
contentType: howto
nodeTitle: 设置自定义加密密钥
originalFilePath: hosting/configuration/configuration-examples/encryption-key.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/encryption-key
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-a-custom-encryption-key
layout:
  description:
    visible: false
---

# 设置自定义加密密钥 / Set a custom encryption key

n8n 会在**首次启动**时自动生成一个随机的加密密钥（encryption key），并把它保存在 `~/.n8n` 文件夹中。n8n 用这个密钥在凭据（credentials）保存到数据库**之前**对它们进行加密。如果设置文件（settings file）里还没有这个密钥，你可以通过环境变量来设置它，这样 n8n 就会使用你自定义的密钥，而不是重新生成一个新的。

{% hint style="info" %}
**大白话**：n8n 里存的账号密码（凭据）不是明文保存的，而是加密后存入数据库。加密需要一把「钥匙」（密钥），这把钥匙默认是 n8n 自动随机生成的，存在 `~/.n8n` 文件夹的配置文件里。为什么要手动设置？主要有两个场景：①你想完全掌控这把钥匙（比如备份、迁移服务器时，带上同一把钥匙，凭据才能解密继续用）；②多实例部署（见下文队列模式）时，所有实例必须用**同一把**钥匙，否则 A 实例加密的凭据 B 实例解不开。注意：加密密钥一旦定下来，不要随意更改——改了之后，之前存的凭据就全部解不开了。
{% endhint %}

在[队列模式（queue mode）](../../scaling/enable-queue-mode.md)下，你必须为**所有 worker** 指定加密密钥环境变量。

{% hint style="info" %}
**大白话**：队列模式是 n8n 的多进程/多机器架构（一个主进程 + 多个工作进程 worker，共同处理任务）。这种情况下，凭据是共用的数据库，任何 worker 都可能要解密凭据，所以**每一台机器的 worker 都要配置同一把密钥**。漏配了其中一个，它就会用自己随机生成的密钥去解密，直接解密失败。
{% endhint %}

```bash
export N8N_ENCRYPTION_KEY=<SOME RANDOM STRING>
```

{% hint style="info" %}
**大白话**：把 `<SOME RANDOM STRING>` 换成一段足够长、足够随机的字符串，例如 `export N8N_ENCRYPTION_KEY=MyV3ryS3cretK3y_2024_x9f2kQ7m`（建议 20 个字符以上，混合大小写字母和数字）。生成随机串可以用命令 `openssl rand -hex 32`（会输出 32 字节的随机十六进制串，很长很安全）。**务必保存好这把密钥**——丢了它等于丢了所有已保存的凭据（数据库里是密文，没有密钥解不开）。备份策略：把密钥写进你服务器的环境变量配置文件里（比如 `.env` 文件），并随其他备份一起妥善保管。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：如果你需要迁移 n8n（比如从一台服务器搬到另一台），请记住：光拷贝数据库是不够的，还必须把 `~/.n8n` 里的配置文件（含加密密钥）一起带走，或者在新服务器上手动设置 `N8N_ENCRYPTION_KEY` 为**同一个值**。否则迁移后所有凭据都会报「解密失败」。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/deployment.md)。
