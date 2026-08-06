---
contentType: howto
nodeTitle: 更新你的版本
originalFilePath: manage-cloud/update-cloud-version.md
originalUrl: https://docs.n8n.io/manage-cloud/update-cloud-version
url: https://docs.n8n.io/deploy/use-n8n-cloud/update-your-version
description: 如何在 Cloud 上更新你的 n8n 版本。
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
---

# 更新你的版本（Update your version）

n8n 建议让你的 Cloud 版本保持最新。通过 **Updates & maintenance**（更新与维护）设置，你可以选择工作区运行的 n8n 版本，并控制自动更新的**时间和方式**。想了解每个版本的变化，可以查看[版本发布说明（Release notes）](https://app.gitbook.com/s/hhM8Cox90Piiv0u0EgHM/)。

{% hint style="info" %}
**只有实例归属人（owner）可以修改这些设置。** 如果你没有更新 n8n Cloud 的权限，请联系你的实例归属人。
{% endhint %}

{% hint style="info" %}
**小白提示**：为什么官方建议保持最新？因为新版本通常包含**安全修复**和**功能改进**。旧版本可能存在已知的安全漏洞，所以定期更新很重要。好消息是 Cloud 的更新比自托管简单得多——点几下按钮就行，不用自己折腾命令行。
{% endhint %}

打开这些设置的步骤：

1. [登录 n8n Cloud 管理后台](https://app.n8n.cloud/manage)。
2. 选择 **Manage**（管理）。
3. 选择 **Workspace**（工作区），打开 **Updates & maintenance**（更新与维护）区域。

**更换版本会触发 1 到 2 分钟的实例重启。** 其他维护设置则无需重启即可生效。修改完成后，选择 **Save changes**（保存更改）即可应用你的设置。

{% hint style="info" %}
**小白提示**：如果当时有正在运行的重要工作流，最好等它们跑完再换版本，避免被重启打断。
{% endhint %}

## n8n 版本（n8n version）

**n8n version**（n8n 版本）下拉框用于设置你的工作区运行的版本。选择一个版本，然后点击 **Change version**（更换版本）来应用。想在更换之前先对比各版本？点击 **Open changelog**（打开更新日志）即可。

## 发布轨道（Release track）

发布轨道（release track）决定你的工作区跟随哪一条 n8n 发布流。n8n 对两条轨道都做了测试。它们的区别在于：**新版本多久能到达你的工作区**，以及**每个版本在到达你之前已经在生产环境运行了多久**：

* **Beta（测试版）**：新版本一旦就绪就立即推送。想第一时间尝试最新功能，就选 Beta。
* **Stable（稳定版）**：在 Beta 轨道上运行过一段时间后、经过更多验证的补丁版本。n8n 建议所有**关键业务（mission-critical）**工作负载都使用 Stable。

你可以随时在两条轨道之间切换。

{% hint style="info" %}
**小白提示**：简单说，Beta = 快但有风险（可能遇到小毛病），Stable = 稳但稍慢（等 Beta 验证过再给你）。除非你特别想尝鲜，否则默认选 Stable 就好，尤其是你的工作流在跑重要业务的时候。
{% endhint %}

## 更新频率（Update cadence）

更新频率（update cadence）决定 n8n **多久**把你的工作区升级到更新的构建版本。**无论你选择哪种频率，n8n 都会自动应用安全和稳定性更新**：

* **Security & stability（安全与稳定）**：大约每两周升级一次。推荐大多数工作区使用。
* **Every new release（每个新版本）**：每发布一个新版本就升级，平均每天一个版本。非常适合想尝鲜新功能的情况。

## 维护窗口（Maintenance window）

维护窗口（maintenance window）决定 n8n **什么时候**可以应用升级，方便你减少业务中断。时间使用该设置上方显示的时区。

* **Upgrade anytime（随时升级）**：n8n 一有新版本可用就立即应用升级。
* **Pick a window（指定窗口）**：n8n 只在你设置的时间范围内应用升级。

{% hint style="info" %}
**小白提示**：如果你有「凌晨业务量最小」的规律，可以选「指定窗口」，把升级时间定在凌晨，这样升级几乎不会影响到你白天的业务。
{% endhint %}
