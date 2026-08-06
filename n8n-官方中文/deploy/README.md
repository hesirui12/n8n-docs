---
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
    visible: false
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 部署（Deploy）

n8n 提供两种不同的部署方式。[n8n Cloud](use-n8n-cloud/README.md) 让你使用由 n8n 官方托管和管理的实例，开箱即用、快速上手。[自托管 n8n（Self-hosted n8n）](host-n8n/README.md) 让你在自己的机器或基础设施上运行 n8n。

**部署（Deploy）** 文档帮助你在这两种模式下完成 n8n 的部署、配置、安全加固和日常维护。

{% hint style="info" %}
**小白提示**：简单说，这篇文档是「怎么把 n8n 跑起来」。如果你不想折腾服务器、只想马上用，选 n8n Cloud；如果你有自己的一台服务器（或者想用 Docker 等工具自己装），就选自托管。两种方式后续的文档入口都在下面这张表里。
{% endhint %}

<table data-view="cards"><thead><tr><th>部署方式（Deployment option）</th><th data-card-target data-type="content-ref">前往章节（Go to section）</th></tr></thead><tbody><tr><td><strong>使用 n8n Cloud</strong><br>由 n8n 官方托管。上手快，几乎不用操心运维。</td><td><a href="use-n8n-cloud/">use-n8n-cloud</a></td></tr><tr><td><strong>自托管 n8n（Self-host n8n）</strong><br>用 Docker、npm、Docker Compose 或受支持的云平台自己运行 n8n。</td><td><a href="host-n8n/">host-n8n</a></td></tr></tbody></table>

### 对比各种部署方式（Compare deployment options）

下面是对每种方式的概览。如果你还在犹豫选哪种，可以看看 [Choose your n8n](https://n8n.gitbook.io/n8n-docs-next/fTXFsp54tRnnn2McXCeU/choose-how-to-use-n8n) 获取更多指导。

#### 使用 n8n Cloud

n8n Cloud 是托管方案：由 n8n 官方替你运行实例，你只管用。

如果你符合以下情况，就选 Cloud：

* 想用最少的前期配置快速开始
* 想减少基础设施和维护方面的工作量
* 想使用 Cloud 专属的管理与配置工具

{% content-ref url="use-n8n-cloud/" %}
[use-n8n-cloud](use-n8n-cloud/README.md)
{% endcontent-ref %}

#### 自托管 n8n（Self-host n8n）

自托管让你完全掌控 n8n 的运行方式以及你的环境管理方式。

如果你符合以下情况，就选自托管：

* 想在自己拥有的基础设施上运行 n8n
* 想精细控制升级、配置和安全
* 需要针对自定义扩容或特定平台要求做设计

<table data-view="cards"><thead><tr><th>自托管主题（Self-hosted topic）</th><th data-card-target data-type="content-ref">打开（Open）</th></tr></thead><tbody><tr><td><strong>托管 n8n 概览</strong><br>先从自托管的主入口页面开始。</td><td><a href="host-n8n/">host-n8n</a></td></tr><tr><td><strong>安装方式（Install options）</strong><br>用 Docker、npm、Docker Compose 或云服务商来安装 n8n。</td><td><a href="host-n8n/install-options/">install-options</a></td></tr><tr><td><strong>配置 n8n（Configure n8n）</strong><br>管理数据库、环境变量、用户、许可证和安全设置。</td><td><a href="host-n8n/configure-n8n/">configure-n8n</a></td></tr><tr><td><strong>保持 n8n 持续运行</strong><br>监控、记录日志、追踪并更新你的实例。</td><td><a href="host-n8n/keep-n8n-running/">keep-n8n-running</a></td></tr><tr><td><strong>理解架构（Understand the architecture）</strong><br>了解 n8n 的工作原理以及数据库结构。</td><td><a href="host-n8n/understand-the-architecture/">understand-the-architecture</a></td></tr></tbody></table>

{% content-ref url="host-n8n/" %}
[host-n8n](host-n8n/README.md)
{% endcontent-ref %}
