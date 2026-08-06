---
contentType: overview
nodeTitle: 安装与管理社区节点
layout:
  description:
    visible: false
---

# 安装与管理社区节点 / Install and manage community nodes

> 💡 **大白话**：装社区节点有四种方式，按你的场景选：面板装（已验证节点）、GUI 装（npm）、命令行装（队列模式/私有包）、环境变量装（自动化部署）。

安装社区节点有四种方式：

* 在 n8n 内使用**节点面板**安装（[安装已验证社区节点](install-verified-community-nodes.html)，仅限已验证节点）。
* 在 n8n 内**使用 GUI 安装**（[GUI 安装](gui-installation.html)）：从 npm 仓库安装社区节点。
* **从命令行手动安装**（[手动安装](manual-installation.html)）：当你的 n8n 实例不支持应用内 GUI 安装时，从 npm 安装。
* **从环境变量安装**（[环境变量安装](environment-variable-installation.html)）：通过部署流水线等方式，用一组固定的社区包初始化实例。

{% hint style="info" %}
**从 npm 安装仅限自托管实例**

未经验证的社区节点在 n8n Cloud 上不可用，需要[自托管](../../deploy/host-n8n/README.html) n8n。
{% endhint %}
