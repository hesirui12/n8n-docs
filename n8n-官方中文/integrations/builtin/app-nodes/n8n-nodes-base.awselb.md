---
title: AWS Elastic Load Balancing 节点文档
description: >-
  学习如何在 n8n 中使用 AWS Elastic Load Balancing 节点。按照技术文档将
  AWS Elastic Load Balancing 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Elastic Load Balancing 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awselb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awselb'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awselb'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS Elastic Load Balancing（ELB，弹性负载均衡）是 AWS 的「流量分发器」：把进来的网络请求平均分给多台服务器，防止某台服务器被挤爆。这个节点让你在 n8n 里创建、删除、查看负载均衡器（Load Balancer），以及管理它上面的证书（Listener Certificate）。注意：目前只支持应用负载均衡（ALB）和网络负载均衡（NLB），不支持网关负载均衡（GLB）。
{% endhint %}

# AWS Elastic Load Balancing 节点

使用 AWS Elastic Load Balancing 节点来自动化你在 AWS ELB 中的工作，并把它与其它应用集成。n8n 内置支持 AWS ELB 的大量功能，包括添加、获取、移除、删除证书和负载均衡器。

在本页你可以看到 AWS ELB 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AWS ELB 凭证](../credentials/aws.md)。
{% endhint %}

## 操作

* Listener Certificate（监听器证书）
	* Add（添加）
	* Get Many（获取多个）
	* Remove（移除）
* Load Balancer（负载均衡器）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）

本节点支持创建和管理应用负载均衡器（application）与网络负载均衡器（network）。目前不支持网关负载均衡器（gateway）。

## 模板与示例

[浏览 AWS Elastic Load Balancing 节点的官方集成模板](https://n8n.io/integrations/aws-elb)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [AWS ELB 官方文档](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)。

（官方此处嵌入了通用资源组件，此处从略。）
