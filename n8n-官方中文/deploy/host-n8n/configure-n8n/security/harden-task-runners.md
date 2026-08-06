---
title: 加固任务运行器
description: 加固任务运行器，为你的自托管 n8n 实例提供更好的隔离。
contentType: howto
nodeTitle: 加固任务运行器
originalFilePath: hosting/securing/hardening-task-runners.md
originalUrl: 'https://docs.n8n.io/hosting/securing/hardening-task-runners'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/harden-task-runners'
layout:
  description:
    visible: false
---

# 加固任务运行器 / Hardening task runners

[任务运行器（task runners）](../set-up-task-runners.md) 负责执行 [Code 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code) 中的代码。虽然 Code 节点的执行本身是安全的，但你仍然可以按照以下建议进一步加固你的任务运行器。

{% hint style="info" %}
**大白话（背景）**：n8n 里有个「Code 节点」，你可以往里面写 JavaScript 代码。这些代码是在**任务运行器**（task runner）里执行的——你可以把它理解成一个专门「跑代码的小沙盒」，跟 n8n 主程序隔离开。隔离的目的：万一 Code 节点里的代码出问题（甚至被恶意利用），它也只能在沙盒里折腾，伤不到 n8n 主进程和数据。本页的几条建议就是把这个「沙盒」加固得更加密不透风。
{% endhint %}

## 以外部模式的边车容器方式运行任务运行器 / Run task runners as sidecars in external mode

为了增加 n8n 核心进程与 Code 节点代码之间的隔离，请以[外部模式（external mode）](../set-up-task-runners.md#setting-up-external-mode)运行任务运行器。外部模式的任务运行器以**独立的容器**启动，为执行 Code 节点中定义的 JavaScript 提供一个完全隔离的环境。

{% hint style="info" %}
**大白话**：任务运行器有两种运行方式：内置模式（在 n8n 进程内部跑）和外部模式（单独开一个 Docker 容器来跑）。「边车」（sidecar）是容器编排里的术语，指「在主服务旁边额外挂一个辅助容器」。外部模式 = 每个任务运行器都是一个独立的 Docker 容器，跟 n8n 主程序完全分开。这样即使 Code 节点代码被攻破，攻击者也只进了一个「空壳容器」，里面什么都没有，够不到 n8n 主程序。隔离越彻底，越安全。
{% endhint %}

## 使用 distroless 镜像 / Use the distroless image

为了缩小攻击面（attack surface），请使用 distroless Docker 镜像变体。Distroless 镜像只包含应用及其运行时依赖，**不包含**包管理器、shell 以及其他运行时不需要的实用工具。

要使用 distroless 镜像，请在 Docker 标签后追加 `-distroless` 后缀。例如：`2.4.6-distroless`。

{% hint style="info" %}
**大白话**：普通 Linux 容器里装着一整套操作系统工具（有 shell 命令行、有包管理器，甚至可以装软件）。对攻击者来说，容器里工具越全，他能干的事越多（比如下载攻击工具、执行命令）。distroless 镜像就是一个「裸到不能再裸」的容器：只有运行 n8n 必需的程序文件，**连命令行 shell 都没有**。攻击者进了这样的容器，想敲命令都敲不了。用法就是把镜像标签加个 `-distroless` 后缀（比如官方镜像 `docker.n8n.io/n8nio/n8n:2.4.6` 就改成 `2.4.6-distroless` 这个标签）。
{% endhint %}

## 以 nobody 用户运行 / Run as the nobody user

为了更高的安全性，请将任务运行器配置为以无特权的 `nobody` 用户运行，用户 ID 和组 ID 为 65532。这样可以防止容器进程以 root（超级用户）权限运行，并限制安全漏洞可能造成的损害。

{% hint style="info" %}
**大白话**：默认情况下容器里的进程可能是以 root 身份跑的——root 在容器里拥有最高权限，一旦代码被攻破，攻击者就「一步登天」了。改成以 `nobody`（UID/GID 65532，一个标准的最小权限账号）运行后，即使容器被攻破，进程也只有普通用户权限，能干的破坏有限（比如改不了系统文件、读不了敏感文件）。配置方式：Docker 里用 `--user 65532:65532`，Kubernetes 里用 `securityContext.runAsUser: 65532` 和 `runAsGroup: 65532`。
{% endhint %}

## 配置只读根文件系统 / Configure read-only root filesystem

配置一个[只读根文件系统（read-only root filesystem）](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)，防止容器在运行时对文件系统做任何修改。这有助于防范可能试图修改系统文件的恶意代码。

任务运行器在运行时仍然需要一些临时存储空间。为了满足这一需求，请挂载一个最小的 `emptyDir` 卷到 `/tmp`。如果你的工作流需要更多临时空间，请相应增大卷的大小。

{% hint style="info" %}
**大白话**：默认容器里的文件系统是可写的——恶意代码可以把系统文件改掉、往磁盘里塞东西（挖矿程序就爱这么干）。「只读根文件系统」就是声明「根目录下的文件一律不许改」，恶意代码想写文件会直接失败。但任务运行器运行时总要有个地方放临时文件，所以官方建议：挂一个最小容量的 `emptyDir` 卷到 `/tmp` 目录，专门放临时文件。`emptyDir` 是 Kubernetes 里的一种临时卷，Pod 销毁时里面的内容就没了——正好符合「用完即弃」的需求，不会留下脏数据。挂载命令示例（K8s 配置里的 `volumes` 和 `volumeMounts`）：`emptyDir: {}` 挂到 `/tmp`。
{% endhint %}

## 配置 AppArmor 配置文件 / Configure an AppArmor profile

作为纵深防御（defence-in-depth）措施，应用一个 [AppArmor](https://apparmor.net/) 配置文件，阻止任务运行器容器读取敏感的 `/proc` 文件，例如 `environ` 和 `mounts`。这些文件会向容器内运行的代码暴露环境变量（包括密钥和凭据）。关于如何给 Pod 应用配置文件，请参阅 [Kubernetes AppArmor 文档](https://kubernetes.io/docs/tutorials/security/apparmor/)。

在你的 AppArmor 配置文件中添加以下规则：

```
audit deny @{PROC}/[0-9]*/{environ,mounts} rwl,
```

这条规则会拒绝并记录任何对进程级 `environ` 和 `mounts` 文件的读、写或链接操作。

{% hint style="info" %}
**大白话**：`/proc` 是 Linux 的一个「虚拟目录」，里面放着系统运行时的各种信息。其中 `/proc/<进程号>/environ` 会暴露某个进程的**所有环境变量**——而 n8n 的环境变量里很可能有数据库密码、API 密钥等敏感信息！`/proc/<进程号>/mounts` 会暴露挂载信息（攻击者可以用它侦查容器结构）。AppArmor 是 Linux 内核自带的一种「进程行为限制」机制，可以精确到「这个进程不许读那个文件」。上面这条规则的意思：**任何尝试读（r）、写（w）、链接（l）进程级 `environ` 和 `mounts` 文件的行为，一律拒绝（deny）并记入日志（audit）**。这样即使恶意代码进了容器，也偷不到环境变量里的密钥。
{% endhint %}
