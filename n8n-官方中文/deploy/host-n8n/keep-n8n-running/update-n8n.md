---
description: 更新自托管 n8n 的最佳实践
title: 更新自托管 n8n（Update self-hosted n8n）
contentType: explanation
tags:
  - update npm
  - update docker
hide:
  - tags
nodeTitle: 更新 n8n（Update n8n）
originalFilePath: hosting/installation/updating.md
originalUrl: 'https://docs.n8n.io/hosting/installation/updating'
url: 'https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/update-n8n'
layout:
  description:
    visible: false
---

# 更新自托管 n8n（Update self-hosted n8n）

保持 n8n 版本是最新的非常重要。这可以确保你获得最新的功能和修复。

更新时的一些提示：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/1Q2X3RjU5o2jnRfcKzuN/" %}

有关如何更新的说明，请参阅你的安装方式对应的文档：

* [用 npm 安装（Installed with npm）](../install-options/install-with-npm.md#updating)
* [用 Docker 安装（Installed with Docker）](../install-options/install-with-docker.md#updating)

{% hint style="info" %}
**小白提示**：升级前老规矩：先备份数据库和 `.n8n` 文件夹（里面存着凭据和工作流），再看一眼新版本的变更日志（changelog），确认没有破坏性变更再动手。Docker 部署最简单：把镜像的版本标签（tag）换成新版重新拉取并重启即可；npm 部署就更新对应的 npm 包版本。
{% endhint %}
